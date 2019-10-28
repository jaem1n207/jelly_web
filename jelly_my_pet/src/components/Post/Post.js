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

const Post = ({ history }) => {
  const movePage = url => {
    history.push(url);
  };

  const [comment, setComment] = useState("");
  const [WritePostTitle, setWritePostTitle] = useState("");
  const [WritePostDescription, setWritePostDescription] = useState("");
  const [isInputCheck, setIsInputCheck] = useState(true);
  const [article, setArticle] = useState([]);
  const [WritePostFile, setWritePostFile] = useState("");

  const onChangeComment = event => {
    setComment(event.target.value);
  };

  const onChangeWritePostTitle = event => {
    setWritePostTitle(event.target.value);
  };
  const onChangeWritePostDescription = event => {
    setWritePostDescription(event.target.value);
  };

  const getPost = () => {
    axios.get(`${SERVER}/notice`).then(res => {
      setArticle(res.data.data.post);
    });
  };

  const WritePost = () => {
    let formdata = new FormData();
    formdata.append("title", WritePostTitle);
    formdata.append("description", WritePostDescription);
    // formdata.append("file", );
    axios
      .post(`${SERVER}/notice`, formdata, {
        headers: {
          "x-access-token": localStorage.getItem("x-access-token")
        }
      })
      .then(res => {
        // alert(res.status);
        alert("게시물 작성 성공!");
      });
  };

  const modDescription = () => {
    let getText = prompt("수정할 내용을 입력하세요");
    document.identifyId.innerHTML = WritePostDescription;
  };

  const handleUpdate = () => {
    if (WritePostDescription != null) {
      let modButton = document.createElement("button");
      modButton.style.visibility = "hidden";
      // modButton.className = Po_Btn;
      modButton.innerHTML = "수정";
      modButton.onclick = modDescription();
    }
  };

  useEffect(() => {
    if (comment.length > 0) {
      setIsInputCheck(false);
    } else {
      setIsInputCheck(true);
    }
  }, [setIsInputCheck, comment]);

  useEffect(() => {
    if (WritePostTitle.length > 0) {
      setIsInputCheck(false);
    } else {
      setIsInputCheck(true);
    }
  }, [setIsInputCheck, WritePostTitle]);

  useEffect(() => {
    getPost();
  }, []);

  const [count, setCount] = useState(0);

  function getFocus() {
    document.getElementById("comment").focus();
  }

  function getFocusWrite() {
    document.getElementById("writePostTitle").focus();
  }

  return (
    <Fragment>
      <div className="Po-Main">
        <div className="Po-MainPost">
          <div className="Po-ProfilePos">
            <div className="Po-ProfileBox">
              <div className="Po-ProfileName">
                <span>이름: 오해성</span>
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
                id="writePostTitle"
                className="Po-WritePostTitleArea"
                placeholder="게시물의 제목을 입력해주세요"
                autoComplete="off"
                autoCorrect="off"
                value={WritePostTitle}
                onChange={onChangeWritePostTitle}
              ></textarea>
            </div>
            <div className="Po-TextArea">
              <textarea
                id="writePostDescription"
                className="Po-WritePostArea"
                placeholder="게시물의 내용을 입력해주세요..."
                autoComplete="off"
                autoCorrect="off"
                value={WritePostDescription}
                onChange={onChangeWritePostDescription}
              ></textarea>
            </div>
            <div className="Po-WritingAdd">
              <ul className="Po-ulAdd">
                <li className="Po-liAdd h3">
                  <label className="Po-FileBtn">
                    <FaImage className="FileBtnImg" size={20} />
                    <input
                      type="file"
                      id="Po-file"
                      value={WritePostFile}
                    ></input>
                    <span className="Po-FileText">사진/동영상</span>
                  </label>
                </li>
                <li className="Po-liAdd h7" onClick={WritePost}>
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
                    <div className="Po-PostTime">
                      <p>작성자: {item.userName}</p>
                      <div className="Po-PostDatePos">
                        <p>
                          <Time
                            value={item.date}
                            format="YYYY/MM/DD hh:mm:ss"
                          />
                        </p>
                      </div>
                    </div>
                    <p className="Po-PostTitle">제목 : {item.title}</p>
                  </div>
                </div>
                <div className="Po-PostMessage">
                  <p className="Po-Posts" onMouseOver={handleUpdate}>
                    {item.description}
                  </p>
                </div>
                <div className="Po-PostImg">
                  <img className="Po-PostImgSize" src={post_img1} />
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
                      <div className="Po-WriteCommentForm">
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
                        <button className="Po-AllComBtn">댓글 모두보기</button>
                      </div>
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
