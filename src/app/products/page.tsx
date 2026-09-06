"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { rose, blush, cream, warm, brown, muted, line } from "@/lib/colors";

const products = [
  {
    id: "maxi",
    name: "Live care",
    badge: "Heavy Flow",
    tagline: "Maximum protection for heavy days.",
    desc: "Engineered with a multi-layer absorbent core that locks in fluid instantly. The extra-wide back provides complete leak protection — even overnight.",
    features: ["Extra-thick absorbent core", "Cotton-soft top sheet", "Leak-lock side barriers", "Wide back coverage", "Individually sealed"],
    bg: blush,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/Maxi-Pad.png`,
  },
  {
    id: "ultra",
    name: "Cozy-lite",
    badge: "Daily Comfort",
    tagline: "Invisible comfort for regular days.",
    desc: "Ultra-slim design that moves with you. Despite its slim profile, advanced gel technology absorbs flow rapidly — keeping you dry and fresh all day.",
    features: ["Ultra-slim 3mm profile", "Gel-lock technology", "Breathable cover layer", "Flexible body-fit wings", "Odor control"],
    bg: warm,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/Ultra-thin-pad.png`,
  },
];

const comparisonRows = [
  ["Best For", "Heavy flow days", "Regular daily use"],
  ["Thickness", "Extra-thick core", "Ultra-slim 3mm"],
  ["Absorbency", "Maximum lock-in", "Gel-lock technology"],
  ["Breathability", "Breathable cover", "Breathable + flexible"],
  ["Wings", "Wide body-fit", "Flexible body-fit"],
  ["Odor Control", "Yes", "Yes"],
  ["Individually Sealed", "Yes", "Yes"],
];

export default function Products() {
  return (
    <div style={{ background: cream, color: brown, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>

      <section className="hero-gradient page-hero">
        <div className="wrap page-hero-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Our Products</p>
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
              Protection.<br />Perfected.
            </h1>
            <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: muted, maxWidth: "44ch", margin: "0 auto", lineHeight: 1.6 }}>
              Designed for every flow, every body, and every day.
            </p>
          </motion.div>
        </div>
      </section>

      {products.map((product, i) => (
        <section
          key={product.id}
          id={product.id}
          style={{ background: i % 2 === 0 ? "#fff" : warm, borderTop: `1px solid ${line}` }}
        >
          <div className="wrap product-section-wrap">
            <div className="product-section-grid">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="product-pad-visual"
                style={{ order: i % 2 === 0 ? 1 : 2, background: product.bg, minHeight: "300px" }}
              >
                <Image
                  src={product.image}
                  alt={`${product.name} product image`}
                  width={400}
                  height={400}
                  style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
                  priority={i === 0}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 }}
                style={{ order: i % 2 === 0 ? 2 : 1 }}
              >
                <span className="badge" style={{ display: "inline-block", marginBottom: "1.5rem" }}>
                  {product.badge}
                </span>
                <h2
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    color: brown,
                    marginBottom: "0.75rem",
                  }}
                >
                  {product.name}
                </h2>
                <p style={{ color: rose, fontStyle: "italic", fontWeight: 500, marginBottom: "1.5rem" }}>
                  {product.tagline}
                </p>
                <p style={{ color: muted, lineHeight: 1.8, fontSize: "1rem", marginBottom: "2rem" }}>
                  {product.desc}
                </p>
                <ul style={{ display: "grid", gap: "0.75rem", listStyle: "none", padding: 0 }}>
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: brown, fontSize: "0.95rem" }}
                    >
                      <Check size={16} color={rose} /> {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section id="comparison" className="section-py" style={{ background: warm }}>
        <div className="wrap">
          <motion.div
            style={{ textAlign: "center", marginBottom: "3rem" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Quick Compare</p>
            <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "clamp(2rem, 4vw, 3rem)", color: brown }}>
              Find Your Perfect Match
            </h2>
          </motion.div>

          <motion.div
            className="premium-card"
            style={{ overflow: "hidden" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="table-wrapper">
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: blush }}>
                    <th scope="col" style={{ textAlign: "left", padding: "1.25rem 1.5rem", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: brown, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                      Feature
                    </th>
                    <th scope="col" style={{ textAlign: "center", padding: "1.25rem 1.5rem", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: rose, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                      Live care
                    </th>
                    <th scope="col" style={{ textAlign: "center", padding: "1.25rem 1.5rem", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: rose, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                      Cozy-lite
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([feature, maxi, ultra]) => (
                    <tr key={feature} style={{ borderTop: `1px solid ${line}` }}>
                      <td style={{ padding: "1rem 1.5rem", fontSize: "0.9rem", color: brown, fontWeight: 600 }}>{feature}</td>
                      <td style={{ padding: "1rem 1.5rem", fontSize: "0.9rem", color: muted, textAlign: "center" }}>{maxi}</td>
                      <td style={{ padding: "1rem 1.5rem", fontSize: "0.9rem", color: muted, textAlign: "center" }}>{ultra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="distributor-cta" className="section-py noise-overlay" style={{ background: brown, textAlign: "center" }}>
        <div className="wrap relative" style={{ zIndex: 2 }}>
          <h2
            className="dark-section-heading"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: "1.5rem" }}
          >
            Interested in Distributing?
          </h2>
          <p
            className="dark-section-text"
            style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)", lineHeight: 1.7, maxWidth: "44ch", margin: "0 auto 2.5rem" }}
          >
            Partner with us to bring quality hygiene products to women across India.
          </p>
          <Link href="/contact" className="btn-primary" style={{ background: "#fff", color: brown }}>
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}
