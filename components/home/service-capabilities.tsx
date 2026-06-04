"use client";

import { fadeUpVariants, motionTimings } from "@/lib/motion";
import { ArrowRight, PackageCheck, Settings } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./service-capabilities.module.css";

const capabilities = [
  {
    title: "Custom Industrial Foam Inserts",
    description:
      "Engineered protective interiors for cases, kits, tools, electronics, and high-value equipment.",
    image: "/images/service-capability-foam.webp",
    imageAlt: "Dark custom foam insert case interior",
    icon: PackageCheck,
    href: "/foam-inserts",
    variant: "dark",
    tags: [
      "Case inserts",
      "Die-cut foam",
      "Tool organization",
      "Shock protection",
      "Protective packaging"
    ]
  },
  {
    title: "Plastic Machining",
    description:
      "Custom machined plastic components, prototype parts, panels, fixtures, and industrial assemblies.",
    image: "/images/service-capability-plastic-machining.webp",
    imageAlt: "CNC machining white plastic component",
    icon: Settings,
    href: "/plastic-machining",
    variant: "light",
    tags: [
      "CNC plastic machining",
      "Custom fabrication",
      "Prototype parts",
      "Production runs",
      "Industrial components"
    ]
  }
];

export function ServiceCapabilities() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="service-capabilities-title">
      <div className={`container-width ${styles.inner}`}>
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
          className={styles.copy}
        >
          <motion.p variants={fadeUpVariants} className="eyebrow">
            Service Capabilities
          </motion.p>
          <motion.h2
            id="service-capabilities-title"
            variants={fadeUpVariants}
            className={`h2 ${styles.title}`}
          >
            Protective interiors and machined plastic parts from{" "}
            <strong>one precision partner</strong>
          </motion.h2>
          <motion.span variants={fadeUpVariants} className={styles.accentLine} />
          <motion.p variants={fadeUpVariants} className={`body ${styles.description}`}>
            From first CAD layout to production-ready fabrication, every detail
            is organized around fit, repeatability, and industrial use.
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
                staggerChildren: reduceMotion ? 0 : 0.12,
                delayChildren: reduceMotion ? 0 : 0.08
              }
            }
          }}
          className={styles.cards}
        >
          {capabilities.map(({ title, description, image, imageAlt, icon: Icon, href, variant, tags }) => (
            <motion.article
              key={title}
              variants={fadeUpVariants}
              transition={motionTimings.fadeUp}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className={`${styles.card} ${
                variant === "dark" ? styles.darkCard : styles.lightCard
              }`}
            >
              <div className={styles.cardImageWrap}>
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <span className={styles.iconWrap} aria-hidden="true">
                  <Icon size={27} strokeWidth={1.7} />
                </span>
                <h3 className={`h3 ${styles.cardTitle}`}>{title}</h3>
                <p className={`small-text ${styles.cardText}`}>{description}</p>
                <div className={styles.tags}>
                  {tags.map((tag) => (
                    <span className={styles.tag} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={href} className={styles.link}>
                  View capability
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
