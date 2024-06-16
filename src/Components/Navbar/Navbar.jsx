import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.jpg'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="logo" width="50" height="50" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-mefnu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>} </li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav_login_cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="cart_icon"width="50" height="50" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
} 

export default Navbar