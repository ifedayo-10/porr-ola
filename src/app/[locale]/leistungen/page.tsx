import { useTranslations } from "next-intl";

export default function ServicesPage() {
  return <ServicesContent />;
}

function ServicesContent() {
  const t = useTranslations("services");
  const certs = useTranslations("certificates");

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-[#0a1628] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-white/60 text-lg">{t("subtitle")}</p>
        </div>
      </section>

      {/* Planning */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-amber-50 text-amber-600 text-xs font-semibold rounded-full mb-4">
              {t("cert_hint")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">{t("planning_title")}</h2>
            <p className="text-gray-500 leading-relaxed mb-6">{t("planning_body")}</p>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {certs("cert1_title")} · {certs("cert1_number")}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="Planning overhead lines"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Erection */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
              alt="Construction overhead lines"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="inline-block px-3 py-1 bg-amber-50 text-amber-600 text-xs font-semibold rounded-full mb-4">
              {t("cert_hint")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">{t("erection_title")}</h2>
            <p className="text-gray-500 leading-relaxed mb-6">{t("erection_body")}</p>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {certs("cert2_title")} · {certs("cert2_number")}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
