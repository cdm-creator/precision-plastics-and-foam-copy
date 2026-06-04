"use client";

import { fadeUpVariants, motionTimings } from "@/lib/motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowUpRight,
  Box,
  LucideIcon,
  PackageCheck,
  Printer,
  Router,
  Scissors,
  Wrench
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styles from "./services-slider.module.css";

type Service = {
  title: string;
  text: string;
  href: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Cut-to-Size",
    text: "Our advanced cutting equipment allows us to deliver custom-cut plastic sheets, rods, and tubes. Whether you need a single piece or bulk orders, each cut is prepared for accuracy and consistency.",
    href: "/plastic-machining",
    icon: Scissors
  },
  {
    title: "3D Printing",
    text: "We offer SLA and SLS 3D printing services to produce high-resolution, durable, and detailed parts for prototypes, industrial testing, and functional end-use components.",
    href: "/plastic-machining#services",
    icon: Printer
  },
  {
    title: "CNC Routing & Machining",
    text: "We machine complex shapes, intricate patterns, and detailed plastic components for prototypes, production runs, and industrial applications.",
    href: "/plastic-machining",
    icon: Router
  },
  {
    title: "Custom Fabrication",
    text: "We provide custom design, cutting, drilling, and fabrication services to create tailored plastic solutions for specific project needs.",
    href: "/contact",
    icon: Wrench
  },
  {
    title: "Custom Cases",
    text: "We build custom case solutions with precision-cut foam interiors to protect, organize, and present tools, equipment, electronics, and sensitive products.",
    href: "/foam-inserts",
    icon: PackageCheck
  },
  {
    title: "Foam Insert Design",
    text: "Custom cavity layouts, case-ready foam systems, and protective packaging plans help organize sensitive tools, products, and devices.",
    href: "/foam-inserts",
    icon: Box
  }
];

export function ServicesSlider() {
  const reduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
    duration: 44
  });

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || reduceMotion || isPaused) {
      return;
    }

    const autoplay = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 4200);

    return () => window.clearInterval(autoplay);
  }, [emblaApi, isPaused, reduceMotion]);

  return (
    <section id="services" className={styles.section}>
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
          className={styles.header}
        >
          <motion.p variants={fadeUpVariants} className="eyebrow mb-3">
            Our Services
          </motion.p>
          <motion.h2 variants={fadeUpVariants} className={`h2 ${styles.heading}`}>
            Find The Perfect Solution With Our Services
          </motion.h2>
          <motion.p variants={fadeUpVariants} className={`body ${styles.intro}`}>
            From cut-to-size plastic materials to CNC machining, 3D printing,
            custom fabrication, and custom case solutions, our team delivers precise
            solutions built around your project requirements.
          </motion.p>
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
          aria-label="Our services carousel"
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
            {services.map(({ title, text, href, icon: Icon }) => (
              <div className={styles.slide} key={title}>
                <motion.article className={styles.card}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <Icon size={30} strokeWidth={1.7} />
                  </span>
                  <h3 className={`h3 ${styles.title}`}>{title}</h3>
                  <p className={`small-text ${styles.text}`}>{text}</p>
                  <Link href={href} className={styles.link}>
                    Read More
                    <ArrowUpRight size={15} />
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
