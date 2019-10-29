import React, { Fragment } from "react";
import "./PostCard.css";
import cardImage from "image/loginBackground.jpg";

const PostCard = ({ userName, petInfo, contents, writeTime, postImg }) => {
  return (
    <Fragment>
      <div className="main-Card">
        <img src={cardImage} alt="cardImage" />

        <div className="post-contents">
          <div className="post-contents-header">
            <span className="post-contetns-title">이재민</span>
            <span className="post-contents-petInfo">
              반려동물: 나비 (🐈 여자)
            </span>
          </div>
          <div className="post-contents-main">오늘 저희 나비는...</div>
          <span className="post-contents-time">2019.09.19 8시 26분</span>
        </div>
      </div>

      <div className="main-Card">
        <img src={cardImage} alt="cardImage" />

        <div className="post-contents">
          <div className="post-contents-header">
            <span className="post-contetns-title">이재민</span>
            <span className="post-contents-petInfo">
              반려동물: 나비 (🐈 여자)
            </span>
          </div>
          <div className="post-contents-main">오늘 저희 나비는...</div>
          <span className="post-contents-time">2019.09.19 8시 26분</span>
        </div>
      </div>

      <div className="main-Card">
        <img src={cardImage} alt="cardImage" />

        <div className="post-contents">
          <div className="post-contents-header">
            <span className="post-contetns-title">이재민</span>
            <span className="post-contents-petInfo">
              반려동물: 나비 (🐈 여자)
            </span>
          </div>
          <div className="post-contents-main">오늘 저희 나비는...</div>
          <span className="post-contents-time">2019.09.19 8시 26분</span>
        </div>
      </div>
    </Fragment>
  );
};

export default PostCard;