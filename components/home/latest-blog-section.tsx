"use client";

import { fadeUpVariants, motionTimings } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    day: "08",
    month: "May",
    title: "CNC Machining vs. Injection Molding: Which is Right?",
    description:
      "Compare precision, tooling cost, lead time, and production volume for your next plastic component.",
    category: "Plastic Machining",
    readTime: "5 Min Read",
    href: "/blogs/cnc-machining-vs-injection-molding-which-is-right",
    image: "/images/plastic-portfolio-cnc-machine.webp",
    alt: "CNC machine used for plastic machining"
  },
  {
    day: "12",
    month: "May",
    title: "How Custom Foam Inserts Protect High-Value Equipment",
    description:
      "Explore how precision-cut foam inserts protect sensitive tools, electronics, and mission-critical equipment.",
    category: "Foam Solutions",
    readTime: "4 Min Read",
    href: "/blogs/how-custom-foam-inserts-protect-high-value-equipment",
    image: "/images/foam-portfolio-camera-lens-insert.webp",
    alt: "Camera lenses organized in custom cut foam"
  },
  {
    day: "03",
    month: "May",
    title: "Top Industries That Benefit from Custom Plastic Parts",
    description:
      "From aerospace to medical devices, custom plastic components help teams improve durability, fit, weight, and performance.",
    category: "Industry Insights",
    readTime: "6 Min Read",
    href: "/blogs/top-industries-that-benefit-from-custom-plastic-parts",
    image: "/images/plastic-portfolio-white-sprocket.webp",
    alt: "White machined plastic sprocket component"
  }
];

export function LatestBlogSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[radial-gradient(circle_at_50%_12%,rgba(37,99,235,0.05),transparent_30rem),var(--color-soft-white)] py-16">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.08 }
            }
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-sm font-semibold uppercase tracking-[0.18em] text-accent"
          >
            Latest Blog
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="mt-4 font-heading text-[2rem] font-semibold leading-tight text-midnight sm:text-[2.35rem]"
          >
            Insights &amp; Industry Updates
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-strong"
          >
            Stay informed with expert tips, machining insights, and foam
            solution updates from Precision Plastics &amp; Foam.
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.08 }
            }
          }}
          className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeUpVariants}
              transition={motionTimings.fadeUp}
              className="group relative min-h-[390px] overflow-hidden rounded-2xl border border-system bg-primary shadow-[0_12px_34px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,42,0.12)]"
            >
              <Link href={post.href} className="focus-ring absolute inset-0">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="sr-only">{post.title}</span>
              </Link>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.64)_0%,rgba(15,23,42,0.34)_45%,rgba(15,23,42,0.62)_100%)]" />

              <div className="relative z-10 flex min-h-[390px] flex-col justify-between p-5 sm:p-6">
                <h3 className="line-clamp-2 max-w-[20rem] font-heading text-xl font-semibold leading-tight text-white">
                  <Link href={post.href} className="focus-ring">
                    {post.title}
                  </Link>
                </h3>

                <div className="overflow-hidden rounded-xl bg-white shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
                  <div className="grid grid-cols-2 divide-x divide-[var(--color-border-gray)]">
                    <div className="p-4">
                      <p className="font-heading text-xl font-semibold leading-tight text-accent">
                        {post.day} {post.month}
                      </p>
                      <p className="mt-3 line-clamp-2 text-xs leading-5 text-muted-strong">
                        {post.category}
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="font-heading text-sm font-semibold leading-tight text-technical">
                        {post.readTime}
                      </p>
                      <p className="mt-3 line-clamp-2 text-xs leading-5 text-muted-strong">
                        {post.description}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={post.href}
                    className="flex items-center justify-between border-t border-[var(--color-border-gray)] px-4 py-3 text-sm font-semibold text-accent transition group-hover:bg-[rgba(37,99,235,0.08)] group-hover:text-technical"
                  >
                    Read More
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                  <span className="block h-1 origin-left scale-x-75 bg-[linear-gradient(90deg,var(--color-precision-blue),var(--color-industrial-orange))] transition duration-500 group-hover:scale-x-100" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
