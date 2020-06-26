import React from "react";
import './header.css';
import Icon from '../icons/icon';
const Header=()=>{
    return(
        <header id="header">
                <Icon />
                <span>Fabrics</span>
                <nav>
                    <a href="#Men">Men</a>
                    <a href="#Women">Women</a>
                    <a href="#Kids">Kids</a>
                </nav>   
        </header>
    );
};
export default Header;