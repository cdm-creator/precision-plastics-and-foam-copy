"use client";

import { Search, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
};

const defaultGalleryImages: GalleryImage[] = [
  {
    src: "/images/portfolio-electronics-foam-case.webp",
    alt: "Custom foam case insert holding electronic devices"
  },
  {
    src: "/images/portfolio-white-plastic-sprocket.webp",
    alt: "White precision-machined plastic sprocket component"
  },
  {
    src: "/images/portfolio-camera-foam-insert.webp",
    alt: "Custom foam insert case for camera lenses"
  },
  {
    src: "/images/portfolio-plastic-cnc-machining.webp",
    alt: "CNC machining process on a plastic workpiece"
  },
  {
    src: "/images/portfolio-carbon-fiber-brackets.webp",
    alt: "Carbon fiber cut bracket parts on textured foam"
  },
  {
    src: "/images/portfolio-carbon-fiber-cnc.webp",
    alt: "Close-up CNC machining carbon fiber material"
  },
  {
    src: "/images/portfolio-clear-machined-plastic.webp",
    alt: "Clear precision-machined plastic component"
  },
  {
    src: "/images/portfolio-drone-foam-case.webp",
    alt: "Custom foam case insert for drone equipment"
  }
];

export function GallerySection({
  images = defaultGalleryImages,
  sectionClassName = "bg-white"
}: {
  images?: GalleryImage[];
  sectionClassName?: string;
}) {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage]);

  return (
    <section className={`${sectionClassName} py-12 md:py-14`}>
      <div className="container-width">
        <h2 className="h2 text-center">Portfolio</h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveImage(image)}
              className="group focus-ring relative aspect-square overflow-hidden border border-system bg-card"
              aria-label={`Open ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-slate-950/0 transition duration-300 group-hover:bg-slate-950/55" />
              <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 scale-90 place-items-center rounded-full border border-white/55 bg-white/20 text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                <Search size={19} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio image preview"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(15,23,42,0.85)] p-5"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            aria-label="Close portfolio preview"
            onClick={() => setActiveImage(null)}
            className="focus-ring absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
          >
            <X size={22} />
          </button>
          <div
            className="relative h-[min(78vh,48rem)] w-[min(92vw,68rem)]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="92vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
