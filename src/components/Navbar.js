import React, { useState } from 'react';
import { Nav, Logo, Menu, Boton, Items, Settings } from '../style/navbarStyle';

import Sidebar from './Sidebar';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <Nav>
            <Logo>
                <i className="fas fa-utensils"></i>
                <h1>FOOD</h1>
            </Logo>
            <Menu>
                <Boton
                    onClick={() => setOpen(!open)}
                >
                    <i className="fas fa-hamburger"></i>
                </Boton>
            </Menu>

            {open &&
                <Sidebar open={open} setOpen={setOpen} />
            }

            <Items>
                <a href="#!">Home</a>
                <a href="#!">About</a>
                <a href="#!">Menu</a>
                <a href="#!">Reviews</a>
            </Items>
            <Settings>
                <Boton

                ><i className="far fa-user-circle"></i></Boton>
                <Boton

                ><i className="fas fa-shopping-cart"></i></Boton>
            </Settings>
        </Nav>
    );
}
 
export default Navbar;