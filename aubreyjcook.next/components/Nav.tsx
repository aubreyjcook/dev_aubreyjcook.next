import React from 'react';

const Nav = () => {
    return(
        <nav className="bg-background text-foreground p-4">
            <div className="flex w-full justify-between items-center uppercase">
                <h1 className="text-xl"><a href="">Aubrey Cook</a></h1>
                <div className='flex-grow flex justify-end'>
                    <div className="flex space-x-6 p-1 bg-gray-800 border-gray-500 border-2 text-xl">
                        <a href="#" className="p-2">Portfolio</a>
                        <a href="#" className="p-2">About</a>
                        <a href="#" className="p-2">Contact</a>
                    </div>
                    <div className="flex ml-6 space-x-6 p-1 bg-gray-800 border-gray-500 border-2 text-xl">
                        <a href="#">Resume</a>
                        <a href="#">Blog</a>
                        <a href="#">Photography</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;