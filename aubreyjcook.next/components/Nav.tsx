import React from 'react';

const Nav = () => {
    return(
        <nav className="bg-gray-900 text-white p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl">Nav</h1>
                <ul className="flex space-x-6">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;