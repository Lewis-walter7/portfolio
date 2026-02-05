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
  keywords: [...skillsData],
  authors: [{ name: "Lewis INDUSA" }],
  creator: "Lewis INDUSA",
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
    creator: "@LewisINDUSA",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          `}
      </Script>
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
