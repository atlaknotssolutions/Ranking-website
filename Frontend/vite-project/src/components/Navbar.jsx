import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  const navItems = [
    { label: "University", to: "/university-dashboard" },
    { label: "Research", to: "/research" },
    { label: "Study and Teaching", to: "/study-and-teaching" },
    { label: "Knowledge Transfer", to: "/knowledge-transfer" },
    { label: "International", to: "/international" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-[#1a1a1a]">
      <div className="border-b border-black/5 bg-[#f8f5f0]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-5 px-4 py-2 text-sm sm:px-6 lg:px-8">
          <button className="flex items-center gap-1.5 hover:opacity-70">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search
          </button>

          <button className="flex items-center gap-1.5 hover:opacity-70">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            Intranet
          </button>

          <button className="flex items-center gap-1.5 hover:opacity-70">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>

          <button className="flex items-center gap-1.5 hover:opacity-70">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Easy-to-Read Language
          </button>

          <div className="flex overflow-hidden rounded-full border border-black/10 text-xs font-medium">
            <button
              onClick={() => setLang("DE")}
              className={`px-2.5 py-1 transition ${
                lang === "DE"
                  ? "bg-[#1a1a1a] text-white"
                  : "bg-white text-[#1a1a1a]"
              }`}
            >
              DE
            </button>
            <button
              onClick={() => setLang("EN")}
              className={`px-2.5 py-1 transition ${
                lang === "EN"
                  ? "bg-[#1a3a6e] text-white"
                  : "bg-white text-[#1a1a1a]"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f5f0]/90 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            <div className="flex items-center gap-8">
              <NavLink to="/" className="flex-shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-black/10 bg-white">
                  <svg viewBox="0 0 40 48" className="h-9 w-auto text-black">
                    <path
                      fill="currentColor"
                      d="M20 2c-6 0-11 5-11 12 0 4 2 7 4 9-3 2-6 6-6 12v3h26v-3c0-6-3-10-6-12 2-2 4-5 4-9 0-7-5-12-11-12zm0 4c4 0 7 3 7 8s-3 8-7 8-7-3-7-8 3-8 7-8z"
                    />
                  </svg>
                </div>
              </NavLink>

              <nav className="hidden items-center gap-7 text-[15px] font-medium md:flex">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `transition ${isActive ? "text-[#1a3a6e]" : "hover:text-[#1a3a6e]"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden rounded-full border border-black/15 bg-white px-5 py-2 text-sm font-medium transition hover:bg-black/5 md:block">
                Faculties
              </button>

              <button
                className="rounded-md p-2 md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-black/10 bg-[#f8f5f0] px-4 pb-5 md:hidden">
          <div className="space-y-1 py-4 text-[15px] font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2.5 ${isActive ? "text-[#1a3a6e]" : "text-[#1a1a1a]"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button className="mt-3 w-full rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-medium">
              Faculties
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
