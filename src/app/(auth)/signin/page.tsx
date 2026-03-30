/** @format */

import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E9EFF3] bg-opacity-80">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-6 border-b border-gray-300 pb-6">
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
          Log in & manage Gafbi-Box
        </h2>
        <p className="text-gray-700 mb-4 text-sm">
          To manage the contents of your Gafbi box and your delivery, please use
          our customer portal.
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
          <div className="flex justify-end mb-2">
            <Link
              href="#"
              className="text-xs text-[#1A4B5A] font-semibold hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-[#1A4B5A] text-white rounded px-3 py-2 font-semibold"
          >
            Log in
          </button>
        </form>
        <Link
          href="/auth/register"
          className="block mt-4 border border-[#1A4B5A] text-[#1A4B5A] rounded px-3 py-2 text-center font-semibold hover:bg-[#1A4B5A] hover:text-white transition"
        >
          Create a new account
        </Link>
      </div>
    </div>
  );
}
