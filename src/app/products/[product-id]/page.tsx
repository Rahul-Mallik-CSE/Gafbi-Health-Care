/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { useState } from "react";

const reviewItems = [
  {
    name: "Alex Morgan",
    time: "1 mo ago",
    content:
      "The item arrived in excellent condition and was packaged with great care to prevent any damage during transit. Shipping was both fast and reliable. It arrived on time and the cost was very fair given the speed of delivery.",
  },
  {
    name: "Alex Morgan",
    time: "1 mo ago",
    content:
      "The item looks just as great in person as it did in the photos and works perfectly. I have tested it thoroughly with no issues at all. For the price, including shipping, the overall value is truly outstanding.",
  },
  {
    name: "Alex Morgan",
    time: "1 mo ago",
    content:
      "I am very happy with the purchase and highly recommend this seller.",
  },
];

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description",
  );

  return (
    <main className="min-h-screen bg-[var(--color-card-bg)] px-4 pb-12 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 text-xs text-[var(--color-secondary)]">
          <Link href="/" className="hover:text-[var(--color-button-bg)]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/products"
            className="hover:text-[var(--color-button-bg)]"
          >
            Products
          </Link>
          <span className="mx-2">/</span>
          <span>Our products</span>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-button-bg)]">Product details</span>
        </div>

        <section className="rounded-md bg-white p-4 sm:p-6">
          <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex min-w-36 justify-center">
              <Image
                src="/antifect.png"
                alt="Surface Disinfectant"
                width={110}
                height={166}
              />
            </div>

            <div>
              <h1 className="mb-1 text-3xl font-semibold text-[var(--color-primary)]">
                Surface Disinfectant
              </h1>
              <p className="mb-2 text-sm text-[var(--color-secondary)]">
                500 ml
              </p>
              <p className="mb-6 flex items-center gap-1 text-sm font-semibold text-[#d3a008]">
                <Star size={14} fill="currentColor" strokeWidth={0} />
                4.5
              </p>

              <button
                type="button"
                className="rounded-md bg-[var(--color-button-bg)] px-5 py-2 text-sm font-semibold text-white"
              >
                Booking request +
              </button>
            </div>
          </div>

          <div className="mb-5 flex border-b border-slate-300 text-sm">
            <button
              type="button"
              onClick={() => setActiveTab("description")}
              className={`border-b-2 px-1 pb-2 pr-4 font-semibold ${
                activeTab === "description"
                  ? "border-[var(--color-button-bg)] text-[var(--color-button-bg)]"
                  : "border-transparent text-[var(--color-secondary)]"
              }`}
            >
              Description
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("reviews")}
              className={`border-b-2 px-1 pb-2 font-semibold ${
                activeTab === "reviews"
                  ? "border-[var(--color-button-bg)] text-[var(--color-button-bg)]"
                  : "border-transparent text-[var(--color-secondary)]"
              }`}
            >
              Reviews & ratings
            </button>
          </div>

          {activeTab === "description" ? (
            <div className="space-y-1 text-sm leading-7 text-[var(--color-primary)]">
              <p>
                Dr. Schumacher - Aseptoman Med - alcoholic hand disinfectant
                wipes - 15 pcs.
              </p>
              <p>
                Dr. Schumacher&apos;s Aseptoman Med hand disinfectant wipes
                offer an effective solution for hygienic hand disinfection on
                the go.
              </p>
              <p>
                Each wipe is soaked in an alcohol-based solution that reliably
                reduces germs while being gentle on the skin.
              </p>
              <p>Product features:</p>
              <p>
                Effective disinfection: The wipes are bactericidal, yeasticidal,
                and tuberculocidal.
              </p>
              <p>
                Skin-friendly: Thanks to high-quality, moisturizing ingredients,
                the skin is protected from drying out.
              </p>
              <p>
                Fast action time: The disinfectant solution takes effect within
                a very short time.
              </p>
              <p>
                Fragrance-free: The wipes are fragrance-free and therefore ideal
                for people with sensitive skin.
              </p>
              <p>
                Convenient packaging: The pack contains 15 individually
                removable wipes that can be easily stored in a bag or car.
              </p>
              <p>Areas of application:</p>
              <p>
                Aseptoman Med hand disinfectant wipes are ideally suited for use
                in various areas: on the go, in the workplace, and at home.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[250px_1fr]">
              <aside>
                <h2 className="mb-5 text-xl font-semibold text-[var(--color-primary)]">
                  4.6
                </h2>
                <p className="mb-2 text-sm text-[var(--color-primary)]">
                  634 product ratings
                </p>
                {[5, 4, 3, 2, 1].map((star, index) => (
                  <div
                    key={star}
                    className="mb-2 flex items-center gap-2 text-xs"
                  >
                    <span className="w-4">{star}</span>
                    <div className="h-1.5 w-full rounded bg-slate-200">
                      <div
                        className="h-1.5 rounded bg-[#d3a008]"
                        style={{ width: `${[85, 50, 30, 20, 25][index]}%` }}
                      />
                    </div>
                  </div>
                ))}

                <div className="mt-8">
                  <h3 className="mb-2 text-lg font-semibold text-[var(--color-primary)]">
                    Review this product
                  </h3>
                  <p className="mb-3 text-xs text-[var(--color-secondary)]">
                    Share your thoughts with other customers...
                  </p>
                  <textarea
                    className="mb-2 h-20 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none"
                    placeholder="Share your thoughts with other customers..."
                  />
                  <input
                    className="mb-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none"
                    placeholder="Enter your Name"
                  />
                  <input
                    className="mb-3 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none"
                    placeholder="Email Address"
                  />
                  <button
                    type="button"
                    className="rounded-md bg-[var(--color-button-bg)] px-4 py-1.5 text-sm font-semibold text-white"
                  >
                    Submit
                  </button>
                </div>
              </aside>

              <section>
                <h2 className="mb-4 text-lg font-semibold text-[var(--color-primary)]">
                  Most relevant reviews
                </h2>
                <div className="space-y-5">
                  {reviewItems.map((item, idx) => (
                    <article
                      key={`${item.name}-${idx}`}
                      className="border-b border-slate-200 pb-4"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <p className="text-sm font-semibold text-[var(--color-primary)]">
                          {item.name}
                        </p>
                        <p className="text-xs text-[var(--color-secondary)]">
                          {item.time}
                        </p>
                      </div>
                      <p className="mb-2 flex items-center gap-1 text-[#d3a008]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            fill="currentColor"
                            strokeWidth={0}
                          />
                        ))}
                      </p>
                      <p className="text-sm leading-6 text-[var(--color-primary)]">
                        {item.content}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ProductDetails;
