import React, { Component } from 'react';
import Details from './Details';
export default class FilterBar extends Component {
  render() {
    return (
      <div className=' pl-4 space-y-4 '>
        <div className='text-center'>
          AFFINER MA RECHERCHE
        </div>
        <div>
          <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl space-y-3">
            <Details title='Type de matériau' />
            <Details title='Type de pose' />
            <Details title='Manoeuvre / Motorisation' />
            <Details title='Autre' />
          </div>
        </div>

      </div>
    )
  }
}
