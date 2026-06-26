"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("stats");

  const items = [
    { value: "✓", label: t("title1") },
    { value: t("value2"), label: t("title2") },
    { value: t("value3"), label: t("title3") },
  ];

  return (
    <section className="bg-amber-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 divide-x divide-amber-500/30">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-6"
            >
              <div className="text-3xl md:text-5xl font-bold text-[#0a1628]">
                {item.value}
              </div>
              <div className="text-sm font-medium text-[#0a1628]/70 mt-1 uppercase tracking-wide">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
