import React, { Component } from 'react';
import SectionCard from './SectionCard';
export default class Section extends Component {
  render() {
    return(
        <div className='flex felx-row  px-14 py-6 space-x-28 bg-midnight'>
            <SectionCard src='https://www.france-fermetures.fr/img/siglePGE.svg' />
            <SectionCard src='https://www.france-fermetures.fr/img/siglePGS.svg'/>
            <SectionCard src='https://www.france-fermetures.fr/img/siglePGT.svg'/>
        </div>

    )
  }
}
