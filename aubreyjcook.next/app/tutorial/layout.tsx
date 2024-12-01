// app/tutorial/layout.tsx
'use client'; // Enables client-side interactivity if needed

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function TutorialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative flex flex-col min-h-screen bg-gray-800">

        {/* Overlay for Readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 -z-5"></div>

        {/* Navigation Bar */}
        <Nav />

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-8 pb-20 gap-16 sm:p-20 z-10">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
