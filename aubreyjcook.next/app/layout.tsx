import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ThreeBackground from '../components/ThreeBackground';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aubrey J Cook",
  description: "Personal Website and Portfolio of Programmer Aubrey J Cook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Aldrich&family=VT323&display=swap"
        rel="stylesheet"
      />
      </head>
      <body className="font-vt323 antialiased">
        <Nav />
        <div>
          <main className="lg:col-span-2 bg-gray-800 text-white">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
