import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Arif Azfar — Frontend & Full-Stack Engineer",
  description:
    "Frontend engineer with 2+ years building React apps across healthcare, e-commerce, and AI domains.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-5xl px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
