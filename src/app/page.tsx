import type { Metadata } from "next";
import Script from "next/script";
import AboutMe from "./components/home/about-me";
import Contact from "./components/home/contact";
import EducationSkills from "./components/home/education-skills";
import ExperienceSec from "./components/home/experience-sec";
import HeroSection from "./components/home/hero-section";
import LatestWork from "./components/home/latest-work";
import SkillsSection from "./components/home/skills-section";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  "https://systemmindz.com";
const siteUrl = (rawSiteUrl.startsWith("http")
  ? rawSiteUrl
  : `https://${rawSiteUrl}`
).replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Sharan M Neeli",
  description:
    "Official portfolio of Sharan M Neeli - Full Stack Developer specializing in Java, Spring Boot, React, cloud, and AI integrations.",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sharan M Neeli",
  jobTitle: "Full Stack Developer",
  url: siteUrl,
  email: "mailto:sharanmneeli09@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/sharanm09/",
    "https://www.instagram.com/sharan._09/",
    "https://www.facebook.com/p/Sharan-M-Neeli-100013746105869/",
  ],
  worksFor: {
    "@type": "Organization",
    name: "SystemMindz",
    url: "https://systemmindz.com",
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sharan M Neeli Portfolio",
  url: siteUrl,
};

const page = () => {
  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <main>
        <HeroSection />
        <AboutMe />
        <ExperienceSec />
        <EducationSkills />
        <SkillsSection />
        <LatestWork />
        <Contact />
      </main>
    </>
  );
};

export default page;