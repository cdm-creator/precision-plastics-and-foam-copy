"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ApplicationsSlider } from "@/components/home/applications-slider";
import { CoreCapabilities } from "@/components/home/core-capabilities";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCtaBanner } from "@/components/home/final-cta-banner";
import { GallerySection } from "@/components/home/GallerySection";
import { HeroSlider } from "@/components/home/hero-slider";
import { IndustrialShowcase } from "@/components/home/industrial-showcase";
import { LatestBlogSection } from "@/components/home/latest-blog-section";
import { MaterialsCapabilities } from "@/components/home/materials-capabilities";
import { ProcessSection } from "@/components/home/process-section";
import { ServiceCapabilities } from "@/components/home/service-capabilities";
import { ServicesSlider } from "@/components/home/services-slider";
import { TopBar } from "@/components/layout/top-bar";
import {
  fadeUpVariants,
  motionTimings
} from "@/lib/motion";
import {
  ArrowRight,
  DraftingCompass,
  Gauge,
  Layers,
  Timer,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const images = {
  foam:
    "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&fm=webp&q=82&w=1200"
};

const capabilityStrip = [
  {
    title: "Precision Cutting",
    text: "Clean profiles, tight cavities, and repeatable component fit.",
    icon: Gauge
  },
  {
    title: "CAD Guided Design",
    text: "Layouts planned around parts, tools, and handling requirements.",
    icon: DraftingCompass
  },
  {
    title: "Industrial Materials",
    text: "Foam and plastic stock selected for the application.",
    icon: Layers
  },
  {
    title: "Fast Turnaround",
    text: "Quote support from prototype through production runs.",
    icon: Timer
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

function MobileCapabilitySlider({ items }: { items: typeof capabilityStrip }) {
  const [emblaRef] = useEmblaCarousel({ align: "start", loop: false, dragFree: false });

  return (
    <div className="md:hidden py-6">
      <div className="overflow-hidden px-4" ref={emblaRef}>
        <div className="flex gap-3">
          {items.map(({ title, text, icon: Icon }) => (
            <div key={title} className="flex-none w-full">
              <article className="rounded-industrial border border-system bg-card p-4 shadow-card flex flex-col">
                <div className="flex items-start gap-3 flex-1">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-technical" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold text-[var(--color-industrial-navy)]">
                      {title}
                    </h3>
                    <p className="small-text mt-2">{text}</p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="home">
        <HeroSlider />

        <section className="border-y border-system bg-card">
          <div className="container-width">
            {/* Mobile slider */}
            <MobileCapabilitySlider items={capabilityStrip} />

            {/* Desktop / tablet grid */}
            <div className="hidden md:grid gap-px py-8 md:grid-cols-2 lg:grid-cols-4">
              {capabilityStrip.map(({ title, text, icon: Icon }) => (
                <FadeIn
                  key={title}
                  className="capability-item flex gap-4 border-system bg-card py-5 md:px-4 lg:border-r"
                >
                  <Icon className="capability-item__icon h-6 w-6 shrink-0 text-technical" />
                  <div>
                    <h2 className="h4 capability-item__title">
                      {title}
                    </h2>
                    <p className="small-text mt-2">{text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <IndustrialShowcase />

        <GallerySection />

        <CoreCapabilities />

        <section id="foam-inserts" className="bg-white pt-20 pb-12 lg:pb-14 lg:pt-32">
          <div className="container-width grid gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-stretch lg:gap-16">
            <FadeIn className="h-full">
              <div className="relative h-full min-h-[24rem] overflow-hidden rounded-industrial shadow-industrial">
                <div className="relative h-full min-h-[24rem]">
                  <Image
                    src={images.foam}
                    alt="Aerospace manufacturing team working with foam and plastic assemblies"
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 rounded-industrial bg-white p-5 shadow-industrial">
                  <p className="small-text relative pl-11 text-midnight">
                    <span className="absolute left-0 top-0 text-4xl font-heading font-semibold leading-none text-accent">
                      “
                    </span>
                    From prototype components to mission-ready equipment cases, we build protection around the exact shape, weight, and handling requirements of your program.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="flex h-full flex-col justify-center">
              <p className="eyebrow">Precision Support</p>
              <h2 className="h2 mt-4">The role of precision plastic and foam solutions in aerospace</h2>
              <p className="body mt-5">
                Aerospace and defense programs require repeatable protection, tight tolerances, and careful handling for sensitive components. Our team supports programs where every insert, machined plastic part, and transport system needs to perform reliably.
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

        <ServiceCapabilities />

        <ProcessSection />

        <MaterialsCapabilities />

        <ApplicationsSlider />

        <FaqSection />

        <TestimonialsSection />

        <LatestBlogSection />

        <FinalCtaBanner />
      </main>
      <Footer />
    </>
  );
}
