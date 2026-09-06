"use client";

import { motion } from "framer-motion";
import { Target, Heart, TrendingUp, MapPin, Factory, Users } from "lucide-react";
import AnimatedCounter from "@/components/animated-counter";
import { rose, cream, warm, brown, muted, line } from "@/lib/colors";
import { scrollReveal } from "@/lib/motion";

const storyHighlights = [
  { icon: MapPin, label: "Goa" },
  { icon: Factory, label: "ISO-Certified Facility" },
  { icon: Users, label: "150+ Team Members" },
];

const missionCards = [
  {
    icon: Target,
    title: "Mission",
    desc: "To manufacture and distribute premium sanitary hygiene products that are accessible, affordable, and uncompromising in quality — contributing to better health outcomes across India.",
  },
  {
    icon: Heart,
    title: "Vision",
    desc: "To be India\u2019s leading manufacturer of essential hygiene products, setting benchmarks in quality, innovation, and sustainable manufacturing practices.",
  },
  {
    icon: TrendingUp,
    title: "Values",
    desc: "Quality, Innovation, Sustainability, and Social Responsibility drive our operations — ensuring scalable manufacturing that benefits partners and communities alike.",
  },
];

const stats = [
  { from: 0, to: 15, suffix: "+", label: "Years of Excellence" },
  { from: 0, to: 75, suffix: "M", label: "Units Produced Annually" },
  { from: 0, to: 100, suffix: "%", label: "Quality Assurance Rate" },
  { from: 0, to: 28, suffix: "", label: "States Reached" },
];

export default function About() {
  return (
    <div style={{ background: cream, color: brown, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>

      <section className="hero-gradient page-hero">
        <div className="wrap page-hero-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>About Us</p>
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
              Engineering<br />Hygiene.
            </h1>
            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                color: muted,
                maxWidth: "48ch",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              From Goa to pan-India, scaling trust through technology, quality, and an unwavering commitment to women&apos;s health.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="story" className="section-py" style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="two-col-grid">
            <motion.div {...scrollReveal}>
              <p className="eyebrow" style={{ marginBottom: "1rem" }}>Our Journey</p>
              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: brown,
                  marginBottom: "1.5rem",
                }}
              >
                From Vision to Industrial Reality
              </h2>
              <p style={{ color: muted, lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
                Founded in Goa with a vision to revolutionize sanitary hygiene manufacturing, HerChoice has rapidly evolved into a scalable industrial powerhouse. Our state-of-the-art facility combines cutting-edge automation with meticulous craftsmanship.
              </p>
              <p style={{ color: muted, lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "2rem" }}>
                We don&apos;t just manufacture products; we engineer solutions that address critical hygiene needs across India. Every unit produced represents our commitment to quality, innovation, and social responsibility.
              </p>
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                {storyHighlights.map(({ icon: Icon, label }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Icon size={16} color={rose} />
                    <span style={{ color: brown, fontSize: "0.85rem", fontWeight: 600 }}>{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                background: warm,
                padding: "4rem 2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "320px",
                border: `1px solid ${line}`,
              }}
            >
              <div style={{ textAlign: "center" }}>
                <Factory size={64} color={rose} style={{ opacity: 0.3, marginBottom: "1rem" }} />
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: "1.5rem",
                    color: muted,
                    fontStyle: "italic",
                  }}
                >
                  State-of-the-art manufacturing<br />facility in Goa
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="mission" className="section-py" style={{ background: warm }}>
        <div className="wrap">
          <motion.div style={{ textAlign: "center", marginBottom: "4rem" }} {...scrollReveal}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>What Drives Us</p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                color: brown,
              }}
            >
              Mission, Vision &amp; Values
            </h2>
          </motion.div>

          <div className="auto-grid-wide">
            {missionCards.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="premium-card"
                style={{ padding: "2.5rem", textAlign: "center" }}
                {...scrollReveal}
                transition={{ duration: 0.9, delay: i * 0.12 }}
              >
                <div className="icon-circle-lg" style={{ margin: "0 auto 1.5rem" }}>
                  <Icon size={26} color={rose} />
                </div>
                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: "1.75rem",
                    color: brown,
                    marginBottom: "1rem",
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: muted, lineHeight: 1.7, fontSize: "0.95rem" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className="section-py noise-overlay" style={{ background: brown }}>
        <div className="wrap relative" style={{ zIndex: 2 }}>
          <motion.div style={{ textAlign: "center", marginBottom: "4rem" }} {...scrollReveal}>
            <p className="eyebrow dark-section-eyebrow" style={{ marginBottom: "1rem" }}>Our Impact in Numbers</p>
            <h2
              className="dark-section-heading"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
            >
              Scale &amp; Excellence
            </h2>
          </motion.div>

          <div className="auto-grid" style={{ textAlign: "center" }}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                style={{ padding: "2.5rem 1.5rem" }}
              >
                <div
                  style={{
                    fontSize: "clamp(3rem, 6vw, 4.5rem)",
                    color: rose,
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "center",
                    gap: "0.1rem",
                  }}
                >
                  <AnimatedCounter from={stat.from} to={stat.to} duration={2.5} />
                  <span>{stat.suffix}</span>
                </div>
                <p
                  className="dark-section-text"
                  style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
