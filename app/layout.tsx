import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MountWrapper from "@/components/wrapper/MountWrapper";
import PreviewModal from "@/components/PreviewModal";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "E-Commerce Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <MountWrapper>
          <PreviewModal />
        </MountWrapper>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
