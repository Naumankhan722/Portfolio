import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";
import SideNav from "@/components/SideNav";
import MobileNav from "@/components/MobileNav";
import StatusBar from "@/components/StatusBar";

export const metadata: Metadata = {
  title: "Nauman Khan Pathan | Senior Software Developer",
  description:
    "Portfolio of Nauman Khan Pathan — Senior Software Developer specializing in MERN stack, NestJS, AI-driven SaaS platforms, and high-concurrency systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;700;900&family=Space+Grotesk:wght@300;400;500;700&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body selection:bg-primary-container selection:text-on-primary">
        <TopNav />
        <SideNav />
        <main className="md:ml-64 bg-background snap-container h-screen relative">{children}</main>
        <MobileNav />
        <StatusBar />
      </body>
    </html>
  );
}
