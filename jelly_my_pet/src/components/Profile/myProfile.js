import React, { Fragment, useState, useEffect } from "react";
import "./myProfile.css";
import { withRouter } from "react-router-dom";
import Navigator from "../Navigator/Navigator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import { appendFile } from "fs";
import axios from "axios";
import { SERVER } from "config/config.json";
import Time from "react-time";

const MyProfile = ({ history }) => {
  const movePage = url => {
    history.push(url);
  };

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pet, setPet] = useState("");
  const [post1, setPost1] = useState({});
  const [post2, setPost2] = useState({});
  const [post3, setPost3] = useState({});
  const [postList, setPostList] = useState([]);
  const [time, setTime] = useState([]);
  const [title, setTitle] = useState([]);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  // const getUserPost = () => {
  //   await axios
  //     .get(`${SERVER}/member`, {
  //       headers: {
  //         "x-access-token": localStorage.getItem("x-access-token")
  //       }
  //     }).then(res => {
  //       setArticle(res.data.data.userPostData);
  //     })
  // }

  const getUserData = async () => {
    await axios
      .get(`${SERVER}/member`, {
        headers: {
          "x-access-token": localStorage.getItem("x-access-token")
        }
      })
      .then(res => {
        console.log(res);
        console.log(res.data.data.userPostData[0].title);
        setName(res.data.data.userData.userName);
        setId(res.data.data.userData.id);
        setPet(res.data.data.userData.userPetName);
        setPostList(res.data.data.userPostData);
        setPost1(res.data.data.userPostData[0]);
        setPost2(res.data.data.userPostData[1]);
        setPost3(res.data.data.userPostData[2]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <div className="Pro-Main">
        <Navigator />
        <div className="Pro-Container">
          <header className="Pro-Head">
            <div className="Pro-title">
              <h1>개인정보</h1>
              <div>이름, 비밀번호와 같이 서비스에서 사용하는 기본 정보</div>
            </div>
          </header>
          <div className="Pro-Post">
            <section>
              <article>
                <div className="Pro-Content">
                  <div className="Pro-Art">
                    <h2>프로필</h2>
                  </div>
                </div>
                <div className="Pro-Content">
                  <div className="Pro-Name">
                    <a className="Pro-MVName">
                      <div className="Pro-Left">
                        <div className="Pro-LeftContent">이름</div>
                      </div>
                      <div className="Pro-FRight">
                        <div className="Pro-RightContent">
                          <div>{name}</div>
                        </div>
                      </div>
                      <div className="Pro-EndContent">
                        <FontAwesomeIcon icon={faAngleRight} />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="Pro-Content">
                  <div className="Pro-separ" role="separator">
                    <div className="Pro-bor"></div>
                  </div>
                  <div className="Pro-Pass">
                    <a className="Pro-MVPass">
                      <div className="Pro-Left">
                        <div className="Pro-LeftContent">아이디</div>
                      </div>
                      <div className="Pro-Right">
                        <div className="Pro-RightContent">{id}</div>
                      </div>
                      <div className="Pro-EndContent">
                        <FontAwesomeIcon icon={faAngleRight} />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="Pro-Content">
                  <div className="Pro-separ" role="separator">
                    <div className="Pro-bor"></div>
                  </div>
                  <div className="Pro-Pet">
                    <a className="Pro-MVPet">
                      <div className="Pro-Left">
                        <div className="Pro-LeftContent">반려동물</div>
                      </div>
                      <div className="Pro-Right">
                        <div className="Pro-RightContent">{pet}</div>
                      </div>
                      <div className="Pro-EndContent">
                        <FontAwesomeIcon icon={faAngleRight} />
                      </div>
                    </a>
                  </div>
                </div>
              </article>
            </section>
          </div>
          <div className="Pro-UserPost">
            <section>
              <article>
                <div className="Pro-Content">
                  <div className="Pro-Art">
                    <h2>최근 작성한 글</h2>
                  </div>
                </div>

                
                <div className="Pro-Content">
                  <div className="Pro-Name">
                    <a className="Pro-MVName">
                      <div className="Pro-Left">
                        <div className="Pro-LeftContent">{post1.date}</div>
                      </div>
                      <div className="Pro-FRight">
                        <div className="Pro-RightContent">
                          <div>{post1.title}</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="Pro-Content">
                  <div className="Pro-Name">
                    <a className="Pro-MVName">
                      <div className="Pro-Left">
                        <div className="Pro-LeftContent">
                          {post2 ? <div>{post2.date}</div> : <div></div>}
                        </div>
                      </div>
                      <div className="Pro-FRight">
                        <div className="Pro-RightContent">
                          <div>
                            {post2 ? <div>{post2.title}</div> : <div></div>}
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="Pro-Content">
                  <div className="Pro-Name">
                    <a className="Pro-MVName">
                      <div className="Pro-Left">
                        <div className="Pro-LeftContent">
                          {post3 ? <div>{post3.date}</div> : <div></div>}
                        </div>
                      </div>
                      <div className="Pro-FRight">
                        <div className="Pro-RightContent">
                          <div>
                            {post3 ? <div>{post3.title}</div> : <div></div>}
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(MyProfile);
