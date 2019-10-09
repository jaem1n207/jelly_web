import React, { Fragment } from "react";
import "./Post.css";
import { withRouter } from "react-router-dom";

const Post = ({ userName, petInfo, contents, writeTime, postImg }) => {
  return (
    <Fragment>
      <div className="Po-MainPost">
        <div className="Po-Post">
          <div className="Po-PostTop">
            <div className="Po-PostUserName">
              <p>우힣힣힣힣</p>
              <div className="Po-PostTime">
                <p>2019-10-08 18:09:05초</p>
              </div>
            </div>
          </div>
          <div className="Po-PostMessage">
            <p>하하핳</p>
          </div>
          <div className="Po-PostImg">
            <img src="C:\git\jelly_web\jelly_my_pet\src\image\아이린.jpg" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Post);
