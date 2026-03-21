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
import { find } from "@config/lib/api";
import { ContactProps } from "@assets/props/PropsConfig";
import { LocalFindById } from "@components/items/Handle";
import { PostProps } from "@assets/props/PropsPost";
import { CollectionProps } from "@assets/props/Props";

export default async function Home() {
  const Config = await find("Config");
  const Posts: PostProps[] = await find("Posts");
  const Collections: CollectionProps[] = await find("Collections");
  const ContactData: ContactProps = LocalFindById(Config, "contact");

  const ServicePost = Posts?.filter((item) => item.level0 === "dich-vu-khac");
  const BlogPost = Posts?.filter((item) => item.level0 === "blog");

  return (
    <>
      <HeroSection Contact={ContactData} />
      <FeatureSection />
      <ServiceGrid Data={ServicePost} />
      <ProfessionalTeam />
      <TeamSlider Data={Collections} />
      <BlogSection Data={BlogPost} />
    </>
  );
}
