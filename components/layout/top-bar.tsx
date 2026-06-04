"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter
} from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    label: "281-377-9292",
    href: "tel:+12813779292",
    icon: Phone
  },
  {
    label: "info@ppfsales.com",
    href: "mailto:info@ppfsales.com",
    icon: Mail
  },
  {
    label: "800 Marion Pugh Dr, 77840, TX, USA",
    href: "https://maps.google.com/?q=800%20Marion%20Pugh%20Dr%2C%2077840%2C%20TX%2C%20USA",
    icon: MapPin,
    hideOnMobile: true
  }
];

const socialItems = [
  { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
  { label: "Twitter X", href: "https://www.x.com", icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com", icon: Instagram }
];

export function TopBar() {
  return (
    <motion.aside
      aria-label="Company contact information"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="top-bar"
    >
      <div className="container-width flex min-h-10 items-center justify-center gap-3 py-1 md:justify-between md:py-0 lg:min-h-11 lg:gap-4">
        <ul className="flex min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-1 md:justify-start md:gap-4">
          {contactItems.map(({ label, href, icon: Icon, hideOnMobile }, index) => (
            <li
              key={label}
              className={`flex items-center gap-3 ${
                hideOnMobile ? "hidden lg:flex" : ""
              }`}
            >
              {index > 0 ? <span className="top-bar-separator hidden md:block" /> : null}
              <Link href={href} className="top-bar-link whitespace-nowrap">
                <Icon className="top-bar-icon h-4 w-4 shrink-0" />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="hidden shrink-0 items-center gap-1 md:flex" aria-label="Social links">
          {socialItems.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <Link
                href={href}
                aria-label={label}
                className="top-bar-social"
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
}
