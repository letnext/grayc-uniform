import { useParams, Navigate } from "react-router-dom";
import { categories } from "../data/mockData";
import CategoryCard from "../components/CategoryCard";
import "../styles/CategoryPage.css";
import { useEffect } from "react";

const CategoryPage = () => {
  const { categoryId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const category = categories.find((c) => c.id === categoryId);
  if (!category) return <Navigate to="/" replace />;

  return (
    <div className="cp-wrapper animate-fade-in">

      {/* ── HERO ── */}
      <div className="cp-hero">
        <div className="cp-hero-inner">
          <span className="cp-eyebrow">Our Collections</span>
          <h1 className="cp-title">
            {category.name.split(" ").slice(0, -1).join(" ")}{" "}
            <em>{category.name.split(" ").slice(-1)}</em>
          </h1>
          <p className="cp-subtitle">
            {category.subcategories.length} collections available
          </p>
        </div>

        {/* Deco lines */}
        <div className="cp-hero-deco">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="cp-deco-line"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="cp-body">
        <div className="cp-grid">
          {category.subcategories.map((sub, i) => (
            <div
              key={sub.id}
              className="cp-card-wrap"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <CategoryCard
                to={`/category/${categoryId}/${sub.id}`}
                image={sub.image}
                title={sub.name}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CategoryPage;