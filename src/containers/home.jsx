import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Page from "../components/page/page";
import './home.css';
const Home=()=>{
    return(
        <div className="main-container">
            <div className="header">
            <Header />
            </div>
            <div className="info">
            <Page id="Men" text="Clothes mean nothing until someone lives in them" className=""/>
           <Page id="Women" text="Style is a way to say who you are without having to speak." className="container1--container2"/>
           <Page id="Kids" text="Fashion is like eating, you shouldn't stick to the same menu." className="container1--container3"/>
           </div>
            <Footer />
        </div>  
    );
};
export default Home;