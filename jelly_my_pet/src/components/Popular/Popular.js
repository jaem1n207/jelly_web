import React, { Fragment } from 'react';
import './Popular.css';
import logo from './../../image/icon_teamLogo.png';
import { IoIosSearch } from 'react-icons/io';
import movePage from '../MainPage/MainPage';
import PostCard from '../PostCard/PostCard';
const Popular = () => {
    return (
        <Fragment>
            <div className="po-main">
                <div className="po-header">
                    <nav>
                        <div className="po-left-item">
                            <div className="po-i_logo" onClick={() => { movePage('/') }}>
                                <img src={logo} alt="로고" height="30px;" width="30px;"/>
                                <span className="po-project-name">My Pet</span>
                                <span className="po-team-name">Jelly</span>
                            </div>
                        </div>
                        <div className="po-rightArea">
                            <div className="po-search_box">
                                <input
                                    className="po-search-txt"
                                    type="text"
                                    autocapitalize="none"
                                    placeholder="Search..."/>
                                <IoIosSearch className="po-search-btn"/>
                            </div>
                            <div className="po-right-item">
                                <ul>
                                    <li className="po-p1" onClick={() => { movePage('/login') }}>
                                        로그아웃
                                    </li>
                                    <li className="po-p1" onClick={() => { movePage('/recommend') }}>
                                        추천 글 및 영상
                                    </li>
                                    <li className="po-p1" onClick={() => { movePage('/teamintro') }}>
                                        팀원소개
                                    </li>
                                    <li className="po-p1" onClick={() => { movePage('/popular') }}>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>  
                <div className="po-contents">
                    <div className="po-cards">
                        <PostCard/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Popular;