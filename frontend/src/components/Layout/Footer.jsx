import { useContext } from 'react';
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  const { isAuthorized } = useContext(Context);

  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div className="footer__inner">

        {/* Brand column */}
        <div className="footer__brand">
          <p className="footer__logo">CareerConnect</p>
          <p className="footer__tagline">
            Connecting talent with opportunity — find your dream career or your next great hire.
          </p>
          <div className="footer__socials">
            <Link to="https://github.com/exclusiveabhi" target="_blank" aria-label="GitHub" className="footer__social-link"><FaGithub /></Link>
            <Link to="https://leetcode.com/u/exclusiveabhi/" target="_blank" aria-label="LeetCode" className="footer__social-link"><SiLeetcode /></Link>
            <Link to="https://www.linkedin.com/in/abhishek-rajput-/" target="_blank" aria-label="LinkedIn" className="footer__social-link"><FaLinkedin /></Link>
            <Link to="https://www.instagram.com/exclusiveabhi/" target="_blank" aria-label="Instagram" className="footer__social-link"><RiInstagramFill /></Link>
          </div>
        </div>

        {/* For Job Seekers */}
        <div className="footer__col">
          <p className="footer__col-title">For Job Seekers</p>
          <ul className="footer__links">
            <li><Link to="/job/getall">Browse Jobs</Link></li>
            <li><Link to="/applications/me">My Applications</Link></li>
            <li><Link to="/">Dashboard</Link></li>
          </ul>
        </div>

        {/* For Employers */}
        <div className="footer__col">
          <p className="footer__col-title">For Employers</p>
          <ul className="footer__links">
            <li><Link to="/job/post">Post a Job</Link></li>
            <li><Link to="/job/me">Manage Jobs</Link></li>
            <li><Link to="/applications/me">View Applicants</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer__col">
          <p className="footer__col-title">Company</p>
          <ul className="footer__links">
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} CareerConnect. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
