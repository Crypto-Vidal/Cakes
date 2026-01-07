import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cake Jar Co. — Handcrafted Layered Cake Jars",
  description: "Artisanal cake jars baked with love. Perfect for celebrations, gifts, or treating yourself. Order your handcrafted dessert today.",
  keywords: ["cake jars", "artisanal desserts", "handcrafted cakes", "dessert jars", "custom cakes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
