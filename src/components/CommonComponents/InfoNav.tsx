/** @format */

"use client";

import Script from "next/script";

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

      <div className="w-full bg-[var(--color-button-bg)] text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 text-xs sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center sm:text-left">
            Welcome to GAFBI Health Care • Call us: +49 30 1234 5678
          </p>
          <div className="flex items-center gap-2">
            <span className="text-white/90">Language:</span>
            <div
              id="google_translate_element"
              className="rounded bg-white px-2 py-1 text-black"
            />
          </div>
        </div>
      </div>
    </>
  );
}
