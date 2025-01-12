import React from 'react';

const Footer = () => {
    return(
        <footer className="bg-background text-foreground p-4 text-center">
            <h5>
                Computers are like Old Testament gods; lots of rules and no mercy.
            </h5>
            <p>
                &copy; {new Date().getFullYear()} Aubrey J Cook. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;