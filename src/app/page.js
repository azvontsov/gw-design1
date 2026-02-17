
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MembershipSection from "@/components/MembershipSection";
import NewsEvents from "@/components/NewsEvents";
import OurServices from "@/components/OurServices";
import DynamicHero from "@/components/DynamicHero";
import Providers from "@/components/Providers";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <NewsEvents />
        <DynamicHero />
        <OurServices />
        <Providers />
        {/* <MembershipSection /> */}
      </main>
      <Footer />
    </div>
  );
}
