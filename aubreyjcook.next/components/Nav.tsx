import React from 'react';

const Nav = () => {
    return(
        <nav className="bg-background text-foreground p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl"><a href="">Aubrey J Cook</a></h1>
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