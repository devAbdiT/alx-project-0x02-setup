// Comment
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/home" className="logo-link">
            MyApp
          </Link>
        </div>

        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link
                to="/home"
                className={`nav-link ${isActive("/home") ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/posts"
                className={`nav-link ${isActive("/posts") ? "active" : ""}`}
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
