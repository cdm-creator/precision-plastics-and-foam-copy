"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroBottomDivider } from "@/components/HeroBottomDivider";
import { CarbonFiberServicesSection } from "@/components/carbon-fiber/CarbonFiberServicesSection";
import { FaqSection } from "@/components/home/faq-section";
import { GalleryImage, GallerySection } from "@/components/home/GallerySection";
import { TopBar } from "@/components/layout/top-bar";
import { fadeUpVariants, heroMediaVariants, motionTimings } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Box,
  ClipboardCheck,
  Cog,
  Gauge,
  Layers3,
  PackageCheck,
  PenTool,
  ShieldCheck,
  Timer
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./plastic-machining-page.module.css";

const capabilities = [
  {
    title: "High Precision",
    text: "Tight tolerances and consistent quality.",
    icon: Gauge
  },
  {
    title: "Wide Material Range",
    text: "Work with a variety of engineering plastics.",
    icon: Layers3
  },
  {
    title: "Fast Turnaround",
    text: "Efficient processes for quick delivery.",
    icon: Timer
  },
  {
    title: "Quality Assured",
    text: "Rigorous inspection for reliable components.",
    icon: ShieldCheck
  }
];

const plasticMachiningPortfolioImages: GalleryImage[] = [
  {
    src: "/images/plastic-portfolio-machined-bracket.webp",
    alt: "Precision machined beige plastic bracket component"
  },
  {
    src: "/images/plastic-portfolio-white-sprocket.webp",
    alt: "White machined plastic sprocket component"
  },
  {
    src: "/images/plastic-portfolio-machined-bushing.webp",
    alt: "CNC machining a beige plastic bushing component"
  },
  {
    src: "/images/plastic-portfolio-clear-machined-part.webp",
    alt: "Clear machined plastic part on a black background"
  },
  {
    src: "/images/plastic-portfolio-cnc-machine.webp",
    alt: "CNC machine used for plastic machining"
  },
  {
    src: "/images/plastic-portfolio-ultem-printed-part.webp",
    alt: "Brown high-performance plastic fabricated manifold part"
  },
  {
    src: "/images/plastic-portfolio-cnc-routing.webp",
    alt: "CNC routing a plastic sheet with visible shavings"
  },
  {
    src: "/images/plastic-portfolio-vapor-smoothed-part.webp",
    alt: "Black plastic component with smooth curved ribs"
  }
];

const plasticFabricationServiceCards = [
  {
    title: "Plastic Machining",
    description:
      "We provide precision machining of plastic materials for all types of industries, delivering clean edges, tight tolerances, and repeatable parts for prototypes and production.",
    image: "/images/plastic-machining-card-cnc.png",
    imageAlt: "CNC machine cutting a clear plastic component",
    href: "/contact"
  },
  {
    title: "Custom Plastic Fabrication",
    description:
      "We provide custom plastic fabrication for all types of industries. Choose from many plastic materials we offer, with cutting, forming, bonding, and finishing built around your project needs.",
    image: "/images/custom-plastic-fabrication-card.png",
    imageAlt: "Close-up plastic fabrication material with a dark machined edge",
    href: "/contact"
  },
  {
    title: "3D Printing",
    description:
      "We provide precision plastic 3D printing for prototypes, fixtures, and functional parts, using durable materials, accurate details, and production-minded finishing for industrial applications.",
    image: "/images/plastic-machining-card-3d-printing.jpg",
    imageAlt: "Black 3D printed plastic bracket with metal threaded inserts",
    href: "/contact"
  }
];

const services = [
  {
    number: "01",
    title: "Cut-to-Size",
    text: "Precision cut-to-size plastic sheets, rods, and tubes with clean edges and consistent sizing.",
    image: "/images/plastic-service-cut-to-size.webp",
    imageAlt: "Plastic film and sheet material being converted on industrial rollers"
  },
  {
    number: "02",
    title: "3D Printing",
    text: "SLA and SLS 3D printing for prototypes and functional components.",
    image: "/images/plastic-service-3d-printing.webp",
    imageAlt: "3D printer head producing a functional prototype component"
  },
  {
    number: "03",
    title: "CNC Routing & Machining",
    text: "Complex machining for intricate parts and large production runs.",
    image: "/images/plastic-service-cnc.webp",
    imageAlt: "CNC machining plastic material with precision tooling"
  },
  {
    number: "04",
    title: "Plastic Machining",
    text: "CNC machining of plastic material with high precision, clean finishes, and repeatable accuracy for prototypes, fixtures, and production components.",
    image: "/images/plastic-service-machining-precision.webp",
    imageAlt: "CNC machine cutting a clear plastic component with high precision"
  },
  {
    number: "05",
    title: "Plastic Fabrication",
    text: "Plastic fabrication for all your projects, including custom cutting, shaping, drilling, bonding, and finishing tailored to your application requirements.",
    image: "/images/plastic-service-fabrication-acrylic.webp",
    imageAlt: "CNC machining clear acrylic plastic material"
  }
];

const processSteps = [
  {
    title: "Material Preparation",
    text: "We select the right engineering plastics based on your application and performance requirements.",
    icon: Box
  },
  {
    title: "Design & Planning",
    text: "Our team reviews drawings and 3D models to plan the most efficient machining approach.",
    icon: PenTool
  },
  {
    title: "Precision Machining",
    text: "Advanced CNC machines deliver accurate parts with tight tolerances and excellent finishes.",
    icon: Cog
  },
  {
    title: "Quality Inspection",
    text: "Every part is inspected for dimensional accuracy and overall quality before moving forward.",
    icon: ClipboardCheck
  }
];

const machiningHighlights = [
  {
    eyebrow: "PRECISION MACHINING",
    title: "Machined plastic parts built around real application needs",
    text: "From complex routed profiles to close-tolerance production parts, our machining approach is planned around material behavior, part geometry, surface finish, and end-use performance.",
    image:
      "https://images.pexels.com/photos/8865187/pexels-photo-8865187.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1400",
    imageAlt: "Close-up of CNC machine tooling in an industrial setting"
  },
  {
    eyebrow: "MATERIAL SUPPORT",
    title: "Engineering plastic expertise from prototype through production",
    text: "We help match the right plastic stock, machining method, and finishing path to your requirements so parts are reliable, repeatable, and ready for demanding industrial use.",
    image:
      "https://images.pexels.com/photos/11048741/pexels-photo-11048741.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1400",
    imageAlt: "Industrial factory with plastic processing tanks and equipment"
  }
];

const plasticMachiningFaqs = [
  {
    question: "What plastic machining services do you provide?",
    answer:
      "We provide CNC machining of plastic materials for precision parts, prototypes, fixtures, and production components. Our work focuses on clean edges, tight tolerances, consistent repeatability, and reliable finishes for industrial applications."
  },
  {
    question: "Can you handle custom plastic fabrication projects?",
    answer:
      "Yes. We support custom plastic fabrication projects with cutting, shaping, drilling, forming, bonding, and finishing based on your drawings, dimensions, material needs, and application requirements."
  },
  {
    question: "Do you offer plastic 3D printing?",
    answer:
      "Yes. We provide precision plastic 3D printing for prototypes, functional parts, fixtures, and low-volume components where complex geometry, quick iteration, or production-minded testing is needed."
  },
  {
    question: "What plastic materials can you work with?",
    answer:
      "We work with a range of engineering plastics such as acrylic, HDPE, PVC, nylon, polycarbonate, and other application-specific plastic materials. Material selection depends on strength, clarity, wear resistance, temperature needs, and part function."
  },
  {
    question: "Can you make parts from drawings or sample components?",
    answer:
      "Yes. You can share drawings, CAD files, dimensions, photos, or sample parts. Our team reviews the details and recommends the right machining, fabrication, or 3D printing approach for the project."
  },
  {
    question: "Do you support both prototypes and production runs?",
    answer:
      "Yes. We can help with one-off prototypes, short runs, fixtures, replacement parts, and repeat production work, while keeping accuracy, finish quality, and delivery requirements in focus."
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

function SectionHeader({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.sectionHeader}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2 mt-3">{title}</h2>
      <p className="body mt-4">{text}</p>
    </div>
  );
}

export default function PlasticMachiningPage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <TopBar />
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="plastic-machining-title">
          <motion.div
            className={styles.heroImage}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={heroMediaVariants}
            transition={{ ...motionTimings.hero, duration: 1.1 }}
          >
            <Image
              src="/images/plastic-machining-hero-vapour-smoothing.webp"
              alt="Close-up of a black 3D printed plastic component"
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
                <span>Plastic Machining</span>
              </motion.nav>
              <motion.h1 id="plastic-machining-title" variants={fadeUpVariants} className={`h1 ${styles.heroTitle}`}>
                Plastic Machining
              </motion.h1>
              <motion.p variants={fadeUpVariants} className={`body-large ${styles.heroText}`}>
                High-precision machining solutions for engineering plastics. From
                prototypes to production, we deliver accuracy, consistency, and
                performance you can rely on.
              </motion.p>
              <motion.div variants={fadeUpVariants} className={styles.heroActions}>
                <Link href="/plastic-machining#services" className="btn-primary">
                  Explore Our Services
                </Link>
                <Link href="/contact" className={`btn-outline ${styles.darkOutline}`}>
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <CarbonFiberServicesSection
          eyebrow="PRECISION Plastic Fabrication"
          title="Plastic Machining & Fabrication"
          description="We provide custom plastic fabrication solutions with precision machining, clean finishing, and dependable part quality. From prototypes to production runs, our team supports durable plastic components built around your drawings, materials, and application needs."
          services={plasticFabricationServiceCards}
        />

        <GallerySection
          images={plasticMachiningPortfolioImages}
          sectionClassName="bg-[radial-gradient(circle_at_50%_12%,rgba(37,99,235,0.05),transparent_30rem),var(--color-soft-white)]"
        />

        <section className={styles.capabilityStrip} aria-label="Plastic machining capabilities">
          <div className={`container-width ${styles.capabilityGrid}`}>
            {capabilities.map(({ title, text, icon: Icon }) => (
              <Reveal key={title} className={styles.capabilityItem}>
                <Icon className={styles.capabilityIcon} size={26} strokeWidth={1.8} />
                <div>
                  <h2 className="h4">{title}</h2>
                  <p className="small-text mt-2">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="services" className={`${styles.section} ${styles.services}`}>
          <div className="container-width">
            <Reveal>
              <SectionHeader
                eyebrow="OUR SERVICES"
                title="Precision. Quality. Custom Solutions."
                text="We offer a wide range of plastic machining services to meet the diverse needs of industries across the globe."
              />
            </Reveal>
            <motion.div
              className={styles.servicesGrid}
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
              {services.map(({ number, title, text, image, imageAlt }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUpVariants}
                  transition={motionTimings.fadeUp}
                  className={`${styles.serviceCard} ${index > 2 ? styles.serviceWide : ""}`}
                >
                  <div className={styles.serviceImage}>
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      sizes={index > 2 ? "(min-width: 1024px) 42vw, 100vw" : "(min-width: 1024px) 28vw, (min-width: 768px) 50vw, 100vw"}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.serviceContent}>
                    <span className={styles.serviceNumber}>{number}</span>
                    <span className={styles.serviceLine} aria-hidden="true" />
                    <h3 className={`h3 ${styles.serviceTitle}`}>{title}</h3>
                    <p className={`small-text ${styles.serviceText}`}>{text}</p>
                    <span className={styles.serviceArrow} aria-hidden="true">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.processSection}`}>
          <div className="container-width">
            <Reveal>
              <SectionHeader
                eyebrow="OUR PROCESS"
                title="From Concept to Completion"
                text="A streamlined process that ensures precision, quality, and on-time delivery every time."
              />
            </Reveal>
            <motion.div
              className={styles.processTimeline}
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
              {processSteps.map(({ title, text, icon: Icon }) => (
                <motion.article key={title} variants={fadeUpVariants} className={styles.processStep}>
                  <span className={styles.processIcon} aria-hidden="true">
                    <Icon size={28} strokeWidth={1.7} />
                  </span>
                  <h3 className={`h4 ${styles.processTitle}`}>{title}</h3>
                  <p className={`small-text ${styles.processText}`}>{text}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.detailSection}`}>
          <div className={`container-width ${styles.detailRows}`}>
            {machiningHighlights.map(({ eyebrow, title, text, image, imageAlt }, index) => (
              <Reveal
                key={title}
                className={`${styles.detailRow} ${index % 2 === 1 ? styles.detailRowReverse : ""}`}
              >
                <div className={styles.detailImage}>
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.detailCopy}>
                  <p className="eyebrow">{eyebrow}</p>
                  <h2 className="h2 mt-3">{title}</h2>
                  <p className="body mt-4">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <FaqSection
          introText="Find quick answers about our plastic machining, custom fabrication, 3D printing, materials, and project support."
          faqs={plasticMachiningFaqs}
        />

        <section id="contact" className={styles.cta}>
          <div className={styles.ctaImage}>
            <Image
              src="https://images.pexels.com/photos/36522027/pexels-photo-36522027.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1800"
              alt="Advanced industrial CNC machine close-up in a manufacturing setting"
              fill
              sizes="100vw"
              className={styles.image}
            />
          </div>
          <div className={styles.ctaOverlay} />
          <Reveal>
            <div className={`container-width ${styles.ctaPanel}`}>
              <div>
                <p className="eyebrow">REQUEST SUPPORT</p>
                <h2 className={`h2 mt-3 ${styles.ctaTitle}`}>
                  Let&apos;s Build Something Precise
                </h2>
                <p className={`body ${styles.ctaText}`}>
                  Share your requirements and our experts will get back to you
                  with the best solution, from material selection and machining
                  strategy to delivery-ready plastic components.
                </p>
              </div>
              <Link href="/contact" className={`btn-primary ${styles.ctaAction}`}>
                Request a Quote
                <PackageCheck size={17} />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
