/* eslint-disable @next/next/no-img-element */

import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
	return (
		<div className='font-sans'>
			<Head>
				<title>fermetures</title>
				<meta name='description' content='fermetures' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='relative pt-6'>
				<Header className='absolute top-0 left-0 right-0 z-40 ' />
				<Hero />
			</div>
		</div>
	);
}
