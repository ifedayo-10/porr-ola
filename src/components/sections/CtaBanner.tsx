"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CtaBanner() {
  const t = useTranslations("cta_banner");

  return (
    <section className="py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <div className="w-12 h-1 bg-amber-400 mx-auto mb-8 rounded-full" />
        <blockquote className="text-2xl md:text-3xl font-bold text-[#0a1628] leading-tight mb-10">
          &ldquo;{t("quote")}&rdquo;
        </blockquote>
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a1628] hover:bg-[#0d1f3c] text-white font-bold rounded-lg transition-colors text-sm"
        >
          {t("button")}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
