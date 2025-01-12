import React from 'react';
import Head from 'next/head';
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Head>
            <title>Home</title>
            <meta name="description" content="Home" />
        </Head>

        <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-background.jpg')" }}>
        {/* Content for the first fold */}
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay */}
          <div className="relative z-10 text-white flex justify-center items-center h-full">
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Website</h1>
          </div>
        </section>

      <section className="p-8">
        <h2>Other Content</h2>
        {/* More content here */}
      </section>
    </div>
  );
};
