import "./HomepageOne.css"
import Search from "../../components/Search/Search"
import React from "react"
import Catalogs from "../../components/Catalogs/Catalogs"

export default function HomepageOne(){
   
    return(
        <div className="homepage-field">
            <div className="title-of-page">Homepage</div>
            <Search/>
            <ul className="catalogs-of-coins">
                    <li className="catalog">
                        <Catalogs/>
                    </li>
            </ul>
        </div>
    )
}
    