import React, { Fragment, useState, useEffect } from "react";
import "./Post.css";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import post_img1 from "image/Po-Cat.jpg";
import post_img2 from "image/Po-Hedgehog.jpg";
import { withRouter } from "react-router-dom";
import cx from "classnames";

const Post = ({ userName, petInfo, contents, writeTime, postImg }) => {
  const [comment, setComment] = useState("");
  const [isInputCheck, setIsInputCheck] = useState(true);
  const onChangeComment = event => {
    setComment(event.target.value);
  };
  useEffect(() => {
    if (comment.length > 0) {
      setIsInputCheck(false);
    } else {
      setIsInputCheck(true);
    }
  }, [setIsInputCheck, comment]);

  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <div className="Po-Main">
        <div className="Po-MainPost">
          <div className="Po-Post">
            <div className="Po-PostTop">
              <div className="Po-PostUserName">
                <p>이재민</p>
                <div className="Po-PostTime">
                  <p>2019-10-09 18:07:07초</p>
                </div>
              </div>
            </div>
            <div className="Po-PostImg">
              <img className="Po-PostImgSize" src={post_img1} />
            </div>
            <div className="Po-PostMessage">
              <p className="Po-Posts">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="Po-PostBottom">
              <section className="Po-PostFunction">
                <span className="Po-PostFunctionPosition">
                  <button
                    className="Po-HeartBtn Po-Btn"
                    onClick={() => setCount(count + 1)}
                  >
                    <FaRegHeart size={24}></FaRegHeart>
                  </button>
                </span>
                <span className="Po-PostFunctionPosition">
                  <button className="Po-CommentBtn Po-Btn">
                    <FaRegComment size={24}></FaRegComment>
                  </button>
                </span>
                <span className="Po-PetName">반려동물: 나비 (여자)</span>
              </section>
              <section className="Po-HeartCnt">
                <div className="Po-HeartDiv">
                  <div className="Po-HeartDiv2">
                    <button className="Po-HeartViewBtn">
                      좋아요 <span>{count}</span>개
                    </button>
                  </div>
                </div>
              </section>
              <section className="Po-WriteComment">
                <div className="Po-WriteCommentDiv">
                  <form className="Po-WriteCommentForm" method="POST">
                    <textarea
                      className="Po-WriteCommentArea"
                      placeholder="댓글 달기..."
                      autoComplete="off"
                      autoCorrect="off"
                      value={comment}
                      onChange={onChangeComment}
                    ></textarea>
                    <button
                      className={cx(
                        { "Po-SubmitBtnStyle-disabled": isInputCheck },
                        { "Po-SubmitBtnStyle-enabled": !isInputCheck }
                      )}
                      disabled
                      type="submit"
                    >
                      게시
                    </button>
                  </form>
                </div>
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
              <img className="Po-PostImgSize" src={post_img2} />
            </div>
            <div className="Po-PostMessage">
              <p className="Po-Posts">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="Po-PostBottom">
              <section className="Po-PostFunction">
                <span className="Po-PostFunctionPosition">
                  <button className="Po-HeartBtn Po-Btn">
                    <FaRegHeart size={24}></FaRegHeart>
                  </button>
                </span>
                <span className="Po-PostFunctionPosition">
                  <button className="Po-CommentBtn Po-Btn">
                    <FaRegComment size={24}></FaRegComment>
                  </button>
                </span>
                <span className="Po-PetName">반려동물: 나비 (여자)</span>
              </section>
              <section className="Po-HeartCnt">
                <div className="Po-HeartDiv">
                  <div className="Po-HeartDiv2">
                    <button type="button" className="Po-HeartViewBtn">
                      좋아요 <span>10,000</span>개
                    </button>
                  </div>
                </div>
              </section>
              <section className="Po-WriteComment">
                <div className="Po-WriteCommentDiv">
                  <form className="Po-WriteCommentForm" method="POST">
                    <textarea
                      className="Po-WriteCommentArea"
                      placeholder="댓글 달기..."
                      autoComplete="off"
                      autoCorrect="off"
                      value={comment}
                      onChange={onChangeComment}
                    ></textarea>
                    <button
                      className={cx(
                        { "Po-SubmitBtnStyle-disabled": isInputCheck },
                        { "Po-SubmitBtnStyle-enabled": !isInputCheck }
                      )}
                      disabled
                      type="submit"
                    >
                      게시
                    </button>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Post);
