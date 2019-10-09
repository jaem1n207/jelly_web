import React, { Fragment } from "react";
import "./Post.css";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import post_img from "image/loginBackground.jpg";
import { withRouter } from "react-router-dom";

const Post = ({ userName, petInfo, contents, writeTime, postImg }) => {
  return (
    <Fragment>
      <div className="Po-MainPost">
        <div className="Po-Post">
          <div className="Po-PostTop">
            <div className="Po-PostUserName">
              <p>이재민</p>
              <div className="Po-PostTime">
                <p>2019-10-08 18:09:05초</p>
              </div>
            </div>
          </div>
          <div className="Po-PostImg">
            <img className="Po-PostImgSize" src={post_img} />
          </div>
          <div className="Po-PostMessage">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="Po-PostBottom">
            <section className="Po-PostFunction">
              <span>
                <button className="Po-HeartBtn Po-Btn">
                  <FaRegHeart></FaRegHeart>
                </button>
              </span>
              <span>
                <button className="Po-CommentBtn Po-Btn">
                  <FaRegComment></FaRegComment>
                </button>
              </span>
            </section>
          </div>
        </div>

        <div className="Po-Post">
          <div className="Po-PostTop">
            <div className="Po-PostUserName">
              <p>이재민</p>
              <div className="Po-PostTime">
                <p>2019-10-08 18:09:05초</p>
              </div>
            </div>
          </div>
          <div className="Po-PostImg">
            <img className="Po-PostImgSize" src={post_img} />
          </div>
          <div className="Po-PostMessage">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="Po-PostBottom">
            <section className="Po-PostFunction">
              <span>
                <button className="Po-HeartBtn Po-Btn">
                  <FaRegHeart></FaRegHeart>
                </button>
              </span>
              <span>
                <button className="Po-CommentBtn Po-Btn">
                  <FaRegComment></FaRegComment>
                </button>
              </span>
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Post);
