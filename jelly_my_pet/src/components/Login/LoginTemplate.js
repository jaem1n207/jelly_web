import React, { Fragment, useState } from "react";
import "./Login.css";
import axios from "axios";
import { SERVER } from "config/config.json";
import { FaLock, FaUser } from "react-icons/fa";
import { withRouter } from "react-router-dom";

const LoginTemplate = ({ history }) => {
  const movePage = url => {
    history.push(url);
  };
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = event => {
    const data = {
      id: id,
      pw: password
    };
    event.preventDefault();
    axios
      .post(`${SERVER}/auth/login`, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <Fragment>
      <div className="login-main">
        <div className="login-box">
          <h1>My Pet</h1>
          <div className="textbox">
            <FaUser></FaUser>
            <label>
              <input
                type="text"
                placeholder="ID"
                name="id"
                value={id}
                onChange={event => {
                  setId(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="textbox">
            <FaLock></FaLock>
            <label>
              <input
                type="password"
                placeholder="PASSWORD"
                name="password"
                value={password}
                onChange={event => {
                  setPassword(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="Lo-BtnPos">
            <input
              className="Lo-Btn"
              type="button"
              name=""
              value="로그인"
              onClick={handleLogin}
            />
            <input
              className="Lo-Btn"
              type="button"
              name=""
              onClick={() => {
                movePage("/signup");
              }}
              value="회원가입"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(LoginTemplate);
