/** @format */
import Image from "next/image";
import Link from "next/link";

const careBoxFeatures = [
  {
    icon: "/icons/1.svg",
    title: "Customize your Care Box",
    description: "You can customize your care box to suit your needs.",
  },
  {
    icon: "/icons/2.svg",
    title: "Immediate Dispatch",
    description: "Your order will be dispatched immediately upon receipt.",
  },
  {
    icon: "/icons/3.svg",
    title: "Completely Uncomplicated",
    description:
      "The processing with the long-term care insurance fund is handled.",
  },
  {
    icon: "/icons/4.svg",
    title: "Flexible with a Customer Account",
    description:
      "You can customize your box, change delivery details, or pause at any time",
  },
  {
    icon: "/icons/5.svg",
    title: "Free of Charge",
    description:
      "Your long-term care insurance covers the cost, so the care box is free for you.",
  },
  {
    icon: "/icons/6.svg",
    title: "Quality Assurance",
    description:
      "Quality products such as disinfectant from Schulke are available.",
  },
];

export default function CareBoxSection() {
  return (
    <section className="w-full  py-10">
      <div className="mx-auto w-full max-w-625 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-210 text-center pb-8 md:pb-20">
          <h2 className="text-xl font-extrabold leading-tight text-primary sm:text-2xl md:text-3xl lg:text-5xl">
            Free care aids from{" "}
            <span className="text-[#a8c153]">#care level 1</span>
          </h2>
          <p className="mx-auto mt-4 max-w-150 text-base leading-[1.7] text-secondary sm:text-lg md:text-xl">
            Receive high-quality care products completely free of charge through
            your long-term care insurance. Customize your personal Care Box with
            essential daily aids and have it delivered quickly and easily to
            your home.
          </p>
          <Link href="/apply-box">
            <button
              type="button"
              className="mt-7 cursor-pointer rounded-md bg-button-bg px-6 py-2 text-sm md:text-base font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Apply for a care box now
            </button>
          </Link>
        </div>

        <div className="my-8 md:my-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-300 mx-auto hover:cursor-pointer">
          {careBoxFeatures.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl bg-[#dfe4e8] p-5 md:p-6 hover:shadow-sm transition-shadow"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f4f4f4]">
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-xl font-bold leading-tight text-primary">
                {feature.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm md:text-base leading-[1.65] text-secondary">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
