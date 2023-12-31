import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Signika_Negative } from 'next/font/google';
import Logo from '@/app/icon.ico'
import Footer from '@/components/Footer';

const inter = Signika_Negative({ 
  subsets: ['latin'],
  weight: '400'
});

export const metadata: Metadata = {
  title: 'Ear Training App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cyan-100 h-screen base-grid`}>
        <Navbar imageSrc={Logo} links={['Home', 'Signup', 'Training', 'Profile', 'Exercises']}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
