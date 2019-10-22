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
    if (id == "") {
      alert("ID를 입력해주세요.");
      return;
    } else if (!isNaN(id)) {
      alert("아이디는 숫자로 시작할 수 없습니다!");
      return;
    } else if (id.length > 12 || id.length < 4) {
      alert("ID를 4~12자 이내로 입력해주세요.");
      return;
    }

    let checkNumber = id.search(/[0-9]/g);
    let checkEnglish = id.search(/[a-z]/gi);
    if (checkNumber < 0 || checkEnglish < 0) {
      alert("아이디는 숫자와 영어를 혼용하여 주세요.");
      return false;
    }

    // for (let i = 0; i < id.length; i++) {
    //   let ch = id;
    //   if (
    //     (ch < "a" || ch > "z") &&
    //     (ch < "A" || ch > "Z") &&
    //     (ch < "0" || ch > "9")
    //   ) {
    //     alert("아이디는 영문과 숫자로만 입력 가능 합니다!");
    //     return;
    //   }
    // }

    // 패스워드 검사
    if (pw == "") {
      alert("비밀번호를 입력해주세요.");
      return;
    } else if (pw.length > 12 || pw.length < 4) {
      alert("비밀번호를 4~12자 이내로 입력해주세요.");
      return;
    }
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
        console.log(res);
      })
      .catch(err => {
        console.error(err);
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
