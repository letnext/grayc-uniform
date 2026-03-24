import { Link } from "react-router-dom";
import "../styles/CategoryCard.css";

const CategoryCard = ({ to, image, title }) => {
  // If no `to` prop, render as a non-clickable div
  const Wrapper = to ? Link : "div";
  const wrapperProps = to
    ? { to, className: "cc-card" }
    : { className: "cc-card cc-card--static" };

  return (
    <Wrapper {...wrapperProps}>
      <div className="cc-image-wrap">
        <img
          src={image || "/images/default.jpg"}
          alt={title}
          className="cc-image"
          loading="lazy"
        />
      </div>

      <div className="cc-info">
        <h3 className="cc-title">{title}</h3>
        {to && <span className="cc-dot">✦</span>}
      </div>
    </Wrapper>
  );
};

export default CategoryCard;