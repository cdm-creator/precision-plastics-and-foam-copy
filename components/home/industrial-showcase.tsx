"use client";

import { fadeUpVariants, motionTimings } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Custom Foam Inserts",
    description:
      "Custom foam inserts designed for secure protection, organization, and durability across industrial applications.",
    image: "/images/showcase-custom-foam-inserts-case.webp",
    href: "/foam-inserts"
  },
  {
    title: "Plastic Fabrication",
    description:
      "Precision plastic fabrication solutions built for custom parts, prototypes, and production requirements.",
    image: "/images/showcase-cnc-machining-new.webp",
    href: "/plastic-machining"
  },
  {
    title: "Carbon Fiber Machining",
    description:
      "We provide precision carbon fiber machining solutions for lightweight, high-performance, and structurally durable components.",
    image: "/images/showcase-carbon-fiber-machining.webp",
    href: "/carbon-fiber-machining"
  }
];

export function IndustrialShowcase({
  eyebrow = "Precision Engineered Solutions",
  title = "Precision Plastic Fabrication, Custom Foam Inserts, & Carbon Fiber Machining",
  intro = "We specialize in precision CNC machining of plastics, custom foam inserts, and high-performance carbon fiber components. From prototype to production, we can deliver it with precision.  We help our customers bring complex designs to life with quality and speed"
}: {
  eyebrow?: string;
  intro?: string;
  title?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="industrial-showcase">
      <div className="container-width">
        <div className="industrial-showcase__header">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariants}
            transition={motionTimings.fadeUp}
          >
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="h2 industrial-showcase__title">
              {title}
            </h2>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariants}
            transition={{ ...motionTimings.fadeUp, delay: 0.08 }}
            className="body industrial-showcase__intro"
          >
            {intro}
          </motion.p>
        </div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.12
              }
            }
          }}
          className="industrial-showcase__grid"
        >
          {cards.map((card) => (
            <motion.article
              key={card.title}
              variants={fadeUpVariants}
              transition={motionTimings.fadeUp}
              className="showcase-card group"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="showcase-card__image"
              />
              <div className="showcase-card__overlay" />
              <div className="showcase-card__content">
                <h3 className="showcase-card__title">{card.title}</h3>
                <p className="showcase-card__description">
                  {card.description}
                </p>
                <Link href={card.href} className="showcase-card__link">
                  Read More
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
