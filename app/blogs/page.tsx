"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroBottomDivider } from "@/components/HeroBottomDivider";
import { TopBar } from "@/components/layout/top-bar";
import { fadeUpVariants, motionTimings } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Folder
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const POSTS_PER_PAGE = 6;

const blogPosts = [
  {
    category: "Foam Solutions",
    title: "How Custom Foam Inserts Protect High-Value Equipment",
    date: "May 12, 2026",
    excerpt:
      "Explore how precision-cut foam inserts protect sensitive tools, electronics, and mission-critical equipment during transport and storage.",
    image: "/images/foam-portfolio-camera-lens-insert.webp",
    alt: "Camera lenses organized in custom cut foam"
  },
  {
    category: "Plastic Machining",
    title: "CNC Machining vs. Injection Molding: Which is Right?",
    date: "May 8, 2026",
    excerpt:
      "Compare precision, tooling cost, lead time, and production volume to choose the right process for your next plastic component.",
    image: "/images/plastic-portfolio-cnc-machine.webp",
    alt: "CNC machine used for plastic machining"
  },
  {
    category: "Industry Insights",
    title: "Top Industries That Benefit from Custom Plastic Parts",
    date: "May 3, 2026",
    excerpt:
      "From aerospace to medical devices, custom plastic components help teams improve durability, fit, weight, and performance.",
    image: "/images/plastic-portfolio-white-sprocket.webp",
    alt: "White machined plastic sprocket component"
  },
  {
    category: "Manufacturing",
    title: "Inside Our Manufacturing Process: Quality Every Step",
    date: "April 28, 2026",
    excerpt:
      "A closer look at how planning, material selection, cutting, machining, and inspection create repeatable quality.",
    image: "/images/showcase-engineering-planning.webp",
    alt: "Engineering planning and manufacturing workflow"
  },
  {
    category: "Foam Solutions",
    title: "5 Benefits of Using Foam Inserts for Your Products",
    date: "April 21, 2026",
    excerpt:
      "Learn why engineered foam inserts improve organization, impact protection, presentation, and long-term product safety.",
    image: "/images/foam-portfolio-custom-case-layout.webp",
    alt: "Open hard case with custom cut black foam cavities"
  },
  {
    category: "Plastic Materials",
    title: "A Guide to Common Plastic Materials and Their Uses",
    date: "April 15, 2026",
    excerpt:
      "Understand common engineering plastics and how material properties influence strength, wear, temperature, and cost.",
    image: "/images/plastic-portfolio-ultem-printed-part.webp",
    alt: "Brown high-performance plastic fabricated manifold part"
  },
  {
    category: "Plastic Machining",
    title: "The Complete Guide to CNC Plastic Machining",
    date: "April 9, 2026",
    excerpt:
      "A practical guide to tolerances, materials, finishes, and design considerations for CNC-machined plastic parts.",
    image: "/images/plastic-portfolio-cnc-routing.webp",
    alt: "CNC routing a plastic sheet with visible shavings"
  },
  {
    category: "Industry Insights",
    title: "How Custom Solutions Improve Product Performance",
    date: "April 2, 2026",
    excerpt:
      "Discover how purpose-built foam and plastic solutions reduce field failures, improve usability, and support better outcomes.",
    image: "/images/portfolio-clear-machined-plastic.webp",
    alt: "Clear machined plastic component"
  },
  {
    category: "Foam Solutions",
    title: "Foam Packaging vs. Traditional Packaging: Which is Better?",
    date: "March 26, 2026",
    excerpt:
      "Compare protection, reusability, product fit, and presentation to determine which packaging approach is right for you.",
    image: "/images/foam-portfolio-blue-tray-insert.webp",
    alt: "Blue foam tray insert with multiple precision-cut compartments"
  }
];

const categories = [
  { name: "All Posts", count: blogPosts.length },
  {
    name: "Foam Solutions",
    count: blogPosts.filter((post) => post.category === "Foam Solutions").length
  },
  {
    name: "Plastic Machining",
    count: blogPosts.filter((post) => post.category === "Plastic Machining").length
  },
  {
    name: "Industry Insights",
    count: blogPosts.filter((post) => post.category === "Industry Insights").length
  },
  {
    name: "Manufacturing",
    count: blogPosts.filter((post) => post.category === "Manufacturing").length
  },
  {
    name: "Plastic Materials",
    count: blogPosts.filter((post) => post.category === "Plastic Materials").length
  }
];

function BlogCard({ post, index }: { post: (typeof blogPosts)[number]; index: number }) {
  const reduceMotion = useReducedMotion();
  const postHref = `/blogs/${post.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;

  return (
    <motion.article
      variants={fadeUpVariants}
      transition={{
        ...motionTimings.fadeUp,
        delay: reduceMotion ? 0 : index * 0.03
      }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-system bg-card shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-industrial"
    >
      <Link href={postHref} className="focus-ring block">
        <div className="relative h-56 overflow-hidden bg-primary">
          <motion.div
            className="absolute inset-0"
            whileHover={reduceMotion ? undefined : { scale: 1.06 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={post.image}
              alt={post.alt}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 42vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.18))]" />
          <span className="absolute bottom-4 right-4 rounded-full bg-white px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent shadow-card">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em]">
          <span className="inline-flex items-center gap-1.5 text-muted">
            <CalendarDays size={14} />
            {post.date}
          </span>
        </div>

        <h2 className="mt-4 font-heading text-[1rem] font-semibold leading-snug text-midnight transition duration-300 group-hover:text-accent line-clamp-2">
          <Link href={postHref} className="focus-ring">
            {post.title}
          </Link>
        </h2>
        <p className="small-text mt-3 line-clamp-2">{post.excerpt}</p>

        <Link
          href={postHref}
          className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-technical transition duration-300 hover:text-[var(--color-blue-hover)]"
        >
          Read More
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const reduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [currentPage, setCurrentPage] = useState(1);
  const filteredPosts = useMemo(
    () =>
      activeCategory === "All Posts"
        ? blogPosts
        : blogPosts.filter((post) => post.category === activeCategory),
    [activeCategory]
  );
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const visiblePosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const selectCategory = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <>
      <TopBar />
      <Header />
      <main className="bg-secondary">
        <section className="relative isolate min-h-[500px] overflow-hidden bg-[#06152c] text-white md:min-h-[560px] lg:min-h-[576px]">
          <motion.div
            className="absolute inset-0 -z-30"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.02 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="https://images.pexels.com/photos/32845661/pexels-photo-32845661.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1800"
              alt="Industrial engineer operating a CNC machine in a factory"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[68%_center] saturate-[1.02] contrast-110"
            />
          </motion.div>
          <div className="absolute inset-0 -z-20 bg-[#06152c]/34" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,21,44,0.86)_0%,rgba(6,21,44,0.5)_42%,rgba(6,21,44,0.08)_76%,transparent_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_34%,rgba(219,75,25,0.14),transparent_23rem),radial-gradient(circle_at_18%_55%,rgba(37,99,235,0.1),transparent_28rem),linear-gradient(180deg,rgba(3,10,22,0.02),rgba(3,10,22,0.58))]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.13)_1px,transparent_1px)] bg-[length:24px_24px] opacity-[0.055]" />
          <HeroBottomDivider />

          <div className="relative z-20 mx-auto flex min-h-[500px] w-full max-w-[1280px] items-center px-6 py-20 md:min-h-[560px] lg:min-h-[576px] lg:px-8">
            <motion.div
              className="max-w-[720px] pb-14 lg:pb-20"
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.1 }
                }
              }}
            >
              <motion.nav
                aria-label="Breadcrumb"
                variants={fadeUpVariants}
                className="small-text mb-7 flex flex-wrap items-center gap-2 text-white/70"
              >
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
                <span>/</span>
                <span className="text-white">Blog</span>
              </motion.nav>
              <motion.h1
                variants={fadeUpVariants}
                className="mt-0 font-heading text-[28px] font-bold leading-[1.02] text-white sm:text-[46px] lg:text-[50px] lg:leading-[0.98]"
              >
                Insights, Innovation &amp;
                <br />
                Industry Updates
              </motion.h1>
              <motion.p
                variants={fadeUpVariants}
                className="mt-7 max-w-[590px] text-base leading-8 text-white/80 sm:text-lg"
              >
                Stay informed with expert insights, industry trends, and company
                updates from Precision Plastics &amp; Foam.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-12">
          <div className="container-width grid gap-10 lg:grid-cols-[minmax(0,0.76fr)_minmax(15rem,0.24fr)] lg:gap-6 xl:gap-8">
            <div>
              <motion.div
                key={`${activeCategory}-${currentPage}`}
                className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
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
                {visiblePosts.map((post, index) => (
                  <BlogCard key={post.title} post={post} index={index} />
                ))}
              </motion.div>

              <motion.nav
                aria-label="Blog pagination"
                className="mt-14 flex items-center justify-center gap-2"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={motionTimings.fadeUp}
              >
                <motion.button
                  type="button"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-system bg-white text-midnight shadow-card transition hover:border-[var(--color-precision-blue)] hover:text-technical disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:border-system disabled:hover:text-midnight"
                  aria-label="Previous page"
                >
                  <ArrowLeft size={17} />
                </motion.button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <motion.button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    aria-current={page === currentPage ? "page" : undefined}
                    className={`focus-ring grid h-11 w-11 place-items-center rounded-full border text-sm font-semibold shadow-card transition ${
                      page === currentPage
                        ? "border-[var(--color-precision-blue)] bg-[var(--color-precision-blue)] text-white"
                        : "border-system bg-white text-midnight hover:border-[var(--color-precision-blue)] hover:text-technical"
                    }`}
                  >
                    {page}
                  </motion.button>
                ))}
                <motion.button
                  type="button"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-system bg-white text-midnight shadow-card transition hover:border-[var(--color-industrial-orange)] hover:text-accent disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:border-system disabled:hover:text-midnight"
                  aria-label="Next page"
                >
                  <ArrowRight size={17} />
                </motion.button>
              </motion.nav>
            </div>

            <motion.aside
              initial={reduceMotion ? false : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={motionTimings.fadeUp}
              className="space-y-7 lg:sticky lg:top-32 lg:self-start"
            >
              <div className="rounded-xl border border-system bg-card p-5 shadow-card">
                <h2 className="h4">Categories</h2>
                <div className="mt-5 grid gap-3">
                  {categories.map((category) => {
                    const isActive = category.name === activeCategory;

                    return (
                    <button
                      type="button"
                      key={category.name}
                      onClick={() => selectCategory(category.name)}
                      className={`group flex w-full items-center gap-3 rounded-lg border px-3 py-3 text-left transition ${
                        isActive
                          ? "border-[color-mix(in_srgb,var(--color-industrial-orange)_28%,var(--color-border-gray))] bg-[color-mix(in_srgb,var(--color-industrial-orange)_7%,white)]"
                          : "border-transparent hover:border-system hover:bg-[color-mix(in_srgb,var(--color-precision-blue)_5%,white)]"
                      }`}
                    >
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition group-hover:bg-[var(--color-industrial-orange)] group-hover:text-white ${
                          isActive
                            ? "bg-[var(--color-industrial-orange)] text-white"
                            : "bg-[color-mix(in_srgb,var(--color-industrial-orange)_10%,white)] text-accent"
                        }`}
                      >
                        <Folder size={16} />
                      </span>
                      <span className="flex-1 text-sm font-medium text-muted-strong transition group-hover:text-midnight">
                        {category.name}
                      </span>
                      <span className="rounded-full bg-[var(--color-chip-background)] px-2.5 py-1 text-xs font-semibold text-muted">
                        {category.count}
                      </span>
                    </button>
                  );
                  })}
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-[color-mix(in_srgb,var(--color-industrial-orange)_18%,var(--color-border-gray))] bg-[color-mix(in_srgb,var(--color-industrial-orange)_7%,white)] p-6 shadow-card">
                <h2 className="h4">About Us</h2>
                <p className="small-text mt-3">
                  Learn how Precision Plastics &amp; Foam supports industrial
                  teams with custom foam inserts, plastic machining, and
                  engineered protective solutions.
                </p>
                <Link href="/about" className="btn-primary mt-6 w-full">
                  Learn More
                  <ChevronRight size={17} />
                </Link>
              </div>
            </motion.aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
