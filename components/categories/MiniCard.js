import React, { Component } from 'react';

export default class MiniCard extends Component {
    render() {
        return (
            <div className=' border flex-col w-1/2 h-44 grid place-items-center -space-y-10 bg-black text-white rounded-xl'>
                <div className='grid place-items-center'>
                    DÉCOUVRIR
                </div>
                <div className='grid place-items-center'>
                        <img src={`/assets/images/logo.png`}/>
                </div>
                <div className='uppercase grid place-items-center bg-red-600 p-1  hover:cursor-pointer'>
                    qui somme-nous ?
                </div>
            </div>
        )
    }
}
