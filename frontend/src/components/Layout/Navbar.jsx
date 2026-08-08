import { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);
  const navigateTo = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        { withCredentials: true }
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Logged out.");
    } finally {
      setUser({});
      setIsAuthorized(false);
      navigateTo("/login");
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={isAuthorized ? "navbarShow" : "navbarHide"}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img src="public/favicon.png" alt="CareerConnect Logo" />
          <span className="nav-brand">CareerConnect</span>
        </div>

        {/* Nav Links */}
        <ul className={show ? "nav-menu nav-menu--open" : "nav-menu"}>
          <li>
            <Link
              to="/"
              className={`nav-link${isActive("/") ? " nav-link--active" : ""}`}
              onClick={() => setShow(false)}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/job/getall"
              className={`nav-link${isActive("/job/getall") ? " nav-link--active" : ""}`}
              onClick={() => setShow(false)}
            >
              ALL JOBS
            </Link>
          </li>
          <li>
            <Link
              to="/applications/me"
              className={`nav-link${isActive("/applications/me") ? " nav-link--active" : ""}`}
              onClick={() => setShow(false)}
            >
              {user && user.role === "Employer"
                ? "APPLICANT'S APPLICATIONS"
                : "MY APPLICATIONS"}
            </Link>
          </li>
          {user && user.role === "Employer" && (
            <>
              <li>
                <Link
                  to="/job/post"
                  className={`nav-link${isActive("/job/post") ? " nav-link--active" : ""}`}
                  onClick={() => setShow(false)}
                >
                  POST NEW JOB
                </Link>
              </li>
              <li>
                <Link
                  to="/job/me"
                  className={`nav-link${isActive("/job/me") ? " nav-link--active" : ""}`}
                  onClick={() => setShow(false)}
                >
                  VIEW YOUR JOBS
                </Link>
              </li>
            </>
          )}

          {/* Logout — inside menu on mobile */}
          <li className="nav-logout-mobile">
            <button className="nav-btn-logout" onClick={handleLogout}>
              LOGOUT
            </button>
          </li>
        </ul>

        {/* Right side: logout (desktop) + hamburger */}
        <div className="nav-right">
          <button className="nav-btn-logout nav-logout-desktop" onClick={handleLogout}>
            LOGOUT
          </button>
          <button
            className="nav-hamburger"
            onClick={() => setShow(!show)}
            aria-label="Toggle menu"
          >
            {show ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
