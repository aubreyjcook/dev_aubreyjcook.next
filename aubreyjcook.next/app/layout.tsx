import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
          <main className="lg:col-span-2 bg-gray-800 text-white">
            {children}
          </main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
