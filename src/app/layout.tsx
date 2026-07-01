import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LenisProvider } from "@/components/lenis-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingCallButton } from "@/components/floating-call";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crystal Heating & Cooling | Comfort in Every Detail",
  description:
    "Professional heating and air conditioning services for homes and businesses. Licensed, insured, and available 24/7 for emergency HVAC service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-on-surface font-sans antialiased">
        <LenisProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingCallButton />
        </LenisProvider>
      </body>
    </html>
  );
}
