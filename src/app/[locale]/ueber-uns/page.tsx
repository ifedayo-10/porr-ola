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
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <p className="text-gray-600 text-lg leading-relaxed">{t("body")}</p>
        </div>

        {/* Directors */}
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0a1628] text-center mb-10">{t("directors")}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Siegfried Weindok", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
              { name: "Łukasz Żurek", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
            ].map((d) => (
              <div key={d.name} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                <div className="h-64 overflow-hidden">
                  <img src={d.photo} alt={d.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <p className="font-bold text-[#0a1628] text-lg">{d.name}</p>
                  <p className="text-amber-500 text-sm font-medium mt-1">{t("directors")}</p>
                </div>
              </div>
            ))}
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
