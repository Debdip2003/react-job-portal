import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus, FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const HeroSection = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [stats, setStats] = useState(null);
  const navigateTo = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/stats", { withCredentials: true })
      .then((res) => setStats(res.data.stats))
      .catch(() => {});
  }, []);

  const statCards = [
    { id: 1, title: stats?.totalActiveJobs ?? "—", subTitle: "Live Jobs", icon: <FaSuitcase /> },
    { id: 2, title: stats?.totalCompanies ?? "—", subTitle: "Companies", icon: <FaBuilding /> },
    { id: 3, title: stats?.totalJobSeekers ?? "—", subTitle: "Job Seekers", icon: <FaUsers /> },
    { id: 4, title: stats?.totalEmployers ?? "—", subTitle: "Employers", icon: <FaUserPlus /> },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword) params.set("keyword", keyword);
    if (location) params.set("location", location);
    navigateTo(`/job/getall?${params.toString()}`);
  };

  return (
    <section className="hero">
      <img src="/heroS.jpg" alt="" className="hero__bg-img" aria-hidden="true" />
      <div className="hero__inner">
        {/* Headline */}
        <div className="hero__text">
          <h1 className="hero__headline">Find your dream career today.</h1>
          <p className="hero__sub">
            Discover thousands of job opportunities that match your skills and
            passions. Connect with top employers and take the next step in your
            career.
          </p>
        </div>

        {/* Search bar */}
        <form className="hero__search" onSubmit={handleSearch}>
          <div className="hero__search-field">
            <FaSearch className="hero__search-icon" />
            <input
              type="text"
              placeholder="Job title or keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <div className="hero__search-divider" />
          <div className="hero__search-field">
            <FaMapMarkerAlt className="hero__search-icon" />
            <input
              type="text"
              placeholder="City or location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button type="submit" className="hero__search-btn">
            Search Jobs
          </button>
        </form>

        {/* Trust stats */}
        <div className="hero__stats">
          {statCards.map((s) => (
            <div className="hero__stat-card" key={s.id}>
              <span className="hero__stat-icon">{s.icon}</span>
              <div>
                <p className="hero__stat-num">{s.title}</p>
                <p className="hero__stat-label">{s.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
