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
                    Boat Slips
                </NavLink>
                <NavLink to="/carts" activeStyles>
                    Golf Carts
                </NavLink>
                <NavLink to="/homes" activeStyles>
                    Rental Homes
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

