import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShikshaMatrix",
  description: "The Operating System for Modern Schools",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}