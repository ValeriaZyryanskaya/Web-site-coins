

const initialState = {
    filters: {
        catalog: null,
        issuing_country: null,
        metal: null,
        quality_of_the_coin: null,
        price: null,
        year_from: null,
        year_to: null,
        coin_id: null,
        input: null,
        input_price_to: null,
        input_price_from: null
    }
    
}


function reducer(state=initialState, action){
    console.log(action);
   
    switch(action.type) {
        case 'ADD_CATALOG_ID': 
            clearFilters(state.filters)
          
            return addFilter('catalog',action.value_1, state)
            
        case 'ADD_COIN_ID':
            return addFilter('coin_id',action.value_1, state)
     
        case 'ADD_INFO_FROM_INPUT':
            return addFilter('input',action.value_1, state)
      
        case 'ADD_ISSUING_COUNTRY_ID':
           
            return  addFilter('issuing_country',action.value_1, state)
  
        case 'ADD_ISSUING_COMPOSITION_ID':
            return addFilter('metal',action.value_1, state)
    
        case 'ADD_ISSUING_QUALITY_ID':
            return addFilter('quality_of_the_coin',action.value_1, state)

        case 'ADD_INPUT_PRICE_FROM':
               return addFilter('input_price_from',action.value_1, state)

        case 'ADD_INPUT_PRICE_TO':
            return addFilter('input_price_to',action.value_1, state)

        case 'ADD_INPUT_YEAR_FROM':
            return addFilter('year_from',action.value_1, state)

        case 'ADD_INPUT_YEAR_TO':
            return addFilter('year_to',action.value_1, state)

        default: return state;
    }
    
}
function clearFilters(filters){
    for(let filter in filters){
        filters[filter]=null
    }
}
function addFilter(property, value, state){
    console.log({
        ...state, 
        filters: {
            ...state.filters,
            [property]: value
        }
        
    });
    return {
        ...state, 
        filters: {
            ...state.filters,
            [property]: value
        }
        
    }
}

console.log(initialState);
export default reducer;
