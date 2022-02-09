import React, { Component } from "react";
import UpFooterCard from "./UpFooterCard";
import PictoA from "/public/assets/images/pictoSavoirFaire.svg";
import PictoB from "/public/assets/images/pictoGaranties.svg";
import PictoC from "/public/assets/images/pictoInstallateurs.svg";
import PictoD from "/public/assets/images/pictoNormes.svg";
export default class UpFooter extends Component {
  render() {
    return (
      <div className="px-10 py-6 mx-4 flex  space-x-4">
        <UpFooterCard
          title="MADE IN FRANCE 70 ANS DE SAVOIR-FAIRE"
          src="/assets/images/pictoSavoirFaire.svg"
        />
        <UpFooterCard
          title="GARANTIES FABRICANT JUSQU'À 8 ANS"
          src="/assets/images/pictoGaranties.svg"
        />
        <UpFooterCard
          title="DES INSTALLATEURS SUR TOUTE LA FRANCE"
          src="/assets/images/pictoInstallateurs.svg"
        />
        <UpFooterCard
          title="NORMES ET CERTIFICATIONS POUR UNE QUALITÉ OPTIMALE"
          src="/assets/images/pictoNormes.svg"
        />
        {/* <div className="w-1/4 border flex flex-row h-28 rounded-lg bg-purple-100 text-purple-900 shadow-2xl hover:cursor-pointer">
          <div className="w-1/3 grid place-items-center">
            <PictoB className="w-15 h-20 animate-wiggle" />
          </div>
          <div className="w-2/3 grid place-items-center">
            <span className="text-sm">GARANTIES FABRICANT JUSQU'À 8 ANS</span>
          </div>
        </div>
        <div className="w-1/4 border flex flex-row h-28 rounded-lg bg-purple-100 text-purple-900 shadow-2xl hover:cursor-pointer">
          <div className="w-1/3 grid place-items-center ease-in-out duration-300 group-hover:-translate-y-3">
            <PictoA className="w-16 h-16 animate-wiggle fill-current text-blue-600 group-hover:text-slate-800" />
          </div>
          <div className="w-2/3 grid place-items-center">
            <span className="text-sm">
              DES INSTALLATEURS SUR TOUTE LA FRANCE
            </span>
          </div>
        </div>
        <div className="w-1/4 border flex flex-row h-28 rounded-lg bg-purple-100 text-purple-900 shadow-2xl hover:cursor-pointer">
          <div className="w-1/3 grid place-items-center">
            <img src={this.props.src} className="w-15 h-20 animate-wiggle" />
          </div>
          <div className="w-2/3 grid place-items-center">
            <span className="text-sm">
              NORMES ET CERTIFICATIONS POUR UNE QUALITÉ OPTIMALE
            </span>
          </div>
        </div> */}
      </div>
    );
  }
}
