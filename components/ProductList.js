import React, { Component } from 'react';
import Card from './Card';
import FilterBar from './FilterBar';
export default class ProductList extends Component {
  render() {
    return(
        <div className='flex flex-row h-screen px-4 space-x-4 my-8'>
            
            <Card />
            <Card />
            <Card />
            <FilterBar />
        </div>
    )
  }
}
