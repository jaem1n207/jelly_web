import React, { Fragment, useState } from "react";
import "./Login.css";
import axios from "axios";
import { SERVER } from "config/config.json";
import { FaLock, FaUser } from "react-icons/fa";
import { withRouter } from "react-router-dom";

// //아이디 검사 ---------------------------------------------------------------------------

// function Login() {
//   var form = document.form1;

//   //아이디에서 입력 필수 조건문
//   if (form.txtID.value == "") {
//     alert("아이디를 입력해야 합니다!");
//     form.txtID.focus(); //포커스를 id박스로 이동.
//     return;
//   }

//   //아이디 입력 문자수를 4~12자로 제한하는 조건문

//   if (form.txtID.value.length < 4 || form.txtID.value.length > 12) {
//     alert("아이디는 4~12자 이내로 입력 가능합니다!");

//     form.txtID.select(); //입력한 문자를 선택 상태로 만듬.
//     return;
//   }

//   //입력된 문자의 길이만큼 루프를 돌면서 검사

//   for (i = 0; i < form.txtID.value.length; i++) {
//     var ch = form.txtID.value.charAt(i); //문자를 반환(정수형), 범위 검사 가능

//     //입력된 문자를 검사

//     if (
//       (ch < "a" || ch > "z") &&
//       (ch < "A" || ch > "Z") &&
//       (ch < "0" || ch > "9")
//     ) {
//       alert("아이디는 영문 소문자로만 입력 가능 합니다!");
//       form.txtID.select();
//       return;
//     }
//   }

//   //입력된 첫번째 문자가 숫자인지 검사하는 조건문

//   if (!isNaN(form.txtID.value.substr(0, 1))) {
//     alert("아이디는 숫자로 시작할 수 없습니다!");
//     form.txtID.select();
//     return;
//   }

//   //패스워드 검사 -------------------------------------------------------------------------

//   if (form.txtPwd.value == "") {
//     alert("패스워드를 입력 해야 합니다!");
//     form.txtPwd.focus(); //포커스를 Password박스로 이동.
//     return;
//   }

//   if (form.txtPwd.value.length < 4 || form.txtPwd.value.length > 12) {
//     alert("비밀번호는 4~12자 이내로 입력 가능 합니다!");

//     form.txtPwd.select();
//     return;
//   }

//   form.submit();
// }

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
                placeholder="ID (4~12자 이내)"
                name="id"
                value={id}
                size="15"
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
                placeholder="PASSWORD (4~12자 이내)"
                name="password"
                value={password}
                size="15"
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
