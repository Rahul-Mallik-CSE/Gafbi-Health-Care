/** @format */

import Image from "next/image";

const navItems = ["About Us", "Carebox", "Products", "Contact", "FAQs"];

export default function NavBar() {
  return (
    <header className="w-full bg-[#f3f3f3]">
      <div className="mx-auto flex w-full max-w-625 items-center justify-between px-6 py-4 lg:px-10">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="GAFBI Health Care"
            width={58}
            height={58}
            priority
          />
          <p className="text-2xl font-semibold leading-none tracking-tight text-primary">
            Gafbi Health Care
          </p>
        </div>

        <nav className="flex items-center gap-0 overflow-hidden rounded-xl border border-black/10 bg-[#efefef] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="border-r border-black/10 px-4 py-3 text-lg  font-medium text-[#3b3b3b] transition-colors hover:bg-white last:border-r-0"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
