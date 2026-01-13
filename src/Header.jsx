import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
                className="nav-link relative"
                onMouseEnter={() => !isMenuOpen && setIsDropdownOpen(true)}
                onMouseLeave={() => !isMenuOpen && setIsDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => isMenuOpen && setIsDropdownOpen(!isDropdownOpen)}
                  className="text-blue-800 text-lg link"
                >
                 <Link to="/portfolio">Portfolio</Link>
                </button>

                <span className="nav-underline"></span>

                {isDropdownOpen && (
                  <ul className="absolute w-56 bg-white border mt-10 rounded shadow z-100">
                    {portfolioOptions.map((item, index) => (
                      <li
                        key={index}
                        className="p-2 hover:bg-gray-100 text-blue-800 text-md cursor-pointer"
                      >
                        <Link
                          to={item.path}
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="block w-full"
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
