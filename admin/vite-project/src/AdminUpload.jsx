import React, { useState, useRef } from 'react';
import axios from 'axios';

function AdminUpload({ apiUrl, onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState('');
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef();

  const handleFile = (f) => {
    if (f && (f.name.endsWith('.xlsx') || f.name.endsWith('.xls') || f.name.endsWith('.csv'))) {
      setFile(f);
      setMessage(null);
    } else {
      setMessage({ type: 'error', text: 'Please select a valid Excel (.xlsx, .xls) or CSV file' });
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files?.[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    if (!category) {
      setMessage({ type: 'error', text: 'Please select a category before uploading' });
      return;
    }
    setUploading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', category);

    try {
      const res = await axios.post(`${apiUrl}/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setMessage({
        type: 'success',
        text: res.data.message + (res.data.errors ? ` (${res.data.errors.length} warnings)` : ''),
      });
      setFile(null);
      if (onUploadSuccess) onUploadSuccess();
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      const errors = err.response?.data?.errors;
      setMessage({
        type: 'error',
        text: msg + (errors ? ': ' + errors.slice(0, 3).join('; ') : ''),
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="card">
      <h2>Admin – Upload Rankings (Excel / CSV)</h2>
      <p className="subtitle">
        Upload the sample Excel file or your own file with columns:
        <strong> Rank, University, Country, City, Score, Year, Source</strong>
      </p>

      <div className="form-group">
        <label>Select Category</label>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setMessage(null);
          }}
        >
          <option value="">Select Category</option>
          <option value="All">All Categories</option>
          <option value="QS World University Rankings 2025">QS World University Rankings 2025</option>
          <option value="NIRF India Rankings 2025 Overall">NIRF India Rankings 2025 Overall</option>
          <option value="Top Universities in USA">Top Universities in USA</option>
          <option value="Top Universities in UK">Top Universities in UK</option>
          <option value="Top Universities in Asia">Top Universities in Asia</option>
        </select>
      </div>

      <div
        className={`upload-area ${dragOver ? 'dragover' : ''}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={(e) => handleFile(e.target.files?.[0])}
          hidden
        />
        {file ? (
          <div>
            <p className="file-name">📄 {file.name}</p>
            <p className="file-size">
              {(file.size / 1024).toFixed(1)} KB — Click to change
            </p>
          </div>
        ) : (
          <div>
            <p className="upload-title">📁 Drag & drop Excel/CSV here</p>
            <p className="upload-hint">or click to browse</p>
          </div>
        )}
      </div>

      <div className="btn-wrapper">
        <button
          className="upload-btn"
          onClick={handleUpload}
          disabled={!file || !category || uploading}
        >
          {uploading ? 'Uploading...' : 'Upload & Import'}
        </button>
      </div>

      {message && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      <div className="info-box">
        <strong>Supported Sources:</strong> QS, THE, NIRF, USNews, Shanghai, EduRank, Webometrics
        <br />
        <strong>Tip:</strong> Use the provided sample Excel file. Duplicate ranks for same source+year will be updated.
      </div>
    </div>
  );
}

export default AdminUpload;