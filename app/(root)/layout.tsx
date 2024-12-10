import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";

import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import React from "react";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "THE WASHBASIN STUDIO",
  description: "Artful Legacy Washbasins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ToasterProvider />
          <Navbar />
          {children}
          <Footer/>
        </ClerkProvider>
      </body>
    </html>
  );
}
