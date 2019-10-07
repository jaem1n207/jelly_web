import React, { Fragment } from "react";
import logo from "./.././../image/icon_teamLogo.png";
import "./Recommend.css";
import { IoIosSearch } from "react-icons/io";
import PostCard from "../PostCard/PostCard";
import { withRouter } from "react-router-dom";

const Recommend = ({ history }) => {
  const movePage = url => {
    history.push(url);
  };
  return (
    <Fragment>
      <div className="re-main">
        <div className="re-header">
          <nav>
            <div className="re-left-item">
              <div className="re-i_logo">
                <img src={logo} alt="로고" height="30px;" width="30px;" />
                <span
                  className="re-project-name"
                  onClick={() => {
                    movePage("/");
                  }}
                >
                  My Pet
                </span>
                <span className="re-team-name">Jelly</span>
              </div>
            </div>
            <div className="re-rightArea">
              <div className="re-search_box">
                <input
                  className="re-search-txt"
                  type="text"
                  autoCapitalize="none"
                  placeholder="Search..."
                />
                <IoIosSearch className="re-search-btn" />
              </div>
              <div className="re-right-item">
                <ul>
                  <li
                    className="re-p1"
                    onClick={() => {
                      movePage("/login");
                    }}
                  >
                    로그아웃
                  </li>
                  <li
                    className="re-p1"
                    onClick={() => {
                      movePage("/recommend");
                    }}
                  >
                    추천 글 및 영상
                  </li>
                  <li
                    className="re-p1"
                    onClick={() => {
                      movePage("/teamintro");
                    }}
                  >
                    팀원소개
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="re-contents"></div>
      </div>
    </Fragment>
  );
};

export default withRouter(Recommend);
