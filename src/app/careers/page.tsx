"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Heart, GraduationCap, Send, Clock, FileText, UserCheck, ArrowRight, ArrowDown, ChevronDown, Quote } from "lucide-react";
import { useState } from "react";
import { rose, cream, warm, brown, muted } from "@/lib/colors";
import { scrollReveal } from "@/lib/motion";

const perks = [
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Comprehensive medical coverage for you and your dependents, including preventive care and wellness programs.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    desc: "Skill development stipends, internal training programs, and sponsorship for relevant certifications.",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    desc: "Flexible scheduling, paid leave, and structured shifts that respect personal time and family commitments.",
  },
  {
    icon: Users,
    title: "Inclusive Culture",
    desc: "A safe, respectful, and diverse workplace where every voice matters — with a strong anti-harassment policy.",
  },
];

const openings = [
  {
    title: "Production Supervisor",
    dept: "Manufacturing",
    location: "Goa, India",
    type: "Full-time",
    experience: "5+ years",
    summary: "Lead a production line team to deliver quality output safely and on schedule.",
    responsibilities: [
      "Supervise daily production line operations and shift handovers",
      "Ensure adherence to SOPs, GMP, and safety protocols",
      "Monitor output targets, downtime, and reject rates",
      "Train and mentor line operators and packing staff",
      "Coordinate with quality and maintenance teams for issue resolution",
    ],
    requirements: [
      "Diploma or B.Tech in Mechanical / Production / Industrial Engineering",
      "5+ years in a manufacturing supervisory role",
      "Experience with automated packaging lines is a plus",
      "Strong people management and communication skills",
    ],
  },
  {
    title: "Quality Assurance Officer",
    dept: "Quality Control",
    location: "Goa, India",
    type: "Full-time",
    experience: "3+ years",
    summary: "Own product quality through inspection, testing, and documentation across batches.",
    responsibilities: [
      "Conduct incoming, in-process, and finished goods inspections",
      "Perform absorbency, tensile, and microbial testing per SOP",
      "Maintain batch records, deviation logs, and CAPA documentation",
      "Support internal audits and regulatory inspections",
      "Drive root-cause analysis for quality complaints",
    ],
    requirements: [
      "B.Sc / M.Sc in Chemistry, Microbiology, or related field",
      "3+ years in QA within manufacturing (pharma / FMCG preferred)",
      "Familiarity with ISO 9001 and GMP documentation",
      "Detail-oriented with strong analytical skills",
    ],
  },
  {
    title: "Supply Chain Coordinator",
    dept: "Operations",
    location: "Goa, India",
    type: "Full-time",
    experience: "3+ years",
    summary: "Coordinate procurement, inventory, and dispatch to keep production and distribution flowing.",
    responsibilities: [
      "Plan and track raw material procurement and inventory levels",
      "Coordinate with suppliers for on-time delivery and quality compliance",
      "Maintain stock records and reconcile with ERP data",
      "Organize finished goods dispatch to distribution partners",
      "Identify and resolve supply bottlenecks proactively",
    ],
    requirements: [
      "Bachelor's degree in any discipline; supply chain certification is a plus",
      "3+ years in supply chain, procurement, or logistics coordination",
      "Experience with ERP systems (Tally, SAP, or similar)",
      "Strong negotiation and vendor management skills",
    ],
  },
  {
    title: "Field Sales Executive",
    dept: "Sales & Distribution",
    location: "Multiple Cities, India",
    type: "Full-time",
    experience: "2+ years",
    summary: "Expand our distributor and retail network across assigned territories.",
    responsibilities: [
      "Identify and onboard new distributors and retail partners",
      "Achieve monthly sales targets across assigned territories",
      "Conduct market visits and build relationships with retailers",
      "Collect and report market feedback on competitor activity",
      "Coordinate with the internal sales team for order processing",
    ],
    requirements: [
      "Bachelor's degree in any discipline",
      "2+ years in field sales, preferably in FMCG / hygiene / pharma",
      "Willingness to travel extensively within assigned regions",
      "Two-wheeler with valid license is required",
    ],
  },
];

const processSteps = [
  {
    icon: FileText,
    step: "01",
    title: "Application",
    desc: "Submit your resume and a short cover note through our contact form or email. Tell us why you want to join.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Screening",
    desc: "Our HR team reviews your profile against the role requirements. Shortlisted candidates are contacted within 7 working days.",
  },
  {
    icon: Users,
    step: "03",
    title: "Interview",
    desc: "A technical or functional interview — in person at our Goa facility or via video call. Some roles include a practical assessment.",
  },
  {
    icon: Send,
    step: "04",
    title: "Onboarding",
    desc: "Selected candidates receive an offer letter. Onboarding includes facility orientation, safety training, and team integration.",
  },
];

const quotes = [
  {
    text: "We don't want superheroes. We want super minds.",
    author: "HerChoice — Hiring Philosophy",
  },
  {
    text: "We hire for character. We train for skill. We grow together.",
    author: "Our People Promise",
  },
  {
    text: "Every product we make starts with the people we hire.",
    author: "Leadership Note",
  },
];

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  return (
    <div style={{ background: cream, color: brown, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>

      <section className="hero-gradient page-hero">
        <div className="wrap page-hero-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Careers</p>
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
              Build With<br />Purpose.
            </h1>
            <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: muted, maxWidth: "48ch", margin: "0 auto", lineHeight: 1.6 }}>
              Join a team that manufactures health and hygiene for millions. We hire for character, train for skill, and grow together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote band 1 */}
      <section className="quote-band" style={{ background: brown }}>
        <div className="wrap">
          <motion.div
            className="quote-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <Quote size={40} color={rose} style={{ opacity: 0.4, marginBottom: "1.5rem" }} />
            <p className="quote-text">{quotes[0].text}</p>
            <p className="quote-author">— {quotes[0].author}</p>
          </motion.div>
        </div>
      </section>

      <section id="why-join" className="section-py" style={{ background: "#fff" }}>
        <div className="wrap">
          <motion.div style={{ textAlign: "center", marginBottom: "4rem" }} {...scrollReveal}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Why Join Us</p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                color: brown,
              }}
            >
              More Than a Job
            </h2>
          </motion.div>

          <div className="auto-grid-wide">
            {perks.map(({ icon: Icon, title, desc }, i) => (
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
                    fontSize: "1.5rem",
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

      {/* Quote band 2 */}
      <section className="quote-band" style={{ background: brown }}>
        <div className="wrap">
          <motion.div
            className="quote-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <Quote size={40} color={rose} style={{ opacity: 0.4, marginBottom: "1.5rem" }} />
            <p className="quote-text">{quotes[1].text}</p>
            <p className="quote-author">— {quotes[1].author}</p>
          </motion.div>
        </div>
      </section>

      <section id="process" className="section-py" style={{ background: warm }}>
        <div className="wrap">
          <motion.div style={{ textAlign: "center", marginBottom: "4rem" }} {...scrollReveal}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>How We Hire</p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                color: brown,
              }}
            >
              Recruitment Process
            </h2>
          </motion.div>

          {/* Desktop: horizontal flow with animated right arrows */}
          <div className="process-flow-desktop">
            {processSteps.map(({ icon: Icon, step, title, desc }, i) => (
              <div key={step} className="process-flow-item">
                <motion.div
                  className="premium-card process-step-card"
                  style={{ padding: "2.5rem", position: "relative" }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "1.5rem",
                      right: "1.5rem",
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      color: rose,
                      opacity: 0.15,
                    }}
                  >
                    {step}
                  </span>
                  <div className="icon-circle-lg" style={{ marginBottom: "1.5rem" }}>
                    <Icon size={26} color={rose} />
                  </div>
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: "1.4rem",
                      color: brown,
                      marginBottom: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ color: muted, lineHeight: 1.7, fontSize: "0.95rem" }}>{desc}</p>
                </motion.div>

                {i < processSteps.length - 1 && (
                  <motion.div
                    className="process-arrow process-arrow-right"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.4 }}
                  >
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight size={28} color={rose} strokeWidth={2.5} />
                    </motion.div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical timeline with animated down arrows */}
          <div className="process-flow-mobile">
            {processSteps.map(({ icon: Icon, step, title, desc }, i) => (
              <div key={step} className="process-flow-item-vertical">
                <motion.div
                  className="premium-card"
                  style={{ padding: "2rem", position: "relative" }}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1.25rem",
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: rose,
                      opacity: 0.15,
                    }}
                  >
                    {step}
                  </span>
                  <div className="icon-circle-lg" style={{ marginBottom: "1rem" }}>
                    <Icon size={24} color={rose} />
                  </div>
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: "1.3rem",
                      color: brown,
                      marginBottom: "0.5rem",
                      fontWeight: 600,
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ color: muted, lineHeight: 1.7, fontSize: "0.9rem" }}>{desc}</p>
                </motion.div>

                {i < processSteps.length - 1 && (
                  <motion.div
                    className="process-arrow process-arrow-down"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.12 + 0.3 }}
                  >
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowDown size={24} color={rose} strokeWidth={2.5} />
                    </motion.div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote band 3 */}
      <section className="quote-band" style={{ background: brown }}>
        <div className="wrap">
          <motion.div
            className="quote-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <Quote size={40} color={rose} style={{ opacity: 0.4, marginBottom: "1.5rem" }} />
            <p className="quote-text">{quotes[2].text}</p>
            <p className="quote-author">— {quotes[2].author}</p>
          </motion.div>
        </div>
      </section>

      <section id="openings" className="section-py" style={{ background: "#fff" }}>
        <div className="wrap">
          <motion.div style={{ textAlign: "center", marginBottom: "4rem" }} {...scrollReveal}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Current Openings</p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                color: brown,
              }}
            >
              Open Positions
            </h2>
          </motion.div>

          <div style={{ maxWidth: "860px", margin: "0 auto", display: "grid", gap: "1rem" }}>
            {openings.map((job, i) => {
              const isOpen = expandedJob === job.title;
              return (
                <motion.div
                  key={job.title}
                  className="premium-card"
                  style={{ overflow: "hidden" }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  {/* Header row — clickable */}
                  <button
                    type="button"
                    onClick={() => setExpandedJob(isOpen ? null : job.title)}
                    aria-expanded={isOpen}
                    aria-controls={`job-panel-${i}`}
                    className="job-toggle-header"
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                      <div className="icon-circle" style={{ flexShrink: 0 }}>
                        <Briefcase size={20} color={rose} />
                      </div>
                      <div style={{ textAlign: "left" }}>
                        <h3
                          style={{
                            fontFamily: '"Cormorant Garamond", Georgia, serif',
                            fontSize: "1.25rem",
                            color: brown,
                            marginBottom: "0.25rem",
                            fontWeight: 600,
                          }}
                        >
                          {job.title}
                        </h3>
                        <p style={{ color: muted, fontSize: "0.85rem" }}>
                          {job.dept} &middot; {job.location} &middot; {job.type} &middot; {job.experience}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ flexShrink: 0 }}
                    >
                      <ChevronDown size={22} color={rose} strokeWidth={2.5} />
                    </motion.div>
                  </button>

                  {/* Expandable JD */}
                  <motion.div
                    id={`job-panel-${i}`}
                    role="region"
                    aria-label={`${job.title} job description`}
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="job-detail-body">
                      <p className="job-summary">{job.summary}</p>

                      <div className="job-detail-grid">
                        <div>
                          <h4 className="job-detail-heading">Key Responsibilities</h4>
                          <ul className="job-detail-list">
                            {job.responsibilities.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="job-detail-heading">Requirements</h4>
                          <ul className="job-detail-list">
                            {job.requirements.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="job-detail-footer">
                        <a href="/contact" className="btn-primary" style={{ padding: "0.7rem 1.75rem", fontSize: "0.85rem" }}>
                          Apply for this role &rarr;
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <motion.div style={{ textAlign: "center", marginTop: "3rem" }} {...scrollReveal}>
            <p style={{ color: muted, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              Don&apos;t see a role that fits? Send us your resume and we&apos;ll reach out when a match opens.
            </p>
            <a href="/contact" className="btn-primary">
              Send Your Resume &rarr;
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
