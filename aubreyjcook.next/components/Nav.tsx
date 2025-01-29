import React from 'react';

const Nav = () => {
    return(
        <nav className="bg-background text-foreground p-4">
            <div className="flex w-full justify-between items-center uppercase">
                <h1 className="text-xl"><a href="">Aubrey Cook</a></h1>
                <div className='flex-grow flex space-x-2 justify-end text-2xl'>
                    <div className="flex p-1 bg-gray-800 border-gray-500 border-2">
                        <a href="#" className="p-2">Portfolio</a>
                        <a href="#" className="p-2">About</a>
                        <a href="#" className="p-2">Resume</a>
                        <a href="#" className="p-2">Contact</a>
                        <a href="#" className="p-2">Blog</a>
                        <a href="#" className="p-2">Photography</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;