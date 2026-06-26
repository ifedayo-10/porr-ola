"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import PorrOlaLogo from "@/components/PorrOlaLogo";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const oppositeLocale = locale === "de" ? "en" : "de";

  const links = [
    { href: "/", label: t("home") },
    { href: "/leistungen", label: t("services") },
    { href: "/ueber-uns", label: t("about") },
    { href: "/kontakt", label: t("contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !isHome || scrolled || menuOpen
          ? "bg-[#0a1628] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <PorrOlaLogo className="h-10 w-auto" />
          <span className="text-white/70 font-medium text-sm hidden sm:block">GmbH</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-amber-400 text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={pathname}
            locale={oppositeLocale}
            className="ml-4 px-3 py-1 border border-white/30 rounded text-white/70 hover:border-amber-400 hover:text-amber-400 text-xs font-semibold transition-colors"
          >
            {t("language")}
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a1628] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-amber-400 text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={pathname}
            locale={oppositeLocale}
            className="w-fit px-3 py-1 border border-white/30 rounded text-white/70 hover:border-amber-400 hover:text-amber-400 text-xs font-semibold transition-colors"
          >
            {t("language")}
          </Link>
        </div>
      )}
    </header>
  );
}
