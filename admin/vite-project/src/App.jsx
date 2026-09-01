import React from 'react';
import AdminUpload from './AdminUpload';
import './App.css';

function App() {
  // Apna backend URL yahan daalo
  const API_URL = 'http://localhost:5000/api';

  const handleUploadSuccess = () => {
    console.log('Upload successful! Refresh data if needed.');
  };

  return (
    <div className="app">
      <header className="header">
        <h1>University Rankings Admin</h1>
        <p>Upload Excel / CSV rankings data</p>
      </header>

      <main className="main">
        <AdminUpload apiUrl={API_URL} onUploadSuccess={handleUploadSuccess} />
      </main>
    </div>
  );
}

export default App;