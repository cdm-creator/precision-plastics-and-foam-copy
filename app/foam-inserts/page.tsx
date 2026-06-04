"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroBottomDivider } from "@/components/HeroBottomDivider";
import { CarbonFiberServicesSection } from "@/components/carbon-fiber/CarbonFiberServicesSection";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCtaBanner } from "@/components/home/final-cta-banner";
import { GalleryImage, GallerySection } from "@/components/home/GallerySection";
import { TopBar } from "@/components/layout/top-bar";
import { SolutionsTabs } from "@/components/solutions-tabs";
import { fadeUpVariants, heroMediaVariants, motionTimings } from "@/lib/motion";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  ClipboardCheck,
  Grid3X3,
  Layers3,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Wrench
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styles from "./foam-inserts-page.module.css";

const navItems = [
  { label: "Why Choose", href: "#why-choose" },
  { label: "Overview", href: "#overview" },
  { label: "Foam Solutions", href: "#foam-solutions" },
  { label: "Applications", href: "#applications" },
  { label: "Foam Types", href: "#foam-types" }
];

const foamInsertPortfolioImages: GalleryImage[] = [
  {
    src: "/images/foam-portfolio-custom-case-layout.webp",
    alt: "Open hard case with custom cut black foam cavities"
  },
  {
    src: "/images/foam-portfolio-blue-tray-insert.webp",
    alt: "Blue foam tray insert with multiple precision-cut compartments"
  },
  {
    src: "/images/foam-portfolio-drone-insert.webp",
    alt: "Drone components protected in a custom black foam insert"
  },
  {
    src: "/images/foam-portfolio-specialist-foam-block.webp",
    alt: "Specialist black foam block with custom shaped cutouts"
  },
  {
    src: "/images/foam-portfolio-camera-lens-insert.webp",
    alt: "Camera lenses organized in custom cut foam"
  },
  {
    src: "/images/foam-portfolio-divider-case.webp",
    alt: "Open hard case with padded divider foam compartments"
  },
  {
    src: "/images/foam-portfolio-device-insert.webp",
    alt: "Phone and tablet protected in a custom black foam insert"
  },
  {
    src: "/images/foam-portfolio-box-insert.webp",
    alt: "Black foam insert fitted inside a product box"
  }
];

const foamInsertServiceCards = [
  {
    title: "Foam Insert Cases",
    description:
      "We provide precision foam insert cases for all types of industries, helping protect equipment, tools, electronics, and sensitive products during storage, handling, and transport.",
    image: "/images/foam-insert-cases.png",
    imageAlt: "Open protective hard case with custom foam insert compartments",
    href: "/contact"
  },
  {
    title: "Foam Insert Boxes",
    description:
      "We provide custom foam insert boxes for many types of industries. Choose from protective foam options designed to organize products, absorb impact, and support clean presentation.",
    image: "/images/foam-insert-boxes.png",
    imageAlt: "Black foam insert box holding a phone and tablet",
    href: "/contact"
  },
  {
    title: "Custom Cases",
    description:
      "We provide precision custom cases with foam interiors built around your product shape, weight, and handling needs for secure storage, transport, and presentation.",
    image: "/images/custom-foam-cases.webp",
    imageAlt: "Open custom equipment case with precision-cut foam interior",
    href: "/contact"
  }
];

const whyFeatures = [
  {
    title: "Precision product fit",
    text: "Cut to your product shape & case size for a clean, secure fit.",
    icon: Grid3X3
  },
  {
    title: "Shock and vibration protection",
    text: "Absorbs impact and reduces movement during storage and transport.",
    icon: ShieldCheck
  },
  {
    title: "Organized case layouts",
    text: "Defined cavities keep items easy to identify and remove.",
    icon: Boxes
  },
  {
    title: "Material matched to the job",
    text: "Foam type and density are selected for protection and presentation.",
    icon: Layers3
  }
];

const overviewBlocks = [
  {
    title: "Precision packaging for safe transit",
    text: "We develop smart foam solutions that cushion and protect fragile, high-value equipment and products during transit and handling.",
    icon: PackageCheck
  },
  {
    title: "Engineered for your product",
    text: "Our team understands how foam properties interact with product weight, geometry, fragility, and sensitivity.",
    icon: ClipboardCheck
  },
  {
    title: "In-house design & manufacturing",
    text: "Foam solutions are designed, cut, and assembled using precision-focused fabrication workflows.",
    icon: Wrench
  }
];

const solutionTabs = [
  {
    title: "Protective Packaging",
    panelTitle: "Protective Packaging Solutions",
    image: "/images/foam-portfolio-box-insert.webp",
    imageAlt: "Black foam insert fitted inside a product box",
    text: "Custom foam inserts are designed to cushion, protect, and secure products during transit, storage, and repeated handling.",
    checks: [
      "Shock & vibration absorption",
      "Prevents movement and damage",
      "Tailored to your product",
      "Improves unboxing experience"
    ]
  },
  {
    title: "Equipment Cases",
    panelTitle: "Case-Ready Foam Interiors",
    image: "/images/foam-portfolio-custom-case-layout.webp",
    imageAlt: "Open hard case with custom cut black foam cavities",
    text: "Hard cases, field kits, tool cases, and transport cases can be fitted with clean foam interiors that improve protection and usability.",
    checks: [
      "Clean cavity layouts",
      "Fast equipment identification",
      "Repeatable storage",
      "Presentation-ready interiors"
    ]
  },
  {
    title: "Custom Shapes",
    panelTitle: "Precision-Cut Foam Shapes",
    image: "/images/foam-portfolio-specialist-foam-block.webp",
    imageAlt: "Specialist black foam block with custom shaped cutouts",
    text: "From simple pads to complex layered assemblies, custom cut foam shapes are built around the geometry and handling risk of each product.",
    checks: [
      "Profile cut cavities",
      "Layered assemblies",
      "Die-cut pads and blocks",
      "Production-ready repeatability"
    ]
  },
  {
    title: "Storage & Organization",
    panelTitle: "Foam Layouts for Organized Storage",
    image: "/images/foam-portfolio-blue-tray-insert.webp",
    imageAlt: "Blue foam tray insert with multiple precision-cut compartments",
    text: "Organized foam layouts make tools, instruments, kits, and parts easier to inventory, retrieve, and repack after each use.",
    checks: [
      "Visual part control",
      "Cleaner kit management",
      "Reduced handling mistakes",
      "Better warehouse presentation"
    ]
  },
  {
    title: "High Value Protection",
    panelTitle: "Protection for Sensitive Products",
    image: "/images/foam-portfolio-camera-lens-insert.webp",
    imageAlt: "Camera lenses organized in custom cut foam",
    text: "Specialty foams support delicate, sensitive, or high-value products where surface finish, static, impact, and cleanliness matter.",
    checks: [
      "Class A surface protection",
      "ESD-sensitive packaging",
      "Abrasion resistance",
      "Fragility-based cushioning"
    ]
  }
];

const applications = [
  {
    title: "Foam caps",
    image:
      "https://images.pexels.com/photos/18372333/pexels-photo-18372333.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "White protective foam packaging material used for cushioning"
  },
  {
    title: "Foam assemblies",
    image:
      "https://images.pexels.com/photos/9607010/pexels-photo-9607010.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Hands organizing tools in a protective case"
  },
  {
    title: "Plain pads",
    image:
      "https://images.pexels.com/photos/5025503/pexels-photo-5025503.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Stacked cardboard boxes ready for protective shipping"
  },
  {
    title: "Case inserts",
    image:
      "https://images.pexels.com/photos/30562711/pexels-photo-30562711.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Professional gear hard case with organized compartments"
  },
  {
    title: "Die-cut pads",
    image:
      "https://images.pexels.com/photos/8985918/pexels-photo-8985918.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Detailed portable tool case with organized hand tools"
  },
  {
    title: "Bars and pads for blocking",
    image:
      "https://images.pexels.com/photos/11881295/pexels-photo-11881295.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Stacked industrial materials arranged in an orderly pattern"
  },
  {
    title: "Floater base / shock pallet",
    image:
      "https://images.pexels.com/photos/16955622/pexels-photo-16955622.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Palletized packaging stacks inside an industrial warehouse"
  },
  {
    title: "Cushioning systems",
    image:
      "https://images.pexels.com/photos/5156696/pexels-photo-5156696.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Warehouse shelving filled with boxes and packaging"
  },
  {
    title: "Floater skids and feet",
    image:
      "https://images.pexels.com/photos/4483860/pexels-photo-4483860.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Warehouse workers organizing packaging and stocked shelves"
  },
  {
    title: "ESD foam packaging",
    image:
      "https://images.pexels.com/photos/8986044/pexels-photo-8986044.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Organized industrial tool case with protected metal tools"
  }
];

const foamTypes = [
  {
    title: "Polyethylene",
    text: "Closed-cell, non-absorbent foam with excellent protection and chemical resistance.",
    image: "/images/foam-type-polyethylene.webp"
  },
  {
    title: "Crosslinked Polyethylene",
    text: "Higher durability and tear resistance with excellent shock absorption.",
    image: "/images/foam-type-crosslinked-polyethylene.webp"
  },
  {
    title: "Polyurethane",
    text: "Flexible foam with high impact absorption and superior cushioning performance.",
    image: "/images/foam-type-polyurethane.webp"
  },
  {
    title: "Expanded PE & PP",
    text: "Lightweight and versatile foams ideal for wide packaging applications.",
    image: "/images/foam-type-expanded-pe-pp.webp"
  },
  {
    title: "Electrostatic Discharge Foam",
    text: "Protects sensitive electronics from static damage with anti-static properties.",
    image: "/images/foam-type-esd.webp"
  }
];

const foamInsertFaqs = [
  {
    question: "What custom foam inserts do you provide?",
    answer:
      "We design and fabricate foam inserts for cases, boxes, packaging, storage, and transport. Each insert is built around the product shape, weight, handling needs, and protection requirements."
  },
  {
    question: "Can you make foam insert cases for equipment and tools?",
    answer:
      "Yes. We provide precision foam insert cases for tools, electronics, camera equipment, instruments, and sensitive products, helping keep items organized, protected, and easy to identify during use."
  },
  {
    question: "Do you offer foam insert boxes for product packaging?",
    answer:
      "Yes. We build custom foam insert boxes for protective packaging and presentation, using foam layouts that reduce movement, absorb impact, and keep products secure during shipping or storage."
  },
  {
    question: "Can you create custom cases with foam interiors?",
    answer:
      "Yes. We can support custom cases with foam interiors designed around your product dimensions, weight, and handling conditions for secure transport, storage, and presentation."
  },
  {
    question: "What foam materials can be used?",
    answer:
      "Foam selection depends on your product and application. Common options include polyethylene, crosslinked polyethylene, polyurethane, expanded PE or PP, and ESD foam for sensitive electronics."
  },
  {
    question: "What do you need to quote a foam insert project?",
    answer:
      "Send product dimensions, photos, drawings, case or box details, material preferences, quantity, and any protection requirements such as shock, vibration, abrasion, ESD, or presentation needs."
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
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2 mt-3">{title}</h2>
      {text ? <p className="body mt-4">{text}</p> : null}
    </div>
  );
}

export default function FoamInsertsPage() {
  const [activeNav, setActiveNav] = useState(navItems[0].href);
  const [isFoamTypesPaused, setIsFoamTypesPaused] = useState(false);
  const [applicationsRef, applicationsApi] = useEmblaCarousel({
    align: "start",
    loop: true
  });
  const [foamTypesRef, foamTypesApi] = useEmblaCarousel({
    align: "start",
    loop: true
  });
  const reduceMotion = useReducedMotion();

  const scrollApplicationsPrev = useCallback(
    () => applicationsApi?.scrollPrev(),
    [applicationsApi]
  );
  const scrollApplicationsNext = useCallback(
    () => applicationsApi?.scrollNext(),
    [applicationsApi]
  );
  const scrollFoamTypesPrev = useCallback(
    () => foamTypesApi?.scrollPrev(),
    [foamTypesApi]
  );
  const scrollFoamTypesNext = useCallback(
    () => foamTypesApi?.scrollNext(),
    [foamTypesApi]
  );

  useEffect(() => {
    if (!foamTypesApi || reduceMotion || isFoamTypesPaused) {
      return;
    }

    const autoplay = window.setInterval(() => {
      foamTypesApi.scrollNext();
    }, 4200);

    return () => window.clearInterval(autoplay);
  }, [foamTypesApi, isFoamTypesPaused, reduceMotion]);

  return (
    <>
      <TopBar />
      <Header />
      <main id="foam-inserts" className={styles.page}>
        <section className={styles.hero} aria-labelledby="foam-hero-title">
          <motion.div
            className={styles.heroImage}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={heroMediaVariants}
            transition={{ ...motionTimings.hero, duration: 1.1 }}
          >
            <Image
              src="/images/foam-inserts-hero-custom-case.webp"
              alt="Camera lenses protected in a custom foam insert case"
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
                <span>Foam Inserts</span>
              </motion.nav>
              <motion.h1 id="foam-hero-title" variants={fadeUpVariants} className={`h1 ${styles.heroTitle}`}>
                Foam Sets & Inserts
              </motion.h1>
              <motion.p variants={fadeUpVariants} className={`body-large ${styles.heroLead}`}>
                Strengthen your packaging protection against shock and vibration with 
                intelligently designed custom foam inserts. Reduce operational costs and simplify packaging 
                management with in-house foam design.
              </motion.p>
             
              <motion.div variants={fadeUpVariants} className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Request Quote
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <CarbonFiberServicesSection
          eyebrow="PRECISION FOAM INSERTS"
          title="Custom Foam Inserts"
          description="We design and fabricate foam inserts for packaging, storage, and transport needs. From single cases to production runs, we build clean cavities with dependable protection. We help teams organize sensitive products into durable, efficient inserts with quality and speed"
          services={foamInsertServiceCards}
        />

        <GallerySection
          images={foamInsertPortfolioImages}
          sectionClassName="bg-[radial-gradient(circle_at_50%_12%,rgba(37,99,235,0.05),transparent_30rem),var(--color-soft-white)]"
        />

        <div className={styles.navWrap}>
          <nav className={`container-width ${styles.anchorNav}`} aria-label="Foam inserts page navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveNav(item.href)}
                className={`${styles.anchorLink} ${activeNav === item.href ? styles.anchorLinkActive : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <section id="why-choose" className={`${styles.section} ${styles.whiteSection}`}>
          <div className={`container-width ${styles.gridTwo} ${styles.matchHeightGrid}`}>
            <Reveal className={styles.sectionCopy}>
              <SectionHeader
                eyebrow="WHY CHOOSE FOAM SETS & INSERTS"
                title="Why choose foam sets & inserts"
              />
              <motion.div
                className={styles.featureList}
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
              >
                {whyFeatures.map(({ title, text, icon: Icon }) => (
                  <motion.div key={title} variants={fadeUpVariants} className={styles.featureItem}>
                    <span className={styles.iconCircle} aria-hidden="true">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="h4">{title}</h3>
                      <p className="small-text mt-2">{text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Reveal>

            <Reveal className={`${styles.imageFrame} ${styles.matchHeightImage}`}>
              <Image
                src="/images/foam-insert-cases.png"
                alt="Open protective hard case with custom foam insert compartments"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className={styles.image}
              />
            </Reveal>
          </div>
        </section>

        <section id="overview" className={`${styles.section} bg-secondary`}>
          <div className={`container-width ${styles.gridTwo} ${styles.overviewGrid}`}>
            <Reveal className={styles.imageFrame}>
              <Image
                src="/images/foam-inserts-overview-custom-foam.webp"
                alt="Custom cut black foam packaging block with shaped cavities"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className={styles.image}
              />
            </Reveal>
            <Reveal>
              <SectionHeader
                eyebrow="OVERVIEW"
                title="Designed and manufactured to protect your product"
                text="Foam packaging has a strong impact on the reliability of your shipment. Custom fabricated foam can be designed to fit corrugated boxes, plastic boxes, hard cases, ATA cases, crates, and custom packaging systems. Product weight, fragility, sensitivity, and handling conditions help determine the type and amount of foam required for shock, vibration, and abrasion protection."
              />
            </Reveal>
          </div>
          <div className={`container-width ${styles.overviewBlocks}`}>
            {overviewBlocks.map(({ title, text, icon: Icon }) => (
              <Reveal key={title} className={`feature-card ${styles.miniBlock}`}>
                <span className={styles.iconCircle} aria-hidden="true">
                  <Icon size={46} strokeWidth={1.6} />
                </span>
                <h3 className="h4 mt-5">{title}</h3>
                <p className="small-text mt-3">{text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <SolutionsTabs
          id="foam-solutions"
          eyebrow="FOAM SOLUTIONS"
          title="Explore foam solutions built for every need"
          tabs={solutionTabs}
          ariaLabel="Foam solutions"
        />

        <section id="applications" className={`${styles.section} ${styles.whiteSection}`}>
          <div className="container-width">
            <span id="gallery" className="sr-only">
              Gallery
            </span>
            <div className={styles.sliderHeader}>
              <Reveal>
                <SectionHeader
                  eyebrow="APPLICATIONS"
                  title="Engineered foam assemblies, inserts, and cushioning systems"
                />
              </Reveal>
              <Reveal className={styles.sliderControls}>
                <button
                  type="button"
                  className={styles.sliderButton}
                  aria-label="Previous application"
                  onClick={scrollApplicationsPrev}
                >
                  <ArrowLeft size={19} />
                </button>
                <button
                  type="button"
                  className={styles.sliderButton}
                  aria-label="Next application"
                  onClick={scrollApplicationsNext}
                >
                  <ArrowRight size={19} />
                </button>
              </Reveal>
            </div>
            <Reveal
              className={styles.applicationsViewport}
            >
              <div ref={applicationsRef} className={styles.applicationsClip}>
                <div className={styles.applicationsTrack}>
              {applications.map(({ title, image, imageAlt }) => (
                    <div className={styles.applicationSlide} key={title}>
                      <motion.article
                        className={`industrial-card ${styles.applicationCard}`}
                        whileHover={reduceMotion ? undefined : { y: -5 }}
                        transition={motionTimings.luxuryHover}
                      >
                        <div className={styles.cardImage}>
                          <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                            className={styles.image}
                          />
                        </div>
                        <div className={styles.cardContent}>
                          <h3 className={`h4 ${styles.applicationTitle}`}>{title}</h3>
                        </div>
                      </motion.article>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="foam-types" className={`${styles.section} bg-secondary`}>
          <div className="container-width">
            <div className={styles.centerHeader}>
              <Reveal>
                <SectionHeader
                  eyebrow="FOAM TYPES"
                  title="Common industrial protective packaging foams"
                  text="We identify the foam that will perform best for your application, then design, die-cut, and assemble it for strong in-transit protection with minimum expense. Foam selection depends on product performance needs, cost, durability, cleanliness, presentation, and protection goals."
                />
              </Reveal>
            </div>
            <Reveal className={styles.foamTypesViewport}>
              <div
                ref={foamTypesRef}
                className={styles.applicationsClip}
                onMouseEnter={() => setIsFoamTypesPaused(true)}
                onMouseLeave={() => setIsFoamTypesPaused(false)}
                onFocus={() => setIsFoamTypesPaused(true)}
                onBlur={() => setIsFoamTypesPaused(false)}
              >
                <div className={styles.applicationsTrack}>
                  {foamTypes.map(({ title, text, image }) => (
                    <div className={styles.foamTypeSlide} key={title}>
                      <motion.article
                        className={`industrial-card ${styles.foamCard}`}
                      >
                        <div className={styles.cardImage}>
                          <Image
                            src={image}
                            alt={`${title} protective packaging foam`}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className={styles.image}
                          />
                        </div>
                        <div className={styles.cardContent}>
                          <Sparkles className="mb-3 h-5 w-5 text-accent" />
                          <h3 className={`h4 ${styles.foamTitle}`}>{title}</h3>
                          <p className="small-text mt-3">{text}</p>
                        </div>
                      </motion.article>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <FaqSection
          className="bg-white"
          introText="Find quick answers about custom foam inserts, foam insert cases, foam boxes, custom cases, materials, and project quotes."
          faqs={foamInsertFaqs}
        />

        <div id="resources">
          <FinalCtaBanner />
        </div>
      </main>
      <Footer />
    </>
  );
}
