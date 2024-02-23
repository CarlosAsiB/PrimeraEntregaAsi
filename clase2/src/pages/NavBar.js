import { Link } from "react-router-dom";
import React from 'react';
import CartWidget from '../components/CartWidget';
import CarritoImg from "../components/img/Carrito.png";



function NavBar(){
    return(
        <nav>
        <div>
            <Link className="Link" to='/'>Drinks </Link>
            <Link className="Link" to='/HotDrinks'>Hot Drinks </Link>
            <Link className="Link" to='/ColdDrinks'>Cold Drinks</Link>
            <CartWidget img={CarritoImg} />
        </div>
        </nav>
    )
}

export default NavBar;