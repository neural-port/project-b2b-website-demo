"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { rose, cream, muted, line } from "@/lib/colors";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "How We Make It", href: "/innovation" },
  { label: "Our Impact", href: "/impact" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255,245,248,0.82)" : cream,
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: scrolled ? `1px solid ${line}99` : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(45,21,32,0.04)" : "none",
      }}
    >
      <div className="wrap flex items-center justify-between" style={{ height: "72px" }}>

        <Link href="/" className="group" aria-label="HerChoice — Home">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/logo.png`}
            alt="HerChoice"
            width={506}
            height={137}
            priority
            style={{ width: "clamp(8.5rem, 15vw, 10rem)", height: "auto", display: "block", transition: "opacity 0.3s ease" }}
            className="group-hover:opacity-80"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className="relative text-xs uppercase tracking-widest font-medium transition-colors duration-300"
              style={{ color: pathname === l.href ? rose : muted }}
            >
              {l.label}
              {pathname === l.href ? (
                <motion.div
                  layoutId="nav-line"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                  style={{ backgroundColor: rose }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : (
                <span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                  style={{
                    backgroundColor: rose,
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scaleX(1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scaleX(0)";
                  }}
                />
              )}
            </Link>
          ))}
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} color={rose} /> : <Menu size={22} color={rose} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            style={{
              background: "rgba(45, 21, 32, 0.92)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderTop: `1px solid ${line}`,
            }}
            className="lg:hidden px-6 py-6 flex flex-col gap-6"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === l.href ? "page" : undefined}
                className="text-sm uppercase tracking-widest font-medium"
                style={{ color: pathname === l.href ? "#FFB6C1" : "#FFF5F8" }}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
