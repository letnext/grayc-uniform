import '../styles/ProductCard.css';

const ProductCard = ({ image, title }) => {
  return (
    <div className="pc-card">

      {/* Image */}
      <div className="pc-image-wrap">
        {image ? (
          <img src={image} alt={title} className="pc-image" loading="lazy" />
        ) : (
          <div className="pc-placeholder">
            <div className="pc-placeholder-lines">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="pc-ph-line" style={{ animationDelay: `${i * 0.12}s` }} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Title bar — arrow removed, no navigation */}
      <div className="pc-info">
        <h3 className="pc-title">{title}</h3>
      </div>

    </div>
  );
};

export default ProductCard;