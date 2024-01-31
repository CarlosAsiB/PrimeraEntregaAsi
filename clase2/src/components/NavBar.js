import React from 'react';
import CartWidget from './CartWidget';
import CarritoImg from "./img/Carrito.png"

function NavBar({img}) {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="">
                    <img src= {img} width="50px" height="200px" />
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="#">
                        Cafes
                    </a>

                    <a className="navbar-item" href="#">
                        Nuestro Cafe
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <CartWidget img={CarritoImg} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;