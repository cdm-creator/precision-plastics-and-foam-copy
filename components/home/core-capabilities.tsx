"use client";

import { fadeUpVariants, motionTimings } from "@/lib/motion";
import {
  ArrowRight,
  Boxes,
  DraftingCompass,
  Grid3X3,
  Layers3,
  Settings,
  ShieldCheck
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./core-capabilities.module.css";

const cards = [
  {
    title: "Custom Fit",
    text: "Fabricatable to fit any cavity, including corrugated boxes, plastic boxes, hard cases, crates, or ATA cases.",
    icon: Boxes,
    variant: "dark"
  },
  {
    title: "Shock & Abrasion Protection",
    text: "Engineered foam solutions provide superior shock protection, vibration control, and abrasion resistance during transit and handling.",
    icon: ShieldCheck,
    variant: "light"
  },
  {
    title: "Organized Storage",
    text: "Custom cavities help organize tools, components, and products neatly inside a case or packaging system.",
    icon: Grid3X3,
    variant: "dark"
  },
  {
    title: "Specialty Foams",
    text: "Specialty foams such as Ethafoam, cross-linked foam, and beaded polyethylene help protect delicate surfaces.",
    icon: Layers3,
    variant: "light"
  },
  {
    title: "Plastic Machining",
    text: "Custom CNC-machined plastic components built for industrial and manufacturing applications.",
    icon: Settings,
    variant: "dark"
  },
  {
    title: "Engineering & Planning",
    text: "Collaborative design support and layout planning for precision fabrication and production workflows.",
    icon: DraftingCompass,
    variant: "light"
  }
];

export function CoreCapabilities() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.section}>
      <Image
        src="/images/core-capabilities-bg.webp?v=2"
        alt="Industrial refinery and manufacturing plant"
        fill
        sizes="100vw"
        className={styles.bg}
      />
      <div className={styles.overlay} />

      <div className={`container-width ${styles.inner}`}>
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.09
              }
            }
          }}
          className={styles.heading}
        >
          <motion.p variants={fadeUpVariants} className="eyebrow">
            Core Capabilities
          </motion.p>
          <motion.h2 variants={fadeUpVariants} className={styles.headingTitle}>
            A well-organized process<br />
            <strong>results in precision-built solutions</strong>
          </motion.h2>
          <motion.p variants={fadeUpVariants} className={styles.headingText}>
            With structured planning, industrial expertise, and reliable
            fabrication workflows, we deliver custom foam inserts and plastic
            machining solutions built for protection, performance, and long-term
            usability.
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.1
              }
            }
          }}
          className={styles.grid}
        >
          {cards.map(({ title, text, icon: Icon, variant }) => (
            <motion.article
              key={title}
              variants={fadeUpVariants}
              transition={motionTimings.fadeUp}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className={`${styles.card} ${
                variant === "dark" ? styles.dark : styles.light
              }`}
            >
              <span className={styles.accent} />
              <div className={styles.content}>
                <Icon className={styles.icon} />
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariants}
          transition={{ ...motionTimings.fadeUp, delay: 0.16 }}
          className={styles.cta}
        >
          <p className={styles.ctaText}>
            We&rsquo;re here to help you get started in the right direction with
            your project.
          </p>
          <Link href="/contact" className="btn-light-pill">
            Get a Quote
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
