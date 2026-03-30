/** @format */

"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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

const HIDDEN_ROUTES = ["/apply-box", "/signin", "/register", "/terms", "/privacy"];

export default function InfoNav() {
  const [language, setLanguage] = useState<"en" | "de">("en");
  const pathname = usePathname();

  const setGoogTransCookie = (targetLanguage: "en" | "de") => {
    const value = `/en/${targetLanguage}`;
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `googtrans=${value};path=/;max-age=${maxAge}`;
    document.cookie = `googtrans=${value};path=/;domain=${window.location.hostname};max-age=${maxAge}`;
  };

  const syncGoogleSelect = (targetLanguage: "en" | "de") => {
    const select = document.querySelector(
      ".goog-te-combo",
    ) as HTMLSelectElement | null;
    if (!select) return false;

    select.value = targetLanguage;
    select.dispatchEvent(new Event("change", { bubbles: true }));
    return true;
  };

  const removeGoogleBannerFrame = () => {
    const frame = document.querySelector("iframe.goog-te-banner-frame");
    if (frame && frame.parentElement) {
      frame.parentElement.removeChild(frame);
      document.body.style.top = "0px";
    }
  };

  const applyLanguage = (targetLanguage: "en" | "de") => {
    setLanguage(targetLanguage);
    setGoogTransCookie(targetLanguage);
    removeGoogleBannerFrame();

    if (targetLanguage === "en") {
      window.location.reload();
      return;
    }

    if (syncGoogleSelect(targetLanguage)) return;

    let attempts = 0;
    const interval = window.setInterval(() => {
      attempts += 1;
      if (syncGoogleSelect(targetLanguage) || attempts > 20) {
        window.clearInterval(interval);
      }
    }, 250);
  };

  useEffect(() => {
    setGoogTransCookie("en");
  }, []);

  if (HIDDEN_ROUTES.includes(pathname)) return null;

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

      <style jsx global>{`
        .goog-te-banner-frame.skiptranslate,
        .goog-te-gadget-icon,
        .goog-logo-link,
        .goog-te-gadget span,
        .goog-te-balloon-frame {
          display: none !important;
        }

        body {
          top: 0 !important;
        }
      `}</style>

      <div className="w-full bg-[#8CCFD0] text-[#001a29]">
        <div className="mx-auto flex w-full max-w-625 items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-[0.01em]">
            FREE consultation: 030 555 7850 65, Mon-Fri: 8:00-16:00
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-xl cursor-pointer border border-[#1b4f75] px-4 py-2 text-sm font-semibold text-[#1b4f75]"
            >
              Apply for emergency call support
            </button>
            <Link href="/apply-box">
              <button
                type="button"
                className="rounded-xl cursor-pointer bg-[#12456d] px-4 py-2 text-sm font-semibold text-white"
              >
                Apply for a box
              </button>
            </Link>

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