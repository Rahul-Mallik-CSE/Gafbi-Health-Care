/** @format */

const quickLinks = [
  "Apply for a care box",
  "Apply for emergency call support (home)",
  "Apply for a care level",
  "Care level upgrade",
];

const companyLinks = ["Frequently Asked Questions", "Contact", "About Us"];

const findUsLinks = ["Facebook", "Instagram", "LinkedIn", "Youtube"];

export default function Footer() {
  return (
    <footer className="w-full mx-auto bg-[#f3f3f3]">
      <div className="w-full mx-auto max-w-625">
        <div className="w-full mx-auto  max-w-625 items-center justify-between px-4 pb-4 pt-10 sm:px-6 md:mx-16 lg:px-28 xl:px-32">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-80">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-[#13161a]">
                Stay in the loop with our latest listings
              </h2>
              <div className="mt-5 flex overflow-hidden rounded-md border border-[#d3d7dc] bg-white">
                <input
                  type="email"
                  placeholder="Enter email to subscribe"
                  className="w-full px-4 py-2 text-[18px] text-[#4e5760] outline-none"
                />
                <button
                  type="button"
                  aria-label="Submit email"
                  className="bg-[#1f5f8f] cursor-pointer px-4 text-white"
                >
                  ↗
                </button>
              </div>
            </div>

            <button
              type="button"
              aria-label="Back to top"
              className="mt-1 cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-[#c8cdd3] text-[18px] text-[#4f5760]"
            >
              ↑
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-[#1b1f24]">
                Quick links
              </h3>
              <ul className="mt-4 space-y-2">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs md:text-sm text-[#1f5f8f] underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-[#1b1f24]">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs md:text-sm text-[#1f5f8f] underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-5 cursor-pointer rounded-md bg-[#c40019] px-4 py-2 text-[18px] font-semibold text-white"
              >
                Cancel Gafbi care box
              </button>
            </div>

            <div>
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-[#1b1f24]">
                Find us
              </h3>
              <ul className="mt-4 space-y-2">
                {findUsLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs md:text-sm text-[#1f5f8f] underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#d9dde1]">
        <div className="max-w-625 mx-auto ">
          <div className="mx-auto w-full flex justify-between max-w-625 px-4 py-4  sm:px-6 md:mx-16 lg:px-28 xl:px-32">
            <p className="text-xs md:text-sm">
              2026 @Gafbi - All rights reserved
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <a href="#" className="text-[#4c6f91] text-xs md:text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-[#4c6f91] text-xs md:text-sm">
                Terms &amp; Conditions
              </a>
              <a href="#" className="text-[#4c6f91] text-xs md:text-sm">
                Imprint
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
