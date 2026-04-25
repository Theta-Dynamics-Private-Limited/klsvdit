import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

const topLinks = [
  { label: "People@VDIT", to: "/about#people" },
  { label: "Students", to: "/campus#students" },
  { label: "Alumni", to: "/about#alumni" },
  { label: "Recruitment", to: "/about#careers" },
  { label: "Media Queries", to: "/about#media" },
  { label: "NIRF", to: "/about#nirf" },
];

const mainNav = [
  {
    label: "ABOUT",
    to: "/about",
    children: [
      { label: "About KLS", to: "/about#kls" },
      { label: "Our History", to: "/about#history" },
      { label: "Vision & Mission", to: "/about#vision" },
      { label: "Leadership", to: "/about#leadership" },
      { label: "Our Campus", to: "/campus" },
    ],
  },
  {
    label: "ACADEMICS",
    to: "/academics",
    children: [
      { label: "Undergraduate Programmes", to: "/academics#ug" },
      { label: "Postgraduate Programmes", to: "/academics#pg" },
      { label: "Departments", to: "/academics#departments" },
      { label: "Academic Calendar", to: "/academics#calendar" },
    ],
  },
  {
    label: "ADMISSIONS",
    to: "/admissions",
    children: [
      { label: "How to Apply", to: "/admissions#apply" },
      { label: "Eligibility", to: "/admissions#eligibility" },
      { label: "Fee Structure", to: "/admissions#fees" },
      { label: "Scholarships", to: "/admissions#scholarships" },
    ],
  },
  {
    label: "RESEARCH",
    to: "/research",
    children: [
      { label: "Research Areas", to: "/research#areas" },
      { label: "Publications", to: "/research#publications" },
      { label: "Centres", to: "/research#centres" },
    ],
  },
  {
    label: "CAMPUS",
    to: "/campus",
    children: [
      { label: "Library", to: "/campus#library" },
      { label: "Hostels", to: "/campus#hostels" },
      { label: "Facilities", to: "/campus#facilities" },
      { label: "Sports", to: "/campus#sports" },
    ],
  },
  {
    label: "NEWS & EVENTS",
    to: "/news-events",
    children: null,
  },
  {
    label: "VDIT FORUM",
    to: "/forum",
    children: null,
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#f7efe2] transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* Top utility bar */}
      <div className="hidden md:flex justify-end items-center gap-5 px-6 lg:px-10 pt-3 text-[12.5px] font-sans-ui">
        {topLinks.map((l) => (
          <Link
            key={l.label}
            to={l.to}
            className="text-[#7a1d2c] hover:text-[#5b1421] transition-colors"
          >
            {l.label}
          </Link>
        ))}
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="flex items-center gap-1 border border-[#7a1d2c]/30 px-3 py-1 rounded text-[#7a1d2c] hover:bg-[#7a1d2c] hover:text-[#f7efe2] transition-colors"
          aria-label="Toggle search"
        >
          <Search size={14} />
          <span>Search</span>
        </button>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="px-6 lg:px-10 mt-2">
          <input
            type="text"
            placeholder="Search VDIT..."
            autoFocus
            className="w-full md:max-w-md ml-auto block px-4 py-2 border border-[#7a1d2c]/40 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#7a1d2c]/40"
          />
        </div>
      )}

      {/* Main nav row */}
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-10 py-3">
        <Link to="/" className="flex items-center gap-3">
          <Logo size={54} />
          <div className="leading-tight">
            <div className="text-[#7a1d2c] font-bold text-2xl md:text-3xl tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              KLS VDIT
            </div>
            <div className="text-[#3a3a3a] text-[11px] md:text-xs font-sans-ui leading-tight max-w-[280px]">
              Vishwanathrao Deshpande Institute of Technology, Haliyal
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 font-sans-ui text-[13.5px] font-semibold tracking-wider">
          {mainNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `nav-link text-[#2a2a2a] hover:text-[#7a1d2c] flex items-center gap-1 ${
                    isActive ? "text-[#7a1d2c]" : ""
                  }`
                }
              >
                {item.label}
                {item.children && <ChevronDown size={13} />}
              </NavLink>
              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full pt-3 w-64 z-50">
                  <div className="bg-white shadow-xl rounded border border-[#7a1d2c]/15 overflow-hidden">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        className="block px-4 py-3 text-[13px] text-[#2a2a2a] hover:bg-[#7a1d2c] hover:text-[#f7efe2] transition-colors"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[#7a1d2c]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#f7efe2] border-t border-[#7a1d2c]/20 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1 font-sans-ui">
            {mainNav.map((item) => (
              <div key={item.label} className="border-b border-[#7a1d2c]/10">
                <button
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === item.label ? null : item.label
                    )
                  }
                  className="w-full flex items-center justify-between py-3 text-[#2a2a2a] font-semibold text-sm tracking-wider"
                >
                  <Link
                    to={item.to}
                    onClick={() => !item.children && setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openMobileMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {item.children && openMobileMenu === item.label && (
                  <div className="pl-4 pb-3 space-y-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-[13px] text-[#2a2a2a]/80 hover:text-[#7a1d2c]"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 flex flex-col gap-2 text-xs">
              {topLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#7a1d2c] py-1"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
