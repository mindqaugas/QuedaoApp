import * as actionTypes from './actionTypes';
import axios from 'axios';

const host = 'http://localhost:9000'
export const openAccountAction = (value) => {
    
    return {
        type: actionTypes.ON_MODAL
    };
    
};
export const filterAction = (value) => {
    console.log("bbbb", value);
    return {
        type: actionTypes.ON_FILTER, filterData: value.filterData
    };
    
};
export const screenDimAction = (value) => {
    console.log("bbbb", value);
    return {
        type: actionTypes.SCREEN_DIM, dim: {width: value.width, height: value.height}
    };
    
};

