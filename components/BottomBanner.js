import React, { Component } from 'react';
import LeftCard from './LeftCard';
import RightCard from './RightCard';
export default class BottomBanner extends Component {
    render() {
        return (
            <div className='flex flex-row px-14 py-6 h-screen space-x-14'>
                <div className='w-1/2 '>
                   <LeftCard />
                </div>
                <div className='w-1/2 space-y-4'>
                    <RightCard />
                    <RightCard />
                </div>
            </div>
        )
    }
}
