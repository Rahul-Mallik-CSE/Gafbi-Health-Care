/** @format */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const products = [
  {
    id: "1",
    name: "Surface Disinfectant",
    volume: "500 ml",
    price: 12.99,
    image: "/antifect.png",
  },
  {
    id: "2",
    name: "Surface Disinfectant",
    volume: "500 ml",
    price: 12.99,
    image: "/antifect.png",
  },
  {
    id: "3",
    name: "Surface Disinfectant",
    volume: "500 ml",
    price: 12.99,
    image: "/antifect.png",
  },
  {
    id: "4",
    name: "Surface Disinfectant",
    volume: "500 ml",
    price: 12.99,
    image: "/antifect.png",
  },
  {
    id: "5",
    name: "Surface Disinfectant",
    volume: "500 ml",
    price: 12.99,
    image: "/antifect.png",
  },
  {
    id: "6",
    name: "Surface Disinfectant",
    volume: "500 ml",
    price: 12.99,
    image: "/antifect.png",
  },
  {
    id: "7",
    name: "Surface Disinfectant",
    volume: "500 ml",
    price: 12.99,
    image: "/antifect.png",
  },
  {
    id: "8",
    name: "Surface Disinfectant",
    volume: "500 ml",
    price: 12.99,
    image: "/antifect.png",
  },
];

interface ProductSelectionStepProps {
  data: Array<{
    id: string;
    name: string;
    quantity: number;
    volume: string;
    price?: number;
  }>;
  onNext: (data: any) => void;
}

export default function ProductSelectionStep({
  data,
  onNext,
}: ProductSelectionStepProps) {
  const [selectedProducts, setSelectedProducts] = useState(
    data.length > 0 ? data : [],
  );

  const updateProductQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      setSelectedProducts((prev) => prev.filter((p) => p.id !== productId));
      return;
    }

    const existing = selectedProducts.find((p) => p.id === productId);
    const product = products.find((p) => p.id === productId);

    if (existing) {
      setSelectedProducts((prev) =>
        prev.map((p) => (p.id === productId ? { ...p, quantity } : p)),
      );
    } else if (product) {
      setSelectedProducts((prev) => [
        ...prev,
        {
          id: product.id,
          name: product.name,
          volume: product.volume,
          quantity,
          price: product.price,
        },
      ]);
    }
  };

  const handleContinue = () => {
    if (selectedProducts.length === 0) {
      alert("Please select at least one product");
      return;
    }
    onNext({ selectedProducts });
  };

  const totalItems = selectedProducts.reduce((sum, p) => sum + p.quantity, 0);

  return (
    <div className="w-full">
      <h2 className="mb-6 sm:mb-8 text-lg sm:text-2xl font-bold text-primary">
        Choose your products
      </h2>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6 sm:mb-8">
        {/* Products Grid */}
        <div className="lg:col-span-2">
          <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3">
            {products.map((product) => {
              const selected = selectedProducts.find(
                (p) => p.id === product.id,
              );
              const quantity = selected?.quantity || 0;

              return (
                <div
                  key={product.id}
                  className={`rounded-lg border-2 p-3 sm:p-4 transition-all ${
                    quantity > 0
                      ? "border-button-bg bg-white shadow-md"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {/* Product Image with Question Mark */}
                  <div className="relative mb-3 flex h-32 sm:h-40 items-center justify-center rounded-lg bg-gray-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={80}
                      height={120}
                      className="h-24 sm:h-32 w-auto object-contain"
                    />
                    {/* Question Mark Badge */}
                    <div className="absolute top-2 left-2 flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-gray-300 text-center shadow-sm">
                      <span className="text-xs font-semibold text-gray-500">
                        ?
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-1 text-xs sm:text-sm font-semibold text-primary">
                    {product.name}
                  </h3>
                  <p className="mb-3 text-xs sm:text-sm text-secondary">
                    {product.volume}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-secondary">
                      {quantity}
                    </span>
                    <div className="flex gap-1 sm:gap-2">
                      <button
                        onClick={() =>
                          updateProductQuantity(
                            product.id,
                            Math.max(0, quantity - 1),
                          )
                        }
                        className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
                      >
                        <AiOutlineMinus className="text-xs" />
                      </button>
                      <button
                        onClick={() =>
                          updateProductQuantity(product.id, quantity + 1)
                        }
                        className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
                      >
                        <AiOutlinePlus className="text-xs" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* My Care Box Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 rounded-lg border border-gray-200 bg-white p-4 sm:p-6">
            <h3 className="mb-4 text-base sm:text-lg font-bold text-primary">
              My Care Box
            </h3>
            <div className="mb-4 pb-4 border-b border-gray-200">
              <p className="text-xs sm:text-sm text-secondary">
                You can add up to 6 items to your box
              </p>
            </div>

            <div className="mb-6 space-y-2 max-h-64 overflow-y-auto">
              {selectedProducts.length === 0 ? (
                <p className="text-xs sm:text-sm text-gray-400">
                  No items selected
                </p>
              ) : (
                selectedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between text-xs sm:text-sm"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-primary">{product.name}</p>
                      <p className="text-gray-400">{product.volume}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-2">
                      <span className="font-semibold text-button-bg min-w-6">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateProductQuantity(
                            product.id,
                            Math.max(0, product.quantity - 1),
                          )
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="text-center text-xs sm:text-sm font-semibold text-secondary mb-4">
              {totalItems} items left
            </div>

            <button
              onClick={handleContinue}
              className="w-full rounded-md bg-button-bg py-2 sm:py-3 text-sm sm:text-base font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
