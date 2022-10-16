import React, {Component} from "react";
import "./Catalog.css"
import store from "../../store/store"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

export default function Catalog(props){
    
    const dispatch = useDispatch();
    function action_1(id) {
        return { 
            type: 'ADD_CATALOG_ID',
            value_1: id
        };
        
    }
    

    return(
        
        <div className="catalog-fields">
            <div className="name-of-catalogs">{props.name}</div>
            <div className="show-all">
                <div className="show-all-text"><span onClick={()=>dispatch(action_1(props.id))}><Link to='/list'>Show all</Link></span></div>
                <div className="show-all-arrow"></div>
            </div>
            
            <img src={props.img} className="img-of-catalogs"/>
        </div>
    )
}