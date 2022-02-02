import React, { Component } from 'react';
import Picto from "/public/assets/images/pictoSavoirFaire.svg"
export default class UpFooterCard extends Component {
  render() {
    return (
      <div className='w-1/4 border flex flex-row h-28 rounded-lg bg-purple-100 text-purple-900 shadow-2xl hover:cursor-pointer'>
        <div className='w-1/3 grid place-items-center'>
          <img src={this.props.src} className='w-15 h-20 animate-wiggle' />

        </div>
        <div className='w-2/3 grid place-items-center'>
          <span className='text-sm'>
            {this.props.title}
            {/* <div className='ease-in-out duration-300 group-hover:-translate-y-3'>
              <Picto className="fill-current text-blue-600 group-hover:text-slate-800 " />
            </div> */}
          </span>
        </div>
      </div>
    )
  }
}
