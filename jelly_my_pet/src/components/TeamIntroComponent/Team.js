import React, { Fragment } from "react";
import "./Team.css";
import { withRouter } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Team = ({ history }) => {
  const movePage = url => {
    history.push(url);
  };
  return (
    <Fragment>
      <div className="teamIntro-main">
        <div className="box">
          <FaUserAlt className="box-img" />
          <h1>오해성</h1>
          <h2>서버</h2>
          <p>서버의 모든 부분 담당</p>
        </div>
        <div className="box">
          <FaUserAlt className="box-img" />
          <h1>이재민</h1>
          <h2>웹 디자인</h2>
          <p>로그인,메인,팀 페이지</p>
        </div>
        <div className="box">
          <FaUserAlt className="box-img" />
          <h1>최주영</h1>
          <h2>디자인기획</h2>
          <p>페이지의 전반적인 디자인 기획</p>
        </div>
        <div className="box">
          <FaUserAlt className="box-img" />
          <h1>진정호</h1>
          <h2>웹</h2>
          <p>인기 글/사진 페이지</p>
        </div>
        <div className="box">
          <FaUserAlt className="box-img" />
          <h1>황대성</h1>
          <h2>웹</h2>
          <p>추천 글 및 영상 페이지</p>
        </div>
        <div
          className="goMain"
          onClick={() => {
            movePage("/");
          }}
        >
          메인으로 가기
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Team);
