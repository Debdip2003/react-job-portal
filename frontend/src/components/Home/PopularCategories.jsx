import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, title: "Graphics & Design", subTitle: "305 Open Positions", icon: <MdOutlineDesignServices /> },
  { id: 2, title: "Mobile App Development", subTitle: "500 Open Positions", icon: <TbAppsFilled /> },
  { id: 3, title: "Frontend Web Development", subTitle: "200 Open Positions", icon: <MdOutlineWebhook /> },
  { id: 4, title: "MERN Stack Development", subTitle: "1000+ Open Positions", icon: <FaReact /> },
  { id: 5, title: "Account & Finance", subTitle: "150 Open Positions", icon: <MdAccountBalance /> },
  { id: 6, title: "Artificial Intelligence", subTitle: "867 Open Positions", icon: <GiArtificialIntelligence /> },
  { id: 7, title: "Video Animation", subTitle: "50 Open Positions", icon: <MdOutlineAnimation /> },
  { id: 8, title: "Game Development", subTitle: "80 Open Positions", icon: <IoGameController /> },
];

const PopularCategories = () => {
  const navigateTo = useNavigate();

  return (
    <section className="categories">
      <div className="categories__inner">
        <div className="categories__header">
          <p className="categories__eyebrow">Browse by Category</p>
          <h2 className="categories__title">Popular Categories</h2>
          <p className="categories__sub">
            Explore top job categories and find the role that fits your expertise.
          </p>
        </div>
        <div className="categories__grid">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="categories__card"
              onClick={() => navigateTo("/job/getall")}
            >
              <span className="categories__icon">{cat.icon}</span>
              <div className="categories__text">
                <p className="categories__name">{cat.title}</p>
                <p className="categories__count">{cat.subTitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
