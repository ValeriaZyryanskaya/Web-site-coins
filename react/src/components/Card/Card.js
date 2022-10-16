import React from "react";
import "./Card.css"
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'

export default function Card(props){
    const dispatch = useDispatch();
    function action_1(id) {
        return { 
            type: 'ADD_COIN_ID',
            value_1: id
        };
        
    }
    return(
        <div className="card-field">
            <div className="one-card">
                <img src={props.img} alt="coins" className="img-of-card"/>
            <div className="card-field-text">
            <span onClick={()=>dispatch(action_1(props.id))}>
                <Link to={"/description/" + (props.id)} className="card-link">
                <div className="card-field-header">{props.name}</div>
            </Link>
            </span>
            
                <div className="card-field-description">{props.description}</div>
            </div>
            </div>
            
        </div>
    )
}