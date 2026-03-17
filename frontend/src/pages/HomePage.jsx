import { categories } from '../data/mockData';
import CategoryCard from '../components/CategoryCard';
import '../styles/HomePage.css';
import AboutSection from "../components/AboutSection";

const HomePage = () => {
  return (
    <div className="homepage animate-fade-in">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <span className="hero-eyebrow">Est. Since Excellence</span>
            <h1 className="hero-title">
              Premium <br />
              <em>Quality</em> <br />
              Uniforms
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

          <div className="hero-visual">
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
            {['School Uniforms', 'Corporate Wear', 'Sports Kits', 'Industrial Uniforms',
              'Custom Embroidery', 'Bulk Orders', 'School Uniforms', 'Corporate Wear',
              'Sports Kits', 'Industrial Uniforms', 'Custom Embroidery', 'Bulk Orders'].map((t, i) => (
              <span key={i} className="marquee-item">{t} <span className="marquee-dot">✦</span></span>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS ── */}
      <section className="collections-section" id="collections">
        <div className="section-header">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Our Collections</h2>
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