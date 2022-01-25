import React, { Component } from 'react';

export default class ProductList extends Component {
	render() {
		return (
			// items list
			<div className='my-10 flex justify-between items-center'>
				<div className='flex flex-col items-center group cursor-pointer '>
					<div className='ease-in-out duration-300 group-hover:-translate-y-3'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 66.93 69.29'
							className='w-20 h-20 fill-current text-blue-600 group-hover:text-slate-800 '
						>
							<path
								d='M11.81 91v.47h.46a.48.48 0 0 1-.46-.47Z'
								transform='translate(-11.81 -22.21)'
							/>
							<path
								d='M78.56 22.32a.5.5 0 0 0-.42-.1L12.21 35.77a.5.5 0 0 0-.39.46V91a.48.48 0 0 0 .46.47h.13l65.93-13.24a.5.5 0 0 0 .4-.46V22.68a.5.5 0 0 0-.18-.36Zm-.82 1v5.46l-3.92-4.65ZM12.36 44.14v-1l65.93-13.23v1Zm65.38 33.2L12.81 90.39V72.64l64.93-13.17v17.86ZM43.68 61.66a1.65 1.65 0 1 1 1.65 1.65 1.65 1.65 0 0 1-1.65-1.65Zm34.71-16.75L12.45 58.17v-1l65.94-13.23v1ZM78.74 22.71v55.07-55ZM11.81 36.26s0-.01 0 0ZM12.31 91.5Z'
								transform='translate(-11.81 -22.21)'
							/>
						</svg>
					</div>

					<h3 className='text-slate-600 font-bold uppercase mt-3 text-lg group-hover:text-blue-600 ease-in-out duration-200'>
						Portes de garage
					</h3>
				</div>
			</div>
			// items list
		);
	}
}
