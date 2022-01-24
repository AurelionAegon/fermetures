import React, { Component } from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Section from '../components/Section';
import ProductList from '../components/ProductList';
export default class categories extends Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Section />
                <ProductList />
                
            </div>
        )
    }
}
