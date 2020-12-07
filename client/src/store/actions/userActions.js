import * as actionTypes from './actionTypes';
import axios from 'axios';

const host = 'http://localhost:9000'

export const loginAction = (value) => {
    const {data, act} = value;
   console.log(data , "hahah" );
       return async dispatch => {
         // dispatch({
         //   type: actionTypes.GET_FARMS_LOADING
         // });
         try {
             let res = await axios.post(`${host}/api/auth/login-user`, {data});
            
                    dispatch({type: actionTypes.ON_LOGIN, data: res.data});
                    dispatch({type: actionTypes.ON_MODAL});
           
            
         } catch (error) {
           console.log(error, 'unsuccessful login');
         //   dispatch({
         //     type: actionTypes.GET_FARMS_FAIL,
         //     errorValue: error
         //   });
         }
       };
     };
     
   // export const loginAction = (value) => {
   //     console.log("Login", value);
   //     return {
   //         type: actionTypes.ON_FILTER, filterData: value.filterData
   //     };
       
   // };

   export const registerAction = (value) => {
    const {data, act} = value;

       return async dispatch => {
         // dispatch({
         //   type: actionTypes.GET_FARMS_LOADING
         // });
         try {
             let res = await axios.post(`${host}/api/auth/register`, {data});
            
                    dispatch({type: actionTypes.ON_REGISTER, data: res.data});
           
                    dispatch({type: actionTypes.ON_MODAL});
            
         } catch (error) {
           console.log(error, 'unsuccessful login');
         //   dispatch({
         //     type: actionTypes.GET_FARMS_FAIL,
         //     errorValue: error
         //   });
         }
       };
     };

     export const submitCodeAction = (value) => {
        const {data, act} = value;
       console.log(data , "SUBMIT CODE ACTION" );
           return async dispatch => {
             // dispatch({
             //   type: actionTypes.GET_FARMS_LOADING
             // });
             try {
                 let res = await axios.post(`${host}/api/auth/verify`, {data});
                
                        dispatch({type: actionTypes.ON_SUBMIT_CODE, data: res.data});
                       
               
                
             } catch (error) {
               console.log(error, 'unsuccessful login');
             //   dispatch({
             //     type: actionTypes.GET_FARMS_FAIL,
             //     errorValue: error
             //   });
             }
           };
         };