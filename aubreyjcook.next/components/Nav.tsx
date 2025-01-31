import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return(
        <nav className="bg-background text-foreground p-4">
            <div className="flex w-full justify-between items-center uppercase">
                <h1 className="text-xl"><Link href="/">Aubrey Cook</Link></h1>
                <div className='flex-grow flex space-x-2 justify-end text-2xl'>
                    <div className="flex p-1 bg-gray-800 border-gray-500 border-2">
                        <Link href="/portfolio" className="p-2">Portfolio</Link>
                        <Link href="/about" className="p-2">About</Link>
                        <Link href="/resume" className="p-2">Resume</Link>
                        <Link href="/contact" className="p-2">Contact</Link>
                        <Link href="/blog" className="p-2">Blog</Link>
                        <Link href="/photography" className="p-2">Photography</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;