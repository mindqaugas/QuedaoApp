import React, { useState } from "react";
import AccountPik from "../../assets/icons/user.png";
import { useDispatch, useSelector } from "react-redux";
import { openAccountAction } from "../../store/actions/uiActions.js";
import LoginForm from "./Account/LoginForm";
import RegisterForm from "./Account/RegisterForm";

const Account = () => {
   
  const [accButtonActive, setAccButtonActive] = useState("login");
  const accountModal = useSelector((state) => state.uiReducer.accountClicked);
  const token = useSelector((state) => state.userReducer.data.token);
  const [textFieldEmpty, settextFieldEmpty] = useState(false);
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


  return (
    <React.Fragment>
      <div
        className="account-right"
        onClick={() =>
          dispatch(
            openAccountAction({
              type: "ON_MODAL",
            })
          )
        }
      >
        <img src={AccountPik} alt="Account" className="account-icon" />
      </div>
      <div
        className={accountModal ? "account-modal" : "account-modal-off"}
        onClick={() =>
          dispatch(
            openAccountAction({
              type: "ON_MODAL",
            })
          )
        }
      ></div>

      {token ? (
        <div className={accountModal ? "outer-account" : "outer-account-off"}>
          <div className={accountModal ? "inner-account" : "inner-account-off"}>
            LOGOUT
          </div>
        </div>
      ) : (
        <div className={accountModal ? "outer-account" : "outer-account-off"}>
          <div className={accountModal ? "inner-account" : "inner-account-off"}>
            <div className="buttons-div">
              <div
                className={
                  accButtonActive === "login"
                    ? "button-div login"
                    : "button-div"
                }
                onClick={() => setAccButtonActive("login")}
              >
                Login
              </div>
              <div
                className={
                  accButtonActive === "register"
                    ? "button-div register"
                    : "button-div"
                }
                onClick={() => setAccButtonActive("register")}
              >
                Register
              </div>
            </div>

            {accButtonActive === "login" ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Account;
