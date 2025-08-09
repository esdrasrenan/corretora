import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: '--font-open-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Paulicon Corretora - Proteção que vai além do seguro",
  description: "Há mais de 25 anos protegendo o patrimônio de transportadoras e empresas. Especialistas em seguro de cargas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${openSans.variable} font-sans`}>{children}</body>
    </html>
  );
}