"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const icons = {
  planning: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  erection: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  cooperation: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function ServicesOverview() {
  const t = useTranslations("services_overview");

  const cards = [
    { icon: icons.planning, title: t("planning_title"), desc: t("planning_desc") },
    { icon: icons.erection, title: t("erection_title"), desc: t("erection_desc") },
    { icon: icons.cooperation, title: t("cooperation_title"), desc: t("cooperation_desc") },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a1628] mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group p-8 border border-gray-100 rounded-2xl hover:border-amber-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-amber-50 group-hover:bg-amber-400 text-amber-400 group-hover:text-[#0a1628] rounded-xl flex items-center justify-center mb-6 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-3">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{card.desc}</p>
              <Link
                href="/leistungen"
                className="text-amber-500 text-sm font-semibold hover:underline inline-flex items-center gap-1"
              >
                {t("learn_more")} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
