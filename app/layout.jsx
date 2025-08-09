import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Script from "next/script";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Ali Samizade – Fullstack Developer | توسعه‌دهنده فول استک",
  description:
    "رزومه و نمونه کارهای علی سمیع زاده، توسعه‌دهنده فول استک و طراح وب. آشنایی با پروژه‌ها، مهارت‌ها و اطلاعات تماس.",
  keywords: [
    "Ali Samizade",
    "Frontend Developer",
    "ّFullstack Developer",
    "Django Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer",
    "Portfolio",
    "Resume",
    "علی سمیع زاده",
    "توسعه دهنده فرانت اند",
    "برنامه نویس وب",
    "برنامه نویس ری‌اکت",
    "برنامه نویس فول استک",
    "برنامه نویس جنگو",
    "نمونه کار",
    "رزومه",
  ],
  authors: [{ name: "Ali Samizade" }],
  openGraph: {
    title: "Ali Samizade – Frontend Developer | توسعه‌دهنده فول استک",
    description:
      "مشاهده رزومه و نمونه کارهای علی سمی‌زاده، توسعه‌دهنده وب با تخصص در Next.js و React و django.",
    url: "https://alisamizade.ir",
    siteName: "Ali Samizade Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Samizade – Frontend Developer | توسعه‌دهنده فول استک",
    description:
      "رزومه و پروژه‌های علی سمی‌زاده، توسعه‌دهنده فول استک و طراح وب.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="9YJumsEqsF_MxJpmGs7NrGTXHrJ9jUAGCIlr1AoZoUc"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${jetBrainsMono.variable} leading-loose`}>
        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ali Samizade",
              alternateName: "علی سمیع زاده",
              url: "https://alisamizade.ir",
              jobTitle: "Frontend Developer",
              sameAs: [
                "https://www.linkedin.com/in/alisamizade/",
                "https://github.com/ali-smz",
              ],
              knowsLanguage: ["English", "Persian"],
              description:
                "Ali Samizade is a fullstack developer specializing in Next.js and React and django. علی سمی زاده توسعه‌دهنده وب.",
            }),
          }}
        />

        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
