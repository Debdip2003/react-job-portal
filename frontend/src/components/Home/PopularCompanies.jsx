import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import { FiMapPin, FiBriefcase } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const companies = [
  {
    id: 1,
    title: "Microsoft",
    location: "Millennium City Centre, Gurugram",
    openPositions: 10,
    icon: <FaMicrosoft />,
  },
  {
    id: 2,
    title: "Tesla",
    location: "Millennium City Centre, Gurugram",
    openPositions: 5,
    icon: <SiTesla />,
  },
  {
    id: 3,
    title: "Apple",
    location: "Millennium City Centre, Gurugram",
    openPositions: 20,
    icon: <FaApple />,
  },
];

const PopularCompanies = () => {
  const navigateTo = useNavigate();

  return (
    <section className="companies">
      <div className="companies__inner">
        <div className="companies__header">
          <p className="companies__eyebrow">Who's Hiring</p>
          <h2 className="companies__title">Top Companies</h2>
          <p className="companies__sub">
            Join industry-leading companies actively looking for talent like you.
          </p>
        </div>

        <div className="companies__grid">
          {companies.map((company) => (
            <div className="companies__card" key={company.id}>
              <div className="companies__card-header">
                <span className="companies__icon">{company.icon}</span>
                <div className="companies__info">
                  <p className="companies__name">{company.title}</p>
                  <p className="companies__location">
                    <FiMapPin size={12} />
                    {company.location}
                  </p>
                </div>
              </div>
              <div className="companies__card-footer">
                <span className="companies__positions">
                  <FiBriefcase size={13} />
                  {company.openPositions} Open Positions
                </span>
                <button
                  className="companies__btn"
                  onClick={() => navigateTo("/job/getall")}
                >
                  View Jobs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCompanies;
