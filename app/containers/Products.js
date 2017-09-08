import React, { Component } from 'react';
import Cakes from '../components/Cakes';
import Cupcakes from '../components/Cupcakes';
import Table from '../components/Table';
import Menu from '../components/Menu';
import BakeryLabel from '../components/BakeryLabel';

const Products = () => {
    return (
        <section className="products">
            <Cakes />
            <BakeryLabel />
            <Menu />
            <BakeryLabel />
            <Cupcakes />
        </section>
    )
}

export default Products;