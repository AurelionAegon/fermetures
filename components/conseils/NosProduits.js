import React, { Component } from 'react';
import Product from './Product';
export default class NosProduits extends Component {
    render() {
        return (
            <div className=' flex flex-row  py-4 rounded-lg space-x-2 my-4'>

                <div className='flex flex-row w-1/2 space-x-2'>
                    <Product title="PORTES " second="DE GARAGE" src="/assets/img/sigleDO.svg" />
                    <Product title="Persiennes &" second="Jalousies" src="/assets/img/siglePGS.svg" />
                    <Product title="PORTES " second="DE GARAGE" src="/assets/img/siglePJ.svg" />
                    <Product title="PORTES " second="DE GARAGE" src="/assets/img/sigleRG.svg" />

                </div>
                <div className='flex flex-row w-1/2 space-x-2'>
                    <Product title="PORTES " second="DE GARAGE" src="/assets/img/sigleST.svg" />
                    <Product title="PORTES " second="DE GARAGE" src="/assets/img/sigleVB.svg" />
                    <Product title="PORTES " second="DE GARAGE" src="/assets/img/sigleVC.svg" />
                    <Product title="PORTES " second="DE GARAGE" src="/assets/img/sigleVR.svg" />

                </div>

            </div>

        )
    }
}
