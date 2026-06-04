"use client";

import { fadeUpVariants, motionTimings } from "@/lib/motion";
import {
  ArrowRight,
  ClipboardCheck,
  Layers3,
  MonitorCog,
  Rocket,
  Truck
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import styles from "./process-section.module.css";

const steps = [
  {
    title: "Requirements",
    text: "Define project scope, quantities, tolerances, protection goals, and industrial use requirements.",
    icon: ClipboardCheck
  },
  {
    title: "Material Selection",
    text: "Choose the correct foam, plastic, density, thickness, and production-ready material configuration.",
    icon: Layers3
  },
  {
    title: "CAD Planning",
    text: "Build detailed CAD layouts, then execute CNC machining, foam conversion, cutting, routing, and finishing with precision.",
    icon: MonitorCog
  },
  {
    title: "Delivery",
    text: "Final inspection, packaging, and delivery preparation for reliable industrial deployment.",
    icon: Truck
  }
];

export function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="process" className={styles.section} aria-labelledby="process-title">
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
          className={styles.header}
        >
          <motion.p variants={fadeUpVariants} className="eyebrow">
            Process
          </motion.p>
          <motion.h2 id="process-title" variants={fadeUpVariants} className={`h2 ${styles.title}`}>
            A controlled path from requirements to delivery
          </motion.h2>
          <motion.span variants={fadeUpVariants} className={styles.accentLine} />
          <motion.p variants={fadeUpVariants} className={`body ${styles.intro}`}>
            From material selection to precision fabrication, every step is
            documented, controlled, and executed with industry-leading quality.
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
                staggerChildren: reduceMotion ? 0 : 0.1,
                delayChildren: reduceMotion ? 0 : 0.08
              }
            }
          }}
          className={styles.flow}
        >
          {steps.map(({ title, text, icon: Icon }, index) => (
            <motion.div
              className={styles.stepWrap}
              variants={fadeUpVariants}
              transition={motionTimings.fadeUp}
              key={title}
            >
              <motion.article
                className={styles.card}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={motionTimings.luxuryHover}
              >
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.iconWrap} aria-hidden="true">
                  <Icon size={43} strokeWidth={1.55} />
                </span>
                <h3 className={`h4 ${styles.cardTitle}`}>{title}</h3>
                <span className={styles.smallLine} />
                <p className={`small-text ${styles.text}`}>{text}</p>
              </motion.article>
              {index < steps.length - 1 ? <span className={styles.connector} /> : null}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariants}
          transition={{ ...motionTimings.fadeUp, delay: 0.12 }}
          className={styles.cta}
        >
          <span className={styles.ctaIcon} aria-hidden="true">
            <Rocket size={28} strokeWidth={1.7} />
          </span>
          <span className={styles.ctaText}>Ready to start your project?</span>
          <span className={styles.divider} />
          <Link href="/contact" className={styles.ctaLink}>
            Request a Quote
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
