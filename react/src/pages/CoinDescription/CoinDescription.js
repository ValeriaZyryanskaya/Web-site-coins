import React, { useState } from "react";
import "./CoinDescription.css"
import {Link} from "react-router-dom"
import { useParams } from "react-router";
import { useEffect } from "react";
import config from "../../config/config";
import store from "../../store/store"

export default function CoinDescription(){
   
    const [state, setState]=useState({
       coinInfo:[

       ]
    })
    useEffect(()=>{
        let infoFromState=store.getState()
        let coinID=infoFromState.filters.coin_id
     

        fetch(`${config.APIhostUrl}/coin/${coinID}`)
        .then(response=>response.json())
        .then(data=>{ 
            setState({
                coinInfo: [...data][0]
            })
            
        })
    })
   
 
   
  
    return(
           
            <div className="descriptions-fields">
                
                <div className="descriptions-images">
                    <img src={`${/img/}`+state.coinInfo.img_1} alt="coin"/>
                    <br/>
                    <img src={`${/img/}`+state.coinInfo.img_2} alt="coin"/>
                </div>
                <div className="descriptions-info">
                    <div className="all-info">
                    <div className="descriptions-text">
                        <div className="descriptions-text-title">{state.coinInfo.coin_name}</div>
                        <div className="descriptions-text-info">{state.coinInfo.short_info}</div>
                        <div className="descriptions-text-info">{state.coinInfo.full_info}</div>
                    </div>
                    <div className="descriptions-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="white-td">Issuing Country</td>
                                    <td className="white-td">{state.coinInfo.country_name}</td>
                                </tr>
                                <tr>
                                    <td className="grey-td">Composition</td>
                                    <td className="grey-td">{state.coinInfo.composition_name}</td>
                                </tr>
                                <tr>
                                    <td className="white-td">Quality</td>
                                    <td className="white-td">{state.coinInfo.quality_name}</td>
                                </tr>
                                <tr>
                                    <td className="grey-td">Denomination</td>
                                    <td className="grey-td">{state.coinInfo.denomination}</td>
                                </tr>
                                <tr>
                                    <td className="white-td">Year</td>
                                    <td className="white-td">{state.coinInfo.year}</td>
                                </tr>
                                <tr>
                                    <td className="grey-td">Weight</td>
                                    <td className="grey-td">{state.coinInfo.weight}{state.coinInfo.weight_name}</td>
                                </tr>
                                <tr>
                                    <td className="white-td">Price</td>
                                    <td className="white-td">{state.coinInfo.price}{state.coinInfo.currency_symbol}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    
                </div>

<Link to="/list" className="back-to-list">Back to the list</Link>
            </div>

        </div>

    )
}