import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL &&
  process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "https://systemmindz.com";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sharan M Neeli",
  description:
    "Sharan M Neeli is a Full Stack Developer specializing in Java, Spring Boot, React, Tailwind CSS, cloud deployment, and AI integrations.",
  applicationName: "Sharan M Neeli Portfolio",
  keywords: [
    "Sharan M Neeli",
    "Sharan M Neeli portfolio",
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot Developer",
    "React Developer",
    "SystemMindz",
    "Software Developer Bengaluru",
  ],
  authors: [
    {
      name: "Sharan M Neeli",
      url: "https://www.linkedin.com/in/sharanm09/",
    },
  ],
  creator: "Sharan M Neeli",
  publisher: "Sharan M Neeli",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Sharan M Neeli Portfolio",
    title: "Sharan M Neeli | Full Stack Developer",
    description:
      "Portfolio of Sharan M Neeli showcasing full stack projects, skills, experience, and services.",
    images: [
      {
        url: "/images/home/banner/banner-img.png",
        width: 1200,
        height: 630,
        alt: "Sharan M Neeli Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharan M Neeli | Full Stack Developer",
    description:
      "Explore the portfolio of Sharan M Neeli - Full Stack Developer focused on scalable web applications.",
    images: ["/images/home/banner/banner-img.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/logo/logo.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FE4300",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
