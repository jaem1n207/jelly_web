import React, { useState, useEffect } from "react";
import "./Po_PostCard.css";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import post_img from "image/Po-Hedgehog.jpg";
import cx from "classnames";

const Po_PostCard = ({ userName, petInfo, contents, writeTime, postImg }) => {
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

  return (
    <div className="PPo-Main">
      <div className="PPo-p1">오늘의 인기글</div>
      <div className="PPo_MainPost">
        <div className="PPo-Post">
          <div className="PPo-PostTop">
            <div className="PPo-PostUserName">
              <p>진정호</p>
              <div className="PPo-PostTime">
                <p>2019-10-09 18:07:07초</p>
              </div>
            </div>
          </div>
          <div className="PPo-PostImg">
            <img className="PPo-PostImgSize" src={post_img} />
          </div>
          <div className="PPo-PostMessage">
            <p className="PPo-Posts">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="PPo-PostBottom">
            <section className="PPo-PostFunction">
              <span className="PPo-PostFunctionPosition">
                <button className="PPo-HeartBtn Po-Btn">
                  <FaRegHeart size={24} />
                </button>
              </span>
              <span className="PPo-PostFunctionPosition">
                <button className="PPo-CommentBtn Po-Btn">
                  <FaRegComment size={24} />
                </button>
              </span>
              <span className="PPo-PetName">반려동물: 나비 (여자)</span>
            </section>
            <section className="PPo-HeartCnt">
              <div className="PPo-HeartDiv">
                <div className="PPo-HeartDiv2">
                  <button type="button" className="PPo-HeartViewBtn">
                    좋아요 <span>10,000</span>개
                  </button>
                </div>
              </div>
            </section>
            <section className="PPo-WriteComment">
              <div className="PPo-WriteCommentDiv">
                <form className="PPo-WriteCommentForm" method="POST">
                  <textarea
                    className="PPo-WriteCommentArea"
                    placeholder="댓글 달기..."
                    autoComplete="off"
                    autoCorrect="off"
                    value={comment}
                    onChange={onChangeComment}
                  />
                  <button
                    className={cx(
                      { "PPo-SubmitBtnStyle-disabled": isInputCheck },
                      { "PPo-SubmitBtnStyle-enabled": !isInputCheck }
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
        <div className="PPo-Post">
          <div className="PPo-PostTop">
            <div className="PPo-PostUserName">
              <p>진정호</p>
              <div className="PPo-PostTime">
                <p>2019-10-09 18:07:07초</p>
              </div>
            </div>
          </div>
          <div className="PPo-PostImg">
            <img className="PPo-PostImgSize" src={post_img} />
          </div>
          <div className="PPo-PostMessage">
            <p className="PPo-Posts">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="PPo-PostBottom">
            <section className="PPo-PostFunction">
              <span className="PPo-PostFunctionPosition">
                <button className="PPo-HeartBtn Po-Btn">
                  <FaRegHeart size={24} />
                </button>
              </span>
              <span className="PPo-PostFunctionPosition">
                <button className="PPo-CommentBtn Po-Btn">
                  <FaRegComment size={24} />
                </button>
              </span>
              <span className="PPo-PetName">반려동물: 나비 (여자)</span>
            </section>
            <section className="PPo-HeartCnt">
              <div className="PPo-HeartDiv">
                <div className="PPo-HeartDiv2">
                  <button type="button" className="PPo-HeartViewBtn">
                    좋아요 <span>10,000</span>개
                  </button>
                </div>
              </div>
            </section>
            <section className="PPo-WriteComment">
              <div className="PPo-WriteCommentDiv">
                <form className="PPo-WriteCommentForm" method="POST">
                  <textarea
                    className="PPo-WriteCommentArea"
                    placeholder="댓글 달기..."
                    autoComplete="off"
                    autoCorrect="off"
                    value={comment}
                    onChange={onChangeComment}
                  />
                  <button
                    className={cx(
                      { "PPo-SubmitBtnStyle-disabled": isInputCheck },
                      { "PPo-SubmitBtnStyle-enabled": !isInputCheck }
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
        <div className="PPo-Post">
          <div className="PPo-PostTop">
            <div className="PPo-PostUserName">
              <p>진정호</p>
              <div className="PPo-PostTime">
                <p>2019-10-09 18:07:07초</p>
              </div>
            </div>
          </div>
          <div className="PPo-PostImg">
            <img className="PPo-PostImgSize" src={post_img} />
          </div>
          <div className="PPo-PostMessage">
            <p className="PPo-Posts">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="PPo-PostBottom">
            <section className="PPo-PostFunction">
              <span className="PPo-PostFunctionPosition">
                <button className="PPo-HeartBtn Po-Btn">
                  <FaRegHeart size={24} />
                </button>
              </span>
              <span className="PPo-PostFunctionPosition">
                <button className="PPo-CommentBtn Po-Btn">
                  <FaRegComment size={24} />
                </button>
              </span>
              <span className="PPo-PetName">반려동물: 나비 (여자)</span>
            </section>
            <section className="PPo-HeartCnt">
              <div className="PPo-HeartDiv">
                <div className="PPo-HeartDiv2">
                  <button type="button" className="PPo-HeartViewBtn">
                    좋아요 <span>10,000</span>개
                  </button>
                </div>
              </div>
            </section>
            <section className="PPo-WriteComment">
              <div className="PPo-WriteCommentDiv">
                <form className="PPo-WriteCommentForm" method="POST">
                  <textarea
                    className="PPo-WriteCommentArea"
                    placeholder="댓글 달기..."
                    autoComplete="off"
                    autoCorrect="off"
                    value={comment}
                    onChange={onChangeComment}
                  />
                  <button
                    className={cx(
                      { "PPo-SubmitBtnStyle-disabled": isInputCheck },
                      { "PPo-SubmitBtnStyle-enabled": !isInputCheck }
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
  );
};

export default Po_PostCard;
