"use client";

import { motion } from "framer-motion";
import { Camera, Award, Users, Factory, Calendar, Heart } from "lucide-react";
import { rose, cream, warm, brown, muted, blush } from "@/lib/colors";
import { scrollReveal } from "@/lib/motion";

const categories = [
  { icon: Factory, label: "On the Floor", desc: "Our manufacturing lines in action." },
  { icon: Users, label: "Our People", desc: "The team that makes it all happen." },
  { icon: Award, label: "Milestones", desc: "Certifications, audits, and achievements." },
  { icon: Heart, label: "Community", desc: "Outreach, awareness camps, and impact drives." },
];

const galleryItems = [
  { category: "On the Floor", caption: "Automated production line — Unit A", color: warm },
  { category: "On the Floor", caption: "Quality inspection station", color: blush },
  { category: "Our People", caption: "Morning shift briefing", color: cream },
  { category: "Our People", caption: "Training session — new hires", color: warm },
  { category: "Milestones", caption: "ISO 9001:2015 certification audit", color: blush },
  { category: "Milestones", caption: "Annual quality review", color: cream },
  { category: "Community", caption: "Hygiene awareness camp — rural Goa", color: warm },
  { category: "Community", caption: "Women's health workshop", color: blush },
  { category: "On the Floor", caption: "Packaging and sealing line", color: cream },
  { category: "Our People", caption: "Team celebration — production milestone", color: warm },
  { category: "Milestones", caption: "GMP compliance inspection", color: blush },
  { category: "Community", caption: "Distribution partnership event", color: cream },
];

export default function Gallery() {
  return (
    <div style={{ background: cream, color: brown, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>

      <section className="hero-gradient page-hero">
        <div className="wrap page-hero-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Media Gallery</p>
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
              Life At<br />HerChoice.
            </h1>
            <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: muted, maxWidth: "48ch", margin: "0 auto", lineHeight: 1.6 }}>
              Behind every product is a team, a process, and a purpose. Here&apos;s a glimpse of what happens inside our walls and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="categories" className="section-py" style={{ background: "#fff" }}>
        <div className="wrap">
          <motion.div style={{ textAlign: "center", marginBottom: "4rem" }} {...scrollReveal}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Explore</p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                color: brown,
              }}
            >
              Gallery Categories
            </h2>
          </motion.div>

          <div className="auto-grid-wide">
            {categories.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
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
                    fontSize: "1.5rem",
                    color: brown,
                    marginBottom: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  {label}
                </h3>
                <p style={{ color: muted, lineHeight: 1.7, fontSize: "0.95rem" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section-py" style={{ background: warm }}>
        <div className="wrap">
          <motion.div style={{ textAlign: "center", marginBottom: "4rem" }} {...scrollReveal}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Moments</p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                color: brown,
              }}
            >
              Inside Our World
            </h2>
          </motion.div>

          <div className="gallery-grid">
            {galleryItems.map((item, i) => (
              <motion.div
                key={`${item.caption}-${i}`}
                className="gallery-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              >
                <div className="gallery-placeholder" style={{ background: item.color }}>
                  <Camera size={40} color={rose} style={{ opacity: 0.3 }} />
                </div>
                <div className="gallery-info">
                  <span className="gallery-tag">{item.category}</span>
                  <p className="gallery-caption">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div style={{ textAlign: "center", marginTop: "3rem" }} {...scrollReveal}>
            <p style={{ color: muted, fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
              <Calendar size={16} color={rose} />
              Gallery updated regularly. Photos are placeholder visuals for this demo.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
