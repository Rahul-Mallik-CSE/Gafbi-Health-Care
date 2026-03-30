/** @format */

import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E9EFF3] bg-opacity-80">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/logo.png"
            alt="Gafbi Health Care"
            width={80}
            height={80}
            className="object-cover mb-2"
          />
          <h1 className="text-2xl font-bold text-center text-[#1A4B5A]">
            Gafbi Health Care
          </h1>
        </div>
        <h2 className="text-lg font-bold text-[#1A4B5A] mb-1">
          Create an account
        </h2>
        <p className="text-gray-700 mb-4 text-sm">
          What e-mail address did you provide when you ordered a Gafbi Box?
        </p>
        <form className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded px-3 py-2"
            required
          />
          <button
            type="submit"
            className="bg-[#1A4B5A] text-white rounded px-3 py-2 font-semibold"
          >
            Create
          </button>
        </form>
        <Link
          href="/auth/signin"
          className="block mt-4 border border-[#1A4B5A] text-[#1A4B5A] rounded px-3 py-2 text-center font-semibold hover:bg-[#1A4B5A] hover:text-white transition"
        >
          Back to login page
        </Link>
        <p className="mt-4 text-xs text-gray-700">
          Are you a customer, but have not yet entered an email address?{" "}
          <Link href="#" className="text-[#1A4B5A] underline font-semibold">
            Please contact us
          </Link>
        </p>
      </div>
    </div>
  );
}
