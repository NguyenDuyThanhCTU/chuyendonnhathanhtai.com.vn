import React from "react";
import Image from "next/image";
import {
  Phone,
  ChevronDown,
  PackageCheck,
  BadgeDollarSign,
  ShieldCheck,
  Users,
} from "lucide-react";
import HeroSection from "@components/client/home/HeroSection";
import FeatureSection from "@components/client/home/FeatureSection";
import ServiceGrid from "@components/client/home/ServiceGrid";
import ProfessionalTeam from "@components/client/home/ProfessionalTeam";
import TeamSlider from "@components/client/home/TeamSlider";
import BlogSection from "@components/client/home/BlogSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <ServiceGrid />
      <ProfessionalTeam />
      <TeamSlider />
      <BlogSection />
    </>
  );
}
