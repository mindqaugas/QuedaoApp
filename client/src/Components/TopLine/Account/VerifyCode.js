import React, {useState} from 'react';
import './VerifyCode.css';
import { useDispatch, useSelector } from "react-redux";
import { submitCodeAction } from "../../../store/actions/userActions.js";

const VerifyCode = () => {
    const {email} = useSelector((state) => state.userReducer.data);
    const [onChangeCode, setOnChangeCode] = useState("");
    const [onChangeEmail, setOnChangeEmail] = useState("");
    const dispatch = useDispatch();


    const onChangeEmailFn = (e) => {
        setOnChangeEmail(e.target.value);
        console.log(e.target.value);
      };
    const onChangeCodeFn = (e) => {
        setOnChangeCode(e.target.value);
        console.log(e.target.value);
      };
      const onSubmitCode = (e) => {
        e.preventDefault();
        dispatch(
          submitCodeAction({
            type: "ON_SUBMIT_CODE",
            data: { email: onChangeEmail, secretCode: onChangeCode },
          })
        );
      };
return(
    <div className="verify-general">
        <div className="outer-verify">
            <div className="verify-title">
                Please verify your email, secret code was sent to {email}
            </div>
            <div>
                <form className="verify-form" onSubmit={onSubmitCode}>
                <input type="text" name="account-email" className="text-field" 
                    onChange={onChangeEmailFn} value={onChangeEmail} placeholder="Your Email" spellCheck="false"/>
                <input type="text" name="account-code" className="code-field" 
                    onChange={onChangeCodeFn} value={onChangeCode} placeholder="Secret Code" spellCheck="false"/>
                    <button type="submit" className="login-btn">Verify Code</button>
                </form>
            </div>
        </div>
       
    </div>
);

}

export default VerifyCode;