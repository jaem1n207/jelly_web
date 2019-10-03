import React, { Fragment } from "react";
import "./MainPage.css";
import WritePost from "../WritePost/WritePost";
import PostCard from "../PostCard/PostCard";
import Navigator from "../Navigator/Navigator";
import Post from "../Post/Post";
import { withRouter } from "react-router-dom";

const MainPage = () => {
  return (
    <Fragment>
      <div className="main">
        <Navigator />
        <Post />
      </div>
    </Fragment>

    //  <div className="main">
    //             <Navigator />
    //             <div className="contents">
    //                 <div className="main-contents">
    //                     <div className="main-contents-cardList">
    //                         <PostCard/>
    //                     </div>
    //                 </div>
    //                 <WritePost/>
    //             </div>
    //         </div>
  );
};

export default withRouter(MainPage);
