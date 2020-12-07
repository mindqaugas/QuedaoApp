import * as actionType from '../actions/actionTypes'; 



const toursState = {
tours: [],
singleTour: {}
   
};
const toursReducer = (state = toursState, action, e) => {
    

    switch(action.type) {  
            case actionType.LOAD_TOURS_ALL:
               
                return{
                    ...state,
                    tours: action.tours
                    
                };      
                case actionType.LOAD_TOURS_SINGLE:
                
                    return{
                        ...state,
                        singleTour: action.singleTour
                        
                    };                   
        default: return state;
    }
}

export default toursReducer;