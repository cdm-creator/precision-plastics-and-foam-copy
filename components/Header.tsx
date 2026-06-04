"use client";

import { drawerVariants, motionTimings } from "@/lib/motion";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Foam Inserts", href: "/foam-inserts" },
  { label: "Plastic Machining", href: "/plastic-machining" },
  { label: "Carbon Fiber Machining", href: "/carbon-fiber-machining" },
  { label: "Industries", href: "/industries" },
  { label: "Contact us", href: "/contact" }
];

const industryLinks = [
  { title: "Aerospace & Defense", href: "/industries/aerospace-defense" },
  { title: "Oil & Gas", href: "/industries/oil-gas" },
  { title: "Medical Devices", href: "/industries/medical-devices" },
  { title: "Industrial Automation", href: "/industries/industrial-automation" },
  { title: "Energy & Power", href: "/industries/energy-power" },
  {
    title: "Custom Manufacturing & R&D",
    href: "/industries/custom-manufacturing-rd"
  }
];

const industryCards = [
  {
    title: "View Services",
    href: "/plastic-machining",
    image: "/images/mega-services-cnc.webp",
    alt: "CNC machining tool cutting a precision metal part"
  },
  {
    title: "Contact Us",
    href: "/contact",
    image: "/images/mega-contact.webp",
    alt: "Manufacturing consultants walking through a facility with a laptop"
  }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const megaCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => setScrolled(latest > 12));
  }, [scrollY]);

  useEffect(() => {
    return () => {
      if (megaCloseTimeout.current) {
        clearTimeout(megaCloseTimeout.current);
      }
    };
  }, []);

  const openMegaMenu = () => {
    if (megaCloseTimeout.current) {
      clearTimeout(megaCloseTimeout.current);
      megaCloseTimeout.current = null;
    }

    setMegaOpen(true);
  };

  const closeMegaMenu = () => {
    if (megaCloseTimeout.current) {
      clearTimeout(megaCloseTimeout.current);
      megaCloseTimeout.current = null;
    }

    setMegaOpen(false);
  };

  const scheduleMegaMenuClose = () => {
    if (megaCloseTimeout.current) {
      clearTimeout(megaCloseTimeout.current);
    }

    megaCloseTimeout.current = setTimeout(() => {
      setMegaOpen(false);
      megaCloseTimeout.current = null;
    }, 160);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-system bg-white/95 shadow-card backdrop-blur"
          : "border-[rgba(15,23,42,0.08)] bg-white/80 backdrop-blur"
      } relative`}
    >
      <nav
        aria-label="Primary navigation"
        className="container-width flex min-h-[4.5rem] items-center justify-between py-2 xl:min-h-24 xl:py-4"
      >
        <Link
          href="/"
          aria-label="Precision Plastics & Foam home"
          className="focus-ring flex items-center"
        >
          <Image
            src="/images/final-logo.webp"
            alt="Precision Plastics & Foam"
            width={280}
            height={75}
            priority
            className="h-12 w-auto object-contain sm:h-12 xl:h-20"
          />
        </Link>

        <div className="hidden items-center gap-6 xl:flex 2xl:gap-7">
          {navItems.map((item) =>
            item.label === "Industries" ? (
              <div
                key={item.label}
                onMouseEnter={openMegaMenu}
                onMouseLeave={scheduleMegaMenuClose}
                className="relative flex self-stretch"
              >
                <Link
                  href={item.href}
                  aria-expanded={megaOpen}
                  onFocus={openMegaMenu}
                  className="nav-text focus-ring inline-flex items-center gap-1 transition hover:text-technical"
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                  />
                </Link>

                <AnimatePresence>
                  {megaOpen ? (
                    <motion.div
                      initial={{ opacity: 0, x: "-50%", y: 8 }}
                      animate={{ opacity: 1, x: "-50%", y: 0 }}
                      exit={{ opacity: 0, x: "-50%", y: 8 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      onMouseEnter={openMegaMenu}
                      onMouseLeave={scheduleMegaMenuClose}
                      className="fixed left-1/2 top-24 z-50 hidden w-[min(92vw,64rem)] xl:block"
                    >
                      <div className="rounded-b-industrial border border-t-0 border-system bg-card p-6 shadow-industrial">
                        <div className="grid grid-cols-[32%_64%] gap-8">
                          <div>
                            <p className="eyebrow mb-4">Industries</p>
                            <div className="divide-y divide-slate-200">
                              {industryLinks.map(({ title, href }, index) => (
                                <Link
                                  href={href}
                                  key={title}
                                  className="group flex items-center gap-4 py-4 transition hover:text-accent"
                                >
                                  <span className="small-text font-semibold text-accent">
                                    {String(index + 1).padStart(2, "0")}
                                  </span>
                                  <span className="nav-text flex-1 text-[var(--color-industrial-navy)] transition group-hover:text-accent">
                                    {title}
                                  </span>
                                  <ArrowUpRight
                                    size={18}
                                    className="text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                                  />
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-5">
                            {industryCards.map((card) => (
                              <Link
                                href={card.href}
                                key={card.title}
                                className="focus-ring group relative min-h-72 overflow-hidden rounded-industrial shadow-card"
                              >
                                <Image
                                  src={card.image}
                                  alt={card.alt}
                                  fill
                                  sizes="(min-width: 1024px) 19rem, 50vw"
                                  className="object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-industrial-navy)]/80 via-[var(--color-industrial-navy)]/25 to-transparent" />
                                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--color-industrial-navy)] shadow-card transition group-hover:text-accent">
                                  {card.title}
                                  <ArrowUpRight size={15} />
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={closeMegaMenu}
                onFocus={closeMegaMenu}
                className="nav-text focus-ring transition hover:text-technical"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden xl:block">
          <Link
            href="/contact"
            onMouseEnter={closeMegaMenu}
            onFocus={closeMegaMenu}
            className="btn-primary"
          >
            Request Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-control border border-system bg-card text-midnight transition hover:border-steel hover:text-technical xl:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={drawerVariants}
            transition={motionTimings.drawer}
            className="border-t border-system bg-card px-5 pb-6 shadow-elevated xl:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col py-3">
              {navItems.map((item) =>
                item.label === "Industries" ? (
                  <div key={item.label} className="border-b border-system">
                    <button
                      type="button"
                      aria-expanded={mobileIndustriesOpen}
                      onClick={() => setMobileIndustriesOpen((value) => !value)}
                      className="nav-text focus-ring flex w-full items-center justify-between py-4 text-left transition hover:text-technical"
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileIndustriesOpen ? (
                      <div className="pb-3">
                        {industryLinks.map(({ title, href }, index) => (
                          <Link
                            key={title}
                            href={href}
                            onClick={() => setOpen(false)}
                            className="small-text focus-ring flex items-center justify-between py-3 text-muted-strong transition hover:text-accent"
                          >
                            <span>
                              <span className="mr-3 font-semibold text-accent">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              {title}
                            </span>
                            <ArrowUpRight size={16} />
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="nav-text focus-ring border-b border-system py-4 transition hover:text-technical"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-5"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
