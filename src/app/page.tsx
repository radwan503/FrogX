'use client'
import Header from "@/components/_common/Header";
import Hero from "@/components/Hero";
import Paradigm from "@/components/Paradigm";
import Timeline from "@/components/Timeline";
import Scenarios from "@/components/Scenarios";
import ComponentsShowcase from "@/components/ComponentsShowcase";
import Framework from "@/components/Framework";
import Footer from "@/components/_common/Footer";

const FrogXLanding=()=> {

  return (
    <div className="min-h-screen w-full bg-[#0a0d14] text-white selection:bg-purple-500/30 overflow-x-hidden">
      <Header />
      <Hero />
      <Paradigm />
      <Timeline />
      <Scenarios />
      <ComponentsShowcase />
      <Framework />
      <Footer />
    </div>
  );
}
export default FrogXLanding