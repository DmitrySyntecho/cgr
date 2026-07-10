import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { Hero } from "@/components/sections/Hero";
import { BrandStrip } from "@/components/sections/BrandStrip";
import { ValueProps } from "@/components/sections/ValueProps";
import { LocationSearch } from "@/components/sections/LocationSearch";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CaliforniaProblems } from "@/components/sections/CaliforniaProblems";
import { SocialProof } from "@/components/sections/SocialProof";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Technicians } from "@/components/sections/Technicians";
import { RecentProjects } from "@/components/sections/RecentProjects";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-16 lg:pb-0">
        <Hero />
        <BrandStrip />
        <ValueProps />
        <LocationSearch />
        <Services />
        <HowItWorks />
        <CaliforniaProblems />
        <SocialProof />
        <WhyChooseUs />
        <Technicians />
        <RecentProjects />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
