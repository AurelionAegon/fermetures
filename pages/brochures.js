import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/footer/Footer";
import UpFooter from "../components/footer/UpFooter";
import MySwiper from "../components/shared/MySwiper";
import Alert from "../components/conseils/Alert";
import Section from "../components/shared/Section";
export default class brochures extends Component {
  render() {
    return (
      <div className="">
        <Header />
        <div className=" mt-32 px-10 py-6  mx-4">
          <Alert
            title="BROCHURES"
            description="Retrouvez ici les brochures téléchargeables de nos gammes de produits.
            Plus écolo que le papier !"
          />
        </div>

        <MySwiper />
        <Section />
        <UpFooter />
        <Footer />
      </div>
    );
  }
}
