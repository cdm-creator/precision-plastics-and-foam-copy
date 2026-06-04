"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroBottomDivider } from "@/components/HeroBottomDivider";
import { TopBar } from "@/components/layout/top-bar";
import { fadeUpVariants, motionTimings } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Clock3,
  Factory,
  Fuel,
  HeartPulse,
  Phone,
  Plane,
  Settings,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Plastic Machining",
    text:
      "Precision CNC machining for plastic parts with tight tolerances and consistent quality.",
    href: "/plastic-machining",
    image: "/images/plastic-service-cnc.webp",
    alt: "CNC equipment machining a precision plastic component"
  },
  {
    title: "Foam Solutions",
    text:
      "Custom foam fabrication for protection, packaging, and industrial applications.",
    href: "/foam-inserts",
    image: "/images/foam-inserts-tools-case.webp",
    alt: "Custom foam inserts protecting tools inside a case"
  }
];

const industries = [
  {
    title: "Aerospace & Defense",
    href: "/industries/aerospace-defense",
    icon: Plane
  },
  { title: "Oil & Gas", href: "/industries/oil-gas", icon: Fuel },
  {
    title: "Medical Devices",
    href: "/industries/medical-devices",
    icon: HeartPulse
  },
  {
    title: "Industrial Automation",
    href: "/industries/industrial-automation",
    icon: Bot
  },
  { title: "Energy & Power", href: "/industries/energy-power", icon: Zap },
  {
    title: "Custom Manufacturing & R&D",
    href: "/industries/custom-manufacturing-rd",
    icon: Factory
  }
];

const latestBlogs = [
  {
    category: "Foam Solutions",
    title: "How Custom Foam Inserts Protect High-Value Equipment",
    date: "May 12, 2026",
    excerpt:
      "Explore how precision-cut foam inserts protect sensitive tools, electronics, and mission-critical equipment.",
    href: "/blogs/how-custom-foam-inserts-protect-high-value-equipment",
    image: "/images/foam-portfolio-camera-lens-insert.webp",
    alt: "Camera lenses organized in custom cut foam"
  },
  {
    category: "Plastic Machining",
    title: "CNC Machining vs. Injection Molding: Which is Right?",
    date: "May 8, 2026",
    excerpt:
      "Compare precision, tooling cost, lead time, and production volume for your next plastic component.",
    href: "/blogs/cnc-machining-vs-injection-molding-which-is-right",
    image: "/images/plastic-portfolio-cnc-machine.webp",
    alt: "CNC machine used for plastic machining"
  },
  {
    category: "Industry Insights",
    title: "Top Industries That Benefit from Custom Plastic Parts",
    date: "May 3, 2026",
    excerpt:
      "See how custom plastic components help improve durability, fit, weight, and performance.",
    href: "/blogs/top-industries-that-benefit-from-custom-plastic-parts",
    image: "/images/plastic-portfolio-white-sprocket.webp",
    alt: "White machined plastic sprocket component"
  }
];

function Reveal({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      variants={fadeUpVariants}
      transition={{ ...motionTimings.fadeUp, delay: reduceMotion ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ThankYouPage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <TopBar />
      <Header />
      <main className="bg-secondary">
        <section className="relative isolate min-h-[560px] overflow-hidden bg-[#06152c] text-white md:min-h-[640px] lg:min-h-[720px]">
          <motion.div
            className="absolute inset-0 -z-30"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.02 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/thank-you-warehouse-truck.webp"
              alt="Precision Plastics & Foam branded delivery truck at an industrial warehouse"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[62%_center] saturate-[0.96] contrast-110"
            />
          </motion.div>
          <div className="absolute inset-0 -z-20 bg-[#06152c]/48" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,21,44,0.92)_0%,rgba(6,21,44,0.68)_42%,rgba(6,21,44,0.18)_76%,transparent_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_34%,rgba(219,75,25,0.18),transparent_23rem),radial-gradient(circle_at_18%_55%,rgba(37,99,235,0.14),transparent_28rem),linear-gradient(180deg,rgba(3,10,22,0.06),rgba(3,10,22,0.68))]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.13)_1px,transparent_1px)] bg-[length:24px_24px] opacity-[0.055]" />
          <HeroBottomDivider />

          <div className="relative z-20 mx-auto flex min-h-[560px] w-full max-w-[1280px] items-center px-6 py-24 md:min-h-[640px] lg:min-h-[720px] lg:px-8">
            <motion.div
              className="max-w-[650px] pb-16 lg:pb-24"
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.1 }
                }
              }}
            >
              <motion.div
                variants={fadeUpVariants}
                className="grid h-14 w-14 place-items-center rounded-full border border-[var(--color-industrial-orange)] text-accent"
              >
                <CheckCircle2 size={28} strokeWidth={1.8} />
              </motion.div>
              <motion.p
                variants={fadeUpVariants}
                className="mt-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-accent sm:text-sm"
              >
                <span className="h-6 w-0.5 bg-[var(--color-industrial-orange)]" />
                Request Received
              </motion.p>
              <motion.h1
                variants={fadeUpVariants}
                className="mt-5 font-heading text-[2.25rem] font-semibold leading-tight text-white sm:text-[2.75rem]"
              >
                Thank You!
              </motion.h1>
              <motion.p
                variants={fadeUpVariants}
                className="mt-4 font-heading text-xl font-semibold leading-snug text-white/90"
              >
                Your submission has been received.
              </motion.p>
              <motion.p
                variants={fadeUpVariants}
                className="mt-5 max-w-lg text-base leading-8 text-white/74"
              >
                We appreciate you reaching out to Precision Plastics &amp; Foam.
                Our team will review your request and get back to you shortly.
              </motion.p>
              <motion.div
                variants={fadeUpVariants}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <Link href="/" className="btn-primary">
                  Back to Home
                  <ArrowRight size={17} />
                </Link>
                <Link href="tel:+12813779292" className="btn-primary">
                  Call Now
                  <Phone size={17} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white pb-16 pt-8 lg:pb-20 lg:pt-10">
          <div className="container-width">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow mb-3">Our Capabilities</p>
              <h2 className="h2">Explore What We Do</h2>
              <p className="body-large mt-4">
                High-quality plastic machining and foam solutions built for
                performance.
              </p>
            </Reveal>

            <motion.div
              className="mt-10 grid gap-6 lg:grid-cols-2"
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.08 }
                }
              }}
            >
              {services.map((service) => (
                <motion.article
                  key={service.title}
                  variants={fadeUpVariants}
                  className="group grid overflow-hidden rounded-2xl border border-system bg-card shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-industrial sm:grid-cols-[0.42fr_0.58fr]"
                >
                  <div className="relative min-h-[15rem] overflow-hidden bg-primary">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-7">
                    <span className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-industrial-orange)_10%,white)] text-accent">
                      <Settings size={21} strokeWidth={1.8} />
                    </span>
                    <h3 className="h3 text-[1.35rem]">{service.title}</h3>
                    <p className="body mt-3">{service.text}</p>
                    <Link href={service.href} className="technical-link mt-6 text-accent hover:text-[var(--color-orange-hover)]">
                      View Service
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container-width">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow mb-3">Industry Expertise</p>
              <h2 className="h2">Industries We Serve</h2>
              <p className="body-large mt-4">
                Trusted by businesses across a wide range of industries.
              </p>
            </Reveal>

            <motion.div
              className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6"
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.05 }
                }
              }}
            >
              {industries.map(({ title, href, icon: Icon }) => (
                <motion.div key={title} variants={fadeUpVariants}>
                  <Link
                    href={href}
                    className="group flex min-h-36 flex-col items-center justify-center rounded-xl border border-system bg-card p-4 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--color-industrial-orange)_38%,var(--color-border-gray))]"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-precision-blue)_9%,white)] text-technical transition group-hover:bg-[var(--color-industrial-orange)] group-hover:text-white">
                      <Icon size={21} strokeWidth={1.8} />
                    </span>
                    <span className="mt-4 font-heading text-sm font-semibold leading-snug text-midnight transition group-hover:text-accent">
                      {title}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="container-width">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow mb-3">Insights</p>
              <h2 className="h2">Latest Blogs</h2>
              <p className="body-large mt-4">
                Helpful insights from our manufacturing and materials team.
              </p>
            </Reveal>

            <motion.div
              className="mt-10 grid gap-5 md:grid-cols-3"
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.07 }
                }
              }}
            >
              {latestBlogs.map((blog) => (
                <motion.article
                  key={blog.title}
                  variants={fadeUpVariants}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-system bg-card shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-industrial"
                >
                  <Link href={blog.href} className="focus-ring block">
                    <div className="relative h-52 overflow-hidden bg-primary">
                      <Image
                        src={blog.image}
                        alt={blog.alt}
                        fill
                        sizes="(min-width: 768px) 31vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.18))]" />
                      <span className="absolute bottom-4 right-4 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent shadow-card">
                        {blog.category}
                      </span>
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      <Clock3 size={14} />
                      {blog.date}
                    </p>
                    <h3 className="mt-4 line-clamp-2 font-heading text-[1rem] font-semibold leading-snug text-midnight transition group-hover:text-accent">
                      <Link href={blog.href}>{blog.title}</Link>
                    </h3>
                    <p className="small-text mt-3 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <Link
                      href={blog.href}
                      className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-technical transition hover:text-[var(--color-blue-hover)]"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
