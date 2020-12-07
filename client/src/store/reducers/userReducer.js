import * as actionType from "../actions/actionTypes";

const initState = {
  data: {},
  codeMessage: "",
};
const userReducer = (state = initState, action, e) => {
  switch (action.type) {
    case actionType.ON_LOGIN:
      const userLoginData = action.data;

      console.log("Reducer console.log", userLoginData);
      return {
        ...state,
        data: userLoginData,
      };
    case actionType.ON_REGISTER:
      const userRegisterData = action.data;

      console.log("Reducer console.log", userRegisterData);
      return {
        ...state,
        data: userRegisterData,
      };
    case actionType.ON_SUBMIT_CODE:
      const userData = action.data;
console.log(userData, "Fom verify code")

      return { ...state,
    data: {confirmed: userData.confirmed} };
    default:
      return state;
  }
};

export default userReducer;
