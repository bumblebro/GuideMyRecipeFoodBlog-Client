import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import AdsenseScript from "@/components/Ads/AdsenseScript";
// import AnalyticsScript from "@/components/AnalyticsScript";
// import AdsenseScript from "@/components/Ads/AdsenseScript";

const inter = Inter({ subsets: ["latin"] });

// declare var dataLayer: any[];

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_API_URL}`),
  title: {
    default: "GuideMyRecipe",
    template: "%s | GuideMyRecipe",
  },
  description:
    "Discover GuideMyRecipe, your go-to platform for the latest trends in food and drink. Explore a world of culinary delights and beverage innovations from around the globe.",
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: `/`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* {process.env.NODE_ENV == "production" && (
          <Script
            async
            // src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5457433644037438"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5012580427673167"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          ></Script>
        )} */}
        <AdsenseScript />
        {/* <script
          data-grow-initializer=""
          dangerouslySetInnerHTML={{
            __html: `
      !(function() {
        window.growMe || (window.growMe = function(e) {
          window.growMe._.push(e);
        }, window.growMe._ = []);
        var e = document.createElement("script");
        e.type = "text/javascript";
        e.src = "https://faves.grow.me/main.js";
        e.defer = true;
        e.setAttribute("data-grow-faves-site-id", "U2l0ZTpkMzBhMjJmYi01Y2UzLTQ5ZTQtYjBkNC0yMjEwZjgyMGM4M2E=");
        
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t);
      })();
    `,
          }}
        /> */}
      </head>
      <body className={inter.className}>
        {/* {process.env.NODE_ENV == "production" && (
          <GoogleAdSense publisherId="pub-5457433644037438" />
        )} */}
        <NextTopLoader showSpinner={false} color="#0050f0" crawlSpeed={50} />
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
      {process.env.NODE_ENV == "production" && (
        <GoogleAnalytics gaId="G-GR0NLTCFVB" />
      )}

      {/*       <GoogleAnalytics gaId="G-GR0NLTCFVB" /> */}
    </html>
  );
}
