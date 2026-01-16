import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const portfolioRef = useRef(null);

  // Portfolio dropdown data
  const portfolioOptions = [
    {
      name: "Web Design & Development",
      path: "/portfolio/web-design-and-development",
    },
    {
      name: "Digital Marketing",
      path: "/portfolio/digital-marketing",
    },
    {
      name: "Graphic Design",
      path: "/portfolio/graphic-design",
    },
    {
      name: "Video Editing",
      path: "/portfolio/video-editing",
    },
  ];

  return (
    <nav className="header-container">
      <div className="header-top flex justify-between items-center">

        {/* Logo */}
        <div className="logo-section w-32 sm:w-36 md:w-40 lg:w-48">
          <Link to="/">
            <img
              src="/assets/images/Prewell-Digitech-logo.png"
              alt="Prewell Digitech Logo"
              className="logo-img"
            />
          </Link>
        </div>

        <div className="header-right-section flex items-center">

          {/* Navigation */}
          <div className={`nav-wrapper ${isMenuOpen ? "open" : ""}`}>
            <nav className="nav-menu mr-4 sm:mr-6 md:mr-8 lg:mr-10">

              <Link to="/" className="nav-link">
                <span className="text-blue-800 text-lg link">Home</span>
                <span className="nav-underline"></span>
              </Link>

              <Link to="/services" className="nav-link">
                <span className="text-blue-800 text-lg link">Services</span>
                <span className="nav-underline"></span>
              </Link>

              {/* Portfolio Dropdown */}
              <div
                ref={portfolioRef}
                className="nav-link portfolio-dropdown-container"
                onMouseEnter={() => {
                  if (!isMenuOpen) {
                    setIsDropdownOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (!isMenuOpen) {
                    setIsDropdownOpen(false);
                  }
                }}
              >
                <Link
                  to="/portfolio"
                  onClick={(e) => {
                    if (isMenuOpen) {
                      e.preventDefault();
                      setIsDropdownOpen(!isDropdownOpen);
                    }
                  }}
                  className="text-blue-800 text-lg link"
                >
                  Portfolio
                </Link>

                <span className="nav-underline"></span>

                {isDropdownOpen && (
                  <ul
                    className="portfolio-dropdown bg-white border rounded shadow"
                    style={{
                      position: "fixed",
                      left: portfolioRef.current ? portfolioRef.current.getBoundingClientRect().left : 0,
                      top: "65px",
                      zIndex: 100,
                    }}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {portfolioOptions.map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-3 hover:bg-blue-50 text-blue-800 text-sm cursor-pointer transition-colors duration-200"
                      >
                        <Link
                          to={item.path}
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="block w-full no-underline"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Link to="/about" className="nav-link">
                <span className="text-blue-800 text-lg link">About</span>
                <span className="nav-underline"></span>
              </Link>

              <Link to="/contact" className="nav-link">
                <span className="text-blue-800 text-lg link">Contact</span>
                <span className="nav-underline"></span>
              </Link>

              <Link to="/team" className="nav-link">
                <span className="text-blue-800 text-lg link">Our Team</span>
                <span className="nav-underline"></span>
              </Link>

              <Link to="/gallery" className="nav-link">
                <span className="text-blue-800 text-lg link">Gallery</span>
                <span className="nav-underline"></span>
              </Link>

            </nav>
          </div>

          {/* Mobile Menu Button */}
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
    </nav>
  );
};

export default Header;
