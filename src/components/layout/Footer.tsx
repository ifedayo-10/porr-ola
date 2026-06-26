import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-[#0a1628] text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-1 mb-3">
            <span className="text-white font-bold text-lg">PORR OLA</span>
            <span className="text-amber-400 font-bold text-lg">GmbH</span>
          </div>
          <p className="text-sm leading-relaxed">{t("tagline")}</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            {t("nav_title")}
          </h3>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="text-sm hover:text-amber-400 transition-colors">{nav("home")}</Link>
            <Link href="/leistungen" className="text-sm hover:text-amber-400 transition-colors">{nav("services")}</Link>
            <Link href="/ueber-uns" className="text-sm hover:text-amber-400 transition-colors">{nav("about")}</Link>
            <Link href="/kontakt" className="text-sm hover:text-amber-400 transition-colors">{nav("contact")}</Link>
          </nav>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            {t("legal_title")}
          </h3>
          <nav className="flex flex-col gap-2">
            <Link href="/impressum" className="text-sm hover:text-amber-400 transition-colors">{t("impressum")}</Link>
            <Link href="/datenschutz" className="text-sm hover:text-amber-400 transition-colors">{t("datenschutz")}</Link>
          </nav>
          <p className="text-xs mt-6">buero@porr-ola.com</p>
          <p className="text-xs">Valeska-Gert-Str. 1, 10243 Berlin</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} PORR OLA GmbH – {t("rights")}
      </div>
    </footer>
  );
}
