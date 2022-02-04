import React, { Component } from "react";
import Port from "/public/assets/images/porte.svg";
import VoletR from "/public/assets/images/volets-r.svg";
import VoletC from "/public/assets/images/volets-c.svg";
import VoletB from "/public/assets/images/volets-b.svg";
import Jalousies from "/public/assets/images/jalousies.svg";
import Rideaux from "/public/assets/images/rideaux.svg";
import Store from "/public/assets/images/store.svg";
import Domotique from "/public/assets/images/domotique.svg";

export default class ProductList extends Component {
  render() {
    return (
      // items list
      <div className="demo-carousel my-10 flex gap-6 flex-wrap  md:justify-between items-end w-full capitalize">
        <div className="carousel rounded-box h-1/2 pt-10">
          {/* item */}
          <div className="w-1/6 carousel-item flex flex-col items-center group cursor-pointer ">
            <div className="ease-in-out duration-300 group-hover:-translate-y-3">
              <Port className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
            </div>

            <h3 className="text-slate-600 font-bold  mt-3  group-hover:text-blue-600 ease-in-out duration-200">
              Portes de garage
            </h3>
          </div>
          {/* item */}

          {/* item */}
          <div className="w-1/6 carousel-item flex flex-col items-center group cursor-pointer ">
            <div className="ease-in-out duration-300 group-hover:-translate-y-3">
              <VoletR className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
            </div>

            <h3 className="text-slate-600 font-bold  mt-3  group-hover:text-blue-600 ease-in-out duration-200">
              Volets Roulants
            </h3>
          </div>
          {/* item */}

          {/* item */}
          <div className="w-1/6 carousel-item flex flex-col items-center group cursor-pointer ">
            <div className="ease-in-out duration-300 group-hover:-translate-y-3">
              <VoletC className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
            </div>

            <h3 className="text-slate-600 font-bold  mt-3  group-hover:text-blue-600 ease-in-out duration-200">
              Volets coulissants
            </h3>
          </div>
          {/* item */}

          {/* item */}
          <div className="w-1/6 carousel-item flex flex-col items-center group cursor-pointer ">
            <div className="ease-in-out duration-300 group-hover:-translate-y-3">
              <VoletB className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
            </div>

            <h3 className="text-slate-600 font-bold  mt-3  group-hover:text-blue-600 ease-in-out duration-200">
              Volets Battants
            </h3>
          </div>
          {/* item */}

          {/* item */}
          <div className="w-1/6 carousel-item flex flex-col items-center group cursor-pointer ">
            <div className="ease-in-out duration-300 group-hover:-translate-y-3">
              <Jalousies className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
            </div>

            <h3 className="text-slate-600 font-bold  mt-3  group-hover:text-blue-600 ease-in-out duration-200">
              Persiennes & Jalousies
            </h3>
          </div>
          {/* item */}

          {/* item */}
          <div className="w-1/6 carousel-item flex flex-col items-center group cursor-pointer ">
            <div className="ease-in-out duration-300 group-hover:-translate-y-3">
              <Rideaux className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
            </div>

            <h3 className="text-slate-600 font-bold  mt-3  group-hover:text-blue-600 ease-in-out duration-200">
              Rideaux & Grilles
            </h3>
          </div>
          {/* item */}

          {/* item */}
          <div className="w-1/6 carousel-item flex flex-col items-center group cursor-pointer ">
            <div className="ease-in-out duration-300 group-hover:-translate-y-3">
              <Store className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
            </div>

            <h3 className="text-slate-600 font-bold  mt-3  group-hover:text-blue-600 ease-in-out duration-200">
              Stores
            </h3>
          </div>
          {/* item */}

          {/* item */}
          <div className="carousel-item flex flex-col items-center group cursor-pointer w-1/6">
            <div className="ease-in-out duration-300 group-hover:-translate-y-3">
              <Domotique className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
            </div>

            <h3 className="text-slate-600 font-bold mt-3  group-hover:text-blue-600 ease-in-out duration-200">
              Domotique
            </h3>
          </div>
          {/* item */}
          {/* item */}
          <div className="w-1/6 carousel-item flex flex-col items-center group cursor-pointer ">
            <div className="ease-in-out duration-300 group-hover:-translate-y-3">
              <VoletB className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
            </div>

            <h3 className="text-slate-600 font-bold  mt-3  group-hover:text-blue-600 ease-in-out duration-200">
              Fenêtre en bois
            </h3>
          </div>
          {/* item */}
          {/* item */}
          <div className="w-1/6 carousel-item flex flex-col items-center group cursor-pointer ">
            <div className="ease-in-out duration-300 group-hover:-translate-y-3">
              <VoletB className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
            </div>

            <h3 className="text-slate-600 font-bold  mt-3  group-hover:text-blue-600 ease-in-out duration-200">
              Fenêtre en aluminium
            </h3>
          </div>
          {/* item */}
        </div>
      </div>
      // items list
    );
  }
}
