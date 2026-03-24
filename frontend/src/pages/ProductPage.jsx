import { useParams, Navigate } from "react-router-dom";
import { categories, productImages } from "../data/mockData";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import Breadcrumbs from "../components/Breadcrumbs";
import "../styles/ProductPage.css";
import { useEffect, useState } from "react";
import { MdGridView, MdViewList } from "react-icons/md";

const ProductPage = () => {
  const { categoryId, subcategoryId, optionId } = useParams();
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const category = categories.find((c) => c.id === categoryId);
  if (!category) return <Navigate to="/" replace />;

  const subcategory = category.subcategories?.find(
    (s) => s.id === subcategoryId
  );
  if (!subcategory) return <Navigate to={`/category/${categoryId}`} replace />;

  const hasOptions = subcategory.options && subcategory.options.length > 0;

  /* ── OPTIONS VIEW ── */
  if (hasOptions && !optionId) {
    const breadcrumbItems = [
      { label: category.name, path: `/category/${category.id}` },
      { label: subcategory.name },
    ];

    return (
      <div className="pp-wrapper animate-fade-in">
        <div className="pp-hero">
          <div className="pp-hero-inner">
            <Breadcrumbs items={breadcrumbItems} />
            <div className="pp-hero-text">
              <span className="pp-eyebrow">{category.name}</span>
              <h1 className="pp-title">{subcategory.name} <em></em></h1>
              <p className="pp-count">{subcategory.options.length} styles available</p>
            </div>
          </div>
        </div>

        <div className="pp-body">
          <div className="pp-grid pp-grid-4">
            {subcategory.options.map((option, i) => (
              <div
                key={option.id}
                className="pp-card-wrap"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <CategoryCard
                  to={`/category/${categoryId}/${subcategoryId}/${option.id}`}
                  title={option.name}
                  image={option.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── PRODUCTS VIEW ── */
  const option =
    optionId && hasOptions
      ? subcategory.options.find((o) => o.id === optionId)
      : null;

  if (optionId && hasOptions && !option) {
    return <Navigate to={`/category/${categoryId}/${subcategoryId}`} replace />;
  }

  const breadcrumbItems = [
    { label: category.name, path: `/category/${category.id}` },
    {
      label: subcategory.name,
      path: hasOptions ? `/category/${category.id}/${subcategory.id}` : null,
    },
  ];
  if (option) breadcrumbItems.push({ label: option.name });

  const key = optionId ? `${subcategoryId}-${optionId}` : subcategoryId;

  // Only use productImages — NO getProducts fallback, so no dummy 12 images
  const products = productImages[key] || [];

  const title = option ? `${subcategory.name}` : subcategory.name;
  const subtitle = option ? option.name : null;

  return (
    <div className="pp-wrapper animate-fade-in">

      {/* ── HERO BANNER ── */}
      <div className="pp-hero">
        <div className="pp-hero-inner">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="pp-hero-text">
            <span className="pp-eyebrow">{category.name}</span>
            <h1 className="pp-title">
              {title} {subtitle && <em>{subtitle}</em>}
            </h1>
          </div>
        </div>

        <div className="pp-hero-deco">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="pp-deco-line" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>

      {/* ── TOOLBAR — only show when there are products ── */}
      {products.length > 0 && (
        <div className="pp-toolbar">
          <div className="pp-toolbar-inner">
            <p className="pp-count">
              <strong>{products.length}</strong> products found
            </p>
            <div className="pp-view-toggle">
              <button
                className={`pp-view-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <MdGridView />
              </button>
              <button
                className={`pp-view-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <MdViewList />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── PRODUCTS or EMPTY STATE ── */}
      <div className="pp-body">
        {products.length === 0 ? (
          <div className="pp-empty">
            <p>No products available yet. Please check back soon.</p>
          </div>
        ) : (
          <div className={`pp-grid ${viewMode === "list" ? "pp-grid-list" : "pp-grid-4"}`}>
            {products.map((product, i) => (
              <div
                key={product.title + i}
                className="pp-card-wrap"
                style={{ animationDelay: `${i * 0.06}s`, cursor: "default" }}
              >
                <ProductCard
                  title={product.title}
                  image={product.image}
                />
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default ProductPage;