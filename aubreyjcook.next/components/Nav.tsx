import React from 'react';

const Nav = () => {
    return(
        <nav className="bg-background text-foreground p-4">
            <div className="flex w-full justify-between items-center">
                <h1 className="text-xl"><a href="">Aubrey J Cook</a></h1>
                <div className='flex-grow flex justify-center'>
                    <ul className="flex space-x-6 p-1 bg-gray-800 border-gray-500 border-2 text-xl">
                        <li className="bg-gray-800">
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-grow flex ml-6">
                    <ul className="flex space-x-6 p-1 bg-gray-800 border-gray-500 border-2 text-xl">
                        <li>
                        <a href="#">Resume</a>
                        </li>
                        <li>
                        <a href="#">Blog</a>
                        </li>
                        <li>
                        <a href="#">Photography</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;