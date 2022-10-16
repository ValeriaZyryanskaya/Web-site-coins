import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card"
import { useEffect } from "react";
import store from "../../store/store.js"
import { getState } from "react";
import config from "../../config/config";
import "./Cards.css"
import { useSelector } from "react-redux";


export default function Cards() { 
    const filters=useSelector(state=>state.filters)
   
    const [state, setState] = useState({
        coins: [

        ]
        
    })
   
    useEffect(() => {
        let infoFromState = store.getState()
        
        let i = 1
        let filterSrting = ''
        for (let filter in infoFromState.filters) {

            if (infoFromState.filters[filter] != null) {

                if (i < 2) {

                    filterSrting += `${filter}=${infoFromState.filters[filter]}`

                } else {
                    filterSrting += `&${filter}=${infoFromState.filters[filter]}`
                }
                i++
            }
        }
        console.log(`${config.APIhostUrl}/coins?${filterSrting}`);
        fetch(`${config.APIhostUrl}/coins?${filterSrting}`)
            .then(response => response.json())
            .then(data => {
                setState({
                    coins: data
                })

            })



    },[filters])





    return (
        <div className="cards-fields">
            <div className="card">

                { state.coins.length !=0 
                    ? state.coins.map(card => (
                        <Card id={card.coin_id}
                            name={card.coin_name}
                            description={card.short_info}
                            img={`${/img/}` + card.img_1}
                            key={card.coin_id}
                        />
                   
                    ))
                    : <div className="nothingFound">Ничего не найдено</div>
             }
            </div>
            <div>

            </div>
        </div>
    )
}