import React from 'react';
import Head from 'next/head';
import Image from "next/image";
// import dynamic from 'next/dynamic';

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
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold uppercase">Aubrey Cook</h1>
            <hr />
            <h2 className="text-2xl md:text-4xl font-bold mt-4">Programmer</h2>
          </div>
        </div>
      </section>

      <section className="flex justify-center w-full h=80">
        <div className="flex flex-col basis-1/3 justify-center items-center h-40">
          <h1 className="text-2xl md:text-4xl font-bold uppercase">Background</h1>
          <p>Aubrey Cook is a multi-disciplined programmer, maining utilizing web technologies to accomplish a variety of technical solutions tailored to specific problems.</p>          
        </div>
        <div className="flex flex-col basis-1/3 justify-center items-center h-40">
          <h1 className="text-2xl md:text-4xl font-bold uppercase">Projects</h1>
          <h2>Content</h2>
          <p>Content</p>
          {/* <Image 
            src="/23.jpg"
            width={500}
            height={500}
            alt="alt text" 
          /> */}
        </div>
        <div className="flex flex-col basis-1/3 justify-center items-center h-40">
          <h1 className="text-2xl md:text-4xl font-bold uppercase">Resume</h1>
          <h2>Content</h2>
          <p>Content</p>
        </div>
      </section>
      <section className="flex justify-center w-full h=80">
        <div className="flex flex-col justify-center items-center h-40">
          <h2 className="text-2xl md:text-4xl font-bold uppercase">Blog</h2>
          <h1>Content</h1>
          <p>Content</p>
        </div>
        <div className="flex flex-col justify-center items-center h-40">
          <h2 className="text-2xl md:text-4xl font-bold uppercase">Photography and Artwork</h2>
          <h1>Content</h1>
          <p>Content</p>
        </div>
      </section>
    </div>
  );
};
