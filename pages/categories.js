import React, { Component } from 'react';
import Banner from '../components/categories/Banner';
import Header from '../components/Header';
import Section from '../components/categories/Section';
import ProductList from '../components/categories/ProductList';
import BottomBanner from '../components/categories/BottomBanner';
import UpFooter from '../components/footer/UpFooter';
import Footer from '../components/footer/Footer';

export default class categories extends Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Section />
                <ProductList />
                <BottomBanner />
                <UpFooter />
                <Footer />
            </div>
        )
    }
}
