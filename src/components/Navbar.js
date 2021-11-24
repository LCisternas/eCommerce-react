import React, { useState } from 'react';
import { Nav, Logo, Menu, Boton, Sidebar, Content, Close, SidebarItems, SidebarSettings, Items, Settings } from '../style/navbarStyle';

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
                <Sidebar>
                    <Content>
                        <Close>
                            <button 
                                onClick={() => setOpen(!open)}
                            ><i className="far fa-times-circle" />
                            </button>
                        </Close>
                        <SidebarItems>
                            <a onClick={() => setOpen(!open)} href="#!">Home</a>
                            <a onClick={() => setOpen(!open)} href="#!">About</a>
                            <a onClick={() => setOpen(!open)} href="#!">Menu</a>
                            <a onClick={() => setOpen(!open)} href="#!">Reviews</a>
                        </SidebarItems>
                        <SidebarSettings>
                            <Boton

                            ><i className="far fa-user-circle"></i></Boton>
                            <Boton
                            
                            ><i className="fas fa-shopping-cart"></i></Boton>
                        </SidebarSettings>
                    </Content>
                </Sidebar>
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