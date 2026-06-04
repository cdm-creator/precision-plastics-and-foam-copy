"use client";

import { fadeUpVariants } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
};

type TestimonialsSectionProps = {
  heading?: string;
  testimonials?: Testimonial[];
  backgroundVariant?: "soft" | "white";
};

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "The team understood our requirements clearly and delivered custom plastic components with excellent precision and turnaround time.",
    name: "Robert J. Adams",
    role: "Procurement Lead",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&fit=crop&fm=webp&w=240&h=240",
    imageAlt: "Robert J. Adams"
  },
  {
    quote:
      "Precision Plastics & Foam delivered high-quality foam inserts that perfectly protected our equipment during transit.",
    name: "Anita D. Costin",
    role: "Operations Manager",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&fit=crop&fm=webp&w=240&h=240",
    imageAlt: "Anita D. Costin"
  },
  {
    quote:
      "From design support to final delivery, the process was smooth, efficient, and highly professional.",
    name: "Wilbur N. Shore",
    role: "Manufacturing Director",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&fit=crop&fm=webp&w=240&h=240",
    imageAlt: "Wilbur N. Shore"
  }
];

export function TestimonialsSection({
  heading = "Reviews From Our Awesome Clients",
  testimonials = defaultTestimonials,
  backgroundVariant = "white"
}: TestimonialsSectionProps) {
  const reduceMotion = useReducedMotion();
  const sectionBackground =
    backgroundVariant === "white"
      ? "bg-white"
      : "bg-[radial-gradient(circle_at_50%_12%,rgba(37,99,235,0.05),transparent_30rem),#f1f6fb]";
  const tickerItems = [...testimonials, ...testimonials];

  return (
    <section className={`relative isolate overflow-hidden py-16 sm:py-24 lg:py-20 ${sectionBackground}`}>
      <Image
        src="/images/testimonials-map.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none z-0 object-contain object-center opacity-[0.35]"
        aria-hidden="true"
      />

      <motion.div
        className="container-width relative z-10"
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
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            variants={fadeUpVariants}
            className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-precision-blue)]"
          >
            Testimonials
          </motion.p>
          <motion.h2 variants={fadeUpVariants} className="h2 mt-4">
            {heading}
          </motion.h2>
          <motion.div variants={fadeUpVariants} className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-4">
            <span className="h-px flex-1 bg-[var(--color-border-gray)]" />
            <span className="grid h-10 w-10 place-items-center text-[var(--color-industrial-orange)]">
              <Quote size={34} fill="currentColor" strokeWidth={0} />
            </span>
            <span className="h-px flex-1 bg-[var(--color-border-gray)]" />
          </motion.div>
        </div>

        <motion.div
          variants={fadeUpVariants}
          className="group relative mt-10 overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
        >
          <div
            className={`flex w-max gap-6 pr-6 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] md:gap-8 md:pr-8 ${
              reduceMotion ? "" : "animate-[testimonials-marquee_28s_linear_infinite]"
            }`}
          >
            {tickerItems.map((testimonial, itemIndex) => (
              <motion.article
                key={`${testimonial.name}-${itemIndex}`}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="flex min-h-[19rem] w-[min(22.5rem,calc(100vw-3rem))] shrink-0 flex-col rounded-2xl bg-white p-7 text-center shadow-[0_8px_24px_rgba(15,23,42,0.045)] transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)] sm:w-[24rem] sm:p-8 lg:w-[25rem]"
              >
                <div className="flex justify-center gap-1 text-[var(--color-industrial-orange)]" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" strokeWidth={1.8} />
                  ))}
                </div>

                <p className="body mt-6 flex-1 text-sm leading-7 text-[var(--color-muted-text)]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-7 flex items-center justify-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[var(--color-soft-white)]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.imageAlt}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-heading text-base font-semibold leading-tight text-[var(--color-industrial-navy)]">
                      {testimonial.name}
                    </h3>
                    <p className="small-text mt-1 text-[var(--color-muted-text)]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
