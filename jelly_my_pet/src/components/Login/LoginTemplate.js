import React, { Fragment, useState } from "react";
import "./Login.css";
import axios from "axios";
import { SERVER } from "config/config.json";
import { FaLock, FaUser } from "react-icons/fa";

const LoginTemplate = () => {
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
                placeholder="Username"
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
                placeholder="Password"
                name="password"
                value={password}
                onChange={event => {
                  setPassword(event.target.value);
                }}
              />
            </label>
          </div>
          <input
            className="btn"
            type="button"
            name=""
            value="로그인"
            onClick={handleLogin}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default LoginTemplate;
