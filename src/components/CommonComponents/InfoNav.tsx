/** @format */

"use client";

import Script from "next/script";
import { useState } from "react";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: {
          new (
            options: {
              pageLanguage: string;
              includedLanguages?: string;
              layout?: unknown;
              autoDisplay?: boolean;
            },
            elementId: string,
          ): unknown;
          InlineLayout?: {
            SIMPLE: unknown;
          };
        };
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export default function InfoNav() {
  const [language, setLanguage] = useState<"en" | "de">("en");

  const applyLanguage = (targetLanguage: "en" | "de") => {
    setLanguage(targetLanguage);

    const tryApply = () => {
      const select = document.querySelector(
        ".goog-te-combo",
      ) as HTMLSelectElement | null;
      if (!select) return false;

      select.value = targetLanguage;
      select.dispatchEvent(new Event("change"));
      return true;
    };

    if (tryApply()) return;
    setTimeout(() => {
      tryApply();
    }, 700);
  };

  return (
    <>
      <Script
        id="google-translate-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
						window.googleTranslateElementInit = function () {
							if (!window.google || !window.google.translate || !window.google.translate.TranslateElement) return;
							new window.google.translate.TranslateElement(
								{
									pageLanguage: 'en',
									includedLanguages: 'de',
									layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
									autoDisplay: false
								},
								'google_translate_element'
							);
						};
					`,
        }}
      />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      <div className="w-full bg-[#8CCFD0] text-[#001a29]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-[0.01em]">
            FREE consultation: 030 555 7850 65, Mon-Fri: 8:00-16:00
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-xl border border-[#1b4f75] px-4 py-2 text-xs font-semibold text-[#1b4f75]"
            >
              Apply for emergency call support
            </button>
            <button
              type="button"
              className="rounded-xl bg-[#12456d] px-4 py-2 text-xs font-semibold text-white"
            >
              Apply for a box
            </button>
            <a href="#" className="text-sm font-semibold text-[#1b3f63]">
              Sign in
            </a>

            <div className="flex items-center rounded-xl bg-white p-1 text-sm font-medium text-[#123a5b]">
              <button
                type="button"
                onClick={() => applyLanguage("de")}
                className={`rounded-lg px-3 py-1 ${
                  language === "de" ? "bg-[#e8eef2]" : "bg-transparent"
                }`}
              >
                GER
              </button>
              <button
                type="button"
                onClick={() => applyLanguage("en")}
                className={`rounded-lg px-3 py-1 ${
                  language === "en" ? "bg-[#e8eef2]" : "bg-transparent"
                }`}
              >
                ENG
              </button>
            </div>

            <div id="google_translate_element" className="hidden" />
          </div>
        </div>
      </div>
    </>
  );
}
