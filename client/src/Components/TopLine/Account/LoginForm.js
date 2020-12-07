import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../store/actions/userActions.js";


const LoginForm = () => {
    const [onChangeEmail, setOnChangeEmail] = useState("");
    const [onChangePassword, setOnChangePassword] = useState("");
    
    const dispatch = useDispatch();

    const onChangeEmailFn = (e) => {
      setOnChangeEmail(e.target.value);
      console.log(e.target.value);
    };
    const onChangePasswordFn = (e) => {
      setOnChangePassword(e.target.value);
      console.log(e.target.value);
    };
    const onSubmitLogin = (e) => {
        e.preventDefault();
        dispatch(
          loginAction({
            type: "ON_LOGIN",
            data: { email: onChangeEmail, password: onChangePassword },
          })
        );
      };
  return(
      <React.Fragment>
    <div className="login-heading">
    <div className="heading-1">
    Sign in here ! 
    </div>
    <div className="heading-2">
    Login and start you tours now.
    </div>
</div>
    <form className="login-fields" onSubmit={onSubmitLogin}>
    <input type="text" name="account-email" className="text-field" 
onChange={onChangeEmailFn} value={onChangeEmail} placeholder="Email" spellCheck="false"/>
     <input type="password" name="account-password" className="text-field" 
onChange={onChangePasswordFn} value={onChangePassword} placeholder="Password" spellCheck="false"/>
<button type="submit" className="login-btn">Login</button>
</form>
</React.Fragment>
  );

}

export default LoginForm;