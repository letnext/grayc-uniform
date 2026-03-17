import { Link } from "react-router-dom";
import "../styles/CategoryCard.css";

const CategoryCard = ({ to, image, title }) => {
  return (
    <Link to={to} className="cc-card">

      {/* Image */}
      <div className="cc-image-wrap">
        <img
          src={image || "/images/default.jpg"}
          alt={title}
          className="cc-image"
          loading="lazy"
        />

       
      </div>

      {/* Title */}
      <div className="cc-info">
        <h3 className="cc-title">{title}</h3>
        <span className="cc-dot">✦</span>
      </div>

    </Link>
  );
};

export default CategoryCard;