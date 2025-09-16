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
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <FacebookPixel />
        {/* Performance: Facebook Pixel preconnect/dns-prefetch */}
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
      </head>
      <body
        className={`${fontSans.variable} ${fontSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
