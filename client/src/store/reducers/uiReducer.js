import * as actionType from '../actions/actionTypes'; 



const initState = {
filterData: null,
accountClicked : false,
data : {}
    
   
};
const uiReducer = (state = initState, action, e) => {
    

    switch(action.type) {  
            case actionType.ON_FILTER:
               
                console.log("Reducer console.log",action.filterData )
                return{
                    ...state,
                    filterData: action.filterData
                    
                };      
                case actionType.ON_MODAL:
               
                    console.log("Reducer console.log",state.accountClicked )
                    return{
                        ...state,
                        accountClicked: !state.accountClicked
                        
                    };    
                    case actionType.SCREEN_DIM:
               
                    console.log("Reducer console.log",state.accountClicked )
                    return{
                        ...state,
                        dim: {width: action.dim.width,
                        height: action.dim.height}
                        
                    };                                     
        default: return state;
    }
}

export default uiReducer;