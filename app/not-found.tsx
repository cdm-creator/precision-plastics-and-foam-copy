"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroBottomDivider } from "@/components/HeroBottomDivider";
import { TopBar } from "@/components/layout/top-bar";
import { fadeUpVariants, motionTimings } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Home, SearchX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const helpfulLinks = [
  { label: "Foam Inserts", href: "/foam-inserts" },
  { label: "Plastic Machining", href: "/plastic-machining" },
  { label: "Industries", href: "/industries" },
  { label: "Contact Us", href: "/contact" }
];

export default function NotFoundPage() {
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
              src="/images/hero-industrial-machinery.webp"
              alt="Industrial manufacturing equipment in a precision facility"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[62%_center] saturate-[0.92] contrast-110"
            />
          </motion.div>
          <div className="absolute inset-0 -z-20 bg-[#06152c]/58" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,21,44,0.94)_0%,rgba(6,21,44,0.7)_44%,rgba(6,21,44,0.18)_78%,transparent_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_34%,rgba(219,75,25,0.18),transparent_23rem),radial-gradient(circle_at_18%_55%,rgba(37,99,235,0.14),transparent_28rem),linear-gradient(180deg,rgba(3,10,22,0.06),rgba(3,10,22,0.72))]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.13)_1px,transparent_1px)] bg-[length:24px_24px] opacity-[0.055]" />
          <HeroBottomDivider />

          <div className="relative z-20 mx-auto flex min-h-[560px] w-full max-w-[1280px] items-center px-6 py-24 md:min-h-[640px] lg:min-h-[720px] lg:px-8">
            <motion.div
              className="max-w-[680px] pb-16 lg:pb-24"
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
                <SearchX size={28} strokeWidth={1.8} />
              </motion.div>
              <motion.p
                variants={fadeUpVariants}
                className="mt-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-accent sm:text-sm"
              >
                <span className="h-6 w-0.5 bg-[var(--color-industrial-orange)]" />
                Page Not Found
              </motion.p>
              <motion.h1
                variants={fadeUpVariants}
                className="mt-5 font-heading text-[2.35rem] font-semibold leading-tight text-white sm:text-[3rem]"
              >
                This page is out of tolerance.
              </motion.h1>
              <motion.p
                variants={fadeUpVariants}
                className="mt-5 max-w-xl text-base leading-8 text-white/76"
              >
                The page you&apos;re looking for may have moved, been removed,
                or never existed. Let&apos;s get you back to the right solution.
              </motion.p>
              <motion.div
                variants={fadeUpVariants}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <Link href="/" className="btn-primary">
                  Back to Home
                  <Home size={17} />
                </Link>
                <Link href="/contact" className="btn-primary">
                  Contact Us
                  <ArrowRight size={17} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white pb-16 pt-8 lg:pb-20 lg:pt-10">
          <div className="container-width">
            <div className="grid gap-4 md:grid-cols-4">
              {helpfulLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between rounded-xl border border-system bg-card p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--color-industrial-orange)_38%,var(--color-border-gray))]"
                >
                  <span className="font-heading text-sm font-semibold text-midnight transition group-hover:text-accent">
                    {link.label}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-accent transition group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
