import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { FaqsSection, Footer, Header } from "./components";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: "italic",
});

export const metadata: Metadata = {
  title: "Insure md",
  description: "Insurance underwriting, reinvented for the real world.",
};

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  { label: "Platform Overview", href: "/platform-overview" },
  {
    label: "Why InsurMD",
    href: "/why-insur-md",
  },
  {
    label: "How it Works",
    href: "/how-it-works",
  },
  {
    label: "Integrations & API",
    href: "/integrations-api",
  },
  {
    label: "For Underwriting Teams",
    href: "/underwriting-teams",
  },
  {
    label: "For Reinsurers",
    href: "/reinsurers",
  },
  {
    label: "Use Cases",
    href: "/use-cases",
  },
  {
    label: "Physician Network & Clinical Governance",
    href: "/physician-network-clinical-governance",
  },
  {
    label: "Security & Compliance",
    href: "/security-compliance",
  },
  {
    label: "Applicant Experience",
    href: "/applicant-experience",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} antialiased`}
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/images/favicon/favicon.svg"
        />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-dvh flex flex-col">
        <div className="flex items-center justify-center  ">
          <Header menuItems={menuItems} />
        </div>
        {children}
        <div className="mt-auto mb-0">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-center font-extrabold text-4xl md:text-[52px] text-neutral-900 mb-4 md:mb-6">
              Frequent Asked Question?
            </h2>
            <FaqsSection />
          </div>
          <Footer menuItems={menuItems} modulesItems={menuItems} />
        </div>
      </body>
    </html>
  );
}
