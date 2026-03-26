/** @format */

import InfoNav from "@/components/CommonComponents/InfoNav";
import NavBar from "@/components/CommonComponents/NavBar";
import HeroSection from "@/components/LandingPageComponents/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-background)] font-sans">
      <InfoNav />
      <NavBar />
      <HeroSection />
    </div>
  );
}
