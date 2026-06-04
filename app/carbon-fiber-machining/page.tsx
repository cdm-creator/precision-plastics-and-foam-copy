"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroBottomDivider } from "@/components/HeroBottomDivider";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CarbonFiberServicesSection } from "@/components/carbon-fiber/CarbonFiberServicesSection";
import { ApplicationsSlider } from "@/components/home/applications-slider";
import { CoreCapabilities } from "@/components/home/core-capabilities";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCtaBanner } from "@/components/home/final-cta-banner";
import { GalleryImage, GallerySection } from "@/components/home/GallerySection";
import { LatestBlogSection } from "@/components/home/latest-blog-section";
import { MaterialsCapabilities } from "@/components/home/materials-capabilities";
import { ServicesSlider } from "@/components/home/services-slider";
import { TopBar } from "@/components/layout/top-bar";
import { fadeUpVariants, heroMediaVariants, motionTimings } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./carbon-fiber-machining-page.module.css";

const carbonFiberPortfolioImages: GalleryImage[] = [
  {
    src: "/images/carbon-portfolio-tubes.webp",
    alt: "Rows of round carbon fiber tubes"
  },
  {
    src: "/images/carbon-portfolio-plate-parts.webp",
    alt: "Flat machined carbon fiber plate parts"
  },
  {
    src: "/images/carbon-portfolio-carbon-aluminum-parts.webp",
    alt: "Carbon fiber and aluminum machined components"
  },
  {
    src: "/images/carbon-portfolio-round-flanges.webp",
    alt: "Round carbon fiber flange parts"
  },
  {
    src: "/images/carbon-portfolio-matte-stacked-parts.webp",
    alt: "Stacked matte carbon fiber machined parts"
  },
  {
    src: "/images/carbon-portfolio-cnc-closeup.webp",
    alt: "Close-up CNC machining carbon fiber material"
  },
  {
    src: "/images/carbon-portfolio-batch-links.webp",
    alt: "Batch of small machined carbon fiber link parts"
  },
  {
    src: "/images/carbon-portfolio-drone-frame.webp",
    alt: "CNC machined carbon fiber drone frame"
  }
];

const carbonFiberFaqs = [
  {
    question: "What carbon fiber machining services do you provide?",
    answer:
      "We provide precision CNC machining for carbon fiber plates, brackets, panels, and custom composite components that require clean edges, accurate features, and repeatable fit."
  },
  {
    question: "Can you support carbon fiber batch production?",
    answer:
      "Yes. We support carbon fiber batch production for repeat parts, validated prototypes, and scalable manufacturing needs where consistent quality and efficient turnaround are important."
  },
  {
    question: "Do you offer carbon fiber tube solutions?",
    answer:
      "Yes. We provide carbon fiber tube solutions for lightweight structural applications, including clean cut finishes, dependable fit, and durable performance for industrial and engineered assemblies."
  },
  {
    question: "What types of carbon fiber parts can you machine?",
    answer:
      "Common work includes plates, links, brackets, flanges, drone frames, tube components, and custom composite shapes made for aerospace, robotics, industrial, and performance applications."
  },
  {
    question: "Can you work from drawings or CAD files?",
    answer:
      "Yes. You can send drawings, CAD files, dimensions, photos, or sample parts. Our team reviews the part geometry, tolerances, material needs, and production quantity before recommending the machining approach."
  },
  {
    question: "What should I include when requesting a quote?",
    answer:
      "Please include part drawings or CAD files, material requirements, thickness or tube dimensions, tolerances, quantities, finish expectations, and any application details that affect strength, weight, or fit."
  }
];

function FadeIn({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUpVariants}
      transition={motionTimings.fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function CarbonFiberMachiningPage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <TopBar />
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="carbon-fiber-machining-title">
          <motion.div
            className={styles.heroImage}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={heroMediaVariants}
            transition={{ ...motionTimings.hero, duration: 1.1 }}
          >
            <Image
              src="/images/carbon-fiber-machining-hero.webp"
              alt="CNC tool machining a custom carbon fiber sheet"
              fill
              priority
              sizes="100vw"
              className={styles.image}
            />
          </motion.div>
          <div className={styles.heroOverlay} />
          <div className={styles.vignette} />
          <HeroBottomDivider />

          <div className="container-width">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: reduceMotion ? 0 : 0.1
                  }
                }
              }}
              className={styles.heroContent}
            >
              <motion.nav variants={fadeUpVariants} className={`small-text ${styles.breadcrumb}`} aria-label="Breadcrumb">
                <Link href="/" className={styles.breadcrumbLink}>
                  Home
                </Link>
                <span>/</span>
                <span>Carbon Fiber Machining</span>
              </motion.nav>
              <motion.h1 id="carbon-fiber-machining-title" variants={fadeUpVariants} className={`h1 ${styles.heroTitle}`}>
                Carbon Fiber Machining
              </motion.h1>
              <motion.p variants={fadeUpVariants} className={`body-large ${styles.heroLead}`}>
                Precision carbon fiber machining for lightweight, high-strength
                components built around demanding performance requirements.
              </motion.p>
              <motion.p variants={fadeUpVariants} className={`body ${styles.heroText}`}>
                From prototype plates and brackets to production-ready composite
                parts, our team supports clean edges, accurate features, and
                repeatable results for complex carbon fiber applications.
              </motion.p>
              <motion.div variants={fadeUpVariants} className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Request Quote
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <CarbonFiberServicesSection />

        <GallerySection
          images={carbonFiberPortfolioImages}
          sectionClassName="bg-[radial-gradient(circle_at_50%_12%,rgba(37,99,235,0.05),transparent_30rem),var(--color-soft-white)]"
        />

        <CoreCapabilities />

        <section id="foam-inserts" className="bg-white pt-20 pb-12 lg:pb-14 lg:pt-32">
          <div className="container-width grid gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-stretch lg:gap-16">
            <FadeIn className="h-full">
              <div className="relative h-full min-h-[24rem] overflow-hidden rounded-industrial shadow-industrial">
                <div className="relative h-full min-h-[24rem]">
                  <Image
                    src="/images/carbon-precision-support-cnc.webp"
                    alt="Close-up CNC machining carbon fiber material"
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 rounded-industrial bg-white p-5 shadow-industrial">
                  <p className="small-text relative pl-11 text-midnight">
                    <span className="absolute left-0 top-0 text-4xl font-heading font-semibold leading-none text-accent">
                      &ldquo;
                    </span>
                    From prototype components to mission-ready equipment cases,
                    we build protection around the exact shape, weight, and
                    handling requirements of your program.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="flex h-full flex-col justify-center">
              <p className="eyebrow">Precision Support</p>
              <h2 className="h2 mt-4">
                The role of precision plastic and foam solutions in aerospace
              </h2>
              <p className="body mt-5">
                Aerospace and defense programs require repeatable protection,
                tight tolerances, and careful handling for sensitive components.
                Our team supports programs where every insert, machined plastic
                part, and transport system needs to perform reliably.
              </p>
              <div className="mt-9 grid gap-5">
                {[
                  "Precision-fit foam inserts for sensitive aerospace components.",
                  "Machined plastic parts built for repeatability and clean finishes.",
                  "Reusable packaging systems for field, lab, and contractor workflows."
                ].map((point) => (
                  <div key={point} className="flex items-center gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-control bg-[var(--color-industrial-orange)] text-white">
                      <ArrowRight size={17} />
                    </span>
                    <p className="body text-muted-strong">{point}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <ServicesSlider />

        <MaterialsCapabilities
          foamImage="/images/carbon-materials-foam-cnc.webp"
          foamImageAlt="CNC tool cutting carbon fiber material"
        />

        <ApplicationsSlider />

        <FaqSection
          introText="Find quick answers about carbon fiber machining, batch production, carbon fiber tubes, materials, drawings, and project quotes."
          faqs={carbonFiberFaqs}
        />

        <TestimonialsSection />

        <LatestBlogSection />

        <FinalCtaBanner />
      </main>
      <Footer />
    </>
  );
}
