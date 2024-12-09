'use client';
import React from 'react';
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
        <Head>
          {/* Universal Meta Tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* Other universal meta tags like charset, favicon, etc. */}
        </Head>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
