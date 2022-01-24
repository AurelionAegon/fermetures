import React, { Component } from 'react';

export default class SectionCard extends Component {
  render() {
    return (
      <div className=' w-1/3 border test border-blue-300  hover:shadow-2xl  h-56 rounded-2xl bg-blue-100 bg-opacity-20 p-4 flex flex-col relative undefined hover:border-blue-700'>
        <a href='#'
          className='items-center flex flex-col space-y-6 py-8  rounded-lg '
        >
          <div className=''>
            <img
              src={this.props.src}
              viewBox='0 0 24 24'
              className='fill-current w-20 h-20'
              fill='blue'
            />
          </div>
          <div>
            <div className=' text-center'>
              Découvrir nos portes de garage
            </div>
            <div className='text-center'>
              enroulables
            </div>
          </div>
        </a>
      </div>
      
    )
  }
}
