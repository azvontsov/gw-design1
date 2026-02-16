
import FeatureGrid from "@/components/FeatureGrid";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MembershipSection from "@/components/MembershipSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeatureGrid />
        <MembershipSection />
      </main>
      <Footer />
    </div>
  );
}
