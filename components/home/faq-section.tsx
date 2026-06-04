"use client";

import { fadeUpVariants, motionTimings } from "@/lib/motion";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const faqImage =
  "https://images.pexels.com/photos/32845690/pexels-photo-32845690.jpeg?auto=compress&cs=tinysrgb&fit=crop&fm=webp&w=1200";

const faqs = [
  {
    question: "What industries do you serve?",
    answer:
      "We support aerospace, oil & gas, medical devices, industrial automation, energy, and custom manufacturing with tailored plastic and foam solutions."
  },
  {
    question: "What types of products do you offer?",
    answer:
      "We offer precision-cut foam inserts, protective packaging, machined plastic components, fabricated plastic parts, and custom material solutions for industrial applications."
  },
  {
    question: "Can you customize products for our needs?",
    answer:
      "Yes. We design around your dimensions, material requirements, handling conditions, production volume, and application goals."
  },
  {
    question: "What materials do you use?",
    answer:
      "Our team works with industrial foams and plastics including polyethylene, EVA, polyurethane, acrylic, HDPE, PVC, nylon, polycarbonate, and application-specific materials."
  },
  {
    question: "How long does production take?",
    answer:
      "Timelines depend on complexity, material availability, and order volume. After reviewing your requirements, we provide a clear production estimate with your quote."
  },
  {
    question: "How can I request a quote?",
    answer:
      "Send us your drawings, dimensions, photos, material needs, or application details through the quote form and our team will follow up with next steps."
  }
];

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  className?: string;
  faqs?: FaqItem[];
  introText?: string;
};

export function FaqSection({ className, faqs: customFaqs, introText }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const sectionFaqs = customFaqs ?? faqs;

  return (
    <section
      id="why-us"
      className={`${className ?? "bg-[radial-gradient(circle_at_50%_12%,rgba(37,99,235,0.05),transparent_30rem),#f1f6fb]"} py-20 sm:py-24 lg:py-28`}
      aria-labelledby="faq-title"
    >
      <motion.div
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
        className="container-width grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-start lg:gap-16"
      >
        <div>
          <motion.p variants={fadeUpVariants} className="eyebrow">
            Frequently Asked Questions
          </motion.p>
          <motion.h2 id="faq-title" variants={fadeUpVariants} className="h2 mt-4 max-w-xl">
            Have Questions?
            <br />
            We&apos;ve Got Answers.
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="body-large mt-5 max-w-xl">
            {introText ?? "Find quick answers to the most common questions about our solutions, process, and support."}
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            transition={motionTimings.fadeUp}
            className="relative mt-10 max-w-[36rem] overflow-visible pb-8 pl-5 sm:mt-12 sm:pb-10 sm:pl-7"
          >
            <div className="absolute bottom-0 left-0 right-4 top-10 bg-[var(--color-precision-blue)] [clip-path:polygon(0_0,88%_0,100%_100%,12%_100%)] sm:right-5 sm:top-12" />
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ ...motionTimings.hero, duration: 0.8 }}
              className="relative ml-5 sm:ml-8"
            >
              <div className="relative aspect-[1.48/1] min-h-[12rem] overflow-hidden shadow-industrial [clip-path:polygon(0_0,88%_0,100%_100%,12%_100%)] sm:min-h-[17rem]">
                <Image
                  src={faqImage}
                  alt="Factory workers reviewing production details on a tablet"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.08,
                delayChildren: reduceMotion ? 0 : 0.08
              }
            }
          }}
          className="grid gap-5"
        >
          {sectionFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = isOpen ? ChevronUp : ChevronDown;

            return (
              <motion.article
                key={faq.question}
                variants={fadeUpVariants}
                transition={motionTimings.fadeUp}
                className="overflow-hidden rounded-industrial border border-system bg-white shadow-[0_12px_34px_rgba(15,23,42,0.08)]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left focus-ring sm:px-8"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="font-heading text-[16px] font-semibold leading-snug text-[var(--color-industrial-navy)] sm:text-lg">
                    {faq.question}
                  </span>
                  <Icon className="h-6 w-6 shrink-0 text-[var(--color-precision-blue)]" strokeWidth={2.4} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-answer-${index}`}
                      key="content"
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="body px-6 pb-7 pt-0 text-[14px] leading-7 sm:px-8 sm:text-[15px]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
