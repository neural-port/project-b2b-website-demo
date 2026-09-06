"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Factory, FlaskConical, Package } from "lucide-react";
import { rose, cream, brown, muted } from "@/lib/colors";
import { scrollReveal } from "@/lib/motion";

const steps = [
  { icon: Leaf, title: "Safe Materials", desc: "We source only hypoallergenic, skin-safe fabrics and absorbent layers — every material is tested before it enters production." },
  { icon: Factory, title: "Clean Facility", desc: "Our Goa plant is a dust-controlled, ISO-certified environment. The production floor follows strict hygiene standards." },
  { icon: FlaskConical, title: "Quality Checks", desc: "Every batch is tested for absorbency, softness, and seal integrity. Only products that pass every check leave the factory." },
  { icon: Package, title: "Sealed Hygiene", desc: "Each pad is individually sealed in a hygienic wrapper and packed in tamper-proof boxes — touch-free from factory to you." },
];

const certifications = ["100% Quality Monitored", "Dermatologically Tested", "Hypoallergenic Materials"];

export default function Innovation() {
  return (
    <div style={{ background: cream, color: brown, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>

      <section className="hero-gradient page-hero">
        <div className="wrap page-hero-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>How We Make It</p>
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
              Safety.<br />Standardized.
            </h1>
            <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: muted, maxWidth: "44ch", margin: "0 auto", lineHeight: 1.6 }}>
              From raw materials to the final seal, every step is designed for uncompromising quality.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="process" className="section-py" style={{ position: "relative", overflow: "hidden", background: cream }}>
        <Image
          src="/images/hero_bg_3.png"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center bottom", zIndex: 0 }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to right, rgba(255,245,248,0.85) 0%, rgba(255,245,248,0.4) 40%, rgba(255,245,248,0) 75%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <motion.div style={{ textAlign: "center", marginBottom: "3rem" }} {...scrollReveal}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Our Process</p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                color: brown,
              }}
            >
              From Raw Material to Your Hands
            </h2>
          </motion.div>

          <div style={{ maxWidth: "520px", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "23px",
                top: "28px",
                bottom: "28px",
                width: "2px",
                background: `linear-gradient(to bottom, ${rose}, rgba(214,51,108,0.2))`,
                zIndex: 0,
              }}
            />

            {steps.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...scrollReveal}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                  padding: "1.25rem 0",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div className="step-circle">
                  <Icon size={20} color={rose} />
                </div>
                <div>
                  <span
                    style={{
                      color: rose,
                      fontSize: "0.6rem",
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    Step {i + 1}
                  </span>
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: "1.5rem",
                      color: brown,
                      margin: "0.3rem 0 0.4rem",
                      fontWeight: 600,
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ color: muted, lineHeight: 1.6, fontSize: "0.98rem", margin: 0 }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="certification" className="section-py noise-overlay" style={{ background: rose, textAlign: "center" }}>
        <div className="wrap relative" style={{ zIndex: 2 }}>
          <motion.h2
            className="dark-section-heading"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "clamp(2rem, 4vw, 3.5rem)", marginBottom: "1.5rem" }}
            {...scrollReveal}
          >
            ISO Certified Quality
          </motion.h2>
          <motion.p
            style={{ maxWidth: "52ch", margin: "0 auto 3rem", fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)", lineHeight: 1.7, color: "#FFF5F8" }}
            {...scrollReveal}
          >
            Our manufacturing plant exceeds international standards because your health is non-negotiable.
          </motion.p>
          <motion.div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }} {...scrollReveal}>
            {certifications.map((cert) => (
              <div
                key={cert}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                <span style={{ fontSize: "1rem" }}>✓</span> {cert}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
