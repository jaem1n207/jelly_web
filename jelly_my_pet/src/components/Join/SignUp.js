import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { SERVER } from "config/config.json";
import { withRouter } from "react-router-dom";

const SignUp = ({ history }) => {
  const movePage = url => {
    history.push(url);
  };
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [petname, setPetname] = useState("");
  const handleLogin = event => {
    const data = {
      id: id,
      pw: password,
      username: username,
      petname: petname
    };
    event.preventDefault();
    axios
      .post(`${SERVER}/auth/SignUp`, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="login-main">
        <div className="login-box">
          <h1>회원가입</h1>
          <div className="textbox">
            <label>
              이름
              <input
                type="text"
                placeholder="USERNAME"
                id="username"
                value={username}
                onChange={event => {
                  setUsername(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="textbox">
            <label>
              아이디
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
            <label>
              비밀번호
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
          <div className="textbox">
            <label>
              펫 이름
              <input
                type="text"
                placeholder="PetName"
                name="petname"
                value={petname}
                onChange={event => {
                  setPetname(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="Sign-BtnPos">
            <input
              className="Sign-Btn"
              type="button"
              name=""
              value="회원가입"
              onClick={handleLogin}
            />
            <input
              className="Sign-Btn Sign-logBtn"
              type="button"
              name=""
              value="로그인"
              onClick={() => {
                movePage("/login");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
