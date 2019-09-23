import React, { Fragment } from 'react';
import logo from 'image/icon_teamLogo.png';
import './MainPage.css';
import { IoIosSearch } from 'react-icons/io';
import WritePost from '../WritePost/WritePost';
import PostCard from '../PostCard/PostCard';

const MainPage = () => {
    return (
        <Fragment>
            <div className="main">
                <div className="header">
                    <nav>
                        <div className="left-item">
                            <div className="i_logo">
                                <img src={logo} alt="로고" height="30px;" width="30px;" />
                                <span className="project-name">My Pet</span>
                                <span className="team-name">Jelly</span>
                            </div>
                        </div>
                        <div className="rightArea">
                            <div className="search_box">
                                <input className="search-txt" type="text" autocapitalize="none" placeholder="Search..." />
                                <IoIosSearch className="search-btn" />
                            </div>
                            <div className="right-item">
                                <ul>
                                    <li className="p1">
                                        <div>로그아웃</div>
                                    </li>
                                    <li className="p1">
                                        <div>추천 글 및 영상</div>
                                    </li>
                                    <li className="p1">
                                        <div>팀원소개</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="contents">
                    <div className="main-contents">
                        <div className="main-contents-cardList">
                            <PostCard />
                        </div>
                    </div>
                    <WritePost />
                </div>
            </div>
        </Fragment>
    );
};

export default MainPage;
