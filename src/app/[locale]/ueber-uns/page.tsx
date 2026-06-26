import { useTranslations } from "next-intl";

export default function AboutPage() {
  return <AboutContent />;
}

function AboutContent() {
  const t = useTranslations("about");
  const coop = useTranslations("cooperation");

  const items = [
    { title: coop("independent_title"), desc: coop("independent_desc") },
    { title: coop("consortium_title"), desc: coop("consortium_desc") },
    { title: coop("sub_title"), desc: coop("sub_desc") },
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-[#0a1628] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-white/60 text-lg">{t("subtitle")}</p>
        </div>
      </section>

      {/* About body */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{t("body")}</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <svg className="w-6 h-6 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{t("directors")}</p>
                  <p className="font-semibold text-[#0a1628]">{t("directors_names")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <svg className="w-6 h-6 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Standort</p>
                  <p className="font-semibold text-[#0a1628]">{t("location")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Railway electrification team"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Cooperation */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] text-center mb-16">
            {t("cooperation_title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {items.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="w-10 h-10 bg-[#0a1628] rounded-lg mb-5 flex items-center justify-center">
                  <span className="text-amber-400 font-bold">{i + 1}</span>
                </div>
                <h3 className="font-bold text-[#0a1628] text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
