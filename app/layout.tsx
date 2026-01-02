import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { TopHeader } from "@/components/top-header";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyContactWidget } from "@/components/sticky-contact-widget";

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dreamwise Connect - Visa Consultancy & Travel Services",
  description:
    "Expert visa consultancy and travel assistance services. Fast processing, transparent services, and dedicated support for your travel dreams.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  return (
    <html lang="en">
      <body className={`${_inter.className} antialiased bg-white `}>
        {/* Google Analytics */}
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-85X2J3CSS1"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-85X2J3CSS1');
          `}
            </Script>
          </>
        )}
        <TopHeader whatsappNumber={whatsappNumber} />
        <Navbar />
        <main className="py-20">{children}</main>
        <Footer whatsappNumber={whatsappNumber} />
        <StickyContactWidget whatsappNumber={whatsappNumber} />
      </body>
    </html>
  );
}
