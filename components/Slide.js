/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Slide = ({ image, text, dark }) => {
	return (
		<div className='relative'>
			<img
				src={`/assets/images/${image}.jpg`}
				alt='ee'
				className='h-screen object-cover w-full'
			/>
			<div className='w-full h-screen bg-hero-pattern absolute top-0'>
				<div
					className={`flex justify-center items-center h-screen ${
						dark
							? 'text-slate-800'
							: 'text-slate-200'
					} font-bold`}
				>
					<h1 className='text-center text-5xl tracking-wide leading-snug max-w-xl'>
						{text}
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Slide;
