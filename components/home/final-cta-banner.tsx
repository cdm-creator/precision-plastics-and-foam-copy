"use client";

import { fadeUpVariants, heroMediaVariants, motionTimings } from "@/lib/motion";
import { ArrowRight, PackageCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./final-cta-banner.module.css";

export function FinalCtaBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="final-cta-title">
      <motion.div
        className={styles.imageWrap}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={heroMediaVariants}
        transition={{ ...motionTimings.hero, duration: 1.1 }}
      >
        <Image
          src="/images/final-cta-bg.webp"
          alt="Dark CNC machining and precision fabrication environment"
          fill
          sizes="100vw"
          className={styles.image}
        />
      </motion.div>
      <div className={styles.overlay} />
      <div className={styles.vignette} />

      <motion.div
        className={styles.content}
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
      >
        <motion.p variants={fadeUpVariants} className="eyebrow">
          Request support
        </motion.p>
        <motion.h2 id="final-cta-title" variants={fadeUpVariants} className={`h2 ${styles.title}`}>
          Need <strong>Custom Foam or Plastic Parts?</strong>
        </motion.h2>
        <motion.p variants={fadeUpVariants} className={`body ${styles.text}`}>
          Share the application, quantities, material requirements, or drawings,
          and our team will help shape the right fabrication path.
        </motion.p>
        <motion.div variants={fadeUpVariants} className={styles.actions}>
          <Link
            href="/contact"
            className={`btn-primary ${styles.button} ${styles.primary}`}
          >
            Request Quote
            <PackageCheck size={17} />
          </Link>
          <Link
            href="/industries"
            className={`btn-secondary ${styles.button} ${styles.secondary}`}
          >
            View Industries
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
