"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroBottomDivider } from "@/components/HeroBottomDivider";
import { TopBar } from "@/components/layout/top-bar";
import { fadeUpVariants, motionTimings } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  DraftingCompass,
  Factory,
  Ruler,
  SlidersHorizontal,
  Warehouse,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const challengeFeatures = [
  {
    title: "Engineered for Performance",
    text: "Materials and designs that withstand tough conditions.",
    icon: BadgeCheck
  },
  {
    title: "Precision Manufacturing",
    text: "Advanced equipment and skilled craftsmanship for exact results.",
    icon: Ruler
  },
  {
    title: "Fast Turnaround",
    text: "On-time delivery to keep projects moving.",
    icon: Clock3
  },
  {
    title: "Custom Solutions",
    text: "No off-the-shelf limits. We build what you need.",
    icon: Wrench
  }
];

const requirementsItems = [
  {
    title: "All Under One Roof",
    text: "Custom foam inserts, plastic machining, and packaging support handled through one coordinated process.",
    icon: Factory
  },
  {
    title: "In-House Engineering",
    text: "Experienced designers and engineers support CAD planning, material selection, and production-ready solutions.",
    icon: DraftingCompass
  },
  {
    title: "Protective Case Solutions",
    text: "Custom case and crate solutions for tools, electronics, instruments, and high-value industrial equipment.",
    icon: BriefcaseBusiness
  },
  {
    title: "Large Material Inventory",
    text: "Foam, plastics, sheets, rods, tubes, and specialty materials available to support faster turnaround times.",
    icon: Warehouse
  },
  {
    title: "Customization Options",
    text: "Routing, cutting, fabrication, hardware, colors, handles, wheels, and reusable packaging options.",
    icon: SlidersHorizontal
  }
];

const industryCards = [
  {
    number: "01",
    title: "Aerospace & Defense",
    href: "/industries/aerospace-defense",
    text: "High-performance components that meet strict industry standards for aerospace and defense applications.",
    image: "/images/plastic-machining-hero.webp",
    alt: "CNC machining a precision component for aerospace and defense applications"
  },
  {
    number: "02",
    title: "Oil & Gas",
    href: "/industries/oil-gas",
    text: "Durable plastic and foam solutions for equipment protection, field service kits, and demanding oil and gas environments.",
    image: "/images/plastic-service-custom-fabrication.webp",
    alt: "Custom plastic fabrication equipment for oil and gas industrial applications"
  },
  {
    number: "03",
    title: "Medical Devices",
    href: "/industries/medical-devices",
    text: "Biocompatible plastic and foam parts for medical devices, diagnostics, and life-saving technologies.",
    image: "/images/showcase-engineering-planning.webp",
    alt: "Engineering planning and precision review for medical device manufacturing"
  },
  {
    number: "04",
    title: "Industrial Automation",
    href: "/industries/industrial-automation",
    text: "Durable, precision-engineered components for machinery, robotics, and automated systems.",
    image: "/images/hero-industrial-machinery.webp",
    alt: "Industrial machinery used for automated manufacturing"
  },
  {
    number: "05",
    title: "Energy & Power",
    href: "/industries/energy-power",
    text: "Reliable components for power generation, renewable energy systems, and energy infrastructure.",
    image: "/images/plastic-service-cnc.webp",
    alt: "Custom plastic fabrication equipment for energy infrastructure components"
  },
  {
    number: "06",
    title: "Custom Manufacturing & R&D",
    href: "/industries/custom-manufacturing-rd",
    text: "Flexible prototype and production support for specialized manufacturing teams, engineers, and R&D programs.",
    image: "/images/foam-solution-equipment-cases.webp",
    alt: "Custom foam and plastic protective components for manufacturing and research equipment"
  }
];

const industryShowcases = [
  {
    number: "01",
    title: "Aerospace & Defense",
    text: "Components and equipment manufactured for aerospace and defense applications present unique fabrication and packaging challenges. We create precision plastic and foam solutions for asymmetrical shapes, sensitive systems, and mission-critical equipment.",
    bullets: [
      "No shape too difficult",
      "Government contractor expertise",
      "Aerospace-grade precision standards"
    ],
    image: "/images/plastic-machining-hero.webp",
    alt: "Precision CNC manufacturing for aerospace and defense equipment"
  },
  {
    number: "02",
    title: "Oil & Gas",
    text: "From exploration to refining, equipment in the oil & gas industry faces extreme conditions. We provide durable machining and protective solutions for tools, instruments, and industrial components.",
    bullets: [
      "Harsh-environment durability",
      "Corrosion-resistant material options",
      "Secure protection for sensitive equipment"
    ],
    image: "/images/hero-industrial-machinery.webp",
    alt: "Heavy industrial facility equipment for oil and gas applications"
  },
  {
    number: "03",
    title: "Medical Devices",
    text: "We design high-precision plastic and foam components for medical systems, laboratory devices, and sensitive healthcare equipment requiring strict quality and cleanliness standards.",
    bullets: [
      "Medical device expertise",
      "Reusable and clean solutions",
      "Easy transport and organization"
    ],
    image: "/images/showcase-engineering-planning.webp",
    alt: "Precision planning for medical device components and equipment"
  },
  {
    number: "04",
    title: "Industrial Automation",
    text: "Automation systems and robotics require packaging and machined components that ensure precision, repeatability, and long-term durability for production environments.",
    bullets: [
      "Precision-fit solutions",
      "ESD-safe material options",
      "Robotics and controller support"
    ],
    image: "/images/plastic-service-cnc.webp",
    alt: "CNC machining and automation equipment for production environments"
  },
  {
    number: "05",
    title: "Energy & Power",
    text: "From renewable energy systems to industrial power infrastructure, we create reliable plastic and foam solutions that protect critical energy components during operation and transport.",
    bullets: [
      "Heavy-duty protection",
      "Moisture and vibration resistance",
      "Renewable energy support"
    ],
    image: "/images/plastic-service-custom-fabrication.webp",
    alt: "Industrial fabrication for energy and power infrastructure components"
  },
  {
    number: "06",
    title: "Custom Manufacturing & R&D",
    text: "For prototypes, specialized tooling, and R&D equipment, we deliver custom fabrication and packaging solutions with flexibility, precision, and fast turnaround.",
    bullets: [
      "Prototype-to-production support",
      "Custom foam and case systems",
      "Fast lead times for special projects"
    ],
    image: "/images/showcase-plastic-machining.webp",
    alt: "Precision plastic machining for custom manufacturing and R&D projects"
  }
];

function Reveal({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUpVariants}
      transition={{ ...motionTimings.fadeUp, delay: reduceMotion ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="grid h-12 w-12 place-items-center rounded-full border border-[color-mix(in_srgb,var(--color-precision-blue)_20%,var(--color-border-gray))] bg-white text-technical shadow-card transition duration-300 group-hover:border-[color-mix(in_srgb,var(--color-industrial-orange)_42%,var(--color-border-gray))] group-hover:text-accent">
      <Icon size={23} strokeWidth={1.8} />
    </span>
  );
}

export default function IndustriesPage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <TopBar />
      <Header />
      <main className="bg-secondary">
        <section className="relative isolate min-h-[560px] overflow-hidden bg-[#06152c] text-white md:min-h-[640px] lg:min-h-[760px]">
          <motion.div
            className="absolute inset-0 -z-30"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.02 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/industries-hero-factory.webp"
              alt="Industrial factory floor with engineer reviewing operations on a tablet"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[64%_center] saturate-[0.9] contrast-110"
            />
          </motion.div>
          <div className="absolute inset-0 -z-20 bg-[#06152c]/52" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,21,44,0.9)_0%,rgba(6,21,44,0.62)_42%,rgba(6,21,44,0.12)_76%,transparent_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_34%,rgba(219,75,25,0.2),transparent_23rem),radial-gradient(circle_at_18%_55%,rgba(37,99,235,0.14),transparent_28rem),linear-gradient(180deg,rgba(3,10,22,0.08),rgba(3,10,22,0.72))]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.13)_1px,transparent_1px)] bg-[length:24px_24px] opacity-[0.055]" />
          <HeroBottomDivider />

          <div className="relative z-20 mx-auto flex min-h-[560px] w-full max-w-[1280px] items-center px-6 py-24 md:min-h-[640px] lg:min-h-[760px] lg:px-8">
            <motion.div
              className="max-w-[620px] pb-16 lg:pb-24"
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.1 }
                }
              }}
            >
              <motion.p
                variants={fadeUpVariants}
                className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-accent sm:text-sm"
              >
                <span className="h-6 w-0.5 bg-[var(--color-industrial-orange)]" />
                Let&apos;s solve your industry&apos;s challenges.
              </motion.p>
              <motion.h1
                variants={fadeUpVariants}
                className="mt-8 font-heading text-[36px] font-bold leading-[1.02] text-white sm:text-[48px] lg:text-[58px] lg:leading-[0.98]"
              >
                Precision solutions.
                <br />
                Proven performance.
              </motion.h1>
              <motion.p
                variants={fadeUpVariants}
                className="mt-7 max-w-[560px] text-base leading-8 text-white/80 sm:text-lg"
              >
                From complex manufacturing to critical environments, we deliver
                custom plastic and foam solutions that protect, perform, and
                empower your operations.
              </motion.p>
              <motion.div
                variants={fadeUpVariants}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <Link href="/industries#industries" className="btn-primary hover:shadow-[0_0_34px_rgba(219,75,25,0.42)]">
                  Explore Industries
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="/contact"
                  className="btn-base border border-white/45 bg-white/10 text-white shadow-none backdrop-blur-md hover:border-white hover:bg-white/18"
                >
                  Request a Quote
                  <ArrowRight size={17} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="container-width grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow">We understand your challenges</p>
              <h2 className="h2 mt-4 max-w-xl">
                We know the challenges your industry faces.
              </h2>
              <p className="body mt-5 max-w-2xl">
                From tight tolerances to demanding environments, we deliver
                custom plastic and foam components that perform when it matters
                most.
              </p>

              <div className="mt-9 grid gap-5 sm:grid-cols-2">
                {challengeFeatures.map(({ title, text, icon: Icon }) => (
                  <article
                    key={title}
                    className="rounded-industrial border border-system bg-card p-5 shadow-card"
                  >
                    <span className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-industrial-orange)_12%,white)] text-accent">
                      <Icon size={21} strokeWidth={1.8} />
                    </span>
                    <h3 className="h4">{title}</h3>
                    <p className="small-text mt-2">{text}</p>
                  </article>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative min-h-[28rem] overflow-hidden rounded-industrial shadow-industrial sm:min-h-[34rem]">
                <Image
                  src="/images/hero-industrial-machinery.webp"
                  alt="Industrial CNC and manufacturing equipment used for precision production"
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.28))]" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-[color-mix(in_srgb,var(--color-precision-blue)_16%,var(--color-border-gray))] bg-[color-mix(in_srgb,var(--color-precision-blue)_7%,white)] py-16 lg:py-20">
          <div className="container-width">
            <Reveal className="mx-auto max-w-4xl text-center">
              <h2 className="h2">
                Built to support critical industrial requirements
              </h2>
              <p className="body-large mt-5 text-muted-strong">
                Our industrial protective packaging, foam inserts, and machined
                plastic solutions support sensitive medical, electronic,
                technical, energy, and defense equipment with reliable
                protection, precision, and repeatable quality.
              </p>
            </Reveal>

            <motion.div
              className="mt-11 grid overflow-hidden rounded-industrial border border-[color-mix(in_srgb,var(--color-precision-blue)_18%,var(--color-border-gray))] bg-white shadow-card sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.07 }
                }
              }}
            >
              {requirementsItems.map(({ title, text, icon: Icon }) => (
                <motion.div
                  key={title}
                  variants={fadeUpVariants}
                  className="group flex min-h-64 flex-col items-center border-b border-r border-system px-5 py-8 text-center transition duration-300 hover:-translate-y-1 hover:bg-[color-mix(in_srgb,var(--color-industrial-orange)_4%,white)] sm:[&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(5n)]:border-r-0"
                >
                  <IconBadge icon={Icon} />
                  <h3 className="mt-5 font-heading text-base font-semibold leading-tight text-midnight transition duration-300 group-hover:text-accent">
                    {title}
                  </h3>
                  <p className="small-text mt-3">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="industries" className="bg-white py-20 lg:py-24">
          <div className="container-width">
            <Reveal className="text-center">
              <h2 className="h2">Industries We Serve</h2>
            </Reveal>

            <motion.div
              className="mt-11 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.08 }
                }
              }}
            >
              {industryCards.map(({ number, title, href, text, image, alt }) => (
                <motion.div
                  key={title}
                  variants={fadeUpVariants}
                  transition={motionTimings.fadeUp}
                >
                  <Link
                    href={href}
                    className="group block h-full overflow-hidden rounded-industrial border border-system bg-card shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-industrial"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={image}
                        alt={alt}
                        fill
                        sizes="(min-width: 1024px) 27vw, (min-width: 768px) 45vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="mb-3 font-heading text-sm font-semibold text-accent">
                        {number}
                      </p>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="h4 transition group-hover:text-accent">{title}</h3>
                        <span
                          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-industrial-orange)_12%,white)] text-accent transition group-hover:bg-[var(--color-industrial-orange)] group-hover:text-white"
                          aria-hidden="true"
                        >
                          <ArrowUpRight size={18} />
                        </span>
                      </div>
                      <p className="small-text mt-4">{text}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-primary py-20 text-white lg:py-24">
          <Image
            src="/images/plastic-machining-hero.webp"
            alt="Dark industrial machining background"
            fill
            sizes="100vw"
            className="-z-30 object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(15,23,42,0.98),rgba(15,23,42,0.84)),radial-gradient(circle_at_78%_28%,rgba(37,99,235,0.22),transparent_26rem)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(219,75,25,0.24)_1px,transparent_1px)] bg-[length:20px_20px] opacity-20" />

          <Reveal>
            <div className="container-width grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-3xl">
                <h2 className="h2 text-white">
                  Not seeing your industry? Let&apos;s build the right solution
                  together.
                </h2>
                <p className="body mt-5 max-w-2xl text-white/75">
                  Our team is ready to help you solve complex challenges with
                  custom plastic and foam solutions.
                </p>
              </div>
              <Link href="/contact" className="btn-primary w-fit justify-self-start lg:justify-self-end">
                Contact Our Team
                <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="container-width">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className="h2">
                Let&apos;s solve your industry&apos;s challenges.
              </h2>
              <p className="body-large mt-4 text-muted-strong">
                Precision solutions. Proven performance.
              </p>
              <span className="mx-auto mt-6 block h-1 w-20 rounded-full bg-[var(--color-industrial-orange)]" />
            </Reveal>

            <div className="mt-16 divide-y divide-[var(--color-border-gray)]">
              {industryShowcases.map(
                ({ number, title, text, bullets, image, alt }, index) => {
                  const reverse = index % 2 === 1;

                  return (
                    <motion.article
                      key={title}
                      initial={reduceMotion ? false : "hidden"}
                      whileInView="visible"
                      viewport={{ once: true, margin: "-80px" }}
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: reduceMotion ? 0 : 0.08
                          }
                        }
                      }}
                      className="grid gap-8 py-14 first:pt-0 last:pb-0 lg:grid-cols-[0.48fr_0.52fr] lg:items-center lg:gap-14"
                    >
                      <motion.div
                        variants={{
                          hidden: {
                            opacity: 0,
                            x: reduceMotion ? 0 : reverse ? 28 : -28
                          },
                          visible: { opacity: 1, x: 0 }
                        }}
                        transition={motionTimings.fadeUp}
                        className={`group relative min-h-[20rem] overflow-hidden rounded-industrial shadow-industrial sm:min-h-[28rem] ${
                          reverse ? "lg:order-2" : ""
                        }`}
                      >
                        <Image
                          src={image}
                          alt={alt}
                          fill
                          sizes="(min-width: 1024px) 48vw, 100vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.24))]" />
                      </motion.div>

                      <motion.div
                        variants={{
                          hidden: {
                            opacity: 0,
                            x: reduceMotion ? 0 : reverse ? -28 : 28
                          },
                          visible: { opacity: 1, x: 0 }
                        }}
                        transition={motionTimings.fadeUp}
                        className={`max-w-2xl ${reverse ? "lg:order-1" : ""}`}
                      >
                        <p className="font-heading text-sm font-semibold text-accent">
                          {number}
                        </p>
                        <h3 className="h2 mt-3">{title}</h3>
                        <p className="body mt-5">{text}</p>

                        <ul className="mt-7 grid gap-3">
                          {bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-start gap-3 text-sm leading-7 text-muted-strong"
                            >
                              <CheckCircle2
                                size={19}
                                className="mt-1 shrink-0 text-accent"
                                strokeWidth={1.9}
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                          <Link href="/contact" className="btn-primary">
                            Request Callback
                            <ArrowRight size={17} />
                          </Link>
                          <Link href="/contact" className="btn-outline">
                            More Info
                            <ArrowUpRight size={17} />
                          </Link>
                        </div>
                      </motion.div>
                    </motion.article>
                  );
                }
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
