import "./ListOfTheCoins.css"
import React from "react"
import Search from "../../components/Search/Search"
import Cards from "../../components/Cards/Cards.js"
import { Link } from "react-router-dom"
import { useEffect } from "react";
import store from "../../store/store.js"

export default function ListOfCoins(){
    

    return(
        <div className="homepage-field">
            <div className="title-of-page">List of the coins</div>
            <div className="return-to-homepage"><Link to="/"><span><u>Homepage</u></span></Link> — List of the coins</div>
            <Search/>
            <ul className="list-of-coins">
                    <li className="cards">
                        <Cards/>
                    </li>
            </ul>
        </div>
       
    )
}