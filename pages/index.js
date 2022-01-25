/* eslint-disable @next/next/no-img-element */

import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
	return (
		<div className='font-sans '>
			<Head>
				<title>fermetures</title>
				<meta name='description' content='fermetures' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* hero section begin */}
			<div className='relative'>
				<Hero />
				<Header />
			</div>
			{/* hero section end */}

			<div className='my-10 text-4xl text-pink-600 bg-green-400'>
				Aurelion sul
			</div>
		</div>
	);
}
