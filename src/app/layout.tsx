import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CardProvider } from "./context/Contextt";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "search a card",
  description: "search a card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CardProvider>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </CardProvider>
    </html>
  );
}
