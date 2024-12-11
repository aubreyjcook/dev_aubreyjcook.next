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
        <h1>Content</h1>
        <p>Content</p>
    </div>
  );
};
