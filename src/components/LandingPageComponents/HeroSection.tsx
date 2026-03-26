/** @format */

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-[var(--color-card-bg)]">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-16">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-1 text-xs font-semibold tracking-[0.08em] text-[var(--color-button-bg)]">
            Trusted Health Services
          </p>
          <h1 className="text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
            Compassionate Care for Every Stage of Life
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-secondary)] sm:text-base">
            We deliver patient-focused healthcare with modern facilities,
            experienced doctors, and personalized treatment plans designed for
            your wellbeing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full px-6 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: "#1e5a83" }}
            >
              Get Started
            </button>
            <button
              type="button"
              className="rounded-full border border-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)]"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-sm">
          <Image
            src="/hero-banner.jpg"
            alt="Healthcare professionals"
            width={900}
            height={650}
            priority
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
