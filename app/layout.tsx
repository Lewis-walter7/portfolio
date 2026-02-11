import { Analytics } from "@vercel/analytics/react"

import ConditionalHeader from "@/components/conditional-header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import Script from "next/script";

import { skillsData } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lewis | Personal Portfolio",
  description: "Lewis is a full-stack developer with over 4 years of experience.",
  tags: ["Full Stack", "Developer", "Software Engineer", "React", "Next.js", "Portfolio"],
  keywords: [
    "Freelance Web Developer",
    "Full Stack Engineer Kenya",
    "Nairobi Software Developer",
    "React Developer",
    "Next.js Expert",
    "Mobile App Developer",
    "Android Developer",
    "Web Design Kenya",
    ...skillsData
  ],
  authors: [{ name: "Lewis Indusa" }],
  creator: "Lewis Indusa",
  metadataBase: new URL("https://lewisindusa.vercel.app"),
  openGraph: {
    title: "Lewis | Personal Portfolio",
    description: "Lewis is a full-stack developer with over 4 years of experience.",
    url: "https://lewisindusa.vercel.app",
    siteName: "Lewis | Personal Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lewis | Personal Portfolio",
    description: "Lewis is a full-stack developer with over 4 years of experience.",
    creator: "@lewisindusa",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: [
      "YHDZufwHLqfdsp2O21-MVTfp0Np9Zn4wfWLI4NW_njs",
      "PxJ0VW-jo8pqsaSBNTgVIHZ1JmGc6zqPkKXnaOLWIjU",
    ],
    other: {
      "msvalidate.01": "F80FEDEA69035F955BF8F70DE8737393",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lewis Indusa",
    url: "https://lewisindusa.vercel.app",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/Lewis-walter7",
      "https://www.instagram.com/lewisindusa/",
      "https://www.linkedin.com/in/lewisindusa12/",
      "https://www.x.com/lewisindusa",
      "https://www.facebook.com/lewisindusa12/"

    ],
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "React",
      "Next.js",
      "Kotlin",
      "Android"
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Coding Bootcamp"
    }
  };

  return (
    <html lang="en" className="!scroll-smooth">
      <Script id="my-script" async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script id="hello" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ConditionalHeader />
            {children}
            <Analytics />
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
