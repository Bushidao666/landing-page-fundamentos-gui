import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import "./globals.css";
import FacebookPixel from "@/components/analytics/FacebookPixel";

const fontSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const fontSerif = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Fundamentos do Google Ads",
  description: "O Fim do Sócio Sanguessuga: Domine o Google Ads e Transforme Cliques em Lucro Real para o seu E-commerce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Preconnect dinâmico para origens críticas (CAPI/Checkout)
  const conversionsApi = process.env.NEXT_PUBLIC_FB_CONVERSIONS_API_URL || '';
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || '';
  const getOrigin = (url: string) => {
    try {
      const u = new URL(url);
      return `${u.protocol}//${u.host}`;
    } catch {
      return '';
    }
  };
  const conversionsOrigin = getOrigin(conversionsApi);
  const checkoutOrigin = getOrigin(checkoutUrl);
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <FacebookPixel />
        {/* Performance: Facebook Pixel preconnect/dns-prefetch */}
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        {/* Preconnect dinâmico para CAPI e Checkout (se configurados) */}
        {conversionsOrigin && (
          <>
            <link rel="preconnect" href={conversionsOrigin} crossOrigin="anonymous" />
            <link rel="dns-prefetch" href={conversionsOrigin} />
          </>
        )}
        {checkoutOrigin && (
          <>
            <link rel="preconnect" href={checkoutOrigin} crossOrigin="anonymous" />
            <link rel="dns-prefetch" href={checkoutOrigin} />
          </>
        )}
      </head>
      <body
        className={`${fontSans.variable} ${fontSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
