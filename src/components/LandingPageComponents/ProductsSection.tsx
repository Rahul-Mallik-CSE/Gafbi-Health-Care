/** @format */
"use client";
import Image from "next/image";
import { useMemo, useState } from "react";

const products = [
  {
    name: "Disinfectant Wipes",
    unit: "9 Pieces/box",
    image: "/mikrozid.png",
  },
  {
    name: "Hand Disinfectant",
    unit: "170 ml/bottle",
    image: "/desderman.png",
  },
  {
    name: "Hand Disinfectant",
    unit: "170 ml/bottle",
    image: "/antifect.png",
  },
  {
    name: "Hand Disinfectant",
    unit: "170 ml/bottle",
    image: "/desderman.png",
  },
  {
    name: "Hand Disinfectant",
    unit: "170 ml/bottle",
    image: "/antifect.png",
  },
];

export default function ProductsSection() {
  const [index, setIndex] = useState(0);

  const visibleCount = useMemo(() => {
    // Keep layout behavior consistent across breakpoints by matching prior columns.
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1280) return 4;
    if (window.innerWidth >= 768) return 3;
    return 1;
  }, []);

  const maxIndex = Math.max(0, products.length - visibleCount);

  const handlePrev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="w-full  px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-625 rounded-[14px] bg-card-bg p-5 sm:p-8 lg:p-10 xl:p-16">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary ">
          Trusted care products from Gafbi
        </h2>

        <div className="mt-8 overflow-hidden px-2 md:px-4 lg:px-6">
          <div
            className="flex gap-4 transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${index * (100 / visibleCount)}%)`,
            }}
          >
            {products.map((product, productIndex) => (
              <article
                key={`${product.image}-${productIndex}`}
                className="w-full shrink-0 rounded-xl bg-background p-4 sm:p-5 md:w-[calc((100%-2rem)/3)] xl:w-[calc((100%-3rem)/4)]"
              >
                <div className="flex h-[230px] items-center justify-center sm:h-[300px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={240}
                    height={240}
                    className="h-auto w-auto object-contain"
                  />
                </div>
                <div className="rounded-xl border border-[#d8dde2]  p-4">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3 className="text-sm md:text-base  font-semibold text-[#1f5f8f]">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-xs md:text-sm text-[#35709c]">
                        {product.unit}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="rounded-md cursor-pointer bg-button-bg px-2 py-1 text-sm font-semibold text-white"
                    >
                      + Add to box
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous products"
            className="flex cursor-pointer h-10 w-10 items-center justify-center rounded-full border border-[#c3c9cf] text-[#95a0aa]"
            onClick={handlePrev}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next products"
            className="flex cursor-pointer h-10 w-10 items-center justify-center rounded-full border border-[#c3c9cf] text-[#95a0aa]"
            onClick={handleNext}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
