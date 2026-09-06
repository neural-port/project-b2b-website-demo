"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { rose, cream, warm, brown, muted } from "@/lib/colors";
import { scrollReveal } from "@/lib/motion";

const processSteps = [
  {
    title: "Raw Material Procurement",
    description: "Sourcing premium materials including high-grade Super Absorbent Polymer (SAP), premium PE emboss film, and biodegradable components from certified suppliers with rigorous vendor qualification.",
  },
  {
    title: "Quality Testing & Validation",
    description: "Advanced testing of all incoming materials in ISO-accredited laboratories. SAP absorption rates, PE film permeability, and microbial contamination levels are meticulously verified.",
  },
  {
    title: "Cleanroom Manufacturing",
    description: "Automated assembly lines in Class 100,000 cleanrooms combine SAP cores with breathable PE emboss film. Robotic precision ensures consistent product quality at industrial scale.",
  },
  {
    title: "Hermetic Packaging",
    description: "Multi-layer packaging with desiccant integration maintains product sterility. Vacuum-sealed in sustainable materials with tamper-evident seals for supply chain integrity.",
  },
  {
    title: "Final QA & Traceability",
    description: "100% automated inspection using AI-powered vision systems. Each unit receives a unique QR code for full traceability from raw material to end-user.",
  },
  {
    title: "Distribution Logistics",
    description: "Temperature-controlled warehousing with real-time inventory management. Pan-India distribution network ensures 48-hour delivery to any location.",
  },
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2015 Environmental Management",
  "ISO 13485:2016 Medical Devices",
  "GMP Certified Manufacturing",
  "CE Mark Compliance",
  "FDA Registered Facility",
  "BIS Certification",
  "SA 8000 Social Accountability",
];

const materials = [
  {
    abbr: "SAP",
    title: "High-Grade SAP Polymer",
    desc: "Cross-linked sodium polyacrylate with 800\u20131200x absorption capacity. Engineered for instant fluid locking and zero rewet.",
    spec: "Absorption Rate: >50g/g \u2022 Particle Size: 150\u2013850\u00b5m",
  },
  {
    abbr: "PE",
    title: "Premium PE Emboss Film",
    desc: "Multi-layer polyethylene with embossed texture for enhanced breathability. MVTR: 800\u20131200 g/m\u00b2/24h.",
    spec: "Thickness: 18\u201325\u00b5m \u2022 Permeability: >2000 g/m\u00b2/24h",
  },
  {
    abbr: "ISO",
    title: "Cleanroom Environment",
    desc: "ISO Class 8 cleanrooms with HEPA filtration. Particle count <3,520,000/m\u00b3 \u22650.5\u00b5m. Temperature: 20\u201324\u00b0C, RH: 40\u201360%.",
    spec: "ISO 14644-1 Class 8 \u2022 USP 797 Compliant",
  },
];

export default function Manufacturing() {
  return (
    <div style={{ background: cream, color: brown, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>

      <section className="hero-gradient page-hero">
        <div className="wrap page-hero-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Manufacturing Excellence</p>
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
              Precision.<br />Standardized.
            </h1>
            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                color: muted,
                maxWidth: "52ch",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Industrial-scale production in state-of-the-art cleanroom facilities, combining cutting-edge automation with uncompromising quality standards.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="materials" className="section-py" style={{ background: "#fff" }}>
        <div className="wrap">
          <motion.div style={{ textAlign: "center", marginBottom: "4rem" }} {...scrollReveal}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Advanced Materials</p>
            <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: brown }}>
              Engineering &amp; Materials
            </h2>
          </motion.div>

          <div className="auto-grid-wide">
            {materials.map((material, i) => (
              <motion.div
                key={material.abbr}
                className="premium-card"
                style={{ padding: "2.5rem", textAlign: "center" }}
                {...scrollReveal}
                transition={{ duration: 0.9, delay: i * 0.12 }}
              >
                <div className="icon-circle-lg" style={{ margin: "0 auto 1.5rem" }}>
                  <span style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "1.2rem", fontWeight: 700, color: rose }}>
                    {material.abbr}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: "1.5rem",
                    color: brown,
                    marginBottom: "1rem",
                  }}
                >
                  {material.title}
                </h3>
                <p style={{ color: muted, lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "1.25rem" }}>
                  {material.desc}
                </p>
                <p style={{ fontSize: "0.8rem", color: muted, fontWeight: 600 }}>
                  {material.spec}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="production" className="section-py" style={{ background: warm }}>
        <div className="wrap">
          <motion.div style={{ textAlign: "center", marginBottom: "4rem" }} {...scrollReveal}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Our Process</p>
            <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: brown }}>
              Production Timeline
            </h2>
          </motion.div>

          <ol style={{ maxWidth: "760px", margin: "0 auto", listStyle: "none", padding: 0 }}>
            {processSteps.map((step, index) => (
              <motion.li
                key={step.title}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                  padding: "1.5rem 0",
                }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
              >
                <div className="step-circle">
                  <span style={{ fontWeight: 700, color: rose, fontSize: "1.1rem" }}>
                    {index + 1}
                  </span>
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: "1.4rem",
                      color: brown,
                      marginBottom: "0.5rem",
                      fontWeight: 600,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: muted, lineHeight: 1.7, fontSize: "0.95rem" }}>
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section id="certifications" className="section-py noise-overlay" style={{ background: brown }}>
        <div className="wrap relative" style={{ zIndex: 2 }}>
          <motion.div style={{ textAlign: "center", marginBottom: "4rem" }} {...scrollReveal}>
            <p className="eyebrow dark-section-eyebrow" style={{ marginBottom: "1rem" }}>Compliance &amp; Trust</p>
            <h2 className="dark-section-heading" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
              Certifications &amp; Standards
            </h2>
          </motion.div>

          <ul className="auto-grid" style={{ listStyle: "none", padding: 0 }}>
            {certifications.map((cert, index) => (
              <motion.li
                key={cert}
                style={{
                  padding: "1.5rem",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(214,51,108,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <ShieldCheck size={18} color={rose} />
                </div>
                <p className="dark-section-text" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  {cert}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
}
