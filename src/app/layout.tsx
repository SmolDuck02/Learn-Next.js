import { lusitana } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Next App",
  description: "by Jameel Marco Ursonal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
