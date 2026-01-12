import React, { useState } from "react";
import { Link } from "react-router";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-12 sm:py-16 md:py-20">
        {/* Newsletter Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-lg p-6 sm:p-8 md:p-10 backdrop-blur-sm animate-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Newsletter Text */}
              <div className="">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 gradient-text">
                  Stay Updated
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  Subscribe to our newsletter for the latest news, updates, and exclusive offers from Prewell Digitech.
                </p>
              </div>

              {/* Newsletter Form */}
              <form onSubmit={handleSubscribe} className="">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-blue-500 focus:outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                {subscribed && (
                  <p className="mt-3 text-green-400 text-sm font-semibold animate-pulse">
                    ✓ Thank you for subscribing!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Footer Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-8 mb-10 sm:mb-12">
            {/* Company Info */}
            <div className="footer-section">
              <h4 className="text-cyan-400 font-bold text-lg mb-4 footer-title animate-on-scroll">
                &gt; COMPANY
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="footer-link text-gray-300 hover:text-cyan-400 text-sm sm:text-base transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="footer-link text-gray-300 hover:text-cyan-400 text-sm sm:text-base transition-colors duration-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link text-gray-300 hover:text-cyan-400 text-sm sm:text-base transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="text-purple-400 font-bold text-lg mb-4 footer-title animate-on-scroll delay-1">
                &gt; QUICK LINKS
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="footer-link text-gray-300 hover:text-purple-400 text-sm sm:text-base transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="footer-link text-gray-300 hover:text-purple-400 text-sm sm:text-base transition-colors duration-300">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <a href="#blog" className="footer-link text-gray-300 hover:text-purple-400 text-sm sm:text-base transition-colors duration-300">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="footer-section">
              <h4 className="text-pink-400 font-bold text-lg mb-4 footer-title animate-on-scroll delay-2">
                &gt; SOCIAL
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.instagram.com/prewelldigitech/?hl=en" target="_blank" rel="noopener noreferrer" className="footer-link text-gray-300 hover:text-pink-400 text-sm sm:text-base transition-colors duration-300 flex items-center gap-2">
                    📱 Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/109808373/admin/analytics/followers/" target="_blank" rel="noopener noreferrer" className="footer-link text-gray-300 hover:text-pink-400 text-sm sm:text-base transition-colors duration-300 flex items-center gap-2">
                    💼 LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/prewelltech-bit" target="_blank" rel="noopener noreferrer" className="footer-link text-gray-300 hover:text-pink-400 text-sm sm:text-base transition-colors duration-300 flex items-center gap-2">
                    🔗 GitHub
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="text-yellow-400 font-bold text-lg mb-4 footer-title animate-on-scroll delay-3">
                &gt; CONTACT
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:prewelltech@gmail.com" className="footer-link text-gray-300 hover:text-yellow-400 text-sm sm:text-base transition-colors duration-300">
                    📧 prewelltech@gmail.com
                  </a>
                </li>
                <li>
                  <p className="text-gray-400 text-sm sm:text-base">
                    📍 Located Globally
                  </p>
                </li>
                <li>
                  <p className="text-gray-400 text-sm sm:text-base">
                    ⏰ 24/7 Support
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8 sm:my-10"></div>

          {/* Footer Bottom */}
          <div className="text-center footer-bottom">
            <div className="mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-2">
                Made with <span className="text-pink-400">❤️</span> by Prewell Digitech Team
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                &copy; 2025 <span className="text-cyan-400 font-semibold">PREWELL DIGITECH</span> — All Rights Reserved
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://www.instagram.com/prewelldigitech/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-lg sm:text-xl">
                📱
              </a>
              <a href="https://www.linkedin.com/company/109808373/admin/analytics/followers/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-lg sm:text-xl">
                💼
              </a>
              <a href="https://github.com/prewelltech-bit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors duration-300 text-lg sm:text-xl">
                🔗
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
