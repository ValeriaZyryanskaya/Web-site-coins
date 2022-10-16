
import { useState } from "react";
import HomepageOne from "../../pages/HomepageOne/HomepageOne.js";
import HomepageTwo from "../../pages/HomepageTwo/HomepageTwo.js";
import "./Search.css"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

export default function Search(){
    const [toggle, setToggle]=useState(false)

    const [state, setState]=useState({
        searchInput: ""
    })
    const dispatch = useDispatch();
    function handleChangeInput(event){
            dispatch(action_1(event.target.value))
    }
    function action_1(input) {
        return { 
            type: 'ADD_INFO_FROM_INPUT',
            value_1: input
        };
        
    }
    return(
        <div className="search-field">
            <div className="search-field-text-input">Input field</div>
            <input
                onChange={handleChangeInput}
                type="text"
                className="search-field-input"
            />
            <Link to='/list'><button className="search-field-button">Search</button></Link>
            <div  onClick={()=>setToggle(!toggle)} className="advanced-filter-field">
                <div>Advanced filter</div>
                {toggle ? <div className="triangle-up"></div> : <div className="triangle-down"></div>}
            </div> 
             {toggle ? <HomepageTwo/> : ""}
        </div>
    )
}