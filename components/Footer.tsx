import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const columns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Industries", href: "/industries" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/contact" },
      { label: "Custom Foam Inserts", href: "/foam-inserts" },
      { label: "Plastic Machining", href: "/plastic-machining" }
    ]
  },
  {
    title: "Industries",
    links: [
      { label: "Aerospace & Defense", href: "/industries/aerospace-defense" },
      { label: "Oil & Gas", href: "/industries/oil-gas" },
      { label: "Medical Devices", href: "/industries/medical-devices" },
      { label: "Industrial Automation", href: "/industries/industrial-automation" },
      { label: "Energy & Power", href: "/industries/energy-power" },
      { label: "Custom Manufacturing & R&D", href: "/industries/custom-manufacturing-rd" }
    ]
  }
];

const socialLinks = [
  {
    label: "Precision Plastics & Foam on Twitter",
    href: "https://twitter.com",
    icon: Twitter
  },
  {
    label: "Precision Plastics & Foam on Facebook",
    href: "https://www.facebook.com",
    icon: Facebook
  },
  {
    label: "Precision Plastics & Foam on LinkedIn",
    href: "https://www.linkedin.com",
    icon: Linkedin
  },
  {
    label: "Precision Plastics & Foam on YouTube",
    href: "https://www.youtube.com",
    icon: Youtube
  }
];

const recentBlogs = [
  {
    title: "How Custom Foam Inserts Protect High-Value Equipment",
    date: "May 12, 2026",
    category: "Foam Solutions",
    href: "/blogs/how-custom-foam-inserts-protect-high-value-equipment"
  },
  {
    title: "CNC Machining vs. Injection Molding: Which is Right?",
    date: "May 8, 2026",
    category: "Plastic Machining",
    href: "/blogs/cnc-machining-vs-injection-molding-which-is-right"
  },
  {
    title: "Top Industries That Benefit from Custom Plastic Parts",
    date: "May 3, 2026",
    category: "Industry Insights",
    href: "/blogs/top-industries-that-benefit-from-custom-plastic-parts"
  }
];

export function Footer() {
  return (
    <footer id="contact" className={`dark-panel ${styles.footer}`}>
      <div className="container-width grid gap-10 py-20 md:grid-cols-2 xl:grid-cols-[1.2fr_1.45fr_1fr_1.1fr]">
        <div>
          <Link
            href="/"
            aria-label="Precision Plastics & Foam home"
            className="focus-ring inline-flex"
          >
            <Image
              src="/images/dark-bg-logo.webp"
              alt="Precision Plastics & Foam"
              width={280}
              height={75}
              className={styles.logo}
            />
          </Link>
          <p className="small-text dark-muted mt-4 max-w-sm">
            Custom industrial foam inserts and precision plastic machining for
            teams that need dependable fit, finish, and protection.
          </p>
          <div className={styles.socials}>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className={`focus-ring ${styles.socialLink}`}
              >
                <Icon size={16} strokeWidth={2.2} />
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {columns.map((column) => (
            <div key={column.title}>
              <p className={styles.heading}>{column.title}</p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`small-text focus-ring dark-muted ${styles.footerLink}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <p className={styles.heading}>Contact</p>
          <ul className="small-text dark-muted mt-4 space-y-4">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-accent" />
              <span>281-377-9292</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-accent" />
              <span>info@ppfsales.com</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <span>800 Marion Pugh Dr, 77840, TX, USA</span>
            </li>
          </ul>
        </div>

        <div>
          <p className={styles.heading}>Recent Blogs</p>
          <div className="mt-4 grid gap-4">
            {recentBlogs.map((blog) => (
              <article key={blog.title}>
                <p className="text-[11px] leading-5 text-slate-500">
                  {blog.date}, {blog.category}
                </p>
                <Link
                  href={blog.href}
                  className="focus-ring mt-1 block font-heading text-sm font-normal leading-snug text-slate-100 transition hover:text-[#9fb7e8]"
                >
                  {blog.title}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className={`border-t border-white/10 ${styles.bottomBar}`}>
        <div className="container-width flex flex-col gap-3 py-6 text-xs text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>
            &copy; 2026 Precision Plastics & Foam. All rights reserved.
            <span className="mx-2 text-slate-500">|</span>
            <Link
              href="/terms-conditions-of-sale"
              className="focus-ring transition hover:text-accent"
            >
              Terms &amp; Conditions of Sale
            </Link>
            <span className="mx-2 text-slate-500">|</span>
            <Link
              href="/privacy-policy"
              className="focus-ring transition hover:text-accent"
            >
              Privacy Policy
            </Link>
          </p>
          <p>
            Powered by{" "}
            <Link
              href="https://coozmoo.com/?utm_medium=client_website"
              className="focus-ring text-slate-200 transition hover:text-accent"
            >
              Coozmoo
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.bottomLine} aria-hidden="true" />
    </footer>
  );
}
