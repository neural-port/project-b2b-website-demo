"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Heart, Leaf } from "lucide-react";
import { rose, cream, warm, brown, muted, line } from "@/lib/colors";
import { scrollReveal } from "@/lib/motion";

const metrics = [
  { stat: "10M+", label: "Women Served Annually" },
  { stat: "100%", label: "Hypoallergenic Materials" },
  { stat: "0", label: "Chemical Dyes Used" },
  { stat: "Goa", label: "Proudly Made in India" },
];

const pillars = [
  {
    icon: Heart,
    title: "Accessibility",
    desc: "Period poverty is a reality for millions of women. We create products that are affordable without compromising on quality — ensuring every woman has access to the hygiene she deserves.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "We are constantly innovating to reduce waste in our manufacturing process and packaging. Taking care of women also means taking care of the planet they live on.",
  },
];

export default function Impact() {
  return (
    <div style={{ background: cream, color: brown, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>

      <section
        style={{
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          paddingTop: "72px",
          position: "relative",
          overflow: "hidden",
          background: cream,
        }}
      >
        <Image
          src="/images/hero_bg_2.png"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.85, zIndex: 0 }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(to bottom, ${cream}99, ${cream}30)`,
            zIndex: 1,
          }}
        />

        <div className="wrap" style={{ position: "relative", zIndex: 2, padding: "3.5rem 1.5rem" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Our Mission</p>
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
              Dignity.<br />Delivered.
            </h1>
            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                color: muted,
                maxWidth: "44ch",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Making quality hygiene accessible to every woman across India.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="metrics" className="section-py" style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="auto-grid" style={{ textAlign: "center" }}>
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                {...scrollReveal}
                transition={{ duration: 0.9, delay: i * 0.1 }}
                className="premium-card"
                style={{ padding: "3rem 2rem", background: warm, borderRadius: "16px", border: `1px solid ${line}` }}
              >
                <div
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 4rem)",
                    color: rose,
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  {metric.stat}
                </div>
                <div
                  style={{
                    color: muted,
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontWeight: 700,
                  }}
                >
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pillars" className="section-py" style={{ background: warm }}>
        <div className="wrap">
          <motion.div style={{ textAlign: "center", marginBottom: "4rem" }} {...scrollReveal}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>What Drives Us</p>
            <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: brown }}>
              Our Commitment
            </h2>
          </motion.div>

          <div className="auto-grid-wide">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                {...scrollReveal}
                className="premium-card"
                style={{ padding: "2rem", background: "#fff", borderRadius: "16px", border: `1px solid ${line}` }}
              >
                <div className="icon-circle-lg" style={{ marginBottom: "1.5rem" }}>
                  <Icon size={26} color={rose} />
                </div>
                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: "2rem",
                    color: brown,
                    marginBottom: "1rem",
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: muted, lineHeight: 1.8, fontSize: "1rem" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="partner-cta" className="section-py noise-overlay" style={{ background: brown, textAlign: "center" }}>
        <div className="wrap relative" style={{ zIndex: 2 }}>
          <motion.h2
            className="dark-section-heading"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "1.5rem" }}
            {...scrollReveal}
          >
            Want to Partner With Us?
          </motion.h2>
          <motion.p
            className="dark-section-text"
            style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)", lineHeight: 1.7, maxWidth: "44ch", margin: "0 auto 2.5rem" }}
            {...scrollReveal}
          >
            Join our distribution network and help us reach more women across India.
          </motion.p>
          <motion.div {...scrollReveal}>
            <Link href="/contact" className="btn-primary" style={{ background: "#fff", color: brown }}>
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
