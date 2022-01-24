/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Slide = ({ image, text, dark, link }) => {
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
					<div>
						<h1 className='text-center text-5xl tracking-wide leading-snug max-w-xl'>
							{text}
						</h1>
						<div className='flex justify-center'>
							<a
								href={link}
								className='mt-10 bg-blue-600 w-auto text-white font-semibold  px-4 py-2 rounded-md hover:shadow-blue-400/50 hover:shadow-lg ease-in-out duration-200 hover:text-slate-200'
							>
								En savoir plus
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slide;
