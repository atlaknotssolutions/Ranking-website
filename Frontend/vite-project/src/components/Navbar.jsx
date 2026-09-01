import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0); // 0 = main, 1 = University, 2 = Current news
  const [activePath, setActivePath] = useState([]);

  // Menu Data
  const menuData = {
    main: [
      { title: "Home", hasChildren: false, path: "/" },
      { title: "Ranking", hasChildren: false, path: "/university-dashboard" },
      { title: "University", hasChildren: true, key: "university" },
      { title: "Research", hasChildren: true, key: "research" },
      { title: "Study", hasChildren: true, key: "study" },
      { title: "Transfer", hasChildren: true, key: "transfer" },
    ],
    university: [
      { title: "Current news", hasChildren: true, key: "current-news" },
      { title: "Profile", hasChildren: true },
      { title: "The University as employer", hasChildren: true },
      { title: "Organization", hasChildren: true },
      { title: "Faculties and institutes", hasChildren: true },
      { title: "Facilities", hasChildren: false },
      { title: "International", hasChildren: true },
      { title: "Uni for all", hasChildren: true },
      { title: "Our campus", hasChildren: false },
      { title: "Ranking", hasChildren: false, path: "/university-dashboard" },
    ],
    "current-news": [
      { title: "Current news", hasChildren: false },
      { title: "All Events", hasChildren: false },
      { title: "All News", hasChildren: false },
      { title: "Official Announcements", hasChildren: false },
    ],
  };

  const targetGroups = [
    { title: "Prospective students", icon: "i" },
    { title: "Students", icon: "book" },
    { title: "Early career researchers", icon: "grad" },
    { title: "Founders", icon: "rocket" },
  ];

  const openMenu = () => {
    setIsOpen(true);
    setCurrentLevel(0);
    setActivePath([]);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setCurrentLevel(0);
    setActivePath([]);
  };

  const goToLevel = (item) => {
    if (!item.hasChildren) {
      if (item.path) {
        closeMenu();
        navigate(item.path);
      }
      return;
    }

    setActivePath([...activePath, item.title]);
    setCurrentLevel(currentLevel + 1);
  };

  const goBack = () => {
    if (currentLevel === 0) return;
    setActivePath(activePath.slice(0, -1));
    setCurrentLevel(currentLevel - 1);
  };

  const getCurrentItems = () => {
    if (currentLevel === 0) return menuData.main;
    if (currentLevel === 1) return menuData.university;
    if (currentLevel === 2) return menuData["current-news"];
    return [];
  };

  return (
    <>
      {/* ===== Top Navbar ===== */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-5 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 relative">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                <circle cx="24" cy="24" r="22" fill="none" stroke="#1a1a1a" strokeWidth="1" />
                {[...Array(24)].map((_, i) => {
                  const angle = (i * 15 * Math.PI) / 180;
                  const r = 8 + (i % 3) * 4;
                  return (
                    <circle
                      key={i}
                      cx={24 + r * Math.cos(angle)}
                      cy={24 + r * Math.sin(angle)}
                      r={i % 4 === 0 ? 1.6 : 1.2}
                      fill="#1a1a1a"
                    />
                  );
                })}
              </svg>
            </div>
            <span className="text-[17px] font-medium text-gray-900 tracking-tight">
              University of Stuttgart
            </span>
          </a>

          {/* Right Icons */}
          <div className="flex items-center gap-1">
            {/* Language */}
            <button className="p-2.5 hover:bg-gray-50 rounded-full transition-colors flex flex-col items-center">
              <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 2a7 7 0 0 1 7 7c0 4-3 7-7 11-4-4-7-7-7-11a7 7 0 0 1 7-7z" />
                <circle cx="12" cy="9" r="2.2" />
              </svg>
              <svg className="w-2.5 h-2.5 text-gray-500 -mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>

            {/* Search */}
            <button className="p-2.5 hover:bg-gray-50 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7.5" />
                <path strokeLinecap="round" d="m20 20-3.5-3.5" />
              </svg>
            </button>

            {/* Hamburger */}
            <button
              onClick={openMenu}
              className="p-2.5 hover:bg-gray-50 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ===== Full Screen Menu ===== */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-sm">
          {/* Top bar inside menu */}
          <div className="h-16 px-5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <svg viewBox="0 0 48 48" className="w-full h-full text-white">
                  <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1" />
                  {[...Array(24)].map((_, i) => {
                    const angle = (i * 15 * Math.PI) / 180;
                    const r = 8 + (i % 3) * 4;
                    return (
                      <circle
                        key={i}
                        cx={24 + r * Math.cos(angle)}
                        cy={24 + r * Math.sin(angle)}
                        r={i % 4 === 0 ? 1.6 : 1.2}
                        fill="currentColor"
                      />
                    );
                  })}
                </svg>
              </div>
              <span className="text-white text-[16px] font-medium">University of Stuttgart</span>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 text-white/80 hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                  <circle cx="11" cy="11" r="7.5" />
                  <path strokeLinecap="round" d="m20 20-3.5-3.5" />
                </svg>
              </button>
              <button onClick={closeMenu} className="p-2 text-white/80 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Menu Content */}
          <div className="relative h-[calc(100vh-64px)] overflow-y-auto">
            {/* Progress Indicator (left blue line) */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00AEEF]">
              <div
                className="absolute left-0 bg-[#00AEEF] transition-all duration-300"
                style={{
                  top: currentLevel === 0 ? "48px" : "0",
                  height: currentLevel === 0 ? "40px" : "100%",
                  width: "4px",
                }}
              />
            </div>

            <div className="pl-8 pr-6 pt-8 pb-12 max-w-3xl">
              {/* Back button + Progress bar (when not on main) */}
              {currentLevel > 0 && (
                <div className="mb-6">
                  <button
                    onClick={goBack}
                    className="flex items-center gap-2 text-white/80 hover:text-white text-sm mb-4"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    back
                  </button>

                  {/* Progress segments */}
                  <div className="flex gap-1 h-1.5 mb-6">
                    <div className={`flex-1 rounded-full ${currentLevel >= 1 ? "bg-white/30" : "bg-white/10"}`} />
                    <div className={`flex-1 rounded-full ${currentLevel >= 2 ? "bg-[#00AEEF]" : "bg-white/10"}`} />
                    <div className="flex-1 rounded-full bg-white/10" />
                  </div>
                </div>
              )}

              {/* Main Level Header Indicator */}
              {currentLevel === 0 && (
                <div className="mb-8">
                  <div className="w-12 h-1 bg-[#00AEEF] rounded-full" />
                </div>
              )}

              {/* Sub Level Title Bar */}
              {currentLevel === 1 && (
                <div className="mb-2 -mx-2">
                  <div className="bg-[#00AEEF] text-white px-4 py-3 text-lg font-medium">
                    University
                  </div>
                </div>
              )}

              {/* Menu Items */}
              <nav className="space-y-0">
                {getCurrentItems().map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToLevel(item)}
                    className="w-full flex items-center justify-between py-4 border-b border-white/15 text-left group"
                  >
                    <span className="text-white text-[17px] font-normal group-hover:text-[#00AEEF] transition-colors">
                      {item.title}
                    </span>
                    {item.hasChildren && (
                      <svg className="w-5 h-5 text-white/60 group-hover:text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </nav>

              {/* Information for section (only on main level) */}
              {currentLevel === 0 && (
                <div className="mt-10">
                  <h3 className="text-white/70 text-sm mb-5">Information for</h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                    {targetGroups.map((group) => (
                      <a
                        key={group.title}
                        href="#"
                        className="flex items-center gap-3 text-white hover:text-[#00AEEF] transition-colors"
                      >
                        <div className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-sm">
                          {group.icon === "i" && "i"}
                          {group.icon === "book" && (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeWidth="1.5" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                              <path strokeWidth="1.5" d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                            </svg>
                          )}
                          {group.icon === "grad" && (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z" />
                            </svg>
                          )}
                          {group.icon === "rocket" && (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeWidth="1.5" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                              <path strokeWidth="1.5" d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                            </svg>
                          )}
                        </div>
                        <span className="text-[15px]">{group.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;