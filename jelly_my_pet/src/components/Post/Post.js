import React, { Fragment, useState, useEffect } from "react";
import "./Post.css";
import {
  FaRegHeart,
  FaRegComment,
  FaImage,
  FaUser,
  FaPencilAlt
} from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import post_img1 from "image/Po-Cat.jpg";
import post_img2 from "image/Po-Hedgehog.jpg";
import { withRouter } from "react-router-dom";
import cx from "classnames";
import axios from "axios";
import { SERVER } from "config/config.json";
import Time from "react-time";

const Post = ({ userName, petInfo, contents, writeTime, postImg, history }) => {
  const movePage = url => {
    history.push(url);
  };

  const [comment, setComment] = useState("");
  const [WritePost, setWritePost] = useState("");
  const [isInputCheck, setIsInputCheck] = useState(true);
  const [article, setArticle] = useState([]);

  const onChangeComment = event => {
    setComment(event.target.value);
  };

  const onChangeWritePost = event => {
    setWritePost(event.target.value);
  };

  const getPost = () => {
    axios.get(`${SERVER}/notice`).then(res => {
      setArticle(res.data.data.post);
    });
  };

  useEffect(() => {
    if (comment.length > 0) {
      setIsInputCheck(false);
    } else {
      setIsInputCheck(true);
    }
  }, [setIsInputCheck, comment]);

  useEffect(() => {
    if (WritePost.length > 0) {
      setIsInputCheck(false);
    } else {
      setIsInputCheck(true);
    }
  }, [setIsInputCheck, WritePost]);

  useEffect(() => {
    getPost();
  }, []);

  const [count, setCount] = useState(0);

  function getFocus() {
    document.getElementById("comment").focus();
  }

  function getFocusWrite() {
    document.getElementById("writePost").focus();
  }

  return (
    <Fragment>
      <div className="Po-Main">
        <div className="Po-MainPost">
          <div className="Po-ProfilePos">
            <div className="Po-ProfileBox">
              <div className="Po-ProfileName">
                <span>이름: {userName}이재민</span>
              </div>
              <ul className="Po-Ul">
                <li
                  onClick={() => {
                    movePage("/myProfile");
                  }}
                >
                  <span className="Po-ProfileIconPos">
                    <FaUser size={22}></FaUser>
                  </span>
                  <span>내 프로필 보기</span>
                </li>
                <li onClick={() => getFocusWrite()}>
                  <span className="Po-ProfileIconPos">
                    <FaPencilAlt size={24}></FaPencilAlt>
                  </span>
                  <span>글 작성</span>
                </li>
                <li
                  onClick={() => {
                    movePage("/login");
                  }}
                >
                  <span className="Po-ProfileIconPos">
                    <IoIosLogOut size={24}></IoIosLogOut>
                  </span>
                  <span>로그아웃</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="Po-Writing">
            <div className="Po-WritingInfo">
              <span>게시물 만들기</span>
            </div>
            <div className="Po-TextArea">
              <textarea
                id="writePost"
                className="Po-WritePostArea"
                placeholder="무슨 생각을 하고 계신가요?"
                autoComplete="off"
                autoCorrect="off"
                value={WritePost}
                onChange={onChangeWritePost}
              ></textarea>
            </div>
            <div className="Po-WritingAdd">
              <ul className="Po-ulAdd">
                <li className="Po-liAdd h3">
                  <label className="Po-FileBtn">
                    <FaImage className="FileBtnImg" size={20} />
                    <input type="file" id="Po-file"></input>
                    <span className="Po-FileText">사진/동영상</span>
                  </label>
                </li>
                <li className="Po-liAdd h7">
                  <button
                    className={cx(
                      { "Po-WriteBtnStyle-disabled": isInputCheck },
                      { "Po-WriteBtnStyle-enabled": !isInputCheck }
                    )}
                    disabled
                    type="submit"
                  >
                    게시하기
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {article.map((item, key) => {
            return (
              <div className="Po-Post">
                <div className="Po-PostTop">
                  <div className="Po-PostUserName">
                    <p>제목 : {item.title}</p>
                    <p>{item.userName}</p>
                    <div className="Po-PostTime">
                      <p>
                        <Time value={item.date} format="YYYY/MM/DD hh:mm:ss" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Po-PostImg">
                  <img className="Po-PostImgSize" src={post_img1} />
                </div>
                <div className="Po-PostMessage">
                  <p className="Po-Posts">{item.description}</p>
                </div>
                <div className="Po-PostBottom">
                  <section className="Po-PostFunction Po-Section">
                    <span className="Po-PostFunctionPosition">
                      <button
                        className="Po-HeartBtn Po-Btn"
                        onClick={() => setCount(count + 1)}
                      >
                        <FaRegHeart size={24}></FaRegHeart>
                      </button>
                    </span>
                    <span className="Po-PostFunctionPosition">
                      <button
                        className="Po-CommentBtn Po-Btn"
                        onClick={() => getFocus()}
                      >
                        <FaRegComment size={24}></FaRegComment>
                      </button>
                    </span>
                    <span className="Po-PetName">반려동물: {item.petName}</span>
                  </section>
                  <section className="Po-HeartCnt Po-Section">
                    <div className="Po-HeartDiv">
                      <div className="Po-HeartDiv2">
                        <button className="Po-HeartViewBtn">
                          좋아요 <span>{count}</span>개
                        </button>
                      </div>
                    </div>
                  </section>
                  <section className="Po-WriteComment Po-Section">
                    <div className="Po-WriteCommentDiv">
                      <form className="Po-WriteCommentForm" method="POST">
                        <textarea
                          id="comment"
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
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Post);
