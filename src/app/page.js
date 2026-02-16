

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MembershipSection from "@/components/MembershipSection";
import NewsEvents from "@/components/NewsEvents";
import OurServices from "@/components/OurServices";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <NewsEvents />
        <OurServices />
        <MembershipSection />
      </main>
      <Footer />
    </div>
  );
}
