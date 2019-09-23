import React, { Fragment } from 'react';
import './Team.css';
import member_img from 'image/아이린.jpg';

const Team = () => {
    return (
        <Fragment>
            <div className="main">
                <div className="box">
                    <img src={ member_img } alt="멤버 이미지" className="box-img" />
                    <h1>오해성</h1>
                    <h2>서버</h2>
                    <p>서버의 모든 부분 담당</p>
                </div>
                <div className="box">
                        <img src={member_img} alt="멤버 이미지" className="box-img" />
                    <h1>이재민</h1>
                    <h2>웹 디자인</h2>
                    <p>로그인,메인,팀 페이지</p>
                </div>
                <div className="box">
                    <img src={ member_img } alt="멤버 이미지" className="box-img" />
                    <h1>최주영</h1>
                    <h2>겜충</h2>
                    <p>겜충</p>
                </div>
                <div className="box">
                    <img src={ member_img } alt="멤버 이미지" className="box-img" />
                    <h1>진정호</h1>
                    <h2>웹</h2>
                    <p>추천 및 동영상 페이지, 검색 기능</p>
                </div>
                <div className="box">
                    <img src={ member_img } alt="멤버 이미지" className="box-img" />
                    <h1>황대성</h1>
                    <h2>웹</h2>
                    <p>추천 및 동영상 페이지, 검색 기능</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Team;