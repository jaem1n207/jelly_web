import React, { Fragment } from "react";
import "./Navigator.css";
import logo from "image/icon_teamLogo.png";
import { IoIosSearch } from "react-icons/io";
import { withRouter } from "react-router-dom";

const Navigator = ({ history }) => {
  const movePage = url => {
    history.push(url);
  };
  return (
    <Fragment>
      <div className="header">
        <nav>
          <div className="left-item">
            <div className="i_logo" onClick={() => {movePage("/");}}>
              <img src={logo} alt="로고" height="30px;" width="30px;" />
              <span className="project-name">My Pet</span>
              <span className="team-name">Jelly</span>
            </div>
          </div>
          <div className="rightArea">
            <div className="search_box">
              <input
                className="search-txt"
                type="text"
                autocapitalize="none"
                placeholder="Search..."
              />
              <IoIosSearch className="search-btn" />
            </div>
            <div className="right-item">
              <ul>
                <li
                  className="p1"
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  로그아웃
                </li>
                <li
                  className="p1"
                  onClick={() => {
                    movePage("/recommend");
                  }}
                >
                  추천 글 및 영상
                </li>
                <li
                  className="p1"
                  onClick={() => {
                    movePage("/teamintro");
                  }}
                >
                  팀원소개
                </li>

                <li
                  className="p1"
                  onClick={() => {
                    movePage("/popular");
                  }}
                >
                  인기 글/사진
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default withRouter(Navigator);
