"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TopBar } from "@/components/layout/top-bar";
import { fadeUpVariants, motionTimings } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarDays, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const blogPosts = [
  {
    category: "Foam Solutions",
    title: "How Custom Foam Inserts Protect High-Value Equipment",
    date: "May 12, 2026",
    readTime: "4 Min Read",
    excerpt:
      "Explore how precision-cut foam inserts protect sensitive tools, electronics, and mission-critical equipment during transport and storage.",
    image: "/images/foam-portfolio-camera-lens-insert.webp",
    alt: "Camera lenses organized in custom cut foam"
  },
  {
    category: "Plastic Machining",
    title: "CNC Machining vs. Injection Molding: Which is Right?",
    date: "May 8, 2026",
    readTime: "5 Min Read",
    excerpt:
      "Compare precision, tooling cost, lead time, and production volume to choose the right process for your next plastic component.",
    image: "/images/plastic-portfolio-cnc-machine.webp",
    alt: "CNC machine used for plastic machining"
  },
  {
    category: "Industry Insights",
    title: "Top Industries That Benefit from Custom Plastic Parts",
    date: "May 3, 2026",
    readTime: "6 Min Read",
    excerpt:
      "From aerospace to medical devices, custom plastic components help teams improve durability, fit, weight, and performance.",
    image: "/images/plastic-portfolio-white-sprocket.webp",
    alt: "White machined plastic sprocket component"
  },
  {
    category: "Manufacturing",
    title: "Inside Our Manufacturing Process: Quality Every Step",
    date: "April 28, 2026",
    readTime: "5 Min Read",
    excerpt:
      "A closer look at how planning, material selection, cutting, machining, and inspection create repeatable quality.",
    image: "/images/showcase-engineering-planning.webp",
    alt: "Engineering planning and manufacturing workflow"
  },
  {
    category: "Foam Solutions",
    title: "5 Benefits of Using Foam Inserts for Your Products",
    date: "April 21, 2026",
    readTime: "4 Min Read",
    excerpt:
      "Learn why engineered foam inserts improve organization, impact protection, presentation, and long-term product safety.",
    image: "/images/foam-portfolio-custom-case-layout.webp",
    alt: "Open hard case with custom cut black foam cavities"
  },
  {
    category: "Plastic Materials",
    title: "A Guide to Common Plastic Materials and Their Uses",
    date: "April 15, 2026",
    readTime: "6 Min Read",
    excerpt:
      "Understand common engineering plastics and how material properties influence strength, wear, temperature, and cost.",
    image: "/images/plastic-portfolio-ultem-printed-part.webp",
    alt: "Brown high-performance plastic fabricated manifold part"
  },
  {
    category: "Plastic Machining",
    title: "The Complete Guide to CNC Plastic Machining",
    date: "April 9, 2026",
    readTime: "7 Min Read",
    excerpt:
      "A practical guide to tolerances, materials, finishes, and design considerations for CNC-machined plastic parts.",
    image: "/images/plastic-portfolio-cnc-routing.webp",
    alt: "CNC routing a plastic sheet with visible shavings"
  },
  {
    category: "Industry Insights",
    title: "How Custom Solutions Improve Product Performance",
    date: "April 2, 2026",
    readTime: "5 Min Read",
    excerpt:
      "Discover how purpose-built foam and plastic solutions reduce field failures, improve usability, and support better outcomes.",
    image: "/images/portfolio-clear-machined-plastic.webp",
    alt: "Clear machined plastic component"
  },
  {
    category: "Foam Solutions",
    title: "Foam Packaging vs. Traditional Packaging: Which is Better?",
    date: "March 26, 2026",
    readTime: "4 Min Read",
    excerpt:
      "Compare protection, reusability, product fit, and presentation to determine which packaging approach is right for you.",
    image: "/images/foam-portfolio-blue-tray-insert.webp",
    alt: "Blue foam tray insert with multiple precision-cut compartments"
  }
];

const tocItems = [
  "Where Delivery Ends and Installation Begins",
  "Turning Furniture Delivery into a Coordinated Operation",
  "Beyond Drop-Off: What White Glove Actually Delivers",
  "When Delivery and Installation Work as One System",
  "Built for Both Living Spaces and Working Environments",
  "Eliminating Gaps Between Delivery, Setup, and Execution",
  "Protecting Every Piece from Warehouse to Final Placement"
];

const latestBlogs = [
  {
    title: "How Custom Foam Inserts Protect High-Value Equipment",
    date: "May 12, 2026",
    image: "/images/foam-portfolio-camera-lens-insert.webp",
    alt: "Camera lenses organized in custom cut foam"
  },
  {
    title: "CNC Machining vs. Injection Molding: Which is Right?",
    date: "May 8, 2026",
    image: "/images/plastic-portfolio-cnc-machine.webp",
    alt: "CNC machine used for plastic machining"
  },
  {
    title: "Top Industries That Benefit from Custom Plastic Parts",
    date: "May 3, 2026",
    image: "/images/plastic-portfolio-white-sprocket.webp",
    alt: "White machined plastic sprocket component"
  },
  {
    title: "Inside Our Manufacturing Process: Quality Every Step",
    date: "April 28, 2026",
    image: "/images/showcase-engineering-planning.webp",
    alt: "Engineering planning and manufacturing workflow"
  },
  {
    title: "5 Benefits of Using Foam Inserts for Your Products",
    date: "April 21, 2026",
    image: "/images/foam-portfolio-custom-case-layout.webp",
    alt: "Open hard case with custom cut black foam cavities"
  }
];

const articleSections = [
  {
    title: "Where Delivery Ends and Installation Begins",
    paragraphs: [
      "In industrial production, delivery is only one part of the work. The greater challenge is making sure each component, material, fixture, or protective insert arrives ready for the next step in the operation.",
      "Precision Plastics & Foam helps teams close that gap with custom plastic machining and foam solutions designed around real workflows, not generic product catalogs."
    ]
  },
  {
    title: "Turning Furniture Delivery into a Coordinated Operation",
    paragraphs: [
      "Every successful installation depends on planning, sequencing, and accountability. The same principle applies to manufacturing support: every machined part, foam insert, and protective system needs to arrive organized and ready for use.",
      "Our process starts with understanding how your team receives, handles, protects, and stages critical components before they reach final placement."
    ]
  },
  {
    title: "Beyond Drop-Off: What White Glove Actually Delivers",
    paragraphs: [
      "White glove service is about more than careful handling. It is about removing friction from the entire delivery and setup process so teams can move from receiving to execution with fewer delays.",
      "For manufacturers, that can mean precision-labeled inserts, clean component organization, protected case systems, and machined plastic parts built to exact operating requirements."
    ]
  },
  {
    title: "When Delivery and Installation Work as One System",
    paragraphs: [
      "The best programs treat delivery, protection, and installation as one connected system. Custom foam and plastic solutions help reduce misplaced parts, shipping damage, inefficient staging, and last-minute rework.",
      "When those details are engineered up front, teams gain a more predictable process from warehouse to final use."
    ]
  },
  {
    title: "Built for Both Living Spaces and Working Environments",
    paragraphs: [
      "Whether the end environment is a production floor, laboratory, field service vehicle, aerospace facility, or technical workspace, every solution needs to fit the conditions around it.",
      "We work with durable materials, precise tolerances, and protective designs that support both clean presentation and long-term performance."
    ]
  },
  {
    title: "Eliminating Gaps Between Delivery, Setup, and Execution",
    paragraphs: [
      "Small gaps in a process often create the biggest delays. Missing labels, poor fit, loose packaging, and unclear organization can slow work and create unnecessary risk.",
      "Custom inserts and machined plastic components help teams create repeatable systems that are easier to inspect, stage, transport, and put into service."
    ]
  },
  {
    title: "Protecting Every Piece from Warehouse to Final Placement",
    paragraphs: [
      "Protection should not stop at the shipping box. Sensitive equipment, tools, instruments, and assemblies often need support across storage, transport, setup, and daily use.",
      "Precision Plastics & Foam builds solutions that protect the full journey, helping your team reduce damage, improve organization, and keep critical operations moving."
    ]
  }
];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

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
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUpVariants}
      transition={{ ...motionTimings.fadeUp, delay: reduceMotion ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function BlogDetailsPage() {
  const reduceMotion = useReducedMotion();
  const [tocOpen, setTocOpen] = useState(false);
  const [activeTocItem, setActiveTocItem] = useState(tocItems[0]);
  const params = useParams<{ slug?: string }>();
  const activePost =
    blogPosts.find((post) => slugify(post.title) === params.slug) ?? blogPosts[0];

  return (
    <>
      <TopBar />
      <Header />
      <main className="bg-secondary">
        <section className="bg-white pb-16 pt-6 lg:py-12">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-6 lg:grid-cols-[minmax(0,0.22fr)_minmax(0,0.56fr)_minmax(0,0.22fr)] lg:gap-6 lg:px-10">
            <motion.aside
              initial={reduceMotion ? false : { opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={motionTimings.fadeUp}
              className="order-2 hidden space-y-7 lg:order-1 lg:sticky lg:top-32 lg:block lg:self-start"
            >
              <div className="rounded-2xl border border-system bg-card p-6 shadow-card">
                <h2 className="font-heading text-lg font-semibold text-midnight">
                  Table of Contents
                </h2>
                <nav className="relative mt-7">
                  <span className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-[var(--color-border-gray)]" />
                  <div className="grid gap-3">
                    {tocItems.map((item) => {
                      const active = activeTocItem === item;

                      return (
                        <a
                          key={item}
                          href={`#${slugify(item)}`}
                          onClick={() => setActiveTocItem(item)}
                          className={`group relative flex items-start gap-4 text-xs leading-5 transition ${
                            active
                              ? "font-semibold text-accent"
                              : "text-muted-strong hover:text-accent"
                          }`}
                        >
                          <span
                            className={`relative z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 bg-white transition ${
                              active
                                ? "border-[var(--color-industrial-orange)]"
                                : "border-[var(--color-border-gray)] group-hover:border-[var(--color-industrial-orange)]"
                            }`}
                          />
                          <span>{item}</span>
                        </a>
                      );
                    })}
                  </div>
                </nav>
              </div>

              <div className="relative isolate hidden overflow-hidden rounded-2xl p-7 text-white shadow-card lg:block">
                <Image
                  src="/images/hero-industrial-machinery.webp"
                  alt="Industrial production workspace with expert manufacturing support"
                  fill
                  sizes="(min-width: 1024px) 22vw, 100vw"
                  className="-z-20 object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(15,23,42,0.78))]" />
                <h2 className="font-heading text-xl font-semibold leading-tight text-white">
                  Let Precision Plastics &amp; Foam Simplify Your Manufacturing
                  Process
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/78">
                  Connect with our team for plastic machining and foam solutions tailored to your needs.
                </p>
                <Link href="/contact" className="btn-primary mt-6 w-full px-6">
                  Contact Us
                  <ArrowRight size={17} />
                </Link>
              </div>
            </motion.aside>

            <article className="order-1 lg:order-2">
              <motion.div
                initial={reduceMotion ? false : "hidden"}
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: reduceMotion ? 0 : 0.09 }
                  }
                }}
              >
                <motion.h1
                  variants={fadeUpVariants}
                  className="font-heading text-[1.75rem] font-bold leading-tight text-midnight sm:text-[2.1rem] lg:text-[2.10rem]"
                >
                  {activePost.title}
                </motion.h1>
                <motion.div
                  variants={fadeUpVariants}
                  className="mt-5 flex items-center justify-between gap-4 text-sm text-muted"
                >
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={17} className="text-accent" />
                    {activePost.date}
                  </span>
                  <span className="font-medium text-technical">
                    {activePost.readTime}
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeUpVariants}
                  className="group relative mt-8 h-[18rem] overflow-hidden rounded-2xl bg-primary sm:mt-10 sm:h-[31rem]"
                >
                  <Image
                    src={activePost.image}
                    alt={activePost.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </motion.div>

                <motion.details
                  open={tocOpen}
                  onToggle={(event) => setTocOpen(event.currentTarget.open)}
                  variants={fadeUpVariants}
                  className="group mt-6 rounded-2xl border border-system bg-card p-5 shadow-card lg:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-midnight [&::-webkit-details-marker]:hidden">
                    <span>Table of Contents</span>
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-accent transition group-open:rotate-180"
                    />
                  </summary>
                  <div className="mt-4 grid gap-2 border-t border-system pt-4">
                    {tocItems.map((item) => (
                      <a
                        key={item}
                        href={`#${slugify(item)}`}
                        onClick={() => {
                          setActiveTocItem(item);
                          setTocOpen(false);
                        }}
                        className={`rounded-lg px-3 py-2 text-xs leading-5 transition ${
                          activeTocItem === item
                            ? "bg-[color-mix(in_srgb,var(--color-industrial-orange)_8%,white)] font-semibold text-accent"
                            : "text-muted-strong hover:bg-[var(--color-soft-white)] hover:text-accent"
                        }`}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </motion.details>
              </motion.div>

              <div className="mt-8 space-y-12 sm:mt-12">
                {articleSections.map((section, index) => (
                  <Reveal key={section.title} delay={index * 0.02}>
                    <section id={slugify(section.title)} className="scroll-mt-32">
                      <h2 className="font-heading text-xl font-semibold leading-tight text-midnight sm:text-[1.75rem]">
                        {section.title}
                      </h2>
                      <span className="mt-4 block h-1 w-16 rounded-full bg-[var(--color-industrial-orange)]" />
                      <div className="mt-6 space-y-5">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-sm leading-6 text-muted-strong sm:leading-7"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  </Reveal>
                ))}
              </div>
            </article>

            <motion.aside
              initial={reduceMotion ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={motionTimings.fadeUp}
              className="order-3 lg:sticky lg:top-32 lg:self-start"
            >
              <div className="rounded-xl border border-system bg-card p-6 shadow-card">
                <h2 className="h4">Latest Blogs</h2>
                <motion.div
                  className="mt-5 grid gap-3"
                  initial={reduceMotion ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: reduceMotion ? 0 : 0.06 }
                    }
                  }}
                >
                  {latestBlogs.map((blog) => (
                    <motion.article
                      key={blog.title}
                      variants={fadeUpVariants}
                      className="group grid grid-cols-[5rem_1fr] gap-4"
                    >
                      <Link
                        href={`/blogs/${slugify(blog.title)}`}
                        className="focus-ring relative h-[64px] overflow-hidden rounded-lg bg-primary"
                      >
                        <Image
                          src={blog.image}
                          alt={blog.alt}
                          fill
                          sizes="5rem"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </Link>
                      <div className="min-w-0">
                        <h3 className="line-clamp-2 font-heading text-xs font-medium leading-snug text-midnight transition group-hover:text-technical">
                          <Link href={`/blogs/${slugify(blog.title)}`}>
                            {blog.title}
                          </Link>
                        </h3>
                        <p className="mt-2 flex items-center gap-1.5 text-[11px] text-muted">
                          <CalendarDays size={13} />
                          {blog.date}
                        </p>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </motion.aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
