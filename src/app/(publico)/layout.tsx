import type { Metadata } from "next";
import { Montserrat, Ubuntu } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/global/ScrollToTopButton";
import { LanguageSwitcher } from "@/components/global/LanguageSwitcher";
import LocalTimeDisplay from "@/components/global/LocalTimeDisplay";
// import ShareLinkButtons from "@/components/global/ShareLinkButtons";

const monserrat = Montserrat({
  variable: "--font-monserrat",
  display: "swap",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

const benedict = localFont({
  src: "../Mistress Benedict Brush.ttf",
  variable: "--font-benedict",
});

export const metadata: Metadata = {
  title: {
    default: "Caribbean Princess Realty",
    template: "%s - Caribbean Princess Realty",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

// Define the props to pass
const domain = "appliancesfurniture.com";
const langs = {
  es: "es.svg",
  en: "us.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monserrat.className} ${ubuntu.variable} ${benedict.variable} text-[#808080] antialiased`}
      >
        <Header />
        {/* <ShareLinkButtons /> */}
        {children}
        <ScrollToTopButton />
        <LocalTimeDisplay />
        <LanguageSwitcher domain={domain} langs={langs} />
        <Footer />
      </body>
    </html>
  );
}
