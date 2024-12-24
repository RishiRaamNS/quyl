import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";

const noto = Noto_Sans({ subsets: ["latin"], variable: "--font-noto" });

export const metadata: Metadata = {
  title: "Quyl",
  description: "Student Management Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto.variable} antialiased`}>{children}</body>
    </html>
  );
}
