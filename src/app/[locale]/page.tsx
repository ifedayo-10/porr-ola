import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Certificates from "@/components/sections/Certificates";
import Cooperation from "@/components/sections/Cooperation";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesOverview />
      <Certificates />
      <Cooperation />
      <CtaBanner />
    </>
  );
}
