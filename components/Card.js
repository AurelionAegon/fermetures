import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div class="wrapper w-1/5 antialiased text-gray-900 ">
        <div>

          <img src="https://www.france-fermetures.fr/image/300x200/i/FF-ff/public/catalogue/portes_garage/MiamiByme/MiamiByMe.jpg" alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md hover:rotate-6 h-64" />

            <div class="relative px-4 -mt-16  ">
              <div class="text-blue-600 p-6 rounded-lg shadow-lg bg-gray-100">
                <div class="flex items-baseline">
                  <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    New
                  </span>
                  <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    2 baths  &bull; 3 rooms
                  </div>
                </div>

                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>

                <div class="mt-1">
                  $1800
                  <span class="text-gray-600 text-sm">   /wk</span>
                </div>
                <div class="mt-4">
                  <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
                  <span class="text-sm text-gray-600">(based on 234 ratings)</span>
                </div>
              </div>
            </div>

        </div>
      </div>
    )
  }
}
