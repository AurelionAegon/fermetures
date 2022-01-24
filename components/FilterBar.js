import React, { Component } from 'react';

export default class FilterBar extends Component {
  render() {
    return (
      <div className='w-2/5 grid place-items-center'>
        <div className='text-center'>
        AFFINER MA RECHERCHE
        </div>
        <details className='open:bg-white open:shadow-xl' >
          <summary className='self-center md:flex items-center space-x-5 font-semibold text-slate-800 hidden hover:cursor-pointer'>
            <div className='group'>
              Lire la suite
              <div className='h-0.5 bg-blue-600 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out' />
            </div>
          </summary>
          <div>
            <input type="checkbox" />kasjdlad
          </div>
          <div>
            <input type="checkbox" />kasjdlad
          </div>
          <div>
            <input type="checkbox" />kasjdlad
          </div>
        </details>
        <details>
          <summary>title 1</summary>
          <div>
            lokkljkaljf jnajfjkn nadjnjka jandjknja
          </div>
        </details>
        <details>
          <summary>title 1</summary>
          <div>
            lokkljkaljf jnajfjkn nadjnjka jandjknja
          </div>
        </details>
      </div>
    )
  }
}
