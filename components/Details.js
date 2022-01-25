import React, { Component } from 'react';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default class Details extends Component {
    render() {
        return (
          
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>{this.props.title}</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm  space-y-4">
                                    <div className='flex flex-row space-x-2'>
                                        <div>
                                            <input type="checkbox" />
                                        </div>
                                        <div className=''>
                                            Value
                                        </div>
                                    </div>
                                    <div className='flex flex-row space-x-2'>
                                        <div>
                                            <input type="checkbox" />
                                        </div>
                                        <div className=''>
                                            Value
                                        </div>
                                    </div>
                                    <div className='flex flex-row space-x-2'>
                                        <div>
                                            <input type="checkbox" />
                                        </div>
                                        <div className=''>
                                            Value
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

        )
    }
}
