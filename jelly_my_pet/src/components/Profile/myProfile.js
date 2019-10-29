import React, { Fragment, useState } from "react";
import "./myProfile.css";
import { withRouter } from "react-router-dom";
import Navigator from "../Navigator/Navigator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


const myProfile = ({ history }) => {
  const movePage = url => {
    history.push(url);
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
                    <a className="Pro-MVName"onClick={() => {
                    movePage("/myProfile");
                    }}>
                      <div className="Pro-Left">
                        <div className="Pro-LeftContent">
                          이름
                        </div>
                      </div>
                      <div className="Pro-FRight">
                        <div className="Pro-RightContent">
                          <div>
                            진정호
                          </div>
                        </div>
                      </div>
                      <div className="Pro-EndContent">
                        <FontAwesomeIcon icon={faAngleRight}/>
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
                        <div className="Pro-LeftContent">
                          비밀번호
                        </div>
                      </div>
                      <div className="Pro-Right">
                        <div className="Pro-RightContent">
                          *******
                        </div>
                      </div>
                      <div className="Pro-EndContent">
                        <FontAwesomeIcon icon={faAngleRight}/>
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
                        <div className="Pro-LeftContent">
                          반려동물
                        </div>
                      </div>
                      <div className="Pro-Right">
                        <div className="Pro-RightContent">
                          냥냥이
                        </div>
                      </div>
                      <div className="Pro-EndContent">
                        <FontAwesomeIcon icon={faAngleRight}/>
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

export default withRouter(myProfile);
