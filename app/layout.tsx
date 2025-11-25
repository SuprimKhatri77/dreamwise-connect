import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
        <TopHeader whatsappNumber={whatsappNumber} />
        <Navbar />
        <main className="py-20">{children}</main>
        <Footer whatsappNumber={whatsappNumber} />
        <StickyContactWidget whatsappNumber={whatsappNumber} />
      </body>
    </html>
  );
}
