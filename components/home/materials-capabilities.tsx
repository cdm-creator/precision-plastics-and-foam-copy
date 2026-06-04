"use client";

import { fadeUpVariants, motionTimings } from "@/lib/motion";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Cog, Layers3, PackageCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import styles from "./materials-capabilities.module.css";

const tabs = [
  {
    id: "foam",
    label: "Foam Materials",
    icon: PackageCheck,
    title: "Foam materials engineered for protection and performance",
    text: "We help select the right foam based on product weight, fragility, surface finish, impact resistance, and packaging environment.",
    items: [
      "Polyethylene",
      "EVA",
      "Anti-static foam",
      "Polyurethane",
      "Cross-linked foam"
    ],
    chips: ["Lightweight", "Shock absorption", "Cushioning", "Protection"],
    image: "/images/showcase-foam-inserts.webp",
    imageAlt: "Precision-cut foam insert and protective packaging material"
  },
  {
    id: "plastic",
    label: "Plastic Materials",
    icon: Layers3,
    title: "Plastic materials selected for precision machining",
    text: "Our plastic material options are chosen based on strength, rigidity, chemical resistance, machinability, and end-use performance.",
    items: ["Acrylic", "HDPE", "PVC", "Nylon", "Polycarbonate"],
    chips: ["Durable", "Chemical resistant", "Rigid", "High performance"],
    image: "https://images.pexels.com/photos/37335825/pexels-photo-37335825.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1400",
    imageAlt: "Close-up CNC machining head in an industrial precision manufacturing setting"
  },
  {
    id: "capabilities",
    label: "Capabilities",
    icon: Cog,
    title: "Fabrication capabilities built for industrial production",
    text: "From CNC routing to die cutting and prototyping, our capabilities support both custom one-off requirements and repeatable production runs.",
    items: ["CNC routing", "Die cutting", "Fabrication", "Prototyping", "Production runs"],
    chips: ["Precision", "Custom solutions", "Scalable", "Consistent quality"],
    image: "/images/showcase-plastic-machining.webp",
    imageAlt: "Industrial plastic machining and fabrication process"
  }
];

type MaterialsCapabilitiesProps = {
  foamImage?: string;
  foamImageAlt?: string;
};

export function MaterialsCapabilities({ foamImage, foamImageAlt }: MaterialsCapabilitiesProps = {}) {
  const configuredTabs = tabs.map((tab) =>
    tab.id === "foam" && foamImage
      ? {
          ...tab,
          image: foamImage,
          imageAlt: foamImageAlt ?? tab.imageAlt
        }
      : tab
  );
  const [activeTab, setActiveTab] = useState(configuredTabs[0]);
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="materials-capabilities-title">
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
            Materials and Capabilities
          </motion.p>
          <motion.h2 id="materials-capabilities-title" variants={fadeUpVariants} className={`h2 ${styles.title}`}>
            Selected for durability and application demands
          </motion.h2>
          <motion.p variants={fadeUpVariants} className={`body ${styles.intro}`}>
            Material choices are matched to protection goals, appearance,
            chemical exposure, impact needs, and production requirements.
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariants}
          transition={motionTimings.fadeUp}
          className={styles.tabs}
          role="tablist"
          aria-label="Materials and capabilities tabs"
        >
          {configuredTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab.id === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${tab.id}-panel`}
                className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                <Icon size={18} strokeWidth={1.8} />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.article
            key={activeTab.id}
            id={`${activeTab.id}-panel`}
            role="tabpanel"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={motionTimings.fadeUp}
            className={styles.panel}
          >
            <div className={styles.content}>
              <h3 className={`h3 ${styles.panelTitle}`}>{activeTab.title}</h3>
              <p className={`body ${styles.panelText}`}>{activeTab.text}</p>

              <ul className={styles.list}>
                {activeTab.items.map((item) => (
                  <li className={`small-text ${styles.listItem}`} key={item}>
                    <span className={styles.dot} />
                    {item}
                  </li>
                ))}
              </ul>

              <motion.div
                className={styles.chips}
                initial={reduceMotion ? false : "hidden"}
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: reduceMotion ? 0 : 0.05
                    }
                  }
                }}
              >
                {activeTab.chips.map((chip) => (
                  <motion.span variants={fadeUpVariants} className={styles.chip} key={chip}>
                    {chip}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={motionTimings.hero}
              className={styles.imageWrap}
            >
              <Image
                src={activeTab.image}
                alt={activeTab.imageAlt}
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className={styles.image}
              />
              <div className={styles.imageOverlay} />
            </motion.div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
