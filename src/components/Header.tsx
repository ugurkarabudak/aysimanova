"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "@/i18n/client";
import { languages, cookieName } from "@/i18n/settings";

export default function Header({ lng }: { lng: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation(lng);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t("nav.home"), href: `/${lng}` },
    { label: t("nav.about"), href: `/${lng}/about` },
    { label: t("nav.founder"), href: `/${lng}/founder` },
    { label: t("nav.industries"), href: `/${lng}/industries` },
    { label: t("nav.products"), href: `/${lng}/products` },
    { label: t("nav.globalTrade"), href: `/${lng}/global-trade` },
    { label: t("nav.contact"), href: `/${lng}/contact` },
  ];

  const handleLanguageSwitch = (newLng: string) => {
    if (newLng === lng) return;
    document.cookie = `${cookieName}=${newLng}; path=/; max-age=31536000`;
    const newPath = `/${newLng}${pathname.slice(`/${lng}`.length)}`;
    router.push(newPath);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_2px_24px_rgba(0,6,19,0.09)]"
          : "bg-white border-b border-outline-variant/60"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-8 py-3.5 max-w-container-max mx-auto">
        {/* Logo */}
        <Link href={`/${lng}`} className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Aysima Nova"
            style={{ height: "52px", width: "auto", display: "block" }}
            className="!h-[52px] !w-auto"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-2 rounded-lg text-[13px] font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "text-primary bg-surface-container-low"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low/70"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-[7px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA + language toggle + mobile hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language toggle */}
          <div className="flex items-center bg-surface-container-low rounded-lg p-0.5 gap-0.5">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageSwitch(lang)}
                className={`px-2.5 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
                  lang === lng
                    ? "bg-primary text-on-primary shadow-sm"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <Link
            href={`/${lng}/contact`}
            className="hidden md:flex items-center gap-1.5 bg-secondary text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-secondary/90 active:scale-95 transition-all duration-200"
          >
            {t("nav.getInTouch")}
            <span translate="no" className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-surface-container-low transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span
                className={`block h-0.5 bg-primary rounded-full transition-all duration-250 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-primary rounded-full transition-all duration-250 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-primary rounded-full transition-all duration-250 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-outline-variant/40 bg-white px-4 py-3 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 rounded-lg text-[14px] font-semibold transition-colors ${
                  isActive
                    ? "text-primary bg-surface-container-low"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={`/${lng}/contact`}
            className="mt-2 flex items-center justify-center gap-2 bg-secondary text-white text-[14px] font-semibold px-5 py-3 rounded-lg active:scale-95 transition-all"
          >
            {t("nav.getInTouch")}
            <span translate="no" className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
          {/* Mobile language toggle */}
          <div className="mt-2 flex items-center justify-center gap-2 py-2 border-t border-outline-variant/30">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageSwitch(lang)}
                className={`px-5 py-2 rounded-lg text-[13px] font-bold uppercase tracking-wider transition-all ${
                  lang === lng
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-low text-on-surface-variant hover:text-primary"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
