import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
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
      <body className={`${noto.variable} antialiased`}>
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
