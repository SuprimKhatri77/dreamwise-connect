import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
// import { TopHeader } from "@/components/top-header";
// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";
// import HelpWidget from "@/components/HelpWidget";
// import { StickyContactWidget } from "@/components/sticky-contact-widget";
import { Toaster } from "@/components/ui/sonner";
// import LayoutMainWrapper from "@/components/main-layout-wrapper";

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dreamwise Connect - Visa Consultancy & Travel Services",
  description:
    "Expert visa consultancy and travel assistance services. Fast processing, transparent services, and dedicated support for your travel dreams.",
  icons: {
    icon: [
      {
        url: "/Logo.jpeg",
        media: "(prefers-color-scheme: light)",
        href: "/Logo.jpeg",
      },
      {
        url: "/Logo.jpeg",
        media: "(prefers-color-scheme: dark)",
        href: "/Logo.jpeg",
      },
      {
        url: "/Logo.jpeg",
        type: "image/svg+xml",
        href: "/Logo.jpeg",
      },
    ],
    apple: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const whatsappNumber = process.env.WHATSAPP_NUMBER!;
  // const email = process.env.EMAIL!;

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
        <main className="min-h-screen w-full flex items-center justify-center bg-gray-950 text-white px-6">
          <div className="text-center max-w-lg space-y-6">
            <h1 className="text-6xl font-bold tracking-tight">Coming Soon</h1>
            <div className="h-px bg-gray-800 w-full" />
            <p className="text-gray-400 text-lg leading-relaxed">
              We are currently working on something great. Our website will be
              live shortly. Stay tuned.
            </p>
          </div>
        </main>
        {/* <TopHeader whatsappNumber={whatsappNumber} /> */}
        {/* <Navbar /> */}

        {/* <LayoutMainWrapper>{children}</LayoutMainWrapper> */}
        {/* <Footer whatsappNumber={whatsappNumber} email={email} /> */}
        {/* <StickyContactWidget whatsappNumber={whatsappNumber} /> */}
        {/* <HelpWidget whatsappNumber={whatsappNumber} /> */}

        <Toaster />
      </body>
    </html>
  );
}
