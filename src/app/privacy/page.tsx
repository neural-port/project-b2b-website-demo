import type { Metadata } from "next";
import { cream, brown, muted } from "@/lib/colors";

export const metadata: Metadata = {
  title: "Privacy Policy — HerChoice",
  description: "How HerChoice Private Limited collects, uses, and protects your personal information.",
};

const sections = [
  {
    heading: "Information We Collect",
    body: "When you use our contact form, we collect your name, email address, and the message you choose to send us. We do not use cookies, tracking pixels, or third-party analytics on this website.",
  },
  {
    heading: "How We Use Your Information",
    body: "We use the information you submit through the contact form solely to respond to your inquiry. We do not sell, rent, or share your personal information with any third party for marketing purposes.",
  },
  {
    heading: "Data Retention",
    body: "We retain contact form submissions for as long as necessary to respond to your inquiry and for audit purposes as required under applicable Indian law. You may request deletion of your data at any time by emailing us.",
  },
  {
    heading: "Your Rights",
    body: "Under the Information Technology Act, 2000 and the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, you have the right to access, correct, or request deletion of your personal information held by us. To exercise these rights, contact us using the details below.",
  },
  {
    heading: "Security Practices",
    body: "We follow reasonable security practices aligned with ISO/IEC 27001 standards to protect your personal information. Access to submitted data is restricted to authorised personnel only.",
  },
  {
    heading: "Contact Us",
    body: "If you have any questions about this privacy policy or how we handle your data, write to us at care@herchoice.com or reach us at ABC Industrial Estate, Goa — 403XXX, India.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div style={{ background: cream, color: brown, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
      <section className="hero-gradient legal-hero">
        <div className="wrap page-hero-content">
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Legal</p>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "clamp(2rem, 6vw, 4.5rem)",
              lineHeight: 1.05,
              fontWeight: 500,
              marginBottom: "1rem",
              color: brown,
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: muted,
              maxWidth: "44ch",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Last updated: September 2026
          </p>
        </div>
      </section>

      <section className="section-py" style={{ background: cream }}>
        <div className="wrap" style={{ maxWidth: "760px" }}>
          <div style={{ display: "grid", gap: "3rem" }}>
            {sections.map((section) => (
              <div key={section.heading}>
                <h2
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: "1.75rem",
                    color: brown,
                    marginBottom: "1rem",
                    fontWeight: 600,
                  }}
                >
                  {section.heading}
                </h2>
                <p style={{ color: muted, lineHeight: 1.8, fontSize: "1rem" }}>
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
