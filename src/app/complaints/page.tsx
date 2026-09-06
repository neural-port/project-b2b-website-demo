"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { AlertCircle, FileText, Clock, Shield, CheckCircle } from "lucide-react";
import { rose, cream, warm, brown, muted, line } from "@/lib/colors";
import { scrollReveal } from "@/lib/motion";

type ComplaintStatus = "idle" | "submitting" | "success" | "error";

const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

const complaintTypes = [
  "Product Quality",
  "Packaging",
  "Distribution / Availability",
  "Customer Service",
  "Other",
];

const processSteps = [
  {
    icon: FileText,
    title: "Submit Complaint",
    desc: "Fill out the form below with details of your concern. Include product batch number and purchase details if applicable.",
  },
  {
    icon: Clock,
    title: "Acknowledgement",
    desc: "You will receive an acknowledgement reference number within 48 hours of submission.",
  },
  {
    icon: Shield,
    title: "Investigation",
    desc: "Our quality team reviews your complaint, investigates root cause, and coordinates with relevant departments.",
  },
  {
    icon: CheckCircle,
    title: "Resolution",
    desc: "We communicate the resolution within 15 working days. Serious quality issues are escalated to senior management.",
  },
];

export default function Complaints() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    complaintType: complaintTypes[0],
    batchNumber: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<ComplaintStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [refNumber, setRefNumber] = useState("");

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
      setRefNumber(`YN-CMP-${Date.now().toString().slice(-6)}`);
      setStatus("success");
      setForm({ name: "", email: "", phone: "", complaintType: complaintTypes[0], batchNumber: "", message: "" });
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

      setRefNumber(`YN-CMP-${Date.now().toString().slice(-6)}`);
      setStatus("success");
      setForm({ name: "", email: "", phone: "", complaintType: complaintTypes[0], batchNumber: "", message: "" });
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
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Consumer Complaints</p>
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
              We Listen.<br />We Resolve.
            </h1>
            <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: muted, maxWidth: "48ch", margin: "0 auto", lineHeight: 1.6 }}>
              Every complaint is an opportunity to improve. If you have a concern about any of our products or services, let us know.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="process" className="section-py" style={{ background: "#fff" }}>
        <div className="wrap">
          <motion.div style={{ textAlign: "center", marginBottom: "4rem" }} {...scrollReveal}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>How It Works</p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                color: brown,
              }}
            >
              Complaint Resolution Process
            </h2>
          </motion.div>

          <div className="auto-grid">
            {processSteps.map(({ icon: Icon, title, desc }, i) => (
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
                    fontSize: "1.4rem",
                    color: brown,
                    marginBottom: "1rem",
                    fontWeight: 600,
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

      <section id="form" className="section-py" style={{ background: warm }}>
        <div className="wrap">
          <div className="contact-grid">
            <motion.div {...scrollReveal}>
              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  color: brown,
                  marginBottom: "1.5rem",
                }}
              >
                File a Complaint
              </h2>
              <p style={{ color: muted, lineHeight: 1.8, fontSize: "1rem", marginBottom: "1.5rem" }}>
                Please provide as much detail as possible. Include the product name, batch number (printed on the packaging), and date of purchase if your complaint is product-related.
              </p>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.25rem", background: "#fff", borderRadius: "12px", border: `1px solid ${line}` }}>
                <AlertCircle size={20} color={rose} style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                <p style={{ color: muted, fontSize: "0.9rem", lineHeight: 1.6 }}>
                  For urgent health-related concerns, please consult a medical professional immediately. This form is for product and service feedback only.
                </p>
              </div>
            </motion.div>

            <motion.div {...scrollReveal} transition={{ duration: 0.9, delay: 0.2 }}>
              <form style={{ display: "grid", gap: "1.5rem" }} onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" style={{ display: "block", color: brown, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                    Full Name
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
                  <label htmlFor="email" style={{ display: "block", color: brown, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>
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
                  <label htmlFor="phone" style={{ display: "block", color: brown, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 123 456 7890"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="premium-input"
                  />
                </div>
                <div>
                  <label htmlFor="complaintType" style={{ display: "block", color: brown, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                    Complaint Type
                  </label>
                  <select
                    id="complaintType"
                    value={form.complaintType}
                    onChange={(e) => setForm((f) => ({ ...f, complaintType: e.target.value }))}
                    className="premium-input"
                    required
                  >
                    {complaintTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="batchNumber" style={{ display: "block", color: brown, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                    Batch Number <span style={{ color: muted, fontWeight: 400 }}>(optional)</span>
                  </label>
                  <input
                    id="batchNumber"
                    type="text"
                    placeholder="e.g. BN-2026-0123"
                    value={form.batchNumber}
                    onChange={(e) => setForm((f) => ({ ...f, batchNumber: e.target.value }))}
                    className="premium-input"
                  />
                </div>
                <div>
                  <label htmlFor="message" style={{ display: "block", color: brown, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                    Complaint Details
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your concern in detail..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="premium-input"
                    style={{ resize: "vertical" }}
                    required
                  />
                </div>

                {status === "success" && (
                  <div
                    style={{
                      color: "#2e7d32",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      padding: "1rem 1.25rem",
                      background: "#e8f5e9",
                      borderRadius: "8px",
                    }}
                  >
                    <p style={{ marginBottom: "0.5rem" }}>Your complaint has been registered successfully.</p>
                    <p>Reference Number: <strong>{refNumber}</strong></p>
                    <p style={{ marginTop: "0.5rem", fontWeight: 400 }}>Please save this reference for future follow-up. Our team will contact you within 48 hours.</p>
                  </div>
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
                    I consent to HerChoice collecting and using the information above to investigate and resolve my complaint, in accordance with the{" "}
                    <a href="/privacy" style={{ color: rose, textDecoration: "underline" }}>Privacy Policy</a>.
                  </span>
                </label>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ border: "none", cursor: "pointer", opacity: status === "submitting" ? 0.7 : 1 }}
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Submitting..." : "Submit Complaint"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
