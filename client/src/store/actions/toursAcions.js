import * as actionTypes from "./actionTypes";
import axios from "axios";

const host = "http://localhost:9000";

export const loadAllToursAction = () => {
  return async (dispatch) => {
    // dispatch({
    //   type: actionTypes.GET_FARMS_LOADING
    // });
    try {
      let res = await axios.post(`${host}/api/tours/all`);
      dispatch({ type: actionTypes.LOAD_TOURS_ALL, tours: res.data });
    } catch (error) {
      console.log(error, "Cant get all Tours");
      //   dispatch({
      //     type: actionTypes.GET_FARMS_FAIL,
      //     errorValue: error
      //   });
    }
  };
};

export const loadSingleTourAction = (data) => {
  
  return async (dispatch) => {
    // dispatch({
    //   type: actionTypes.GET_FARMS_LOADING
    // });
    try {
      let res = await axios.post(`${host}/api/tours/single-tour`, data);
      dispatch({ type: actionTypes.LOAD_TOURS_SINGLE, singleTour: res.data });
    } catch (error) {
      console.log(error, "Cant get all Tours");
      //   dispatch({
      //     type: actionTypes.GET_FARMS_FAIL,
      //     errorValue: error
      //   });
    }
  };
};
