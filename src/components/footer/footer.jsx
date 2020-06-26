import React from "react";
import './footer.css';
import Icon from "../icons/icon";
const Footer=()=>{
    return(
        <footer>
            <div className="footer-icon">
                 <Icon className="icon--black"/>
                <p>fabrics</p>
            </div>
        <span>Contact us : +91-9999999999</span>|
        <span>E-mail : fabrics@gmail.com</span>|
        <span>Instagram ID : fabrics</span>|
        <span>Twitter ID : fabrics</span>
        </footer>
    )
}
export default Footer;