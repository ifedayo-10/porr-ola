"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80"
          alt="Railway infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1628]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-amber-400 uppercase border border-amber-400/40 rounded-full">
            PORR OLA GmbH · Berlin
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {t("headline")}
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            {t("subline")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/leistungen"
              className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-[#0a1628] font-bold rounded-lg transition-colors text-sm"
            >
              {t("cta_services")}
            </Link>
            <Link
              href="/kontakt"
              className="px-8 py-4 border border-white/40 hover:border-amber-400 text-white hover:text-amber-400 font-semibold rounded-lg transition-colors text-sm"
            >
              {t("cta_contact")}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-amber-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
