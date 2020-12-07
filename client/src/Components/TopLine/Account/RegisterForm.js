import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../../store/actions/userActions.js";

const RegisterForm = () => {
    const [onChangeName, setOnChangeName] = useState("");
    const [onChangeSurName, setOnChangeSurName] = useState("");
    const [onChangeEmail, setOnChangeEmail] = useState("");
    const [onChangePassword, setOnChangePassword] = useState("");
    const [onChangePasswordRepeat, setOnChangePasswordRepeat] = useState("");
    
    const dispatch = useDispatch();



    const onChangeNameFn = (e) => {
        setOnChangeName(e.target.value);
        console.log(e.target.value);
      };
      const onChangeSurNameFn = (e) => {
        setOnChangeSurName(e.target.value);
        console.log(e.target.value);
      };
    const onChangeEmailFn = (e) => {
      setOnChangeEmail(e.target.value);
      console.log(e.target.value);
    };
    const onChangePasswordFn = (e) => {
      setOnChangePassword(e.target.value);
      console.log(e.target.value);
    };
    const onChangePasswordRepeatFn = (e) => {
        setOnChangePasswordRepeat(e.target.value);
        console.log(e.target.value);
      };
      const onSubmitRegister = (e) => {
        e.preventDefault();
        dispatch(
          registerAction({
            type: "ON_REGISTER",
            data: { name: onChangeName, surName: onChangeSurName, email: onChangeEmail, password: onChangePassword, language: "en", userType: "user" },
          })
        );
      };
  return(
      <React.Fragment>
    <div className="login-heading">
    <div className="heading-1">
    Register now ! 
    </div>
    <div className="heading-2">
    Please fill out all form fields.
    </div>
</div>
    <form className="register-fields" onSubmit={onSubmitRegister}>
    <input type="text" name="account-name" className="text-field" 
onChange={onChangeNameFn} value={onChangeName} placeHolder="Name" spellcheck="false"/>
  <input type="text" name="account-surName" className="text-field" 
onChange={onChangeSurNameFn} value={onChangeSurName} placeHolder="Surname" spellcheck="false"/>
    <input type="text" name="account-email" className="text-field" 
onChange={onChangeEmailFn} value={onChangeEmail} placeHolder="Email" spellcheck="false"/>
     <input type="password" name="account-password" className="text-field" 
onChange={onChangePasswordFn} value={onChangePassword} placeHolder="Password" spellcheck="false"/>
<input type="password" name="account-password-repeat" className="text-field" 
onChange={onChangePasswordRepeatFn} value={onChangePasswordRepeat} placeHolder="Repeat password" spellcheck="false"/>
<button type="submit" className="register-btn">Register</button>
</form>

</React.Fragment>
  );

}

export default RegisterForm;