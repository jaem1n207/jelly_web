import React, { Fragment } from "react";
import "./Po_PostCard.css";
import cardImage from "image/loginBackground.jpg";

const Po_PostCard = ({ userName, petInfo, contents, writeTime, postImg }) => {
  return (
    <div className="Po-Main">
      <div className="Po-p1">
          오늘의 인기글
      </div>
      <div className="Po_Cardlist">
        <div className="Po_main-Card">
          <img src={cardImage} alt="Po_cardImage" /> 
          <div className="Po_post-contents">
            <div className="Po_post-contents-header">
              <span className="Po_post-contetns-title">진정호</span>
              <span className="Po_post-contents-petInfo">
                    반려동물: 나비 (🐈 여자)
              </span>
            </div>
            <div className="Po_post-contents-main">오늘 저희 나비는...</div>
            <span className="Po_post-contents-time">2019.09.19 8시 26분</span>
          </div>
        </div>
        <div className="Po_main-Card">
          <img src={cardImage} alt="cardImage" />

          <div className="Po_post-contents">
            <div className="Po_post-contents-header">
              <span className="Po_post-contetns-title">진정호</span>
              <span className="Po_post-contents-petInfo">
              반려동물: 나비 (🐈 여자)
              </span>
            </div>
            <div className="Po_post-contents-main">오늘 저희 나비는...</div>
            <span className="Po_post-contents-time">2019.09.19 8시 26분</span>
          </div>
        </div>
        <div className="Po_main-Card">
          <img src={cardImage} alt="cardImage" />

          <div className="Po_post-contents">
            <div className="Po_post-contents-header">
              <span className="Po_post-contetns-title">진정호</span>
              <span className="Po_post-contents-petInfo">
              반려동물: 나비 (🐈 여자)
              </span>
            </div>
            <div className="Po_post-contents-main">오늘 저희 나비는...</div>
            <span className="Po_post-contents-time">2019.09.19 8시 26분</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Po_PostCard;
