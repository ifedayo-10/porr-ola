import { useTranslations } from "next-intl";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactPage() {
  return <ContactContent />;
}

function ContactContent() {
  const t = useTranslations("contact");

  return (
    <div className="pt-24">
      <section className="bg-[#0a1628] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-white/60 text-lg">{t("subtitle")}</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <ContactForm />
      </section>

      {/* Google Maps */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0a1628] mb-6">Standort</h2>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-96">
            <iframe
              src="https://www.google.com/maps?q=Valeska-Gert-Stra%C3%9Fe+1,+10243+Berlin&output=embed&hl=de"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PORR OLA GmbH Standort"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
