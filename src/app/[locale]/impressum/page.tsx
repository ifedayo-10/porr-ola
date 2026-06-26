import { useTranslations } from "next-intl";

export default function ImpressumPage() {
  return <ImpressumContent />;
}

function ImpressumContent() {
  const t = useTranslations("impressum");

  const rows = [
    [t("directors_label"), t("directors")],
    [t("register_label"), t("register")],
    [t("hrb_label"), t("hrb")],
    [t("ust_label"), t("ust")],
    [t("email_label"), t("email")],
  ];

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#0a1628] mt-12 mb-8">{t("title")}</h1>
        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <p className="font-bold text-[#0a1628] text-lg mb-1">{t("company")}</p>
          <p className="text-gray-600">{t("address")}</p>
        </div>
        <div className="divide-y divide-gray-100">
          {rows.map(([label, value]) => (
            <div key={label} className="py-4 grid grid-cols-2 gap-4">
              <span className="text-gray-500 text-sm">{label}</span>
              <span className="text-[#0a1628] text-sm font-medium">{value}</span>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-bold text-[#0a1628] mb-4">{t("liability_title")}</h2>
          <p className="text-gray-500 leading-relaxed text-sm">{t("liability_content")}</p>
        </div>
      </div>
    </div>
  );
}
