import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getIndustrySlugs } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FutureBridge Clone",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch industry slugs server-side
  const industrySlugs = await getIndustrySlugs();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header industrySlugs={industrySlugs} />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
