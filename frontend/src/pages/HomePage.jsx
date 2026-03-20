import { categories } from '../data/mockData';
import CategoryCard from '../components/CategoryCard';
import '../styles/HomePage.css';
import AboutSection from "../components/AboutSection";
import logo from '/logo.png';

const HomePage = () => {
  return (
    <div className="homepage animate-fade-in">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            {/* <span className="hero-eyebrow">Est. Since 1991 Excellence</span> */}
            <h1 className="hero-title">
              <span className="text-premium">Premium</span>{" "}
              <span className="text-quality">Quality</span>{" "}
              <span className="text-uniforms">Uniforms & Fabrics</span>
            </h1>
            <p className="hero-subtitle">
              High quality · Competitive pricing · Prompt delivery.<br />
              Wide collections crafted by expert designers.
            </p>
            <div className="hero-cta-row">
              <a href="#collections" className="cta-primary">Explore Collections</a>
              <span className="hero-stat"><strong>500+</strong> Designs</span>
              <span className="hero-stat"><strong>10k+</strong> Happy Clients</span>
            </div>
          </div>

          {/* ── RIGHT SIDE: Logo + Visual ── */}
          <div className="hero-visual">
            <div className="hero-logo-wrap">
              <img src={logo} alt="Brand Logo" className="hero-logo-img" />
            </div>
            <div className="hero-badge">
              <span>Premium</span>
              <span>Textile</span>
            </div>
            <div className="hero-fabric-lines">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="fabric-line" style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="marquee-strip">
          <div className="marquee-track">
            {['Hospital Uniforms','School & College Uniforms', 'Corporate Wear',  'Industrial Uniforms','Hotels, Bars & Spa',
              'Custom Embroidery',  'Home Furnishing & all type of Woven Fabrics upto 120 inches '
              , 'Industrial Uniforms', 'Custom Embroidery', ].map((t, i) => (
              <span key={i} className="marquee-item">
                {t} <span className="marquee-dot">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS ── */}
      <section className="collections-section" id="collections">
        <div className="section-header">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Our Products</h2>
        </div>

        <div className="collections-grid">
          {categories.map((category, i) => (
            <div
              key={category.id}
              className="card-wrapper"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CategoryCard
                to={`/category/${category.id}`}
                title={category.name}
                image={category.image}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <AboutSection />

    </div>
  );
};

export default HomePage;