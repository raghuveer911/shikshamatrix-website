// ─────────────────────────────────────────────────────────────
// apps/web/src/app/superadmin/inquiries/page.tsx
// SuperAdmin — Website Inquiries pipeline (view, filter, update status)
// Uses your existing auth pattern (Bearer token from auth store).
// ─────────────────────────────────────────────────────────────
"use client";

import { useCallback, useEffect, useState } from "react";
// Adjust import to your actual store path:
import { useAuthStore } from "@/stores/useAuthStore";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

const STATUSES = ["NEW", "CONTACTED", "DEMO_SCHEDULED", "CONVERTED", "CLOSED"] as const;
type Status = (typeof STATUSES)[number];

const STATUS_STYLES: Record<Status, string> = {
  NEW: "bg-indigo-100 text-indigo-700",
  CONTACTED: "bg-amber-100 text-amber-700",
  DEMO_SCHEDULED: "bg-violet-100 text-violet-700",
  CONVERTED: "bg-emerald-100 text-emerald-700",
  CLOSED: "bg-gray-100 text-gray-600",
};

interface Inquiry {
  id: string;
  type: string;
  status: Status;
  schoolName: string;
  contactName: string;
  designation?: string;
  email: string;
  phone: string;
  city?: string;
  studentCount?: number;
  message?: string;
  notes?: string;
  createdAt: string;
}

export default function InquiriesPage() {
  const token = useAuthStore((s) => s.token);
  const [items, setItems] = useState<Inquiry[]>([]);
  const [stats, setStats] = useState<Record<string, number>>({});
  const [filter, setFilter] = useState<string>("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };

  const load = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page), limit: "20" });
    if (filter) params.set("status", filter);
    if (search.trim()) params.set("search", search.trim());
    const [listRes, statsRes] = await Promise.all([
      fetch(`${API_URL}/api/website/inquiries?${params}`, { headers }),
      fetch(`${API_URL}/api/website/inquiries/stats`, { headers }),
    ]);
    const list = await listRes.json();
    const st = await statsRes.json();
    if (list.success) {
      setItems(list.items);
      setPages(list.pages || 1);
    }
    if (st.success) setStats(st.stats);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, filter, search, token]);

  useEffect(() => {
    load();
  }, [load]);

  const updateStatus = async (id: string, status: Status) => {
    setItems((xs) => xs.map((x) => (x.id === id ? { ...x, status } : x))); // optimistic
    await fetch(`${API_URL}/api/website/inquiries/${id}`, { method: "PATCH", headers, body: JSON.stringify({ status }) });
    load();
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Website Inquiries</h1>
          <p className="text-sm text-gray-500">Leads from shikshamatrix.in — demo requests, pricing and contact.</p>
        </div>
        <input
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          placeholder="Search school, name, email, phone…"
          className="w-72 rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-indigo-400"
        />
      </div>

      {/* pipeline stats — clickable filters */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {STATUSES.map((s) => (
          <button
            key={s}
            onClick={() => { setFilter(filter === s ? "" : s); setPage(1); }}
            className={`rounded-2xl border p-4 text-left transition-all ${
              filter === s ? "border-indigo-400 bg-indigo-50 shadow-sm" : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <div className="text-2xl font-bold text-gray-900">{stats[s] ?? 0}</div>
            <div className="mt-1 text-xs font-medium text-gray-500">{s.replace("_", " ")}</div>
          </button>
        ))}
      </div>

      {/* list */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        {loading ? (
          <div className="p-12 text-center text-sm text-gray-400">Loading inquiries…</div>
        ) : items.length === 0 ? (
          <div className="p-12 text-center text-sm text-gray-400">No inquiries yet. New leads from the website will appear here.</div>
        ) : (
          items.map((q) => (
            <div key={q.id} className="border-b border-gray-100 last:border-0">
              <button onClick={() => setExpanded(expanded === q.id ? null : q.id)} className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-gray-50">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-gray-900">{q.schoolName}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${STATUS_STYLES[q.status]}`}>{q.status.replace("_", " ")}</span>
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] text-gray-500">{q.type.replace("_", " ")}</span>
                  </div>
                  <div className="mt-1 truncate text-sm text-gray-500">
                    {q.contactName}
                    {q.designation ? ` · ${q.designation}` : ""} · {q.phone} · {q.city || "—"}
                    {q.studentCount ? ` · ${q.studentCount} students` : ""}
                  </div>
                </div>
                <div className="whitespace-nowrap text-xs text-gray-400">{new Date(q.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</div>
              </button>

              {expanded === q.id && (
                <div className="bg-gray-50 px-5 py-4">
                  <div className="mb-3 grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
                    <div><span className="font-medium text-gray-500">Email:</span> {q.email}</div>
                    <div><span className="font-medium text-gray-500">Phone:</span> {q.phone}</div>
                  </div>
                  {q.message && <p className="mb-4 rounded-xl bg-white p-3 text-sm text-gray-700">{q.message}</p>}
                  <div className="flex flex-wrap gap-2">
                    {STATUSES.map((s) => (
                      <button
                        key={s}
                        onClick={() => updateStatus(q.id, s)}
                        disabled={q.status === s}
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                          q.status === s ? STATUS_STYLES[s] : "border border-gray-200 bg-white text-gray-500 hover:border-indigo-300"
                        }`}
                      >
                        {s.replace("_", " ")}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* pagination */}
      {pages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-3">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="rounded-lg border border-gray-200 px-4 py-2 text-sm disabled:opacity-40">← Prev</button>
          <span className="text-sm text-gray-500">Page {page} of {pages}</span>
          <button onClick={() => setPage((p) => Math.min(pages, p + 1))} disabled={page === pages} className="rounded-lg border border-gray-200 px-4 py-2 text-sm disabled:opacity-40">Next →</button>
        </div>
      )}
    </div>
  );
}