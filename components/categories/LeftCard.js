import React, { Component } from 'react';

export default class LeftCard extends Component {
    render() {
        return (
            <div className='border h-96 rounded-2xl flex flex-row my-2'>
                <div className='w-2/3 rounded-l-2xl'>
                    <img src={`/assets/images/Maquette-pour-WEB-1.jpg`} className='h-full' />
                </div>
                <div className='grid place-items-center pb-28  bg-gray-200 rounded-r-xl'>
                    <div className='w-1/2 flex flex-col rotate-90  space-y-8 '>
                        <div className='text-2xl w-72 '>
                            VOLETS COULISSANTS
                        </div>
                        <div className='w-60'>
                            <a
                                href='#'
                                className='flex text-center space-x-2 border hover:bg-blue-600 bg-blue-400 text-white  border-gray-400 hover:text-white px-3 py-1.5 rounded hover:shadow-blue-400/50 hover:shadow-lg ease-in-out duration-200 '
                            >
                                
                                <span className=' lg:block uppercase py-1 grid place-items-center '>
                                    Recevoir la brochure
                                </span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
