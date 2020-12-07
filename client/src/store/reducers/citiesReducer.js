import * as actionType from '../actions/actionTypes'; 



const cityState = {
cities: [],
singleCity: {}
   
};
const citiesReducer = (state = cityState, action, e) => {
    

    switch(action.type) {  
            case actionType.LOAD_CITIES_ALL:
               
                return{
                    ...state,
                    cities: action.cities
                    
                };      
                case actionType.LOAD_CITIES_SINGLE:
                
                    return{
                        ...state,
                        singleCity: action.singleCity
                        
                    };                   
        default: return state;
    }
}

export default citiesReducer;