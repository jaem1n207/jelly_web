import React from "react";
import Navigator from "../Navigator/Navigator";
import "./Recommend.css";
import { withRouter } from "react-router-dom";
// import Youtube from './YoutubeApi/Youtube';
const Recommend = () => {
  return (
    <>
      <div className="re-main">
        <div className="re-header">
          <Navigator />
        </div>
        <div className="re-contents">
          <div className="re-topcontent">
            <div className="re-toptxt">
              추천 간식
              
            </div>
            <div className="re-snack">
              
            </div>
          </div>
          <div className="re-botcontent">
            <div className="re-bottxt">
              추천 유튜브
            </div>
            <div className="re-youtube">
              {/* <Youtube /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Recommend);
