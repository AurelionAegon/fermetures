import React, { Component } from "react";
import Header from "../components/Header";
import UpFooter from "../components/footer/UpFooter";
import Footer from "../components/footer/Footer";
import WithThumb from "../components/swipers/WithThumb";
// import { FaTemperatureLow } from "react-icons/fa";
import { FaHeart, FaRegHeart, FaTemperatureLow } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
export default class productDetails extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="pt-32 px-14 py-6  space-y-10">
          <div className="flex flex-row space-x-10">
            <div className="w-5/12 ">
              <WithThumb />
            </div>
            <div className="w-2/12 flex flex-col space-y-6">
              <div className="h-1/3 grid place-content-center bg-midnight rounded-lg space-y-4">
                <div className="text-center text-white text-xl font-bold">
                  Isolation
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <IconContext.Provider
                    value={{
                      color: "white",
                      className: "global-class-name",
                      size: "20px",
                    }}
                  >
                    <FaTemperatureLow />
                    <FaTemperatureLow />
                    <FaTemperatureLow />
                    <FaTemperatureLow />
                  </IconContext.Provider>
                </div>
              </div>
              <div className="h-1/3 grid place-content-center bg-midnight rounded-lg space-y-4">
                <div className="text-center text-xl text-white font-bold">
                  Prix
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <IconContext.Provider
                    value={{
                      color: "white",
                      className: "global-class-name",
                      size: "20px",
                    }}
                  >
                    <BiDollarCircle />
                    <BiDollarCircle />
                    <BiDollarCircle />
                    <BiDollarCircle />
                  </IconContext.Provider>
                </div>
              </div>
              <div className="h-1/3 grid place-content-center bg-midnight  rounded-lg space-y-4">
                <div className="text-center text-white text-xl font-bold">
                  Sécurité
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <IconContext.Provider
                    value={{
                      color: "white",
                      className: "global-class-name",
                      size: "20px",
                    }}
                  >
                    <BsFillShieldLockFill />
                    <BsFillShieldLockFill />
                    <BsFillShieldLockFill />
                    <BsFillShieldLockFill />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
            <div className="w-5/12 grid place-content-center">
              <div className="flex flex-col space-y-6">
                <div className="text-2xl text-slate-700 font-semibold text-center">
                  PORTES DE GARAGE ENROULABLES
                </div>
                <div className="text-2xl font-bold text-center">EASYLIS</div>
                <div className="text-center text-lg font-bold text-slate-800">
                  {
                  "Une porte enroulable conçue pour pouvoir s'adapter à votre garage, quelque soit sa configuration !"
                  }
                </div>
                <div className="text-center font-light text-lg text-slate-800">
                  Encombrement minimum, la porte idéale pour les petits
                  espaces...
                </div>
                <div className="w-60 self-center grid place-items-center">
                  <a
                    href="#"
                    className="flex text-center space-x-2 border bg-gray-200 hover:bg-blue-700 hover:text-white  border-gray-400 text-blue-600 px-3 py-1.5 rounded hover:shadow-blue-400/50 hover:shadow-lg ease-in-out duration-200 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="fill-current w-5 h-5"
                    >
                      <path d="M13 10V21C12.0034 21 7.62034 21 4.99915 21C3.89458 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3L19 3C20.1046 3 21 3.89543 21 5V10H13ZM11 10H5V14H11V10ZM11 19V16H5V19H11ZM13 5.00001V8.00001H19V5.00001H13ZM11 5.00001H5V8.00001H11V5.00001Z" />
                      <path d="M19 21V18H16V16H19V13H21V16H24V18H21V21H19Z" />
                    </svg>
                    <span className="hidden lg:block">DEVIS EN LIGNE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 space-y-3">
            <div>
              
              {
              "Profitez du confort d'une porte de garage motorisée en conservant tout l'espace qu'offre votre garage. "
              }
            </div>
            <div>
              Une solution spécialement adaptée pour les garages de petite
              taille, bas de plafond ou en sous-sol…
            </div>
            <div className="font-bold text-slate-900 text-xl">
              La conception de la porte enroulable Easylis lui permet de
              s'enrouler entièrement dans un caisson de 20,5 cm !
            </div>
            <div>
              <ul className="list-disc text-slate-600 space-y-3 ml-10">
                <li>
                  {
                    "Intégration facile à l'intérieur de votre garage"
                  }
                </li>
                <li>
                  Possibilité de pose extérieure sur façade en toute discrétion
                </li>
                <li>Murs et plafonds libérés</li>
                <li>Confort de passage optimal</li>
              </ul>
            </div>
            <div className="list-disc font-bold text-slate-900 text-xl">
              {
                "Choisissez l'un des 4 packs qui équipera votre porte Easylis :"
              }
            </div>
            <div>
              <ul className="list-disc text-slate-600 space-y-3 ml-10">
                <li>
                  Pack Filaire : idéal pour une utilisation peu fréquente (abris
                  de jardin, pool house...)
                </li>
                <li>Pack Eco : la commande radio adaptée aux petits budgets</li>
                <li>
                  {
                    "Pack Confort : une offre radio avec système de détection d'obstacle pour une sécurité d'utilisation optimale"
                  }
                </li>
                <li>
                  Pack Premium : une offre radio toutes options avec alarme
                  anti-intrusion intégrée !
                </li>
              </ul>
            </div>
            <div className="text-slate-800 font-semibold">
              {
                "Disponibles dans de nombreux coloris RAL et tons Bois, composez  votre porte pour qu'elle s'intègre parfaitement à votre façade."
              }
            </div>
            <div className="text-slate-800 font-semibold">
              Easylis est la porte idéale pour une esthétique coordonnée avec
              des volets roulants !
            </div>
          </div>
          <div className="flex bg-midnight">
            <div className="w-1/2 p-10">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 mySwiper3 rounded-xl"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-1/2 p-10 text-slate-400 text-2xl font-bold text-center grid place-content-center">
              MATÉRIAUX ET DESIGN
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="w-1/2 p-10">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 mySwiper3 rounded-xl"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-1/2 space-y-4 p-10 text-slate-400 text-2xl font-bold text-center grid place-content-center">
              <div className="">MANOEUVRES</div>
              <div className="text-xl text-slate-800">
                Les portes Easylis sont toutes motorisées et vous disposez de 4
                packs au choix pour équiper votre porte selon vos besoins :
              </div>
            </div>
          </div>
          <div className="flex bg-midnight">
            <div className="w-1/2 p-10">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 mySwiper3 rounded-xl"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-1/2 p-10 text-slate-500 text-2xl font-bold text-center grid place-content-center">
              <div>options</div>
              <div className="text-xl text-slate-300">
                De nombreuses options sont disponibles pour vous apporter
                toujours plus de confort et de sécurité :
              </div>
            </div>
          </div>
        </div>

        <UpFooter />
        <Footer />
      </div>
    );
  }
}
