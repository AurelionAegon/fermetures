/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

export default function Header() {
	return (
		<div className='mx-10 my-6 '>
			<div className='flex justify-between items-center'>
				{/* logo bgin*/}
				<a href='#' className='flex items-center'>
					<img
						src='/logo.png'
						className='w-20  object-contain'
						alt='logo'
					/>
					<div className='text-blue-600 text-md font-bold uppercase'>
						fermetures
					</div>
				</a>
				{/* logo end*/}

				{/* navigation begin */}
				<ul className='flex items-center space-x-5 font-semibold text-slate-800'>
					<li className='group'>
						<a href='#'>Nos produit</a>
						<div className='h-0.5 bg-blue-600 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out' />
					</li>
					<li className='group'>
						<a href='#'>Votre projet</a>
						<div className='h-0.5 bg-blue-600 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out' />
					</li>
					<li className='group'>
						<a href='#'>Qui sommes-nous ?</a>
						<div className='h-0.5 bg-blue-600 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out' />
					</li>
				</ul>
				{/* navigation end */}

				{/* call action buttons */}
				<div className='flex items-center space-x-5 font-semibold text-slate-600'>
					<a
						href='#'
						className='flex items-center space-x-2 border border-blue-600 px-3 py-1.5 rounded hover:shadow-blue-400/50 hover:shadow-lg ease-in-out duration-200 hover:text-slate-800'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							className='fill-current w-5 h-5'
						>
							<path d='M13 10V21C12.0034 21 7.62034 21 4.99915 21C3.89458 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3L19 3C20.1046 3 21 3.89543 21 5V10H13ZM11 10H5V14H11V10ZM11 19V16H5V19H11ZM13 5.00001V8.00001H19V5.00001H13ZM11 5.00001H5V8.00001H11V5.00001Z' />
							<path d='M19 21V18H16V16H19V13H21V16H24V18H21V21H19Z' />
						</svg>
						<span>Devis</span>
					</a>

					<a
						href='#'
						className='flex items-center space-x-2 border border-blue-600 px-3 py-1.5 rounded hover:shadow-blue-400/50 hover:shadow-lg ease-in-out duration-200 hover:text-slate-800'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							className='fill-current w-5 h-5'
						>
							<path
								xmlns='http://www.w3.org/2000/svg'
								d='M9.108 22.092L2 19.721V3.613L8.892 5.913L15.923 1.892L22 4.323V20.477L16.077 18.107L9.109 22.092H9.108ZM4 6.392V18.279L8 19.612V7.72L4 6.392ZM14 5.292L10 7.58V19.28L14 16.992V5.292ZM16.077 4.106L16 4.152V15.923L20 17.523V5.676L16.077 4.106Z'
							/>
						</svg>
						<span>Trouver un pro</span>
					</a>

					<a
						href='#'
						className='flex items-center space-x-2 border border-blue-600 px-3 py-1.5 rounded hover:shadow-blue-400/50 hover:shadow-lg ease-in-out duration-200 hover:text-slate-800'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							className='fill-current w-5 h-5'
						>
							<path d='M18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H13C13.0109 2.00047 13.0217 2.00249 13.032 2.006C13.0418 2.00902 13.0518 2.01103 13.062 2.012C13.1502 2.01765 13.2373 2.0348 13.321 2.063L13.349 2.072C13.3717 2.07968 13.3937 2.08904 13.415 2.1C13.5239 2.14842 13.6232 2.21618 13.708 2.3L19.708 8.3C19.7918 8.38479 19.8596 8.48406 19.908 8.593C19.918 8.615 19.925 8.638 19.933 8.661L19.942 8.687C19.9699 8.77039 19.9864 8.85718 19.991 8.945C19.9926 8.95418 19.9949 8.96322 19.998 8.972C19.9998 8.98122 20.0004 8.99062 20.0001 9V20C20.0001 21.1046 19.1046 22 18 22ZM6 4V20H18V10H13C12.4477 10 12 9.55228 12 9V4H6ZM14 5.414V8H16.586L14 5.414Z' />
						</svg>
						<span>Brochures</span>
					</a>
				</div>
				{/* call action buttons */}
			</div>
		</div>
	);
}
