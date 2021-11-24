import React, { Fragment } from 'react';
import { SidebarContenedor, Content, Close, SidebarItems, SidebarSettings, Boton } from '../style/sidebarStyle';

const Sidebar = ({ open, setOpen }) => {
    return (
        <Fragment>
            <SidebarContenedor>
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
                </SidebarContenedor>
        </Fragment>
    );
}
 
export default Sidebar;