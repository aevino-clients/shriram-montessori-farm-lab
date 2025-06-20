'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { Inter } from 'next/font/google';
import { Noto_Serif } from 'next/font/google';
import '../styles/index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] });
const noto = Noto_Serif({
	subsets: ['latin'],
	weight: ['400'], // optional: customize weights
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		AOS.init({ once: true, duration: 800 });
	}, []);
	return (
		<html suppressHydrationWarning lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />

			<body className={`bg-[#FCFCFC] dark:bg-black ${noto.className}`}>
				<Providers>
					<Header />
					{children}
					<Footer />
					<ScrollToTop />
				</Providers>
			</body>
		</html>
	);
}

import { Providers } from './providers';
