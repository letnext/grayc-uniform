import { Link, useLocation } from "react-router-dom";
import { categories } from "../data/mockData";
import "../styles/Header.css";
import { useState } from "react";

const NAV_ICONS = {
  Home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>
    </svg>
  ),
  default: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  ),
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const allLinks = [
    { to: "/", label: "Home" },
    ...categories.map((c) => ({ to: `/category/${c.id}`, label: c.name })),
  ];

  return (
    <>
      {/* ── MOBILE TOP BAR ── */}
      <header className="mobile-topbar">
        <Link to="/" className="mobile-logo">
          <img src="/images/gray'slogo.png" alt="Logo" />
        </Link>
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </header>

      {/* ── SIDEBAR ── */}
      <aside className={`sidebar ${menuOpen ? "active" : ""}`}>
        {/* Logo area */}
        <div className="sidebar-logo">
          <div className="logo-icon">
            <img src="/images/gray'slogo.png" alt="Logo" />
          </div>
          <button className="sidebar-close" onClick={() => setMenuOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="sidebar-nav">
          {allLinks.map((link, i) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={i}
                to={link.to}
                className={`sidebar-link ${isActive ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="sidebar-icon">
                  {NAV_ICONS[link.label] || NAV_ICONS.default}
                </span>
                <span className="sidebar-label">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Contact at bottom */}
        <div className="sidebar-footer">
          <a href="mailto:info@graycuniforms.in" className="sidebar-contact">
            info@graycuniforms.in
          </a>
          <a href="tel:9965082985" className="sidebar-contact">
            +91 99650 82985
          </a>
        </div>
      </aside>

      {/* Overlay */}
      {menuOpen && (
        <div className="sidebar-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Header;