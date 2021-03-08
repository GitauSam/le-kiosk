import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './product/Product';
import useStyles from './styles';
import Categories from '../categories/Categories';

const Products = ({ products, onFetchProducts, onAddToCart }) => {

    const classes = useStyles();

    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <div className={classes.main}>
                <Categories onFetchProducts = {onFetchProducts} />
                <Grid container justify="flex-start" style={{ marginLeft: '180px',}} spacing={4}>
                    { 
                        products.map((product) => (
                            <Grid item 
                            key = {product.id}
                            xs = {12} sm = {6} md = {4} lg = {3}
                            >
                                <Product product={ product } onAddToCart = {onAddToCart}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </main>
    );
}

export default Products;