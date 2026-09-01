import React, { useMemo, useState, useEffect, useCallback } from "react";

const PAGE_SIZE = 7;

// ⬇️ Apne backend ka base URL yahan daalo
const API_BASE = "http://localhost:5000/api/rankings";

const THE_URL = "https://www.timeshighereducation.com/world-university-rankings/latest/world-ranking";
const OTHER_URL = "https://www.timeshighereducation.com/world-university-rankings/latest/world-ranking";

export default function UniversityDashboard() {
  const [activeTab, setActiveTab] = useState("all");
  const [manualData, setManualData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [form, setForm] = useState({
    university: "",
    country: "",
    city: "",
    status: "Active",
    rank: "",
    score: "",
    year: new Date().getFullYear(),
    source: "Manual",
  });
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);

  // ========== FETCH FROM BACKEND ==========
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_BASE);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      // Backend response array of objects assume kiya
      // fields: _id / id, university, country, city, status, rank, score, year, source, website
      const normalized = (Array.isArray(data) ? data : data.data || []).map((item) => ({
        id: item._id || item.id,
        university: item.university || item.name || "",
        country: item.country || "",
        city: item.city || "",
        status: item.status || "Active",
        rank: item.rank ?? null,
        score: item.score ?? null,
        year: item.year ?? null,
        source: item.source || "Manual",
        website: item.website || "",
      }));

      setManualData(normalized);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load data from backend");
      setManualData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // ========== FILTER + PAGINATION ==========
  const filteredData = useMemo(() => {
    const keyword = search.toLowerCase().trim();
    if (!keyword) return manualData;
    return manualData.filter((item) =>
      `${item.university} ${item.country} ${item.city} ${item.status} ${item.source}`
        .toLowerCase()
        .includes(keyword)
    );
  }, [manualData, search]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleData = filteredData.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // ========== FORM HANDLERS ==========
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetForm = () => {
    setEditingId(null);
    setForm({
      university: "",
      country: "",
      city: "",
      status: "Active",
      rank: "",
      score: "",
      year: new Date().getFullYear(),
      source: "Manual",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.university.trim() || !form.country.trim()) {
      alert("Please enter university and country.");
      return;
    }

    setSaving(true);
    try {
      const payload = {
        university: form.university.trim(),
        country: form.country.trim(),
        city: form.city.trim() || null,
        status: form.status,
        rank: form.rank ? Number(form.rank) : null,
        score: form.score ? Number(form.score) : null,
        year: form.year ? Number(form.year) : null,
        source: form.source || "Manual",
      };

      let res;
      if (editingId) {
        // UPDATE
        res = await fetch(`${API_BASE}/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        // CREATE
        res = await fetch(API_BASE, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || `HTTP ${res.status}`);
      }

      // Refresh list from backend
      await fetchData();
      resetForm();
    } catch (err) {
      alert("Save failed: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setForm({
      university: item.university,
      country: item.country,
      city: item.city || "",
      status: item.status || "Active",
      rank: item.rank ?? "",
      score: item.score ?? "",
      year: item.year ?? new Date().getFullYear(),
      source: item.source || "Manual",
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    try {
      const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await fetchData();
    } catch (err) {
      alert("Delete failed: " + err.message);
    }
  };

  const changePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between max-w-[1400px] mx-auto">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1a1a1a]">
            University Ranking Dashboard
          </h1>
          <p className="mt-1.5 text-sm text-[#555]">
            Manage your university data and view live rankings.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-[#1a1a1a] shadow-sm">
          <span className="h-2 w-2 rounded-full bg-green-600" />
          Live Dashboard
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex overflow-x-auto rounded-2xl border border-black/5 bg-white p-1.5 shadow-sm max-w-[1400px] mx-auto">
        <TabButton active={activeTab === "all"} onClick={() => setActiveTab("all")}>
          All Tables
        </TabButton>
        <TabButton active={activeTab === "manual"} onClick={() => setActiveTab("manual")}>
          Manual Data
        </TabButton>
        <TabButton active={activeTab === "the"} onClick={() => setActiveTab("the")}>
          THE Ranking
        </TabButton>
        <TabButton active={activeTab === "other"} onClick={() => setActiveTab("other")}>
          Other Ranking
        </TabButton>
      </div>

      {/* Content Grid */}
      <div
        className={
          activeTab === "all"
            ? "grid grid-cols-1 gap-5 xl:grid-cols-3 max-w-[1400px] mx-auto"
            : "grid grid-cols-1 gap-5 max-w-[1400px] mx-auto"
        }
      >
        {/* Manual Data Card */}
        {(activeTab === "all" || activeTab === "manual") && (
          <section className="min-w-0 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-black/5 bg-[#faf9f6] px-5 py-4">
              <div>
                <h2 className="text-[17px] font-semibold text-[#1a1a1a]">Manual Data</h2>
                <p className="mt-0.5 text-xs text-[#666]">
                  Data coming from backend API
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={fetchData}
                  disabled={loading}
                  className="rounded-full bg-[#f0ebe3] px-3 py-1.5 text-xs font-medium text-[#2d2d2d] hover:bg-[#e5ddd0] disabled:opacity-50"
                >
                  ↻ Refresh
                </button>
                <span className="rounded-full bg-[#e8f0d8] px-3 py-1 text-xs font-semibold text-[#2d2d2d]">
                  {manualData.length}
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="grid gap-2.5 p-4 md:grid-cols-4 lg:grid-cols-5">
              <input
                name="university"
                value={form.university}
                onChange={handleChange}
                placeholder="University name"
                className="h-10 rounded-xl border border-black/10 bg-[#faf9f6] px-3.5 text-sm outline-none focus:border-[#2d2d2d] focus:bg-white"
              />
              <input
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Country"
                className="h-10 rounded-xl border border-black/10 bg-[#faf9f6] px-3.5 text-sm outline-none focus:border-[#2d2d2d] focus:bg-white"
              />
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City (optional)"
                className="h-10 rounded-xl border border-black/10 bg-[#faf9f6] px-3.5 text-sm outline-none focus:border-[#2d2d2d] focus:bg-white"
              />
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="h-10 rounded-xl border border-black/10 bg-[#faf9f6] px-3.5 text-sm outline-none focus:border-[#2d2d2d]"
              >
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
              </select>

              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="h-10 flex-1 rounded-full bg-[#2d2d2d] px-4 text-sm font-medium text-white hover:bg-black disabled:opacity-60"
                >
                  {saving ? "Saving..." : editingId ? "Update" : "+ Add"}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="h-10 rounded-full border border-black/10 bg-white px-4 text-sm font-medium text-[#2d2d2d] hover:bg-[#f0ebe3]"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>

            {/* Search */}
            <div className="px-4 pb-4">
              <div className="relative">
                <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#999] text-sm">
                  🔍
                </span>
                <input
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search university, country, city..."
                  className="h-10 w-full rounded-xl border border-black/10 bg-[#faf9f6] pl-10 pr-3.5 text-sm outline-none focus:border-[#2d2d2d] focus:bg-white"
                />
              </div>
            </div>

            {/* Loading / Error */}
            {loading && (
              <div className="px-4 py-12 text-center text-sm text-[#666]">
                Loading data from backend...
              </div>
            )}
            {error && !loading && (
              <div className="mx-4 mb-4 rounded-xl bg-[#f5e6e6] px-4 py-3 text-sm text-[#7a2e2e]">
                Error: {error}
                <button onClick={fetchData} className="ml-3 underline">
                  Retry
                </button>
              </div>
            )}

            {/* Table */}
            {!loading && (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left">
                  <thead>
                    <tr className="border-y border-black/5 bg-[#faf9f6]">
                      <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#666]">#</th>
                      <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#666]">University</th>
                      <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#666]">Country</th>
                      <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#666]">City</th>
                      <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#666]">Status</th>
                      <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#666]">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleData.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="px-4 py-12 text-center text-sm text-[#999]">
                          No records found.
                        </td>
                      </tr>
                    ) : (
                      visibleData.map((item, index) => (
                        <tr key={item.id} className="border-b border-black/[0.04] hover:bg-[#faf9f6]/70">
                          <td className="px-4 py-3.5 text-sm font-semibold text-[#555]">
                            {(currentPage - 1) * PAGE_SIZE + index + 1}
                          </td>
                          <td className="px-4 py-3.5 text-sm font-medium text-[#1a1a1a]">
                            {item.website ? (
                              <a
                                href={item.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                              >
                                {item.university}
                              </a>
                            ) : (
                              item.university
                            )}
                          </td>
                          <td className="px-4 py-3.5 text-sm text-[#555]">{item.country}</td>
                          <td className="px-4 py-3.5 text-sm text-[#555]">{item.city || "—"}</td>
                          <td className="px-4 py-3.5">
                            <span
                              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                                item.status === "Active"
                                  ? "bg-[#e8f0d8] text-[#2d4a1e]"
                                  : item.status === "Pending"
                                  ? "bg-[#f0ebe3] text-[#6b4f2a]"
                                  : "bg-[#f5e6e6] text-[#7a2e2e]"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="flex gap-1.5">
                              <button
                                onClick={() => handleEdit(item)}
                                className="rounded-full bg-[#f0ebe3] px-2.5 py-1 text-xs font-medium text-[#2d2d2d] hover:bg-[#e5ddd0]"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(item.id)}
                                className="rounded-full bg-[#f5e6e6] px-2.5 py-1 text-xs font-medium text-[#7a2e2e] hover:bg-[#edd5d5]"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pagination */}
            {!loading && (
              <div className="flex items-center justify-between border-t border-black/5 px-4 py-3.5">
                <span className="text-xs text-[#666]">
                  Page {currentPage} of {totalPages}
                </span>
                <div className="flex gap-1.5">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => changePage(currentPage - 1)}
                    className="h-8 w-8 rounded-full border border-black/10 bg-white text-sm font-medium text-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    ←
                  </button>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => changePage(currentPage + 1)}
                    className="h-8 w-8 rounded-full border border-black/10 bg-white text-sm font-medium text-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    →
                  </button>
                </div>
              </div>
            )}
          </section>
        )}

        {/* THE Ranking */}
        {(activeTab === "all" || activeTab === "the") && (
          <WebsiteCard
            title="THE World University Rankings"
            subtitle="Times Higher Education"
            url={THE_URL}
          />
        )}

        {/* Other Ranking */}
        {(activeTab === "all" || activeTab === "other") && (
          <WebsiteCard
            title="Other Ranking"
            subtitle="External ranking website"
            url={OTHER_URL}
          />
        )}
      </div>
    </div>
  );
}

/* ===================== Tab Button ===================== */
function TabButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition ${
        active
          ? "bg-[#2d2d2d] text-white shadow-sm"
          : "text-[#555] hover:bg-[#f0ebe3] hover:text-[#1a1a1a]"
      }`}
    >
      {children}
    </button>
  );
}

/* ===================== Website Card ===================== */
function WebsiteCard({ title, subtitle, url }) {
  return (
    <section className="min-w-0 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm flex flex-col">
      <div className="flex items-center justify-between border-b border-black/5 bg-[#faf9f6] px-5 py-4">
        <div>
          <h2 className="text-[17px] font-semibold text-[#1a1a1a]">{title}</h2>
          <p className="mt-0.5 text-xs text-[#666]">{subtitle}</p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#f0ebe3] px-3.5 py-2 text-xs font-medium text-[#2d2d2d] transition hover:bg-[#2d2d2d] hover:text-white"
        >
          Open ↗
        </a>
      </div>

      <div className="h-[650px] bg-[#faf9f6] flex-1">
        <iframe
          src={url}
          title={title}
          loading="lazy"
          className="h-full w-full border-0"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <div className="flex items-center justify-between border-t border-black/5 bg-[#faf9f6] px-5 py-3">
        <span className="flex items-center gap-2 text-xs text-[#666]">
          <span className="h-2 w-2 rounded-full bg-green-600" />
          Live website view
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-[#2d2d2d] transition hover:opacity-70"
        >
          Open full website
        </a>
      </div>
    </section>
  );
}