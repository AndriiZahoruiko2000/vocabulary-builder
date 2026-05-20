import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import TanStackProvider from "@/components/providers/TanStackProvider";
import AuthProvider from "@/components/providers/AuthProvider";
import "@/styles/main.css";
import "modern-normalize";
import Header from "@/components/Header/Header";

const robotoSans = Roboto({
  variable: "--font-geist-sans",
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
      <body className={`${robotoSans.variable}  antialiased`}>
        <TanStackProvider>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
