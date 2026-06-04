"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroBottomDivider } from "@/components/HeroBottomDivider";
import { TopBar } from "@/components/layout/top-bar";
import { fadeUpVariants, motionTimings } from "@/lib/motion";
import { getSubIndustryPage } from "@/lib/industry-pages";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Download,
  Factory,
  Handshake,
  LifeBuoy,
  Phone,
  ShieldCheck,
  Target,
  Wrench
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featureItems = [
  {
    title: "Built for Protection",
    text: "Engineered materials that protect equipment, components, and critical assets.",
    icon: ShieldCheck
  },
  {
    title: "Industry Compliant",
    text: "Solutions designed to support strict industry standards and requirements.",
    icon: BadgeCheck
  },
  {
    title: "Operational Efficiency",
    text: "Reduce downtime, improve handling, and support smoother operations.",
    icon: Target
  },
  {
    title: "Custom Solutions",
    text: "Tailored designs for exact needs, applications, and performance requirements.",
    icon: Wrench
  }
];

const industryApplicationImages: Record<string, string[]> = {
  "aerospace-defense": [
    "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/31438304/pexels-photo-31438304.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/5156696/pexels-photo-5156696.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/8961154/pexels-photo-8961154.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900"
  ],
  "oil-gas": [
    "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/31438304/pexels-photo-31438304.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/5156696/pexels-photo-5156696.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/8961154/pexels-photo-8961154.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/13758314/pexels-photo-13758314.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900"
  ],
  "medical-devices": [
    "https://images.pexels.com/photos/9574453/pexels-photo-9574453.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/31438304/pexels-photo-31438304.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/5156696/pexels-photo-5156696.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/36946571/pexels-photo-36946571.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900"
  ],
  "industrial-automation": [
    "https://images.pexels.com/photos/18471441/pexels-photo-18471441.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/31438304/pexels-photo-31438304.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/5156696/pexels-photo-5156696.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/8961154/pexels-photo-8961154.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900"
  ],
  "energy-power": [
    "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/31438304/pexels-photo-31438304.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/5156696/pexels-photo-5156696.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/8961154/pexels-photo-8961154.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/13758314/pexels-photo-13758314.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900"
  ],
  "custom-manufacturing-rd": [
    "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/31438304/pexels-photo-31438304.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/5156696/pexels-photo-5156696.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/8961154/pexels-photo-8961154.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900",
    "https://images.pexels.com/photos/36946571/pexels-photo-36946571.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=900"
  ]
};

const solutionCards = [
  {
    title: "Foam Packaging",
    text: "Lightweight, shock-absorbing foam for superior protection.",
    image: "/images/foam-solution-protective-packaging.webp"
  },
  {
    title: "Plastic Containers",
    text: "Durable reusable containers for safe storage and transport.",
    image: "/images/foam-solution-equipment-cases.webp"
  },
  {
    title: "Correx Solutions",
    text: "Corrosion-resistant sheets for industrial applications.",
    image: "/images/plastic-service-cut-to-size.webp"
  },
  {
    title: "Custom Inserts",
    text: "Precision-engineered inserts for a perfect fit.",
    image: "/images/foam-inserts-tools-case.webp"
  },
  {
    title: "Dividers & Partitions",
    text: "Organize, separate, and protect with custom partitions.",
    image: "/images/foam-solution-storage-organization.webp"
  }
];

const partnerStats = [
  { title: "20+ Years Experience", icon: Factory },
  { title: "500+ Industry Clients", icon: Handshake },
  { title: "ISO Certified Quality", icon: BadgeCheck },
  { title: "Expert Support", icon: LifeBuoy }
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

export function SubIndustryPageClient({ slug }: { slug: string }) {
  const reduceMotion = useReducedMotion();
  const industry = getSubIndustryPage(slug);

  if (!industry) {
    return null;
  }

  const applicationImages = industryApplicationImages[slug] ?? industryApplicationImages["custom-manufacturing-rd"];

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
              src={industry.heroImage}
              alt={industry.heroAlt}
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
              <motion.nav
                variants={fadeUpVariants}
                className="small-text mb-7 flex flex-wrap items-center gap-2 text-white/70"
                aria-label="Breadcrumb"
              >
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
                <span>/</span>
                <Link href="/industries" className="transition hover:text-white">
                  Industries
                </Link>
                <span>/</span>
                <span className="text-white">{industry.name}</span>
              </motion.nav>
              <motion.h1
                variants={fadeUpVariants}
                className="mt-0 font-heading text-[36px] font-bold leading-[1.02] text-white sm:text-[48px] lg:text-[58px] lg:leading-[0.98]"
              >
                Precision solutions for {industry.name}
              </motion.h1>
              <motion.p
                variants={fadeUpVariants}
                className="mt-7 max-w-[560px] text-base leading-8 text-white/80 sm:text-lg"
              >
                Custom plastic and foam solutions engineered to protect,
                perform, and optimize operations in demanding industrial
                environments.
              </motion.p>
              <motion.div
                variants={fadeUpVariants}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <Link href="/contact" className="btn-primary">
                  Request a Quote
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="/contact"
                  className="btn-base border border-white/45 bg-white/10 text-white shadow-none backdrop-blur-md hover:border-white hover:bg-white/18"
                >
                  Download Brochure
                  <Download size={17} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white pb-20 pt-8 lg:pb-24 lg:pt-10">
          <div className="container-width">
            <Reveal className="mx-auto max-w-4xl text-center">
              <p className="eyebrow">Overview</p>
              <h2 className="h2 mx-auto mt-4 max-w-3xl">
                Engineered for performance.
                <br />
                Built for {industry.name} challenges.
              </h2>
              <p className="body mx-auto mt-5 max-w-3xl">
                We deliver high-performance plastic and foam solutions tailored
                to meet the unique demands of {industry.name.toLowerCase()}.
                From protection and durability to precision and compliance, our
                solutions help you achieve operational excellence.
              </p>
            </Reveal>

            <motion.div
              className="mt-14 grid gap-y-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-0"
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
              {featureItems.map(({ title, text, icon: Icon }) => (
                <motion.article
                  key={title}
                  variants={fadeUpVariants}
                  className="group px-6 text-center transition duration-300 hover:-translate-y-1 lg:border-r lg:border-system lg:last:border-r-0"
                >
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-[color-mix(in_srgb,var(--color-industrial-orange)_45%,var(--color-border-gray))] text-accent transition duration-300 group-hover:border-[var(--color-industrial-orange)] group-hover:bg-[var(--color-industrial-orange)] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.6} />
                  </span>
                  <h3 className="h4 mt-5 transition duration-300 group-hover:text-accent">
                    {title}
                  </h3>
                  <p className="small-text mx-auto mt-3 max-w-56">{text}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-[color-mix(in_srgb,var(--color-precision-blue)_5%,white)] py-16 lg:py-20">
          <div className="container-width">
            <Reveal className="text-center">
              <p className="eyebrow">Applications</p>
              <h2 className="h2">Where our solutions make an impact</h2>
            </Reveal>
            <motion.div
              className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
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
              {industry.applications.map((title, index) => (
                <motion.article
                  key={title}
                  variants={fadeUpVariants}
                  className="group relative min-h-56 overflow-hidden rounded-industrial shadow-card sm:min-h-60 lg:min-h-64"
                >
                  <Image
                    src={applicationImages[index]}
                    alt={`${title} for ${industry.name}`}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.18)_0%,rgba(15,23,42,0.62)_52%,rgba(15,23,42,0.94)_100%)]" />
                  <h3 className="absolute bottom-5 left-5 right-5 font-heading text-base font-semibold leading-tight text-white drop-shadow">
                    {title}
                  </h3>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-primary py-16 text-white lg:py-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.18),transparent_28rem),radial-gradient(circle_at_18%_78%,rgba(219,75,25,0.16),transparent_24rem)]" />
          <div className="container-width grid gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-start lg:gap-16">
            <Reveal>
              <h2 className="font-heading text-[clamp(1.75rem,2.6vw,2.45rem)] font-medium leading-tight text-white">
                {industry.capabilityFocus.lead}{" "}
                <span className="text-accent">
                  {industry.capabilityFocus.highlight}
                </span>{" "}
                {industry.capabilityFocus.rest}
              </h2>
              <Link href="/contact" className="btn-primary mt-8">
                Request Callback
              </Link>
            </Reveal>

            <motion.div
              className="grid gap-x-12 gap-y-4 sm:grid-cols-2"
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.04 }
                }
              }}
            >
              {industry.capabilityFocus.items.map((item) => (
                <motion.p
                  key={item}
                  variants={fadeUpVariants}
                  className="flex gap-4 text-base leading-7 text-white/80"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/45" />
                  <span>{item}</span>
                </motion.p>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="container-width">
            <Reveal className="text-center">
              <p className="eyebrow">Our Solutions</p>
              <h2 className="h2 mt-3">
                Advanced materials.
                <br />
                Reliable performance.
              </h2>
            </Reveal>
            <motion.div
              className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
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
              {solutionCards.map(({ title, text, image }) => (
                <motion.article
                  key={title}
                  variants={fadeUpVariants}
                  className="group flex h-full flex-col overflow-hidden rounded-industrial border border-system bg-secondary shadow-card transition hover:-translate-y-1 hover:shadow-industrial"
                >
                  <div className="relative h-40 overflow-hidden bg-white">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="h4">{title}</h3>
                    <p className="small-text mt-3">{text}</p>
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent"
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {industry.detailSection.variant === "image-checklist" ? (
          <section className="bg-[color-mix(in_srgb,var(--color-precision-blue)_5%,white)] py-12 lg:py-14">
            <div className="container-width grid gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-stretch lg:gap-16">
              <Reveal className="h-full">
                <div className="relative h-full min-h-[24rem] overflow-hidden rounded-industrial shadow-industrial">
                  <div className="relative h-full min-h-[24rem]">
                    <Image
                      src={industry.detailSection.image}
                      alt={industry.detailSection.title}
                      fill
                      sizes="(min-width: 1024px) 46vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 rounded-industrial bg-white p-5 shadow-industrial">
                    <p className="small-text relative pl-11 text-midnight before:absolute before:left-0 before:top-1 before:font-heading before:text-4xl before:font-semibold before:leading-none before:text-accent before:content-['”']">
                      {industry.detailSection.quote}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08} className="flex h-full flex-col justify-center">
                <p className="eyebrow">{industry.detailSection.eyebrow}</p>
                <h2 className="h2 mt-4">{industry.detailSection.title}</h2>
                <p className="body mt-5">{industry.detailSection.text}</p>
                <div className="mt-9 grid gap-5">
                  {industry.detailSection.points.map((point) => (
                    <div key={point} className="flex items-center gap-4">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-control bg-[var(--color-industrial-orange)] text-white">
                        <ArrowRight size={17} />
                      </span>
                      <p className="body text-muted-strong">{point}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        ) : (
          <section className="bg-[color-mix(in_srgb,var(--color-precision-blue)_5%,white)] py-8 lg:py-10">
            <div className="container-width">
              <Reveal className="grid gap-8 lg:grid-cols-[0.46fr_0.54fr] lg:items-center">
                <div>
                  <p className="eyebrow inline-flex rounded-full border border-[color-mix(in_srgb,var(--color-industrial-orange)_55%,var(--color-border-gray))] px-4 py-2">
                    {industry.detailSection.eyebrow}
                  </p>
                  <h2 className="h2 mt-5">{industry.detailSection.title}</h2>
                </div>
                <div>
                  <p className="body">{industry.detailSection.text}</p>
                </div>
              </Reveal>

              <div className="mt-12 divide-y divide-[var(--color-border-gray)] border-y border-system">
                {industry.detailSection.rows.map((row, index) => (
                  <Reveal
                    key={row.title}
                    className="grid gap-5 py-8 lg:grid-cols-[0.08fr_0.42fr_0.5fr] lg:items-start"
                  >
                    <p className="font-heading text-2xl font-semibold text-muted-strong">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="h4">{row.title}</h3>
                    <p className="body">{row.text}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="relative isolate overflow-hidden bg-primary py-20 text-white lg:py-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.18),transparent_28rem),radial-gradient(circle_at_18%_78%,rgba(219,75,25,0.16),transparent_24rem)]" />
          <div className="container-width">
            <Reveal className="text-center">
              <p className="eyebrow">Why Partner With Us</p>
              <h2 className="h2 mt-3 text-white">Why partner with us</h2>
            </Reveal>
            <motion.div
              className="mt-12 grid gap-y-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-0"
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
              {partnerStats.map(({ title, icon: Icon }) => (
                <motion.article
                  key={title}
                  variants={fadeUpVariants}
                  className="px-8 text-center lg:border-r lg:border-white/15 lg:last:border-r-0"
                >
                  <Icon className="mx-auto text-accent" size={34} strokeWidth={1.7} />
                  <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                    {title}
                  </h3>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-secondary py-10 lg:py-12">
          <Reveal>
            <div className="container-width grid items-center gap-7 rounded-industrial border border-system bg-card p-6 shadow-card sm:p-8 lg:grid-cols-[1fr_auto_1fr]">
              <div>
                <h2 className="h4">
                  Ready to solve your {industry.name} challenges?
                </h2>
                <p className="small-text mt-2 max-w-md">
                  Let&apos;s build the right solution for your application and
                  environment.
                </p>
              </div>
              <Link href="/contact" className="btn-primary w-fit justify-self-start lg:justify-self-center">
                Request a Quote
              </Link>
              <div className="flex items-center gap-4 lg:justify-self-end">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-[color-mix(in_srgb,var(--color-industrial-orange)_35%,var(--color-border-gray))] text-accent">
                  <Phone size={21} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="small-text">Talk to an Expert</p>
                  <p className="font-heading text-lg font-semibold text-midnight">
                    281-377-9292
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
