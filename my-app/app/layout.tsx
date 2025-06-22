import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Nav/ResponsiveNav";


const font = Rethink_Sans({
  weight:["400","500","600","700","800"],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "TechFalcon",
  description: "StartUp by Next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}
