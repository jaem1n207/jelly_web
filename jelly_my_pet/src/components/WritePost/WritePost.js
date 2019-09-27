import React, {Fragment} from 'react';
import './WritePost.css';
import {IoMdPhotos} from "react-icons/io"

const WritePost = () => {
    return (
        <Fragment>
            <div className="write-post">
                <span className="write-post-title">글 쓰기</span>
                <textarea className="write-post-contents"></textarea>
                <div className="write-post-inputs">
                    <div className="fileInput">
                        <input
                            className="postImage"
                            type="file"
                            id="Upload"
                            name="postImage"
                            accept="image/*"/>
                        <label className="custom-file-input" for="Upload">
                            <IoMdPhotos/>
                            사진 선택
                        </label>
                    </div>
                    <input className="submitPost" type="button" value="작성"/>
                </div>
            </div>
        </Fragment>
    );
};

export default WritePost;