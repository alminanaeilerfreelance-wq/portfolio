"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BellIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  EyeIcon,
  EyeSlashIcon,
  HomeIcon,
  IdentificationIcon,
  InboxIcon,
  AcademicCapIcon,
  PencilSquareIcon,
  PhotoIcon,
  PlusIcon,
  RectangleGroupIcon,
  SparklesIcon,
  TrashIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const AUTH_KEY = "portfolio-admin-authenticated";
const PAGE_SIZE = 5;

const sections = [
  {
    key: "headers",
    label: "Header Content",
    icon: RectangleGroupIcon,
    fields: [
      ["key", "Section Key"],
      ["title", "Title"],
      ["content", "Content", "textarea"],
      ["order", "Order"],
    ],
  },
  {
    key: "portfolio",
    label: "Portfolio",
    icon: BriefcaseIcon,
    fields: [
      ["image", "Image Upload", "file"],
      ["category", "Category"],
      ["title", "Title"],
      ["description", "Description", "textarea"],
      ["link", "Preview Link"],
      ["linkLabel", "Link Label"],
    ],
  },
  {
    key: "blogs",
    label: "Blogs",
    icon: DocumentTextIcon,
    fields: [
      ["image", "Image URL"],
      ["category", "Category"],
      ["title", "Title"],
      ["description", "Description", "textarea"],
      ["link", "Preview Link"],
      ["linkLabel", "Link Label"],
    ],
  },
  {
    key: "skills",
    label: "Skills",
    icon: SparklesIcon,
    fields: [
      ["image", "Image Icon", "file"],
      ["name", "Name"],
    ],
  },
  {
    key: "training",
    label: "Training",
    icon: AcademicCapIcon,
    fields: [
      ["year", "Year"],
      ["course", "Course"],
      ["certificate", "Certificate"],
      ["address", "Address"],
    ],
  },
  {
    key: "experience",
    label: "EXPERIENCE",
    icon: BriefcaseIcon,
    fields: [
      ["year", "Year"],
      ["company", "Company"],
      ["position", "Position"],
      ["location", "Location"],
      ["jobDescription", "Job Description", "textarea"],
    ],
  },
  {
    key: "testimonials",
    label: "Testimonials",
    icon: ChatBubbleLeftRightIcon,
    fields: [
      ["image", "Image URL"],
      ["text", "Text", "textarea"],
      ["userName", "User Name"],
      ["userPost", "User Post"],
      ["userCompany", "User Company"],
    ],
  },
  {
    key: "clients",
    label: "Clients",
    icon: UserGroupIcon,
    fields: [
      ["name", "Name"],
      ["image", "Image Upload", "file"],
    ],
  },
  {
    key: "contacts",
    label: "Contact Messages",
    icon: InboxIcon,
    readonly: true,
    fields: [
      ["name", "Name"],
      ["email", "Email"],
      ["location", "Location"],
      ["budget", "Budget"],
      ["subject", "Subject"],
      ["message", "Message", "textarea"],
    ],
  },
  {
    key: "personal",
    label: "Personal Information",
    icon: IdentificationIcon,
    fields: [
      ["logo", "Logo Upload", "file"],
      ["resume", "Resume Upload", "file"],
      ["name", "Name"],
      ["email", "Email"],
      ["contact", "Contact"],
      ["website", "Website"],
      ["address", "Address"],
      ["facebook", "Facebook"],
      ["linkedin", "LinkedIn"],
      ["twitter", "Twitter"],
      ["x", "X"],
    ],
  },
];

const emptyFor = (fields) =>
  Object.fromEntries(fields.map(([key]) => [key, key === "linkLabel" ? "Preview" : ""]));

async function readJson(response) {
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    return {
      message:
        "The admin API returned a non-JSON response. Make sure the site is running as a Next.js app, not a static export.",
    };
  }

  return response.json();
}

function LoginView({ onLogin }) {
  const [username, setUsername] = useState("portfolio");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submitLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    setLoading(false);

    if (response.ok) {
      localStorage.setItem(AUTH_KEY, "true");
      onLogin();
      return;
    }

    setError("Invalid username or password.");
  };

  return (
    <div className="min-h-screen bg-[#f4f5fa] text-[#2f2b3d]">
      <div className="grid min-h-screen lg:grid-cols-[1fr_520px]">
        <section className="relative hidden items-center justify-center overflow-hidden lg:flex">
          <div className="absolute left-10 top-10 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#8c57ff] text-xl font-black text-white">
              P
            </div>
            <span className="text-2xl font-bold tracking-wide">PORTFOLIO ADMIN</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-72 skew-y-[-8deg] bg-[#eceef6]" />
          <div className="relative z-10 grid w-[680px] grid-cols-3 gap-6">
            {[
              ["Portfolio Items", "Manage project cards"],
              ["Client Messages", "Review submissions"],
              ["Site Content", "Update public data"],
            ].map(([title, text], index) => (
              <div key={title} className={`rounded-lg bg-white p-6 shadow-lg ${index === 1 ? "mt-24" : ""}`}>
                <div className="mb-8 grid h-12 w-12 place-items-center rounded-full bg-[#8c57ff] text-white">
                  {index === 0 ? <BriefcaseIcon className="h-6 w-6" /> : index === 1 ? <InboxIcon className="h-6 w-6" /> : <PencilSquareIcon className="h-6 w-6" />}
                </div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-2 text-[#6f6b7d]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-center bg-white px-6">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-semibold">Sign in to Admin</h1>
            <p className="mt-3 text-[#6f6b7d]">Manage the portfolio content and contact messages.</p>

            <div className="mt-7 rounded-md bg-[#eee5ff] p-4 text-sm text-[#8c57ff]">
              Username: portfolio / Password: configured securely in env
            </div>

            <form onSubmit={submitLogin} className="mt-6 space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm text-[#6f6b7d]">Username</span>
                <input
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="h-14 w-full rounded-md border border-[#8c57ff] px-4 text-base outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-[#6f6b7d]">Password</span>
                <div className="flex h-14 items-center rounded-md border border-[#d9d7e3] px-4">
                  <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type={showPassword ? "text" : "password"}
                    className="w-full border-0 bg-transparent text-base outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="border-0 bg-transparent text-[#6f6b7d]"
                  >
                    {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  </button>
                </div>
              </label>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <button className="h-12 w-full rounded-md border-0 bg-[#8c57ff] text-base font-semibold text-white shadow-lg shadow-[#8c57ff33]">
                {loading ? "Signing in..." : "Log In"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

function DashboardView({ onLogout }) {
  const [activeKey, setActiveKey] = useState("headers");
  const active = sections.find((section) => section.key === activeKey);

  return (
    <div className="min-h-screen bg-[#f4f5fa] text-[#2f2b3d]">
      <aside className="fixed bottom-0 left-0 top-0 hidden w-72 border-0 border-r border-solid border-[#e6e4ef] bg-white lg:block">
        <div className="flex h-20 items-center gap-3 px-7">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#8c57ff] text-xl font-black text-white">
            P
          </div>
          <span className="text-xl font-bold">Portfolio Admin</span>
        </div>
        <nav className="px-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.key}
                onClick={() => setActiveKey(section.key)}
                className={`mb-2 flex h-12 w-full items-center gap-3 rounded-r-full border-0 px-4 text-left text-base ${
                  activeKey === section.key
                    ? "bg-[#8c57ff] text-white"
                    : "bg-transparent text-[#4b465c] hover:bg-[#f4f1ff]"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{section.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      <main className="lg:pl-72">
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between bg-[#f4f5fa]/95 px-5 backdrop-blur md:px-10">
          <div>
            <h1 className="text-2xl font-semibold">{active.label}</h1>
            <p className="text-sm text-[#7c7891]">Create, add, edit, update, delete, and paginate records.</p>
          </div>
          <div className="flex items-center gap-4">
            <BellIcon className="h-6 w-6 text-[#4b465c]" />
            <button
              onClick={onLogout}
              className="rounded-md border border-solid border-[#d9d7e3] bg-white px-4 py-2 text-[#4b465c]"
            >
              Logout
            </button>
          </div>
        </header>

        <ContentManager section={active} />
      </main>
    </div>
  );
}

function ContentManager({ section }) {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyFor(section.fields));
  const [editingId, setEditingId] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setForm(emptyFor(section.fields));
    setEditingId("");
    setPage(1);
    loadItems();
  }, [section.key]);

  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const pageItems = useMemo(
    () => items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [items, page],
  );

  async function loadItems() {
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(`/api/admin/${section.key}`);
      const data = await readJson(response);

      if (!response.ok) {
        setItems([]);
        setStatus(data.message || `Failed to load ${section.label}.`);
        return;
      }

      setItems(data.items || []);
      if (data.readOnly && data.message) {
        setStatus(data.message);
      }
    } catch (error) {
      setItems([]);
      setStatus(error.message || `Failed to load ${section.label}.`);
    } finally {
      setLoading(false);
    }
  }

  async function submit(event) {
    event.preventDefault();
    setStatus("");
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `/api/admin/${section.key}/${editingId}` : `/api/admin/${section.key}`;
    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await readJson(response);

    if (!response.ok) {
      setStatus(data.message || "Save failed");
      return;
    }

    setStatus(editingId ? "Record updated." : "Record added.");
    setForm(emptyFor(section.fields));
    setEditingId("");
    await loadItems();
  }

  async function remove(id) {
    const response = await fetch(`/api/admin/${section.key}/${id}`, { method: "DELETE" });
    const data = await readJson(response);

    if (!response.ok) {
      setStatus(data.message || "Delete failed");
      return;
    }

    setStatus("Record deleted.");
    await loadItems();
  }

  function edit(item) {
    setEditingId(item._id);
    setForm(Object.fromEntries(section.fields.map(([key]) => [key, item[key] || ""])));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function uploadFile(key, file) {
    if (!file) return;

    setStatus("Uploading file...");
    const body = new FormData();
    body.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body,
    });
    const data = await readJson(response);

    if (response.ok) {
      setForm((current) => ({ ...current, [key]: data.url }));
      setStatus("File uploaded. Save the record to apply it.");
      return;
    }

    setStatus(data.message || "Upload failed");
  }

  return (
    <div className="px-5 pb-10 md:px-10">
      {!section.readonly && (
        <form onSubmit={submit} className="mb-6 rounded-lg bg-white p-6 shadow-[0_4px_18px_rgba(47,43,61,0.12)]">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">{editingId ? "Update Record" : "Add Record"}</h2>
            <button className="inline-flex items-center gap-2 rounded-md border-0 bg-[#8c57ff] px-5 py-3 font-semibold text-white">
              <PlusIcon className="h-5 w-5" />
              {editingId ? "Update" : "Add"}
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {section.fields.map(([key, label, type]) => (
              <label key={key} className={type === "textarea" ? "md:col-span-2" : ""}>
                <span className="mb-2 block text-sm text-[#6f6b7d]">{label}</span>
                {type === "file" ? (
                  <div className="rounded-md border border-solid border-[#d9d7e3] p-3">
                    <input
                      type="file"
                      onChange={(event) => uploadFile(key, event.target.files?.[0])}
                      className="w-full text-sm"
                    />
                    <input
                      value={form[key] || ""}
                      onChange={(event) => setForm({ ...form, [key]: event.target.value })}
                      placeholder="Uploaded file URL"
                      className="mt-3 h-10 w-full rounded-md border border-solid border-[#ebe9f1] px-3 outline-none focus:border-[#8c57ff]"
                    />
                    {form[key] && (
                      <a
                        href={form[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm text-[#8c57ff]"
                      >
                        Preview uploaded file
                      </a>
                    )}
                  </div>
                ) : type === "textarea" ? (
                  <textarea
                    value={form[key] || ""}
                    onChange={(event) => setForm({ ...form, [key]: event.target.value })}
                    rows={4}
                    className="w-full rounded-md border border-solid border-[#d9d7e3] p-3 outline-none focus:border-[#8c57ff]"
                  />
                ) : (
                  <input
                    value={form[key] || ""}
                    onChange={(event) => setForm({ ...form, [key]: event.target.value })}
                    className="h-12 w-full rounded-md border border-solid border-[#d9d7e3] px-3 outline-none focus:border-[#8c57ff]"
                  />
                )}
              </label>
            ))}
          </div>
          {status && <p className="mt-4 text-sm text-[#56ca00]">{status}</p>}
        </form>
      )}

      {status && (
        <div className="mb-6 rounded-md border border-solid border-[#d9d7e3] bg-white p-4 text-sm text-[#6f6b7d] shadow-[0_4px_18px_rgba(47,43,61,0.08)]">
          {status}
        </div>
      )}

      <section className="rounded-lg bg-white p-6 shadow-[0_4px_18px_rgba(47,43,61,0.12)]">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Records</h2>
          <button onClick={loadItems} className="rounded-md border border-solid border-[#d9d7e3] bg-white px-4 py-2">
            Refresh
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="border-0 border-b border-solid border-[#eeeaf7] text-sm text-[#7c7891]">
                  {section.fields.slice(0, 5).map(([key, label]) => (
                    <th key={key} className="p-3 font-medium">{label}</th>
                  ))}
                  <th className="p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pageItems.map((item) => (
                  <tr key={item._id} className="border-0 border-b border-solid border-[#f1eef9]">
                    {section.fields.slice(0, 5).map(([key]) => (
                      <td key={key} className="max-w-[260px] truncate p-3">{item[key]}</td>
                    ))}
                    <td className="p-3">
                      <div className="flex gap-2">
                        {!section.readonly && (
                          <button
                            onClick={() => edit(item)}
                            className="grid h-9 w-9 place-items-center rounded-md border-0 bg-[#eee5ff] text-[#8c57ff]"
                          >
                            <PencilSquareIcon className="h-5 w-5" />
                          </button>
                        )}
                        <button
                          onClick={() => remove(item._id)}
                          className="grid h-9 w-9 place-items-center rounded-md border-0 bg-[#ffe9ea] text-[#ff4c51]"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                        {item.image && (
                          <a
                            href={item.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="grid h-9 w-9 place-items-center rounded-md bg-[#e8f8df] text-[#56ca00]"
                          >
                            <PhotoIcon className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
                {!pageItems.length && (
                  <tr>
                    <td className="p-6 text-center text-[#7c7891]" colSpan={section.fields.slice(0, 5).length + 1}>
                      No records yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm text-[#7c7891]">Page {page} of {totalPages}</span>
          <div className="flex gap-2">
            <button
              onClick={() => setPage((value) => Math.max(1, value - 1))}
              className="rounded-md border border-solid border-[#d9d7e3] bg-white px-4 py-2"
            >
              Previous
            </button>
            <button
              onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
              className="rounded-md border border-solid border-[#d9d7e3] bg-white px-4 py-2"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setAuthenticated(localStorage.getItem(AUTH_KEY) === "true");
    setReady(true);
  }, []);

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setAuthenticated(false);
  };

  if (!ready) return <div className="min-h-screen bg-[#f4f5fa]" />;

  return authenticated ? (
    <DashboardView onLogout={logout} />
  ) : (
    <LoginView onLogin={() => setAuthenticated(true)} />
  );
}
