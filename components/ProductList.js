import React, { Component } from 'react';
import Card from './Card';
import FilterBar from './FilterBar';
export default class ProductList extends Component {
  render() {
    return (
      <div>
        <div className='flex flex-row h-screen px-14 py-6  space-x-8 my-8 bg-slate-100'>
          <div className='w-3/4 flex flex-row  space-x-8'>
            <div className='w-1/3'>
              <Card src="https://www.france-fermetures.fr/image/300x200/i/FF-ff/public/catalogue/portes_garage/MiamiByme/MiamiByMe.jpg" />
            </div>
            <div className='w-1/3'>
              <Card src="https://www.france-fermetures.fr/image/300x200/o/FF-ff/public/Images/VR-NOVALIS-V3-SITU3.jpg" />
            </div>
            <div className='w-1/3'>
              <Card src="https://www.france-fermetures.fr/image/300x200/o/FF-ff/public/Images/QT-QENA-QALIO%20VERT-3D-SITU.jpg" />
            </div>
          </div>
          <div className='w-1/4'>
            <FilterBar />
          </div>
        </div>
      </div>
    )
  }
}
