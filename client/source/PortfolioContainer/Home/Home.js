import React from "react";

import './Home.css'

import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";

export default function Home(){

    return <div className="home-container">
        <Header/>
        <Profile/>
        <Footer/>
    </div>

}