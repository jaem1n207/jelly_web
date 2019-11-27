import React, { Fragment, useState } from "react";
import "./Login.css";
import axios from "axios";
// import {post} from 'axios';
import { SERVER } from "config/config.json";
import { FaLock, FaUser } from "react-icons/fa";
import { withRouter } from "react-router-dom";

const LoginTemplate = ({ history }) => {
  const movePage = url => {
    history.push(url);
  };

  let showMessage = (id, pw) => {
    // 아이디 검사
    let checkId = new RegExp("^[a-zA-Z][a-zA-Z0-9]{3,11}$", "g"); //정규표현식 (영어와 숫자 조합만 가능)
    let match = checkId.exec(id);

    if (id == "") {
      alert("ID를 입력해주세요.");
      return true;
    } else if (id.length > 12 || id.length < 4) {
      alert("ID를 4~12자 이내로 입력해주세요.");
      return true;
    } else if (match == null) {
      alert("ID의 첫글자는 영문으로 시작하며 영문과 숫자 조합만 가능합니다.");
      return true;
    }

    // 패스워드 검사
    if (pw == "") {
      alert("비밀번호를 입력해주세요.");
      return true;
    } else if (pw.length > 12 || pw.length < 4) {
      alert("비밀번호를 4~12자 이내로 입력해주세요.");
      return true;
    }

    return false;
  };

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = e => {
    const data = {
      id: id,
      pw: password
    };

    e.preventDefault();

    showMessage(data.id, data.pw);

    axios
      .post(`${SERVER}/auth/login`, data)
      .then(res => {
        alert("로그인 성공!");
        window.localStorage.setItem("x-access-token", res.data.data.token);
        movePage("/");
        console.log(res);
      })
      .catch(err => {
        alert("ID와 PW를 확인해주세요.");
      });
  };
  const onKeyPress = e => {
    switch (e.which) {
      case 13:
        handleLogin();
        break;
    }
  };

  // Enter KeyCode: 13
  // const keyevent = e => {
  //   var keycode = e.keyCode;
  //   alert("키값:" + keycode);
  // };

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
                placeholder="ID (영어로 시작, 4~12자 이내)"
                name="id"
                value={id}
                size="22"
                onChange={e => {
                  setId(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="textbox">
            <FaLock></FaLock>
            <label>
              <input
                type="password"
                placeholder="PASSWORD (4~12자 이내)"
                name="password"
                value={password}
                size="22"
                onChange={e => {
                  setPassword(e.target.value);
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
              onKeyPress={onKeyPress}
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
        {/* <div className="Po-TestDiv">
          <input
            type="text"
            onKeyDown={keyevent}
            className="Po-keyTest"
          ></input>
        </div> */}
      </div>
    </Fragment>
  );
};

export default withRouter(LoginTemplate);
