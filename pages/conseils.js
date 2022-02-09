import React, { Component } from "react";
import Header from "../components/Header";
import Alert from "../components/conseils/Alert";
import NosProduits from "../components/conseils/NosProduits";
import Footer from "../components/footer/Footer";
import UpFooter from "../components/footer/UpFooter";
import CarouselStyles from "../components/CarouselStyles";
export default class Conseils extends Component {
  render() {
    return (
      <div classNameName="bg-slate-100 ">
        <Header />
        <div className="mt-32 px-10 py-6  mx-4">
          <Alert
            title="CONSEILS"
            description="Consultez, par gamme, les questions les plus fréquemment posées pour éclairer vos choix. Des questions simples, des réponses pratiques, qui vous permettront de mener à bien votre projet avec lun de nos partenaires installateurs en France."
          />
         <div>
         <CarouselStyles />
         </div>
          <div className="h-screen ">
            some content goes here
          </div>
         
        </div>
        <UpFooter />
        <Footer />
      </div>
    );
  }
}
