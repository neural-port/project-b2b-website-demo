"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Droplets, Leaf, Quote, Star, Award, Heart, Building2, Truck, Factory } from "lucide-react";
import { rose, blush, cream, warm, brown, muted, gold, line, sand, parchment } from "@/lib/colors";
import { scrollReveal } from "@/lib/motion";

const trustBadges = [
  { icon: Shield, label: "ISO 9001 Certified" },
  { icon: Leaf, label: "Hypoallergenic" },
  { icon: Droplets, label: "Dermatologically Tested" },
  { icon: Award, label: "Made in India" },
];

const productPreviews = [
  {
    id: "maxi",
    name: "Live care",
    tag: "Heavy Flow",
    desc: "Extra-thick core for heavy days. Available in retail and bulk packaging.",
    bg: blush,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/Maxi-Pad.png`,
  },
  {
    id: "ultra",
    name: "Cozy-lite",
    tag: "Daily Comfort",
    desc: "Slim, discreet, and breathable. Ideal for daily wear and institutional supply.",
    bg: warm,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/Ultra-thin-pad.png`,
  },
];

const values = [
  {
    icon: Leaf,
    title: "Skin-Safe",
    desc: "Hypoallergenic, dermatologically tested materials that are gentle on sensitive skin.",
  },
  {
    icon: Factory,
    title: "Manufacturing Excellence",
    desc: "50M+ units annual capacity from our ISO-certified Goa facility. White-label and OEM ready.",
  },
  {
    icon: Truck,
    title: "Pan-India Supply",
    desc: "Reliable distribution network across 15+ states. Retail, institutional, and government channels.",
  },
];

const stats = [
  { figure: "50M+", label: "Units Annual Capacity" },
  { figure: "15+", label: "States Supplied" },
  { figure: "10M+", label: "Women Served" },
  { figure: "ISO", label: "9001 + GMP Certified" },
];

const testimonials = [
  {
    name: "Rajesh Kulkarni",
    role: "Distributor, Maharashtra",
    quote: "Consistent quality and on-time delivery. HerChoice has been our most reliable supplier for two years running. Margins are healthy and repeat orders are strong.",
  },
  {
    name: "Priya Sharma",
    role: "Consumer, Bengaluru",
    quote: "Live care is the first pad that actually lasts through my heaviest day without a single leak. I finally feel confident at work.",
  },
  {
    name: "Anita Desai",
    role: "Procurement Lead, NGO",
    quote: "We needed a partner who could scale supply without compromising on quality. Their Goa facility and ISO certifications gave us the confidence to go long-term.",
  },
];

export default function Home() {
  return (
    <div style={{ background: cream, color: brown, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>

      <section className="hero-grid" style={{ overflow: "hidden" }}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/hero_bg_1.png`}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />

        <div className="hero-overlay" />

        <div className="hero-text-col" style={{ position: "relative", zIndex: 2 }}>
          <motion.p
            style={{
              color: rose,
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            HerChoice · Goa, India
          </motion.p>

          <motion.h1
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "clamp(2.2rem, 5vw, 6rem)",
              lineHeight: 1.05,
              fontWeight: 500,
              marginBottom: "1.5rem",
              color: brown,
              textShadow: "0 2px 4px rgba(255,245,248,0.8)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            A Force for Health.<br />A Force for Good.
          </motion.h1>

          <motion.p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              color: muted,
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: "38ch",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Premium sanitary hygiene products — manufactured in Goa, trusted by distributors and women across India. Quality you can partner with. Comfort you can rely on.
          </motion.p>

          <motion.div
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link href="/products" className="btn-primary">
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Partner With Us
            </Link>
          </motion.div>
        </div>

        <div className="hero-visual-col" style={{ position: "relative" }}>
          <motion.div
            className="hero-floating-card"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "circOut" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "40px", height: "1px", background: rose }} />
              <p
                style={{
                  color: rose,
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                }}
              >
                Our Flagship Series
              </p>
            </div>

            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                color: brown,
                lineHeight: 1.1,
                fontWeight: 500,
              }}
            >
              Live care <span style={{ color: rose, opacity: 0.5 }}>&</span><br />
              Cozy-lite
            </h2>

            <p
              style={{
                color: muted,
                fontSize: "1rem",
                fontStyle: "italic",
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                marginTop: "0.5rem",
              }}
            >
              Soft. Safe. Reliable.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        id="trust-bar"
        style={{ background: "#fff", borderBottom: `1px solid ${line}`, padding: "2rem 1.5rem" }}
      >
        <div className="wrap">
          <div className="trust-bar">
            {trustBadges.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                className="trust-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Icon size={18} color={rose} />
                {label}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="products-preview" className="section-py" style={{ background: "#fff" }}>
        <div className="wrap">
          <motion.div style={{ textAlign: "center", marginBottom: "3rem" }} {...scrollReveal}>
            <p
              style={{
                color: rose,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Our Collection
            </p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: brown,
              }}
            >
              Products That Perform
            </h2>
          </motion.div>

          <div className="product-grid-home">
            {productPreviews.map((product, i) => (
              <motion.div
                key={product.id}
                {...scrollReveal}
                transition={{ duration: 0.9, delay: i * 0.15 }}
              >
                <Link href="/products" style={{ textDecoration: "none" }}>
                  <div className="premium-card" style={{ overflow: "hidden", cursor: "pointer" }}>
                    <div
                      style={{
                        background: product.bg,
                        padding: "3rem 1.5rem",
                        minHeight: "200px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={product.image}
                        alt={`${product.name} product image`}
                        width={300}
                        height={300}
                        style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
                        priority={i === 0}
                      />
                    </div>
                    <div style={{ padding: "1.5rem" }}>
                      <span className="badge">{product.tag}</span>
                      <h3
                        style={{
                          fontFamily: '"Cormorant Garamond", Georgia, serif',
                          fontSize: "1.75rem",
                          color: brown,
                          margin: "1rem 0 0.5rem",
                        }}
                      >
                        {product.name}
                      </h3>
                      <p style={{ color: muted, marginBottom: "1.5rem" }}>{product.desc}</p>
                      <span
                        style={{
                          color: rose,
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                        }}
                      >
                        View Details <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="section-py" style={{ background: warm }}>
        <div className="wrap">
          <motion.div style={{ textAlign: "center", marginBottom: "3rem" }} {...scrollReveal}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Why HerChoice</p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: brown,
              }}
            >
              Built for Consumers. Ready for Partners.
            </h2>
          </motion.div>

          <div className="values-grid">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="premium-card"
                style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", padding: "2rem" }}
                {...scrollReveal}
                transition={{ duration: 0.9, delay: i * 0.12 }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: blush,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} color={rose} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: "1.5rem",
                      color: brown,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ color: muted, lineHeight: 1.6, fontSize: "0.95rem" }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="stats"
        style={{ background: brown, padding: "4rem 1.5rem" }}
        className="noise-overlay"
      >
        <div className="wrap relative" style={{ zIndex: 2 }}>
          <div className="stats-bar">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                style={{ textAlign: "center" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <div
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    color: rose,
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                    fontWeight: 700,
                  }}
                >
                  {stat.figure}
                </div>
                <div
                  style={{
                    color: sand,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-py" style={{ background: cream }}>
        <div className="wrap">
          <motion.div style={{ textAlign: "center", marginBottom: "3rem" }} {...scrollReveal}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Trusted By Partners & Consumers</p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: brown,
              }}
            >
              Voices of Confidence
            </h2>
          </motion.div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.role}
                className="premium-card"
                style={{ padding: "2.5rem", position: "relative" }}
                {...scrollReveal}
                transition={{ duration: 0.9, delay: i * 0.15 }}
              >
                <Quote
                  size={32}
                  color={rose}
                  style={{ opacity: 0.15, position: "absolute", top: "1.5rem", right: "1.5rem" }}
                />
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1.25rem" }}>
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} color={gold} fill={gold} />
                  ))}
                </div>
                <p
                  style={{
                    color: brown,
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                    fontStyle: "italic",
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: "1.1rem",
                  }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: blush,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {testimonial.role.includes("Distributor") || testimonial.role.includes("Procurement") ? (
                      <Building2 size={16} color={rose} />
                    ) : (
                      <Heart size={16} color={rose} />
                    )}
                  </div>
                  <div>
                    <p style={{ color: brown, fontWeight: 700, fontSize: "0.9rem" }}>
                      {testimonial.name}
                    </p>
                    <p style={{ color: muted, fontSize: "0.8rem" }}>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="impact-cta"
        className="section-py noise-overlay"
        style={{ background: brown, textAlign: "center" }}
      >
        <div className="wrap relative" style={{ zIndex: 2 }}>
          <motion.p
            className="eyebrow"
            style={{ color: "#FFB6C1", marginBottom: "1.5rem" }}
            {...scrollReveal}
          >
            Partner With Us
          </motion.p>
          <motion.h2
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "clamp(2rem, 4vw, 4rem)",
              color: "#fff",
              marginBottom: "1.5rem",
            }}
            {...scrollReveal}
          >
            Let&rsquo;s Build Distribution Together
          </motion.h2>
          <motion.p
            style={{
              color: parchment,
              fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
              lineHeight: 1.7,
              maxWidth: "44ch",
              margin: "0 auto 3rem",
            }}
            {...scrollReveal}
          >
            Whether you&rsquo;re a distributor, retailer, NGO, or government agency — we supply quality products with reliable delivery and competitive margins across India.
          </motion.p>
          <motion.div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }} {...scrollReveal}>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ background: "#fff", color: brown }}
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
            <Link
              href="/impact"
              className="btn-outline"
              style={{ borderColor: "#fff", color: "#fff", background: "transparent" }}
            >
              See Our Impact
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
