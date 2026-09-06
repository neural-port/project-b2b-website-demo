import Link from "next/link";

const productLinks = [
  { label: "Live care", href: "/products#maxi" },
  { label: "Cozy-lite", href: "/products#ultra" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Impact", href: "/impact" },
  { label: "How We Make It", href: "/innovation" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const supportLinks = [
  { label: "Consumer Complaints", href: "/complaints" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const facilityBadges = ["ISO 9001", "GMP", "Made in India"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer noise-overlay" aria-label="Site footer">
      <div className="wrap section-py relative" style={{ zIndex: 2 }}>
        <div className="footer-grid">

          <div>
            <p className="footer-brand">HerChoice</p>
            <p className="footer-text">
              Crafted for comfort. Made with care. We manufacture sanitary hygiene
              products that help women across India feel confident, protected, and
              comfortable — every single day.
            </p>
            <div className="footer-badges">
              {facilityBadges.map((badge) => (
                <span key={badge} className="footer-badge">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="footer-heading">Products</h2>
            <ul className="footer-links">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Company</h2>
            <ul className="footer-links">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Support</h2>
            <ul className="footer-links">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Our Facility</h2>
            <p className="footer-address">
              ABC Industrial Estate,
              <br />
              Goa — 403XXX
              <br />
              India
            </p>
            <Link href="/contact" className="footer-contact-link">
              Get in touch &rarr;
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {year} HerChoice Private Limited. All rights reserved.
          </p>
          <div className="footer-meta">
            <p className="footer-meta-text">
              Manufactured in Goa, India &middot; ISO Certified Facility
            </p>
            <p className="footer-credit">
              Crafted by{" "}
              <a
                href="https://github.com/neural-port"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-credit-link"
              >
                NeuralWeb Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
