import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TanStackProvider from "@/components/providers/TanStackProvider";
import AuthProvider from "@/components/providers/AuthProvider";

import "@/styles/global.css";
import "@/styles/reset.css";
import "@/styles/variables.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next App Template",
  description: "Швидкий старт для нових проектів на Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanStackProvider>
          <AuthProvider>{children}</AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
