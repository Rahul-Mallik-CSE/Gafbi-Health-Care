/** @format */

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#f3f3f3] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto relative w-full max-w-[1280px] overflow-hidden rounded-[18px] bg-[#628db4]">
        <div className="absolute right-0 top-0 h-[280px] w-full md:h-[320px] md:w-[48%]">
          <Image
            src="/about-banner.jpg"
            alt="Healthcare team"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute -bottom-2 -left-1 h-44 w-44 rounded-full border-[14px] border-[#7ca2c4]/60" />

        <article className="relative z-10 m-5 max-w-[760px] rounded-lg bg-[#dfe4ea] p-6 text-[#31353b] sm:m-7 sm:p-8 md:ml-14 md:mt-12 md:p-10">
          <h2 className="text-[24px] font-extrabold leading-tight text-[#1f5f8f] sm:text-[44px]">
            We supply families throughout Germany with high-quality, consumable
            care supplies
          </h2>

          <p className="mt-4 text-[18px] leading-[1.6] sm:text-[35px]">
            As a Schülke &amp; Mayr company, we work to the highest standards -
            for quality you can trust.
          </p>

          <p className="mt-5 text-[17px] leading-[1.75] text-[#4e545d] sm:text-[27px]">
            We understand how important safety and trust are, especially in the
            care sector. That's why we provide personal support from the very
            beginning - whether it's with your first order or if you have any
            questions.
            <br />
            As part of the Schülke family, we guarantee the highest quality - so
            that you and your loved ones are completely well cared for. The TUV
            certificate with the rating "Very Good" confirms our high standards
            for safety and reliability.
            <br />
            With us, you are the focus - with a service you can always rely on.
          </p>

          <button
            type="button"
            className="mt-6 rounded-md border border-[#1f5f8f] px-5 py-2 text-[17px] font-semibold text-[#1f5f8f] sm:text-[24px]"
          >
            More about us
          </button>
        </article>

        <div className="h-[520px] w-full md:h-[640px]" />
      </div>
    </section>
  );
}
