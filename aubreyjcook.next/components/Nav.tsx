import React from 'react';
import Link from 'next/link';
interface NavItem {
    href: string;
    label: string;
  }

  const navItems: NavItem[] = [
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/portfolio/demos', label: 'Demos' },
    { href: '/about', label: 'About' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
    { href: '/photography', label: 'Photography' },
  ];
  
  const Nav: FC = () => {
    return (
      <nav className="bg-background text-foreground p-4">
        <div className="flex w-full justify-between items-center uppercase">
          <h1 className="text-xl">
            <Link href="/">Aubrey Cook</Link>
          </h1>
          <div className="flex-grow flex space-x-2 justify-end text-2xl">
            <div className="flex p-1 bg-gray-800 border-gray-500 border-2">
              {navItems.map((item) => (
                <Link className='p-2' key={item.href} href={item.href}>
                    {item.label}
                  {/* <a className="p-2">{item.label}</a> */}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  };

export default Nav;