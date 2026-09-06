"use client";

import { motion } from "framer-motion";
import { Newspaper, ArrowRight, Calendar } from "lucide-react";
import { rose, cream, warm, brown, muted, line, blush } from "@/lib/colors";
import { scrollReveal } from "@/lib/motion";

const featuredArticle = {
  category: "Company",
  date: "March 2026",
  title: "HerChoice Expands Production Capacity at Goa Facility",
  excerpt:
    "Our Goa manufacturing facility has completed a major capacity expansion, adding a second automated production line. This increases our annual output by 40%, enabling us to serve more distribution partners across India.",
  color: warm,
};

const articles = [
  {
    category: "Quality",
    date: "February 2026",
    title: "New Quality Lab Inaugurated at Unit A",
    excerpt:
      "A dedicated quality testing laboratory is now operational, equipped with absorbency testing, tensile strength, and microbial analysis instruments.",
    color: blush,
  },
  {
    category: "Partnership",
    date: "January 2026",
    title: "Distribution Partnership Signed with Three New State Partners",
    excerpt:
      "We are proud to announce new distribution agreements covering three additional states, expanding our reach to 28 states nationwide.",
    color: cream,
  },
  {
    category: "Community",
    date: "December 2025",
    title: "Hygiene Awareness Camp Reaches 10,000 Women in Rural Goa",
    excerpt:
      "Our community outreach team completed the final leg of the 2025 rural awareness program, reaching over 10,000 women across 40 villages.",
    color: warm,
  },
  {
    category: "Certification",
    date: "November 2025",
    title: "Facility Passes Annual GMP Compliance Audit",
    excerpt:
      "Our manufacturing facility successfully passed the annual Good Manufacturing Practice compliance audit with zero major observations.",
    color: blush,
  },
  {
    category: "Product",
    date: "October 2025",
    title: "Cozy-Lite Range Receives Dermatological Certification",
    excerpt:
      "Our Cozy-Lite product line has been independently certified as dermatologically tested and safe for sensitive skin.",
    color: cream,
  },
  {
    category: "Company",
    date: "September 2025",
    title: "HerChoice Joins National Hygiene Manufacturing Council",
    excerpt:
      "We have been admitted as a member of the National Hygiene Manufacturing Council, contributing to industry standards development.",
    color: warm,
  },
];

export default function News() {
  return (
    <div style={{ background: cream, color: brown, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>

      <section className="hero-gradient page-hero">
        <div className="wrap page-hero-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>News &amp; Updates</p>
            <h1
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(2.2rem, 7vw, 6rem)",
                lineHeight: 1.05,
                fontWeight: 500,
                marginBottom: "1.5rem",
                color: brown,
              }}
            >
              What&apos;s<br />Happening.
            </h1>
            <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: muted, maxWidth: "48ch", margin: "0 auto", lineHeight: 1.6 }}>
              Company updates, product announcements, certifications, and community initiatives — all in one place.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="featured" className="section-py" style={{ background: "#fff" }}>
        <div className="wrap">
          <motion.div style={{ marginBottom: "3rem" }} {...scrollReveal}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Featured Story</p>
          </motion.div>

          <motion.div
            className="premium-card"
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
            {...scrollReveal}
            transition={{ duration: 1 }}
          >
            <div
              style={{
                background: featuredArticle.color,
                minHeight: "280px",
                flex: "1 1 320px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRight: `1px solid ${line}`,
              }}
            >
              <Newspaper size={80} color={rose} style={{ opacity: 0.25 }} />
            </div>
            <div style={{ flex: "1 1 400px", padding: "2.5rem" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                <span className="news-tag">{featuredArticle.category}</span>
                <span style={{ color: muted, fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <Calendar size={14} color={rose} />
                  {featuredArticle.date}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  color: brown,
                  marginBottom: "1rem",
                  fontWeight: 600,
                }}
              >
                {featuredArticle.title}
              </h2>
              <p style={{ color: muted, lineHeight: 1.8, fontSize: "1rem", marginBottom: "1.5rem" }}>
                {featuredArticle.excerpt}
              </p>
              <a href="#articles" className="btn-outline" style={{ padding: "0.6rem 1.5rem", fontSize: "0.8rem" }}>
                Read More <ArrowRight size={14} style={{ display: "inline" }} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="articles" className="section-py" style={{ background: warm }}>
        <div className="wrap">
          <motion.div style={{ textAlign: "center", marginBottom: "4rem" }} {...scrollReveal}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>All Stories</p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                color: brown,
              }}
            >
              Latest News
            </h2>
          </motion.div>

          <div className="auto-grid-wide">
            {articles.map((article, i) => (
              <motion.div
                key={article.title}
                className="premium-card news-card"
                style={{ overflow: "hidden" }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              >
                <div
                  className="news-image"
                  style={{ background: article.color }}
                >
                  <Newspaper size={48} color={rose} style={{ opacity: 0.25 }} />
                </div>
                <div style={{ padding: "1.75rem" }}>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                    <span className="news-tag">{article.category}</span>
                    <span style={{ color: muted, fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      <Calendar size={12} color={rose} />
                      {article.date}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: "1.25rem",
                      color: brown,
                      marginBottom: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {article.title}
                  </h3>
                  <p style={{ color: muted, lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "1rem" }}>
                    {article.excerpt}
                  </p>
                  <a href="#articles" style={{ color: rose, fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                    Read more <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
