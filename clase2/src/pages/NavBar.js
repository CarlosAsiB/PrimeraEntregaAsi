import { Link } from "react-router-dom";
import React from 'react';
import CartWidget from '../components/CartWidget';
import CarritoImg from "../components/img/Carrito.png";


function NavBar(){
    return(
        <nav>
        <div>
            <Link to='/'>Drinks</Link>
            <Link to='/HotDrinks'>HotDrinks</Link>
            <Link to='/ColdDrinks'>ColdDrinks</Link>
            <CartWidget img={CarritoImg} />
        </div>
        </nav>
    )
}

export default NavBar;