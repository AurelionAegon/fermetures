import React, { Component } from 'react';
import Header from '../components/Header';
import Alert from '../components/conseils/Alert';
import NosProduits from '../components/conseils/NosProduits';
import Footer from '../components/footer/Footer'
import UpFooter from '../components/footer/UpFooter';

export default class Conseils extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='px-10 py-6  mx-4 mt-32'>
          <Alert />
          <NosProduits />
        </div>
         <div className='h-screen flex-wrap  space-x-5 px-10 py-6  mx-4 text-red-700 text-center'>
           KALSDKLKASDLLASMKAASDK KSDMKMASDKMASD KMDSKLAMD
        </div> 

        <UpFooter />
        <Footer />

      </div>
      
    )
  }
}
