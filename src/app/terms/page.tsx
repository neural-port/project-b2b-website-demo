import type { Metadata } from "next";
import { cream, brown, muted } from "@/lib/colors";

export const metadata: Metadata = {
  title: "Terms of Service — HerChoice",
  description: "Terms and conditions for using the HerChoice Private Limited website.",
};

const sections = [
  {
    heading: "Acceptance of Terms",
    body: "By accessing and using this website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use the website.",
  },
  {
    heading: "Use of the Website",
    body: "This website is provided for informational purposes related to our products and services. You agree not to misuse the website, including but not limited to attempting to gain unauthorised access, introducing malicious code, or submitting false or misleading information through the contact form.",
  },
  {
    heading: "Intellectual Property",
    body: "All content on this website, including text, graphics, logos, and design elements, is the property of HerChoice Private Limited and is protected under applicable Indian intellectual property laws. You may not reproduce or distribute any content without prior written consent.",
  },
  {
    heading: "Product Information",
    body: "Product descriptions and specifications on this website are provided for general information. Actual products may vary. We reserve the right to modify product specifications without prior notice.",
  },
  {
    heading: "Limitation of Liability",
    body: "HerChoice Private Limited shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or reliance on any information provided herein.",
  },
  {
    heading: "Governing Law",
    body: "These terms are governed by the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Goa, India.",
  },
  {
    heading: "Contact Us",
    body: "For any questions regarding these terms, write to us at care@herchoice.com or reach us at ABC Industrial Estate, Goa — 403XXX, India.",
  },
];

export default function TermsOfService() {
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
            Terms of Service
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
