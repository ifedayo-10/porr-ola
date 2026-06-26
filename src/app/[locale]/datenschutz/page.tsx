import { useTranslations } from "next-intl";

export default function DatenschutzPage() {
  return <DatenschutzContent />;
}

function DatenschutzContent() {
  const t = useTranslations("datenschutz");

  const sections = [
    { title: t("responsible_title"), content: t("responsible_content") },
    { title: t("data_title"), content: t("data_content") },
    { title: t("rights_title"), content: t("rights_content") },
  ];

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#0a1628] mt-12 mb-4">{t("title")}</h1>
        <p className="text-gray-600 mb-10 leading-relaxed">{t("intro")}</p>
        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">{s.title}</h2>
              <p className="text-gray-500 leading-relaxed text-sm">{s.content}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-gray-400">{t("more")}</p>
      </div>
    </div>
  );
}
