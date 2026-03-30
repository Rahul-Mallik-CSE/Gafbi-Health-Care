/** @format */

import Link from "next/link";

export default function TermsConnect() {
  return (
    <div className="text-xs text-gray-700">
      By creating an account, you agree to our{" "}
      <Link
        href="/terms"
        className="text-[#1A4B5A] underline font-semibold"
        target="_blank"
      >
        Terms and Conditions
      </Link>
      .
    </div>
  );
}
