"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroBottomDivider } from "@/components/HeroBottomDivider";
import { TopBar } from "@/components/layout/top-bar";
import { fadeUpVariants, heroMediaVariants, motionTimings } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Brain,
  Handshake,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Target
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./about-page.module.css";
import CountUp from "@/components/CountUp";

const stats = [
  {
    number: "10",
    accent: "+",
    label: "Years of Experience",
    text: "Delivering precision and performance-focused solutions."
  },
  {
    number: "500",
    accent: "+",
    label: "Projects Completed",
    text: "Successful custom fabrication projects across industries."
  },
  {
    number: "99",
    accent: "%",
    label: "Quality Assurance",
    text: "Rigorous quality checks for reliable results."
  },
  {
    number: "20",
    accent: "+",
    label: "Industries Served",
    text: "Supporting businesses with custom foam and plastic solutions."
  }
];

const values = [
  {
    title: "Precision",
    text: "We focus on accuracy in every cut, every detail, and every project.",
    icon: Ruler
  },
  {
    title: "Innovation",
    text: "We use modern tools and smart processes to solve complex production needs.",
    icon: Brain
  },
  {
    title: "Integrity",
    text: "Honest communication, transparent workflow, and reliable delivery.",
    icon: ShieldCheck
  },
  {
    title: "Customer Commitment",
    text: "Our customers' success drives every decision we make.",
    icon: Handshake
  }
];

function Reveal({
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

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <TopBar />
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="about-title">
          <motion.div
            className={styles.heroImage}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={heroMediaVariants}
            transition={{ ...motionTimings.hero, duration: 1.1 }}
          >
            <Image
              src="/images/about-hero.webp"
              alt="Manufacturing team reviewing industrial design on a monitor"
              fill
              priority
              sizes="100vw"
              className={styles.image}
            />
          </motion.div>
          <div className={styles.heroOverlay} />
          <div className={styles.heroVignette} />
          <HeroBottomDivider />

          <div className="container-width">
            <motion.div
              className={styles.heroContent}
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
            >
              <motion.nav variants={fadeUpVariants} className={`small-text ${styles.breadcrumb}`} aria-label="Breadcrumb">
                <Link href="/" className={styles.breadcrumbLink}>
                  Home
                </Link>
                <span>/</span>
                <span>About Us</span>
              </motion.nav>
              <motion.h1 id="about-title" variants={fadeUpVariants} className={`h1 ${styles.heroTitle}`}>
                About Us
              </motion.h1>
              <motion.p variants={fadeUpVariants} className={`body-large ${styles.heroText}`}>
                Delivering precision plastic and foam solutions with innovation,
                reliability, and a commitment to quality.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={`container-width ${styles.gridTwo}`}>
            <Reveal className={styles.whoCopy}>
              <p className="eyebrow">WHO WE ARE</p>
              <h2 className="h2 mt-3">
                Precision Driven. Quality Focused. Customer Committed.
              </h2>
              <p className="body mt-5">
                Precision Plastics & Foam provides custom industrial foam inserts
                and plastic machining solutions for businesses that require
                accuracy, protection, and dependable production quality. From
                concept to finished parts, our team focuses on fit, function,
                durability, and long-term customer value.
              </p>
              <Link href="/about#story" className="btn-primary mt-8 inline-flex">
                Know More About Us
              </Link>
            </Reveal>

            <Reveal className={styles.whoImages}>
              <div className={styles.largeImage}>
                <Image
                  src="https://images.pexels.com/photos/32845661/pexels-photo-32845661.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1400"
                  alt="Industrial engineer operating CNC machinery in a modern factory"
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.smallImage}>
                <Image
                  src="/images/foam-inserts-tools-case.webp"
                  alt="Custom foam insert holding organized industrial tools"
                  fill
                  sizes="(min-width: 1024px) 24vw, 62vw"
                  className={styles.image}
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.stats}>
          <motion.div
            className={`container-width ${styles.statsGrid}`}
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
            {stats.map(({ number, accent, label, text }) => (
              <motion.article key={label} variants={fadeUpVariants} className={styles.statItem}>
                <p className={styles.statNumber}>
                  <CountUp end={parseInt(number, 10) || 0} duration={1.2} />
                  <span>{accent}</span>
                </p>
                <h2 className={`h4 ${styles.statLabel}`}>{label}</h2>
                <p className={`small-text ${styles.statText}`}>{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className={`${styles.section} ${styles.values}`}>
          <div className="container-width">
            <Reveal className={styles.sectionHeader}>
              <p className="eyebrow">OUR VALUES</p>
              <h2 className="h2 mt-3">Built on Values. Focused on Excellence.</h2>
            </Reveal>
            <motion.div
              className={styles.valuesGrid}
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
              {values.map(({ title, text, icon: Icon }) => (
                <motion.article key={title} variants={fadeUpVariants} className={styles.valueItem}>
                  <span className={styles.valueIcon} aria-hidden="true">
                    <Icon size={36} strokeWidth={1.6} />
                  </span>
                  <h3 className="h4 mt-4">{title}</h3>
                  <p className="small-text mt-3">{text}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="story" className={`${styles.section} ${styles.story}`}>
          <div className={`container-width ${styles.gridTwo}`}>
            <Reveal className={styles.storyImage}>
              <Image
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1400"
                alt="Industrial manufacturing equipment in a clean production facility"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className={styles.image}
              />
              <div className={styles.missionCard}>
                <h3 className={`h4 ${styles.missionTitle}`}>Our Mission</h3>
                <p className={`small-text ${styles.missionText}`}>
                  To deliver precise, reliable, and cost-effective foam and
                  plastic solutions that help customers protect, organize, and
                  build with confidence.
                </p>
              </div>
            </Reveal>

            <Reveal className={styles.storyCopy}>
              <p className="eyebrow">OUR STORY</p>
              <h2 className="h2 mt-3">Engineering Solutions. Building Trust.</h2>
              <p className="body mt-5">
                Our work is built around a simple goal: provide reliable custom
                foam inserts and plastic machining solutions that businesses can
                depend on. We combine technical planning, material knowledge,
                fabrication experience, and customer-focused support to deliver
                solutions that meet real project requirements.
              </p>
              <p className="body mt-4">
                From protective packaging to machined plastic parts, every
                project is approached with careful attention to fit, performance,
                quality, and repeatability.
              </p>
              
            </Reveal>
          </div>
        </section>

        <section id="contact" className={styles.cta}>
          <div className={styles.ctaImage}>
            <Image
              src="https://images.pexels.com/photos/8865187/pexels-photo-8865187.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1800"
              alt="Close-up of CNC machine tooling in an industrial setting"
              fill
              sizes="100vw"
              className={styles.image}
            />
          </div>
          <div className={styles.ctaOverlay} />
          <Reveal>
            <div className={`container-width ${styles.ctaInner}`}>
              <div>
                <p className="eyebrow">REQUEST SUPPORT</p>
                <h2 className={`h2 mt-3 ${styles.ctaTitle}`}>
                  Need Custom Foam or Plastic Parts?
                </h2>
                <p className={`body ${styles.ctaText}`}>
                  Share your application, quantities, material requirements, or
                  drawings, and our team will help shape the right fabrication
                  path.
                </p>
              </div>
              <div className={styles.ctaActions}>
                <Link href="/contact" className="btn-primary">
                  Request Quote
                  <PackageCheck size={17} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Team
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
