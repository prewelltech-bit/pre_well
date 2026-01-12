import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select option");

  const options = ["React", "Vue", "Angular"];

  return (
    <>
      <nav className="header-container">
        {/* Top Header - Glassmorphism */}
        <div className="header-top">
          {/* Logo Section with hover glow */}
          <div className="logo-section w-32 sm:w-36 md:w-40 lg:w-48">
            <Link to="/"><img src="/assets/images/Prewell-Digitech-logo.png" alt="Prewell Digitech Logo" className="logo-img" /></Link>
          </div>
          {/* Search Bar - Hidden on mobile */}
          {/* <div className="search-bar-wrapper">
            <div className="search-container">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
              />
            </div>
          </div> */}
          <div className="header-right-section flex items-center">
            <div className={`nav-wrapper ${isMenuOpen ? "open" : ""}`}>
              <nav className="nav-menu mr-4 sm:mr-6 md:mr-8 lg:mr-10">
                <Link to="/" className="nav-link">
                  <span className="text-blue-800 font-weight-l text-lg link">Home</span>
                  <span className="nav-underline"></span>
                </Link>
                <Link to="/services" className="nav-link">
                  <span className="text-blue-800 font-weight-l text-lg link">Services</span>
                  <span className="nav-underline"></span>
                </Link>
                <Link to="/Portfolio" className="nav-link">
                  <div className="relative w-48">
                    <button
                      onClick={() => setOpen(!open)}
                      className="text-blue-800 font-weight-l text-lg link"
                    >
                      {selected}
                    </button>

                    {open && (
                      <ul className="absolute w-full bg-white border mt-1 rounded shadow">
                        {options.map((item) => (
                          <li
                            key={item}
                            onClick={() => {
                              setSelected(item);
                              setOpen(false);
                            }}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <span className="nav-underline"></span>
                </Link>
                <Link to="/about" className="nav-link">
                  <span className="text-blue-800 font-weight-l text-lg link">About</span>
                  <span className="nav-underline"></span>
                </Link>
                <Link to="/contact" className="nav-link">
                  <span className="text-blue-800 font-weight-l text-lg link">Contact</span>
                  <span className="nav-underline"></span>
                </Link>
                {/* <a href="/portfolio" className="nav-link">
                  <span className="text-blue-800 font-weight-l text-lg link">Portfolio</span>
                  <span className="nav-underline"></span>
                </a> */}
                <Link to="/team" className="nav-link">
                  <span className="text-blue-800 font-weight-l text-lg link">Our Team</span>
                  <span className="nav-underline"></span>
                </Link>
                <Link to="/gallery" className="nav-link">
                  <span className="text-blue-800 font-weight-l text-lg link">Gallary</span>
                  <span className="nav-underline"></span>
                </Link>
              </nav>
            </div>

            {/* Icons Section */}
            <div className="icons-section">
              {/* <button
                className="icon-btn notification-btn"
                aria-label="Notifications"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <span className="notification-dot"></span>
              </button> */}

              {/* <div className="profile-circle">
                <button className="profile-btn" aria-label="Profile">
                  <img
                    src="https://img.icons8.com/?size=100&id=20750&format=png&color=000000"
                    alt="User Profile"
                    className="profile-img"
                  />
                </button>
              </div> */}
            </div>

            {/* Mobile Menu Button - Animated Hamburger */}
            <button
              className={`hamburger-btn ${isMenuOpen ? "active" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Navigation Bar - Slide & Fade */}
      </nav>
    </>
  );
};

export default Header;
