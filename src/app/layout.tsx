import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../assets/styles/main.scss";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hibbanur Rahman Portfolio",
  description: "This is Hibbanur Rahman portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Hibban Portfolio</title>
        <link rel="icon" type="image/svg+xml" href="./logo.png" />
        {/* <!--========== Bootstrap icons cdn Link ==========--> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
        {/* <!--========== flowbite cdn Link ==========--> */}
        <link
          href="https://unpkg.com/flowbite@latest/dist/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}

        {/* <!--========== flowbite cdn Link ==========--> */}
        <script
          src="https://unpkg.com/flowbite@latest/dist/flowbite.js"
          async
        ></script>
      </body>
    </html>
  );
}
