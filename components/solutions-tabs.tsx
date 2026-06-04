"use client";

import { fadeUpVariants, motionTimings } from "@/lib/motion";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./solutions-tabs.module.css";

export type SolutionTab = {
  title: string;
  panelTitle: string;
  image: string;
  imageAlt: string;
  text: string;
  checks: string[];
};

type SolutionsTabsProps = {
  id?: string;
  eyebrow: string;
  title: string;
  tabs: SolutionTab[];
  ctaHref?: string;
  ctaLabel?: string;
  ariaLabel?: string;
};

export function SolutionsTabs({
  id,
  eyebrow,
  title,
  tabs,
  ctaHref,
  ctaLabel,
  ariaLabel = "Solutions"
}: SolutionsTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const reduceMotion = useReducedMotion();
  const tab = tabs[activeTab];

  return (
    <section id={id} className={styles.section}>
      <div className="container-width">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariants}
          transition={motionTimings.fadeUp}
          className="max-w-3xl"
        >
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h2 mt-3">{title}</h2>
        </motion.div>

        <div className={styles.shell}>
          <div className={styles.tabList} role="tablist" aria-label={ariaLabel}>
            {tabs.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={activeTab === index}
                onClick={() => setActiveTab(index)}
                className={`${styles.tabButton} ${
                  activeTab === index ? styles.tabButtonActive : ""
                }`}
              >
                <span>{item.title}</span>
                <ArrowUpRight className={styles.tabArrow} size={18} strokeWidth={1.9} />
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={tab.title}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
              transition={motionTimings.fadeUp}
              className={`industrial-card ${styles.panel}`}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={tab.image}
                  alt={tab.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className={styles.image}
                />
              </div>
              <div>
                <h3 className="h3">{tab.panelTitle}</h3>
                <p className="body mt-4">{tab.text}</p>
                <ul className={styles.checkList}>
                  {tab.checks.map((check) => (
                    <li key={check} className={`small-text ${styles.checkItem}`}>
                      <CheckCircle2 className={styles.checkIcon} size={18} />
                      {check}
                    </li>
                  ))}
                </ul>
                {ctaHref && ctaLabel ? (
                  <Link href={ctaHref} className="btn-primary mt-7 inline-flex">
                    {ctaLabel}
                  </Link>
                ) : null}
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
