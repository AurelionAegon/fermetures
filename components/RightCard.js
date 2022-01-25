import React, { Component } from 'react';

export default class RightCard extends Component {
    render() {
        return (
            <div className='bg-indigo-300 flex flex-row  p-4 rounded-lg '>
                
                <div className='w-1/4'>
                    <img src={`/assets/img/conseils.svg`} className='h-40 w-36' />
                </div>
                <div className='flex flex-col w-3/4 space-y-2'>
                    <div className='text-xl text-black font-semibold'>
                        NOS CONSEILS SUR LES PORTES DE GARAGE
                    </div>
                    <div className=''>
                        Habitat neuf ou projet de rénovation ... Quelles sont les bonnes questions à se poser ?
                    </div>
                    <div className='w-48 items-center'>
                        <a
                            href='#'
                            className='flex text-center space-x-2 border bg-gray-200 hover:bg-blue-700 hover:text-white  border-gray-400 text-blue-600 px-3 py-1.5 rounded hover:shadow-blue-400/50 hover:shadow-lg ease-in-out duration-200 '
                        >
                            <span className='hidden lg:block'>
                                DEVIS EN LIGNE
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
