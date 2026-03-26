/** @format */

import Image from "next/image";

const navItems = ["Home", "About", "Services", "Doctors", "Contact"];

export default function NavBar() {
  return (
    <header className="w-full border-b border-black/10 bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="GAFBI Health Care"
            width={48}
            height={48}
            priority
          />
          <div>
            <p className="text-lg font-semibold leading-none text-[var(--color-primary)]">
              GAFBI
            </p>
            <p className="text-xs tracking-[0.14em] text-[var(--color-secondary)]">
              HEALTH CARE
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-[var(--color-primary)] transition-opacity hover:opacity-70"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-full px-5 py-2 text-sm font-semibold text-white"
          style={{ backgroundColor: "#1e5a83" }}
        >
          Book Appointment
        </button>
      </div>
    </header>
  );
}
