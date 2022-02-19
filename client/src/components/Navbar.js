import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';

function Navbar() {
    return (

        <>
        <Nav>
            <NavLink to="/">
                <h1>Deltaville Rentals</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/boats" activeStyles>
                    Boats
                </NavLink>
                <NavLink to="/carts" activeStyles>
                    Carts
                </NavLink>
                <NavLink to="/homes" activeStyles>
                    Homes
                </NavLink>
                <NavLink to="/storage" activeStyles>
                    Storage
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    );
}

export default Navbar;

