/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Slide = ({ image }) => {
	return (
		<div className='relative'>
			<img
				src={`/assets/images/${image}.jpg`}
				alt='ee'
				className='h-screen object-cover w-full'
			/>
			<div className='w-full h-screen bg-hero-pattern absolute top-0' />
		</div>
	);
};

export default Slide;
