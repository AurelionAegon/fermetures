import React, { Component } from 'react';
import UpFooterCard from './UpFooterCard';
export default class UpFooter extends Component {
    render() {
        return (
            <div className='px-10 py-6 mx-4 flex  space-x-4'>
                <UpFooterCard title="MADE IN FRANCE 70 ANS DE SAVOIR-FAIRE" src="/assets/images/pictoSavoirFaire.svg"/>
                <UpFooterCard title="GARANTIES FABRICANT JUSQU'À 8 ANS" src="/assets/images/pictoGaranties.svg"/>
                <UpFooterCard title="DES INSTALLATEURS SUR TOUTE LA FRANCE" src="/assets/images/pictoInstallateurs.svg"/>
                <UpFooterCard title="NORMES ET CERTIFICATIONS POUR UNE QUALITÉ OPTIMALE" src="/assets/images/pictoNormes.svg"/>
            </div>
        )
    }
}
