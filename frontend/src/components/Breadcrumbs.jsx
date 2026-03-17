import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import "../styles/Breadcrumbs.css"

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs-list">
        <li className="breadcrumb-item">
          <Link to="/" className="breadcrumb-link home-link">
            <Home size={18} />
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={item.path || index} className="breadcrumb-item">
            <ChevronRight size={16} className="breadcrumb-separator" />
            {item.path ? (
              <Link to={item.path} className="breadcrumb-link">
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumb-current" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
