import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { TopHeader } from "@/components/top-header";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import HelpWidget from "@/components/HelpWidget";
// import { StickyContactWidget } from "@/components/sticky-contact-widget";
import { Toaster } from "@/components/ui/sonner";
// import Image from "next/image";
import LayoutMainWrapper from "@/components/main-layout-wrapper";

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dreamwise Connect - Visa Consultancy & Travel Services",
  description:
    "Expert visa consultancy and travel assistance services. Fast processing, transparent services, and dedicated support for your travel dreams.",
  icons: {
    icon: [
      {
        url: "/new-favicon.png",
        media: "(prefers-color-scheme: light)",
        href: "/new-favicon.png",
      },
      {
        url: "/new-favicon.png",
        media: "(prefers-color-scheme: dark)",
        href: "/new-favicon.png",
      },
      {
        url: "/new-favicon.png",
        type: "image/svg+xml",
        href: "/new-favicon.png",
      },
    ],
    apple: "/new-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  const email = process.env.EMAIL!;

  return (
    <html lang="en">
      <body className={`${_inter.className} antialiased bg-white `}>
        {/* Google Analytics */}
        {process.env.NODE_ENV === "production" && (
          <>
            <Script id="gtm" strategy="afterInteractive">
              {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KS55WQHH');
          `}
            </Script>

            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-KS55WQHH"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}
        {/* <main className="min-h-screen w-full flex items-center justify-center bg-gray-50 text-gray-900 px-6 py-16">
          <div className="max-w-2xl w-full space-y-8">
            <Image
              src="/dreamwiseglobal.jpeg"
              alt="Dream Wise Group"
              width={240}
              height={80}
              priority
            />

            <div className="space-y-3">
              <h1 className="text-5xl font-bold tracking-tight">
                We Are Coming Soon
              </h1>
              <div className="h-px bg-gray-300 w-full" />
            </div>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                We are currently working on something big to serve you better.
                Dream Wise Group is preparing to launch a complete range of
                professional services designed to support individuals and
                businesses worldwide.
              </p>
              <p>
                At Dream Wise Group, we focus on delivering reliable, efficient,
                and result-driven solutions across multiple industries. Our goal
                is to provide quality services with trust, innovation, and
                excellence.
              </p>
            </div>

            <div className="space-y-3 bg-white rounded-2xl px-8 py-6 border border-gray-200 shadow-sm">
              <p className="text-gray-900 font-semibold text-sm uppercase tracking-widest">
                Group Companies
              </p>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Dream Wise HR Consultancy",
                  "Dream Wise Management Services",
                  "Dream Wise Consultant Services",
                  "Dream Wise Travel & Tours",
                  "Dream Wise IT Services",
                ].map((company) => (
                  <li key={company} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                    {company}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-400 text-sm">
              Stay connected with us — something great is on the way.
            </p>
          </div>
        </main> */}
        <TopHeader whatsappNumber={whatsappNumber} />
        <Navbar />

        <LayoutMainWrapper>{children}</LayoutMainWrapper>
        <Footer whatsappNumber={whatsappNumber} email={email} />
        {/* <StickyContactWidget whatsappNumber={whatsappNumber} /> */}
        <HelpWidget whatsappNumber={whatsappNumber} />

        <Toaster />
      </body>
    </html>
  );
}
