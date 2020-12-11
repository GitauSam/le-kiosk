import React from 'react';
import { AppBar, Toolbar, IconButton, 
    Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo/logo.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar 
                position="fixed"
                className={classes.appBar}
                color="inherit">
                    <Toolbar>
                        <Typography variant="h6"
                            className={classes.title}
                            color="inherit">
                            <img src={logo} 
                            alt="Commerce.js" 
                            height="50px"
                            className={classes.image}
                            component={Link}
                            to="/"/>
                            My Shop
                        </Typography>
                        <div className={classes.grow}/>
                        {
                            location.pathname === '/'&&(
                                <div className={classes.button}>
                                    <IconButton
                                        aria-label="Show cart items"
                                        color="inherit"
                                        component={Link}
                                        to="/cart"
                                    >
                                        <Badge
                                            badgeContent={totalItems}
                                            color="secondary"
                                        >
                                            <ShoppingCart />
                                        </Badge>
                                    </IconButton>
                                </div>)
                        }
                    </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
