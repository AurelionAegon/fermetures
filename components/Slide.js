/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Slide = ({ image }) => {
	return (
		<div>
			<img src={`/assets/images/${image}.jpg`} alt='ee' />
		</div>
	);
};

export default Slide;
