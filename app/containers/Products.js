import React, { Component } from 'react';
import Cakes from '../components/Cakes';
import Cupcakes from '../components/Cupcakes';
import BakeryLabel from '../components/BakeryLabel';

const Products = () => {
    return (
        <section className="products">
            <Cupcakes />
            <BakeryLabel />
            <Cakes />
        </section>
    )
}

export default Products;