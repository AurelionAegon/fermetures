import React, { Component } from 'react';
export default class Product extends Component {
    render() {
        return (
            <div className='w-1/4 bg-purple-100 rounded-lg items-center h-36 shadow-xl'>
                <a href={``}>
                    <div className='h-1/2  grid place-content-center mt-2'>
                        <img src={this.props.src} className='h-20 w-20' fill="blue" />
                    </div>
                    <div className='h-1/2 justify-center uppercase grid place-content-center text-blue-600 '>
                        <div className='grid place-content-center'>
                            {this.props.title}
                        </div>
                        <div className='grid place-content-center'>
                            {this.props.second}
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}
