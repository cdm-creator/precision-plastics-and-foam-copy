"use client";

import {
  fadeUpVariants,
  heroMediaVariants,
  motionTimings
} from "@/lib/motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Plastic Machining",
    title: "Custom Plastic, Carbon Fiber Machining & Foam Insert Solutions for Precision Industrial Components",
    text: "Precision Plastics & Foam delivers custom CNC-machined plastic parts for industrial, aerospace, electronics, tooling, and manufacturing applications with reliable quality and fast turnaround.",
    features: [
      "Fast quote support",
      "Prototype to production",
      "Industrial-grade materials"
    ],
    cta: "Request a Quote",
    href: "/contact",
    image: "/images/hero-industrial-machinery.webp",
    imageAlt: "CNC machining precision industrial component"
  }
];

const featureStrip = [
  { label: "Custom Manufacturing", href: "/industries/custom-manufacturing-rd" },
  { label: "One-stop Fabrication", href: "/plastic-machining" },
  { label: "Reliable Delivery", href: "/contact" }
];

export function HeroSlider() {
  const reduceMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
    duration: 58
  });

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    if (reduceMotion) {
      return () => {
        emblaApi.off("select", onSelect);
      };
    }

    const autoplay = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 9500);

    return () => {
      window.clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, reduceMotion]);

  return (
    <section className="hero-slider" aria-label="Precision Plastics & Foam services">
      <div className="hero-slider__viewport" ref={emblaRef}>
        <div className="hero-slider__track">
          {slides.map((slide, index) => (
            <article className="hero-slider__slide" key={slide.title}>
              <div className="hero-slider__image-wrap">
                <motion.div
                  initial={reduceMotion ? false : "hidden"}
                  animate={selectedIndex === index ? "visible" : "hidden"}
                  variants={heroMediaVariants}
                  transition={motionTimings.hero}
                  className="hero-slider__image-motion"
                >
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="hero-slider__image"
                  />
                </motion.div>
              </div>

              <div className="hero-slider__content container-width">
                <motion.div
                  initial={reduceMotion ? false : "hidden"}
                  animate={selectedIndex === index ? "visible" : "hidden"}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: reduceMotion ? 0 : 0.1,
                        delayChildren: reduceMotion ? 0 : 0.12
                      }
                    }
                  }}
                  className="hero-slider__copy"
                >
                  <motion.p variants={fadeUpVariants} className="eyebrow">
                    {slide.eyebrow}
                  </motion.p>
                  <motion.h1 variants={fadeUpVariants} className="h1 hero-slider__title">
                    {slide.title}
                  </motion.h1>
                  <motion.p variants={fadeUpVariants} className="body-large hero-slider__text">
                    {slide.text}
                  </motion.p>
                  <motion.ul variants={fadeUpVariants} className="hero-slider__features">
                    {slide.features.map((feature) => (
                      <li key={feature} className="hero-slider__feature">
                        <CheckCircle2 className="hero-slider__feature-icon" />
                        {feature}
                      </li>
                    ))}
                  </motion.ul>
                  <motion.div variants={fadeUpVariants}>
                    <Link href={slide.href} className="btn-primary">
                      {slide.cta}
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="hero-slider__strip">
        <div className="container-width hero-slider__strip-inner">
          {featureStrip.map((feature) => (
            <Link href={feature.href} key={feature.label} className="hero-slider__strip-item">
              <span className="hero-slider__strip-icon">
                <ArrowRight size={15} />
              </span>
              <span>{feature.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
