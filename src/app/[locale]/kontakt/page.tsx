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
    </div>
  );
}
