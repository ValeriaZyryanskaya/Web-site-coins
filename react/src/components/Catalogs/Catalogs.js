
import React, {Component} from "react";
import { useState } from "react";
import Catalog from "../Catalog/Catalog"
import { useEffect } from "react";
import config from "../../config/config";




export default function Catalogs(){
    
    const [state, setState]=useState({
        catalogs:[
            
        ]
    })
    
    useEffect(() => { 
        fetch(`${config.APIhostUrl}/catalogs`)
        .then(response=>response.json())
        .then(data=>{
            setState({
                catalogs: data
            })
        },[])
        

        
      });


    

    return(
        <div className="catalogs-field">
            <div className="catalog">
                {state.catalogs.map(catalog=>(
                    <Catalog id={catalog.cat_id} name={catalog.catalog_name} img={`${/img/}`+ catalog.catalog_img} key={catalog.cat_id}/>
                ))}
            </div>
        </div>
    )
}