/** @format */

"use client";

import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    text: "Pakai ini dan lumayan ngefek di wajah, jadi agak cerahan. Teksturnya cream dan kental, gampang nyera",
    name: "Kathryn Murphy",
    date: "December 29, 2012",
  },
  {
    text: "buat night cream bagiku sih oke oke aja, cukup melembabkan. untuk tekstur aku lebih prefer night cre",
    name: "Esther Howard",
    date: "August 2, 2013",
  },
  {
    text: "bagus cocok buat aku, kalau dipakai rutin, terus dipakein ini bisa ke",
    name: "Wade Warren",
    date: "July 14, 2015",
  },
  {
    text: "produk bagus, pengiriman cepat, pelayanan juga ramah sekali.",
    name: "Jenny Wilson",
    date: "March 5, 2016",
  },
];

export default function ClientsReviewSection() {
  const [index, setIndex] = useState(0);

  const visible = [
    reviews[index % reviews.length],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length],
  ];

  return (
    <section className="w-full  px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-625 px-2 sm:px-4 md:px-10 lg:px-16 xl:px-24 2xl:px-28">
        <h2 className="max-w-130 text-xl font-extrabold leading-[1.15] text-primary sm:text-2xl md:text-3xl lg:text-4xl">
          Don&apos;t take our word for it, see what our clients say
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
          {visible.map((review, i) => (
            <article
              key={`${review.name}-${i}`}
              className="rounded-xl bg-[#dfe4e8] p-5 sm:p-6"
            >
              <div
                className="flex items-center gap-1"
                aria-label="5 star review"
              >
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Image
                    key={`review-star-${review.name}-${starIndex}`}
                    src="/icons/star.svg"
                    alt="★"
                    width={20}
                    height={20}
                    quality={100}
                    className="h-5 w-5 md:h-6 md:w-6"
                  />
                ))}
              </div>
              <p className="mt-3 text-sm  leading-[1.65] text-primary sm:text-base md:text-lg">
                {review.text}
              </p>
              <p className="mt-4 text-base font-semibold text-primary sm:text-lg md:text-xl">
                {review.name}
              </p>
              <p className="mt-1 text-xs  text-secondary sm:text-sm md:text-base">
                {review.date}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="flex flex-wrap items-center gap-2 text-xl md:text-2xl font-semibold text-primary">
              <Image
                src="/icons/star_1.svg"
                alt="Star"
                width={18}
                height={18}
                className="h-4.5 w-4.5"
              />
              <span>Trustpilot</span>
              <span
                className="flex items-center gap-0.5"
                aria-label="5 star rating"
              >
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Image
                    key={starIndex}
                    src="/icons/star.svg"
                    alt="Star"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                ))}
              </span>
              <span>Excellent</span>
            </p>
            <p className="mt-2 text-sm text-secondary sm:text-base md:text-lg">
              4.7 ratings based on the 3,219 clients
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous reviews"
              onClick={() =>
                setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
              }
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d5d8dc] text-[20px] text-[#8a9097]"
            >
              <MoveLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next reviews"
              onClick={() => setIndex((prev) => (prev + 1) % reviews.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d5d8dc] text-[20px] text-[#8a9097]"
            >
              <MoveRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
