import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aysima Nova | Global Sourcing & Trading in Life Sciences",
  description:
    "Aysima Nova Life Sciences is a global sourcing and trading company operating in cosmetics, personal care, chemicals, pharmaceutical raw materials, food supplements, and medical products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-pure text-on-surface font-inter min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
