import React, { useState } from "react"
import "./HomepageTwo.css"
import { useEffect } from "react";
import config from "../../config/config";
import { useSelector, useDispatch } from 'react-redux'


export default function HomepageTwo(){
    const[state,setState]= useState({
        issuing_country: [],
        composition: [],
        quality:[],
        cataloges:[]
    })
    const dispatch = useDispatch();
   const filters=useSelector(state=>state.filters)
    useEffect(()=>{
        
        console.log(state);
        fetch(`${config.APIhostUrl}/filters?filters=issuing_country,composition,quality,cataloges`)
        .then(response=>response.json())
        .then(data=>{ 
            setState(data)
            
        })
     
    },[filters])


    function handleChangeCountry(event) {
       
        dispatch(action_1(event.target.value))

        function action_1(id) {
            return {
                type: 'ADD_ISSUING_COUNTRY_ID',
                value_1: id
            };
        }
    }

    function handleChangeComposition(event) {
        dispatch(action_2(event.target.value))
        function action_2(id) {
            return {
                type: 'ADD_ISSUING_COMPOSITION_ID',
                value_1: id
            };

        }
    }

    function handleChangeQuality(event) {
        dispatch(action_3(event.target.value))
        function action_3(id) {
            return {
                type: 'ADD_ISSUING_QUALITY_ID',
                value_1: id
            };

        }
    }

    function handleChangeInputPriceFrom(event) {
        dispatch(action_4(event.target.value))
        function action_4(input) {
            return {
                type: 'ADD_INPUT_PRICE_FROM',
                value_1: input
            };

        }
    }

    function handleChangeInputPriceTo(event) {
        dispatch(action_5(event.target.value))
        function action_5(input) {
            return {
                type: 'ADD_INPUT_PRICE_TO',
                value_1: input
            };

        }
    }

    function handleChangeInputYearFrom(event) {
        dispatch(action_6(event.target.value))
        function action_6(input) {
            return {
                type: 'ADD_INPUT_YEAR_FROM',
                value_1: input
            };

        }
    }

    function handleChangeInputYearTo(event) {
        dispatch(action_7(event.target.value))
        function action_7(input) {
            return {
                type: 'ADD_INPUT_YEAR_TO',
                value_1: input
            }
        }
    }
    function handleChangeCatalog(event){
        dispatch(action_8(event.target.value))
        function action_8(input) {
            return {
                type: 'ADD_CATALOG_ID',
                value_1: input
            }
        }
    }
    
console.log(state);
    return(
        <div className="homepage-two-field">
           
            <div className="filter-container">

            <div className="issuing-country-fields">
                <form className="form-fields-country">
                <label className="country-field-text-input" for="country-select">Issuing country</label>
                <br/>
                 <select value={state.issuing_country.country_name} onChange={handleChangeCountry} name="country" id="country-select">
                    <option hidden>Choose country</option>
                    {state.issuing_country.map(country=>(
                            <option key={country.country_id} value={country.country_id}>{country.country_name}</option>
                         
                    ))}
                    
                </select>
                </form>
                <form name="price" >
                <label className="price-field-text-input">
                         Price
                <br/>
                <label className="price-field-from-to">from</label>
                 <input onChange={handleChangeInputPriceFrom} className="input-price" type="text" size="40"/>
                 </label>
                 <label className="price-field-from-to">to</label>
                 <input onChange={handleChangeInputPriceTo}className="input-price" type="text" size="40"/>
                 </form>
                 
            </div>
            <div className="issuing-country-fields">
                <form className="form-fields-country">
                <label className="country-field-text-input" for="country-select">Metal</label>
                <br/>
            
                 <select name="country" value={state.composition.composition_name} onChange={handleChangeComposition} id="country-select">
                <option hidden>Choose metal</option>
                {state.composition.map(composition=>(
                     <option key={composition.compos_id} value={composition.compos_id}>{composition.composition_name}</option>
                ))}
                </select>
                </form>
                <form name="price">
                
                <label className="price-field-text-input">
                Year of issue

                <br/>
                <label className="price-field-from-to">from</label>
                 <input onChange={handleChangeInputYearFrom} className="input-price" type="text" size="40"/>
                 </label>
                 <label className="price-field-from-to">to</label>
                 <input onChange={handleChangeInputYearTo} className="input-price" type="text" size="40"/>
                 </form>
                 
            </div>
            <div className="issuing-country-fields">
                <form className="form-fields-country">
                <label className="country-field-text-input" for="country-select">Quality of the coin</label>
                <br/>
                 <select name="country" id="country-select" value={state.quality.quality_name} onChange={handleChangeQuality}>
                 <option hidden>Choose quality</option>
                 {state.quality.map(quality=>(
                     <option key={quality.q_id} value={quality.q_id}>{quality.quality_name}</option>
                ))}
                </select>
                </form>
                <form className="form-fields-catalogs">
                <label className="catalogs-field-text-input" for="catalog-select">Catalog</label>
                <br/>
                 <select name="catalog" id="catalog-select" value={state.quality.quality_name} onChange={handleChangeCatalog}>
                 <option hidden>Choose catalog</option>
                 {state.cataloges.map(catalog=>(
                     <option key={catalog.cat_id} value={catalog.cat_id}>{catalog.catalog_name}</option>
                ))}
                </select>
                </form>
                 
            </div>

            </div>
            
        </div>
    )
}