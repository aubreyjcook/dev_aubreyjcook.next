'use client';

import Head from 'next/head';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function TutorialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
