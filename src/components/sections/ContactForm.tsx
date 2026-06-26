"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
      {/* Form */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        {status === "success" ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-green-700">
            <div className="text-2xl mb-2">✓</div>
            <p>{t("success")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-[#0a1628] mb-2">{t("name")}</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-[#0a1628]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0a1628] mb-2">{t("email")}</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-[#0a1628]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0a1628] mb-2">{t("message")}</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-[#0a1628] resize-none"
              />
            </div>
            {status === "error" && (
              <p className="text-red-500 text-sm">{t("error")}</p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-8 py-4 bg-[#0a1628] hover:bg-[#0d1f3c] disabled:opacity-60 text-white font-bold rounded-lg transition-colors text-sm"
            >
              {status === "sending" ? t("sending") : t("send")}
            </button>
          </form>
        )}
      </motion.div>

      {/* Contact info */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-8 justify-center"
      >
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
            {t("address_title")}
          </h3>
          <p className="text-[#0a1628] font-medium whitespace-pre-line">{t("address")}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
            {t("email_label")}
          </h3>
          <a
            href={`mailto:${t("email_value")}`}
            className="text-amber-500 font-medium hover:underline"
          >
            {t("email_value")}
          </a>
        </div>
      </motion.div>
    </div>
  );
}
