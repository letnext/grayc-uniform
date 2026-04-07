import "../styles/Footer.css";
import {
  MdLocationOn,
  MdEmail,
  MdPhone,
  MdPerson,
} from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* ── TOP DECORATIVE STRIP ── */}
      <div className="footer-strip">
        {["Premium Quality", "✦", "Custom Designs", "✦", "Prompt Delivery", "✦" ].map((t, i) => (
          <span key={i} className="strip-item">{t}</span>
        ))}
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">
          <h2 className="footer-logo">Gray'c<br /><em>Uniforms & Fabrics</em></h2>
          <p className="footer-tagline">
            Crafting excellence in every stitch.<br />
            Trusted by schools, corporates & industries.
          </p>
          
          <div className="footer-socials">
            <a href="#" className="social-btn" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="social-btn" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://wa.me/919944211453" className="social-btn" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h3 className="footer-col-title">Company</h3>
          <ul className="footer-list">
            <li>
              <MdPerson className="footer-icon" />
              <span>CEO: Duraisamy .N N</span>
            </li>
            <li>
              <MdLocationOn className="footer-icon" />
              <span>Rajvel textile
                34, Thiru vi ka Street,<br />
                New Teacher  Colony,<br />
                Erode — 638 012
              </span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3 className="footer-col-title">Contact Us</h3>
          <ul className="footer-list">
            <li>
              <MdPhone className="footer-icon" />
              <div className="contact-links">
                <a href="tel:9944211453" className="footer-link">+91 99442 11453</a>
                <a href="tel:9842764711" className="footer-link">+91 98427 64711</a>
              </div>
            </li>
            <li>
              <MdEmail className="footer-icon" />
              <a href="mailto:info@graycuniforms.in" className="footer-link">
                info@graycuniforms.in
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* ── BOTTOM ── */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Gray'c Uniform. All Rights Reserved.</span>
        <span className="footer-bottom-right">Made with care in Erode, Tamil Nadu</span>
      </div>

    </footer>
  );
};

export default Footer;