import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "react-day-picker/dist/style.css";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Luxury Dining | Restaurant",
  description: "Experience the finest dining.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-dark-100 text-gray-200`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
