/** @format */

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const products = Array.from({ length: 10 }, (_, index) => ({
  id: `surface-disinfectant-${index + 1}`,
  name: "Surface Disinfectant",
  size: "500 ml",
  rating: "4.5",
  image: "/antifect.png",
}));

const ProductsPage = () => {
  return (
    <main className="min-h-screen bg-[var(--color-card-bg)] px-4 pb-12 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 text-xs text-[var(--color-secondary)]">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Products</span>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-button-bg)]">Our products</span>
        </div>

        <h1 className="mb-4 text-3xl font-semibold text-[var(--color-primary)]">
          Our Products
        </h1>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="rounded-md bg-white p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-3 flex h-28 items-end justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={78}
                  height={118}
                  className="h-auto w-auto"
                />
              </div>

              <h2 className="mb-1 text-sm md:text-base font-medium text-[var(--color-primary)]">
                {product.name}
              </h2>
              <p className="mb-2 text-xs md:text-sm text-[var(--color-secondary)]">
                {product.size}
              </p>

              <div className="flex items-center justify-between gap-2">
                <p className="flex items-center gap-1 text-xs md:text-sm font-semibold text-[#d3a008]">
                  <Star size={12} fill="currentColor" strokeWidth={0} />
                  {product.rating}
                </p>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="rounded-sm cursor-pointer border border-[var(--color-button-bg)] px-2 py-[2px] text-xs md:text-sm font-semibold text-[var(--color-button-bg)]"
                  >
                    Booking request +
                  </button>
                  <Link
                    href={`/products/${product.id}`}
                    className="rounded-sm cursor-pointer bg-[var(--color-button-bg)] px-2 py-[3px] text-xs md:text-sm font-semibold text-white"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
