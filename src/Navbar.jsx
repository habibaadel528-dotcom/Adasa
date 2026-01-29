import { NavLink } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black main-navigation-bar">
      <div className="container-fluid px-4">
        <div className="d-flex align-items-center order-lg-3">
          <span className="site-logo-text me-1">عدسة</span>
          <span className="site-logo-symbol">◎</span>
        </div>
        <div className="collapse navbar-collapse justify-content-center order-lg-2" id="mainNavbar">
          <ul className="navbar-nav gap-2 rounded-pill px-3 py-2 nav-links-background">
             <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                من نحن
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blogs" className="nav-link">
                المدونة
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink end to="/" className="nav-link">
                الرئيسية
              </NavLink>
            </li>
           
          </ul>
        </div>
        <div className="order-lg-1 d-none d-lg-block">
          <button className="btn primary-action-button rounded-pill px-4 fw-semibold">
            ابدأ القراءة
          </button>
        </div>
      </div>
    </nav>
  );
}
