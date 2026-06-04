export function HeroBottomDivider() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 translate-y-[1px] md:h-40 lg:h-48">
      <svg
        className="h-full w-full"
        viewBox="0 0 100 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="0,62 50,96 100,62 100,120 0,120" fill="white" />
        <polyline
          points="0,62 50,96 100,62"
          fill="none"
          stroke="var(--color-industrial-orange)"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeWidth="8"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
