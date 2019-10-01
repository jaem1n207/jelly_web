import React, { Fragment } from 'react';
import logo from './.././../image/icon_teamLogo.png';
import './Recommend.css';
import { IoIosSearch } from 'react-icons/io';
import PostCard from '../PostCard/PostCard';

const Recommend = () => {
    return (
        <Fragment>
            <div className="re-main">
                <div className="re-header">
                    <nav>
                        <div className="re-left-item">
                            <div className="re-i_logo">
                                <img src={logo} alt="로고" height="30px;" width="30px;" />
                                <span className="re-project-name">My Pet</span>
                                <span className="re-team-name">Jelly</span>
                            </div>
                        </div>
                        <div className="re-rightArea">
                            <div className="re-search_box">
                                <input className="re-search-txt" type="text" autoCapitalize="none" placeholder="Search..." />
                                <IoIosSearch className="re-search-btn" />
                            </div>
                            <div className="re-right-item">
                                <ul>
                                    <li className="re-p1">
                                        <div>로그아웃</div>
                                    </li>
                                    <li className="re-p1">
                                        <div>추천 글 및 영상</div>
                                    </li>
                                    <li className="re-p1">
                                        <div>팀원소개</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>  
                <div className="re-contents">
                </div>
            </div>
        </Fragment>
    );
};

export default Recommend;