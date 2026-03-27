import "../styles/AboutSection.css";
import { MdVerified, MdLocalShipping, MdGroups } from "react-icons/md";
import { GiSewingNeedle } from "react-icons/gi";

const stats = [
  { icon: <MdGroups />, value: "10,000+", label: "Happy Clients" },
  { icon: <GiSewingNeedle />, value: "500+", label: "Designs" },
  { icon: <MdLocalShipping />, value: "Prompt", label: "Delivery" },
  { icon: <MdVerified />, value: "100%", label: "Quality Assured" },
];



function AboutSection() {
  return (
    <section className="about-section">

      {/* ── LABEL ── */}
      <div className="about-label">
        <span className="about-eyebrow">Who We Are</span>
      </div>

      <div className="about-container">

        {/* LEFT: Image + floating card */}
        <div className="about-image-wrap">
          <div className="about-img-frame">
            <img src="/images/about.png" alt="Gray's Uniform Team" />
            {/* Floating badge */}
            <div className="about-float-badge">
              <span className="float-num">35+</span>
              <span className="float-txt">Years of<br/>Excellence</span>
            </div>
          </div>
          {/* Decorative lines */}
          <div className="about-deco-lines">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="deco-line" style={{ animationDelay: `${i * 0.12}s` }} />
            ))}
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="about-content">

          <h2 className="about-title">
            Gray'c <em>Uniforms & Fabrics</em>
          </h2>
          <p className="about-subtitle">Leading Uniform Manufacturer & Supplier</p>

          <p className="about-body">
            Gray'c Uniform is a trusted manufacturer and supplier of premium
            uniforms for hospitals, schools, colleges, industries and hotels.
            We specialise in high-quality fabrics with advanced protective finishes
            — built to last, designed to impress.
          </p>

         
        </div>

      </div>

      {/* ── STATS ROW ── */}
      <div className="about-stats">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <span className="stat-icon">{s.icon}</span>
            <strong className="stat-value">{s.value}</strong>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

    </section>
  );
}

export default AboutSection;