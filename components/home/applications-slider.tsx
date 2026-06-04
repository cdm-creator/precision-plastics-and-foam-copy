"use client";

import { fadeUpVariants, motionTimings } from "@/lib/motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styles from "./applications-slider.module.css";

const industries = [
  {
    number: "01",
    title: "Aerospace & Defense",
    description:
      "High-performance components that meet strict industry standards for aerospace and defense applications.",
    href: "/industries/aerospace-defense",
    image: "/images/industry-aerospace-defense-case.webp",
    imageAlt: "Open protective equipment case for aerospace and defense applications"
  },
  {
    number: "02",
    title: "Oil & Gas",
    description:
      "Durable plastic and foam solutions for equipment protection, field service kits, and demanding oil and gas environments.",
    href: "/industries/oil-gas",
    image: "/images/plastic-service-custom-fabrication.webp",
    imageAlt: "Custom plastic fabrication equipment for oil and gas industrial applications"
  },
  {
    number: "03",
    title: "Medical Devices",
    description:
      "Biocompatible plastic and foam parts for medical devices, diagnostics, and life-saving technologies.",
    href: "/industries/medical-devices",
    image: "/images/showcase-engineering-planning.webp",
    imageAlt: "Engineering planning and precision review for medical device manufacturing"
  },
  {
    number: "04",
    title: "Industrial Automation",
    description:
      "Durable, precision-engineered components for machinery, robotics, and automated systems.",
    href: "/industries/industrial-automation",
    image: "/images/hero-industrial-machinery.webp",
    imageAlt: "Industrial machinery used for automated manufacturing"
  },
  {
    number: "05",
    title: "Energy & Power",
    description:
      "Reliable components for power generation, renewable energy systems, and energy infrastructure.",
    href: "/industries/energy-power",
    image: "/images/plastic-service-cnc.webp",
    imageAlt: "Custom plastic fabrication equipment for energy infrastructure components"
  },
  {
    number: "06",
    title: "Custom Manufacturing & R&D",
    description:
      "Flexible prototype and production support for specialized manufacturing teams, engineers, and R&D programs.",
    href: "/industries/custom-manufacturing-rd",
    image: "/images/foam-solution-equipment-cases.webp",
    imageAlt: "Custom foam and plastic protective components for manufacturing and research equipment"
  }
];

export function ApplicationsSlider() {
  const reduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
    duration: 40
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi || reduceMotion || isPaused) {
      return;
    }

    const autoplay = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 7200);

    return () => window.clearInterval(autoplay);
  }, [emblaApi, isPaused, reduceMotion]);

  return (
    <section id="applications" className={styles.section} aria-labelledby="applications-title">
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
          <div className={styles.copy}>
            <motion.p variants={fadeUpVariants} className="eyebrow">
              Industry Expertise
            </motion.p>
            <motion.h2 id="applications-title" variants={fadeUpVariants} className={`h2 ${styles.title}`}>
              Industries We Serve
            </motion.h2>
            <motion.p variants={fadeUpVariants} className={`body ${styles.intro}`}>
              Precision plastic machining, foam inserts, and protective
              packaging solutions built for demanding industrial environments.
            </motion.p>
          </div>

          <motion.div variants={fadeUpVariants} className={styles.controls}>
            <button
              type="button"
              className={styles.arrowButton}
              aria-label="Previous industry"
              onClick={scrollPrev}
            >
              <ArrowLeft size={19} />
            </button>
            <button
              type="button"
              className={styles.arrowButton}
              aria-label="Next industry"
              onClick={scrollNext}
            >
              <ArrowRight size={19} />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariants}
          transition={motionTimings.fadeUp}
          className={styles.viewport}
          ref={emblaRef}
          tabIndex={0}
          role="region"
          aria-label="Industries slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              scrollNext();
            }

            if (event.key === "ArrowLeft") {
              event.preventDefault();
              scrollPrev();
            }
          }}
        >
          <div className={styles.track}>
            {industries.map(({ number, title, description, href, image, imageAlt }) => (
              <div className={styles.slide} key={title}>
                <motion.article
                  className={styles.card}
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  transition={motionTimings.luxuryHover}
                >
                  <Link href={href} className={styles.cardLink} aria-label={`View ${title} industry solutions`}>
                    <div className={styles.imageWrap}>
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      sizes="(min-width: 1440px) 18vw, (min-width: 1024px) 24vw, (min-width: 768px) 48vw, 100vw"
                      className={styles.image}
                    />
                    <div className={styles.imageOverlay} />
                    </div>
                    <div className={styles.content}>
                      <span className={styles.number}>{number}</span>
                      <div className={styles.titleRow}>
                        <h3 className={`h4 ${styles.cardTitle}`}>{title}</h3>
                        <span className={styles.arrow} aria-hidden="true">
                          <ArrowRight size={17} />
                        </span>
                      </div>
                      <p className={`body ${styles.description}`}>{description}</p>
                    </div>
                  </Link>
                </motion.article>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
