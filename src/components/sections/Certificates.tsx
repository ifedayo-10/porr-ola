"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Certificates() {
  const t = useTranslations("certificates");

  const certs = [
    {
      title: t("cert1_title"),
      number: t("cert1_number"),
      href: "/assets/pq-planung-134749.pdf",
    },
    {
      title: t("cert2_title"),
      number: t("cert2_number"),
      href: "/assets/pq-errichtung-134748.pdf",
    },
  ];

  return (
    <section className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-amber-400/50 transition-colors"
            >
              <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{cert.title}</h3>
              <p className="text-white/40 text-sm mb-1">{cert.number}</p>
              <p className="text-amber-400/80 text-xs mb-6">{t("valid_until")}</p>
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t("download")}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
