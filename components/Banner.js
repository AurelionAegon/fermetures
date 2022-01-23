import React, { Component } from 'react';

export default class Banner extends Component {
    render() {
        return (
            <div className='flex felx-row px-16 py-16 space-x-10 bg-blue-50'>
                <div className='flex w-1/2'>
                    <a href='#' className='flex items-center'>
                        <img
                            src='https://www.france-fermetures.fr/img/visuelPG.svg'
                            className='w-screen '
                            fill="#000000"
                            alt='productName'
                        />
                    </a>
                </div>
                <div className='flex w-1/2 flex-col space-y-4 text-center'>
                    <div className=' font-bold text-xl'>
                        PORTES DE GARAGE
                    </div>
                    <div className='text-justify'>
                        Découvrez tous nos modèles de portes de garage. Sectionnelles, enroulables, pliantes, basculantes, nous proposons de nombreux modèles que vous pouvez personnaliser pour répondre au maximum à vos attentes.
                    </div>
                    <div>
                        QUELLE PORTE DE GARAGE CHOISIR ?
                    </div>
                    <div className='self-center md:flex items-center space-x-5 font-semibold text-slate-800 hidden'>
                        <div className='group'>
                        <a href='#'>
                            Lire la suite
                        </a>
                        <div className='h-0.5 bg-blue-600 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out' />
         
                        </div>
                    </div>
                    <div className='w-60 self-center grid place-items-center'>
                        <a
                            href='#'
                            className='flex text-center space-x-2 border bg-gray-200 hover:bg-blue-700 hover:text-white  border-gray-400 text-blue-600 px-3 py-1.5 rounded hover:shadow-blue-400/50 hover:shadow-lg ease-in-out duration-200 '
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                className='fill-current w-5 h-5'
                            >
                                <path d='M13 10V21C12.0034 21 7.62034 21 4.99915 21C3.89458 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3L19 3C20.1046 3 21 3.89543 21 5V10H13ZM11 10H5V14H11V10ZM11 19V16H5V19H11ZM13 5.00001V8.00001H19V5.00001H13ZM11 5.00001H5V8.00001H11V5.00001Z' />
                                <path d='M19 21V18H16V16H19V13H21V16H24V18H21V21H19Z' />
                            </svg>
                            <span className='hidden lg:block'>
                                DEVIS EN LIGNE
                            </span>
                        </a>
                    </div>
                    {/* flex items-center space-x-2 border 
                     border-blue-600 px-3 py-1.5 rounded
                      hover:shadow-blue-400/50 hover:shadow-lg
                       ease-in-out duration-200 hover:text-slate-800 */}
                </div>
            </div>
        )
    }
}
