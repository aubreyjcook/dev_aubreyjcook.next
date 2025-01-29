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

      <section className="relative w-full h-60">
      {/* Content for the first fold */}
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay */}
        <div className="relative z-10 text-white flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold uppercase">Aubrey Cook</h1>
            <hr />
            <h2 className="text-2xl md:text-4xl font-bold mt-4">Programmer</h2>
          </div>
        </div>
      </section>

      <section className="w-full h=80">
        <div className="text-white flex justify-center items-center h-60">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">Content</h1>
        </div>
      </section>
    </div>
  );
};
