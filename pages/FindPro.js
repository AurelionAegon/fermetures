import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/footer/Footer";
import UpFooter from "../components/footer/UpFooter";
import SimpleMap from "../components/SimpleMap";
import Alert from "../components/conseils/Alert";
export default class FindPro extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="my-2 mx-14 pt-28">
          <Alert
            title="TROUVER UN PROFESSIONNEL PARTENAIRE
                DE FRANCE FERMETURES"
            description="Retrouvez ici les partenaires indépendants avec lesquels nous pouvons vous mettre en relation. Installateurs professionnels, ils vous proposeront la solution la plus adaptée à vos besoins, dans nos gammes de fermetures : portes de garage, volets roulants, volets battants, persiennes et jalousies, rideaux et grilles, stores, ou encore dans univers de la maison connectée."
          />
          <SimpleMap />
          <UpFooter />
            <Footer />
        </div>
      </div>
    );
  }
}
