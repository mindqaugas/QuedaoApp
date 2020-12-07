import * as actionTypes from "./actionTypes";
import axios from "axios";

const host = "http://localhost:9000";


export const loadAllCitiesAction = () => {
    return async (dispatch) => {
      // dispatch({
      //   type: actionTypes.GET_FARMS_LOADING
      // });
      try {
        let res = await axios.post(`${host}/api/cities/all`);
        dispatch({ type: actionTypes.LOAD_CITIES_ALL, cities: res.data });
        console.log(res.data, "RES DATA")
      } catch (error) {
        console.log(error, "Cant get all Cities");
        //   dispatch({
        //     type: actionTypes.GET_FARMS_FAIL,
        //     errorValue: error
        //   });
      }
    };
  };