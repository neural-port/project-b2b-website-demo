"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { rose, cream, warm, brown, muted } from "@/lib/colors";
import { scrollReveal } from "@/lib/motion";

type FormStatus = "idle" | "submitting" | "success" | "error";

const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

const contactDetails = [
  { icon: Mail, label: "Email", value: "care@herchoice.com" },
  { icon: Phone, label: "Phone", value: "+91 123 456 7890" },
  { icon: MapPin, label: "Address", value: "ABC Industrial Estate, Goa – 403XXX, India" },
];

const faqs = [
  {
    q: "Are your products dermatologically tested?",
    a: "Yes, all our products are dermatologically tested and made with hypoallergenic materials suitable for sensitive skin.",
  },
  {
    q: "Where are your products manufactured?",
    a: "All our products are manufactured in our ISO-certified facility in Goa, India.",
  },
  {
    q: "Do you offer distribution partnerships?",
    a: "Yes, we actively partner with distributors across India. Reach out via the form above and our team will get back to you within 48 hours.",
  },
  {
    q: "What certifications does your facility hold?",
    a: "Our facility is ISO 9001:2015, GMP, and CE certified, among other international standards.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!consent) {
      setStatus("error");
      setErrorMessage("Please provide consent to proceed under our Privacy Policy.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    if (isStaticExport) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <div style={{ background: cream, color: brown, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>

      <section className="hero-gradient page-hero">
        <div className="wrap page-hero-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Get In Touch</p>
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
              We&rsquo;re Here<br />For You.
            </h1>
            <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: muted, maxWidth: "44ch", margin: "0 auto", lineHeight: 1.6 }}>
              Questions about our products or partnership opportunities? Reach out to us.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="contact-info" className="section-py" style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="contact-grid">
            <motion.div {...scrollReveal}>
              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  color: brown,
                  marginBottom: "2rem",
                }}
              >
                Contact Details
              </h2>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {contactDetails.map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                    <div className="icon-circle">
                      <Icon size={20} color={rose} />
                    </div>
                    <div>
                      <p
                        style={{
                          color: rose,
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {label}
                      </p>
                      <p style={{ color: muted, lineHeight: 1.5 }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...scrollReveal} transition={{ duration: 0.9, delay: 0.2 }}>
              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  color: brown,
                  marginBottom: "2rem",
                }}
              >
                Send a Message
              </h2>
              <form style={{ display: "grid", gap: "1.5rem" }} onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    style={{ display: "block", color: brown, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}
                  >
                    Your full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="premium-input"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    style={{ display: "block", color: brown, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="premium-input"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    style={{ display: "block", color: brown, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="premium-input"
                    style={{ resize: "vertical" }}
                    required
                  />
                </div>

                {status === "success" && (
                  <p
                    style={{
                      color: "#2e7d32",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      padding: "0.75rem 1rem",
                      background: "#e8f5e9",
                      borderRadius: "8px",
                    }}
                  >
                    Thank you for reaching out. We will get back to you within 48 hours.
                  </p>
                )}

                {status === "error" && (
                  <p
                    style={{
                      color: "#c62828",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      padding: "0.75rem 1rem",
                      background: "#ffebee",
                      borderRadius: "8px",
                    }}
                  >
                    {errorMessage}
                  </p>
                )}

                <label
                  htmlFor="consent"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.6rem",
                    fontSize: "0.8rem",
                    color: muted,
                    lineHeight: 1.5,
                    cursor: "pointer",
                  }}
                >
                  <input
                    id="consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    style={{ marginTop: "0.2rem", flexShrink: 0 }}
                  />
                  <span>
                    I consent to HerChoice collecting and using the information above solely to respond to my inquiry, in accordance with the{" "}
                    <a href="/privacy" style={{ color: rose, textDecoration: "underline" }}>Privacy Policy</a>.
                  </span>
                </label>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ border: "none", cursor: "pointer", opacity: status === "submitting" ? 0.7 : 1 }}
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="faq" className="section-py" style={{ background: warm }}>
        <div className="wrap">
          <motion.div style={{ textAlign: "center", marginBottom: "3rem" }} {...scrollReveal}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Common Questions</p>
            <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "clamp(2rem, 4vw, 3rem)", color: brown }}>
              Frequently Asked
            </h2>
          </motion.div>

          <div style={{ maxWidth: "760px", margin: "0 auto", display: "grid", gap: "1rem" }}>
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                className="premium-card"
                style={{ padding: "1.75rem" }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: "1.25rem",
                    color: brown,
                    marginBottom: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ color: muted, lineHeight: 1.7, fontSize: "0.95rem" }}>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
