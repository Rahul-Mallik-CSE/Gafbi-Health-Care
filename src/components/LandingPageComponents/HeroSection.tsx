/** @format */

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full pb-16">
      <div className="relative mx-auto w-full max-w-625 overflow-hidden">
        <div className="relative h-[620px] w-full">
          <Image
            src="/hero-banner.jpg"
            alt="Healthcare professionals"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_45%,rgba(0,0,0,0.45)_100%)]" />

          <div className="absolute bottom-16 left-16 max-w-[620px] text-white">
            <h1 className="text-[56px] font-bold leading-[1.08]">
              Gafbi Care Box - Simple
              <br />
              solutions for your care supply
              <br />
              needs
            </h1>
            <p className="mt-6 text-[20px] leading-[1.55] text-white/95">
              Home care supplies - reliable, tailored to your needs, and
              delivered directly to you. We support families throughout Germany
              with home care.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-sm bg-[#0b6ca7] px-5 py-2.5 text-[14px] font-semibold text-white"
              >
                Apply for a new care box now
              </button>
              <button
                type="button"
                className="rounded-sm bg-[#8d8d8d] px-5 py-2.5 text-[14px] font-semibold text-white"
              >
                Apply for emergency call support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
