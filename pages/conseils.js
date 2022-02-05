import React, { Component } from "react";
import Header from "../components/Header";
import Alert from "../components/conseils/Alert";
import NosProduits from "../components/conseils/NosProduits";
import Footer from "../components/footer/Footer";
import UpFooter from "../components/footer/UpFooter";

export default class Conseils extends Component {
  render() {
    return (
      <div classNameName="bg-slate-100 ">
        <Header />
        {/* <div classNameName="px-10 py-6  mx-4 mt-32">
          <Alert title="CONSEILS"/>
          <NosProduits />
        </div>
        

        <UpFooter />
        <Footer /> */}
        <div className="mt-32 px-10 py-6  mx-4">
          <Alert title="CONSEILS" description="Consultez, par gamme, les questions les plus fréquemment posées pour éclairer vos choix. Des questions simples, des réponses pratiques, qui vous permettront de mener à bien votre projet avec lun de nos partenaires installateurs en France."/>
          {/* <NosProduits /> */}
          <div className="h-screen">

          </div>
          <UpFooter />
          
        </div>
        <Footer />
      </div>
    );
  }
}
