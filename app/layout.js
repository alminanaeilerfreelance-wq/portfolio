// import "primereact/resources/themes/lara-light-indigo/theme.css"; // Choose your theme
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import AppShell from "@/app/_components/AppShell";

import { Work_Sans } from "next/font/google";

const worksans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s | Alminana Eiler B.",
    default: "Alminana Eiler B. | Web Developer",
  },
  description:
    "Portfolio of Alminana Eiler B., a Web Developer in Al Qassim, Saudi Arabia specializing in Laravel, PHP, React.js, Node.js, APIs, and website maintenance.",
  other: {
    "google-site-verification": "hGgJ7ZV9h3yw2n1zthtkDYAPJGaponAGhqWXlFvtPvA",
  },
  keywords: [
    "Next.js portfolio",
    "nextjs",
    "web developer",
    "Laravel developer",
    "PHP developer",
    "React developer",
    "Saudi Arabia web developer",
  ],
  authors: [
    { name: "Alminana Eiler B." },
  ],
  creator: "Alminana Eiler B.",
  publisher: "Alminana Eiler B.",
  metadataBase: new URL("https://alminanaeilerb.vercel.app/"),

  openGraph: {
    title: "Alminana Eiler B. | Web Developer",
    description:
      "Laravel, PHP, React.js, Node.js, API, database, and website maintenance portfolio.",
    url: "https://alminanaeilerb.vercel.app/",
    siteName: "Alminana Eiler B. Portfolio",
    images: [
      {
        url: "/og-image.jpg", // stored in public folder
        width: 1920,
        height: 1005,
        alt: "Alminana Eiler B. Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alminana Eiler B. | Web Developer",
    description: "Portfolio of my web development work",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${worksans.className}`}>
        <AppShell>
          {children}
          <Analytics />
          <SpeedInsights />
        </AppShell>
      </body>
    </html>
  );
}
