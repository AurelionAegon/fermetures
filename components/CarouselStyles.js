import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Port from "/public/assets/images/porte.svg";
import VoletR from "/public/assets/images/volets-r.svg";
import VoletC from "/public/assets/images/volets-c.svg";
import VoletB from "/public/assets/images/volets-b.svg";
import Jalousies from "/public/assets/images/jalousies.svg";
import Rideaux from "/public/assets/images/rideaux.svg";
import Store from "/public/assets/images/store.svg";
import Domotique from "/public/assets/images/domotique.svg";
export default class CarouselStyles extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
    };
    return (
      <div>
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
          responsive={responsive}
          centerMode={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={3000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          className="my-2 mx-14 pt-10 flex gap-6 flex-wrap  md:justify-between items-end  capitalize"
        >
          <div className="">
            {/* item */}

            <div className="flex flex-col items-center group cursor-pointer ">
              <div className="ease-in-out duration-300 group-hover:-translate-y-3">
                <Port className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
              </div>

              <h3 className="text-slate-600 font-bold  mt-3  group-hover:text-blue-600 ease-in-out duration-200">
                Portes de garage
              </h3>
            </div>
            {/* item */}
          </div>
          <div className="">
            {/* item */}
            <div className="flex flex-col items-center group cursor-pointer ">
              <div className="ease-in-out duration-300 group-hover:-translate-y-3">
                <VoletR className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
              </div>

              <h3 className="text-slate-600 font-bold  mt-3  group-hover:text-blue-600 ease-in-out duration-200">
                Volets Roulants
              </h3>
            </div>
            {/* item */}
          </div>
          <div className="">
            {/* item */}
            <div className="flex flex-col items-center group cursor-pointer ">
              <div className="ease-in-out duration-300 group-hover:-translate-y-3">
                <VoletC className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
              </div>

              <h3 className="text-slate-600 font-bold  mt-3  group-hover:text-blue-600 ease-in-out duration-200">
                Volets coulissants
              </h3>
            </div>
            {/* item */}
          </div>
          <div className="">
            {/* item */}
            <div className="flex flex-col items-center group cursor-pointer ">
              <div className="ease-in-out duration-300 group-hover:-translate-y-3">
                <VoletB className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
              </div>

              <h3 className="text-slate-600 font-bold  mt-3  group-hover:text-blue-600 ease-in-out duration-200">
                Volets Battants
              </h3>
            </div>
            {/* item */}
          </div>
          <div className="">
            {/* item */}
            <div className="flex flex-col items-center group cursor-pointer ">
              <div className="ease-in-out duration-300 group-hover:-translate-y-3">
                <Jalousies className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
              </div>

              <h3 className="text-slate-600 font-bold  mt-3  group-hover:text-blue-600 ease-in-out duration-200">
                Persiennes & Jalousies
              </h3>
            </div>
            {/* item */}
          </div>
          <div className="">
            {/* item */}
            <div className="flex flex-col items-center group cursor-pointer ">
              <div className="ease-in-out duration-300 group-hover:-translate-y-3">
                <Rideaux className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
              </div>

              <h3 className="text-slate-600 font-bold  mt-3  group-hover:text-blue-600 ease-in-out duration-200">
                Rideaux & Grilles
              </h3>
            </div>
            {/* item */}
          </div>
          <div className="">
            {/* item */}
            <div className="flex flex-col items-center group cursor-pointer ">
              <div className="ease-in-out duration-300 group-hover:-translate-y-3">
                <Store className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
              </div>

              <h3 className="text-slate-600 font-bold  mt-3  group-hover:text-blue-600 ease-in-out duration-200">
                Stores
              </h3>
            </div>
            {/* item */}
          </div>
          <div className="">
            {/* item */}
            <div className="flex flex-col items-center group cursor-pointer ">
              <div className="ease-in-out duration-300 group-hover:-translate-y-3">
                <Domotique className="w-16 h-16 fill-current text-blue-600 group-hover:text-slate-800 " />
              </div>

              <h3 className="text-slate-600 font-bold mt-3  group-hover:text-blue-600 ease-in-out duration-200">
                Domotique
              </h3>
            </div>
            {/* item */}
          </div>
          {/* <div className="w-1/6 px-10">Item 9</div>
          <div className="w-1/6 px-10">Item 10</div> */}
        </Carousel>
        ;
      </div>
    );
  }
}
