import React, { Component } from 'react';
import Picto from "/public/assets/images/pictoSavoirFaire.svg"
export default class UpFooterCard extends Component {
  render() {
    return (
      <div className='w-full md:w-1/2 sm:w-full  lg:w-1/4 border flex flex-row h-28 rounded-lg bg-purple-100 text-purple-900 shadow-2xl hover:cursor-pointer '>
        <div className='w-1/3 grid place-items-center flex-wrap'>
          <img src={this.props.src} className='w-15 h-20 animate-wiggle' />
        </div>
        <div className='w-2/3 grid place-items-center'>
          <span className='text-sm'>
            {this.props.title}
          </span>
        </div>
      </div>
    )
  }
}
