/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/home/Hero';
import ProductList from '../components/home/ProductList';

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

			<div className='mt-10 flex justify-center px-6'>
				<div className='max-w-7xl w-full'>
					<h3 className='text-4xl text-center text-slate-800 font-bold underline-offset-2 underline decoration-wavy decoration-2 decoration-red-600'>
						Nos produits
					</h3>
					<ProductList />
				</div>
			</div>
		</div>
	);
}
