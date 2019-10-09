import React from "react";
import "./Po-Picture.css";

const dummyImage = {
    User : {
        id: 2,
        nickname: "Jeongho"
    },
    url: "https://source.unsplash.com/random"
};

const Picture = () => {
    return (
      <div className="pi-main">
        <div className="pi-p1">
          오늘의 인기사진
        </div>
        <div className="pi-Picturelist" id="pi-Pic">
          <div className="main-picture" onclick="">
            <img className="picture-img" src={dummyImage.url} alt="poularPicture" />
            <span className="picture-nickname">
              {dummyImage.User.nickname}
            </span>
          </div>
          <div className="main-picture">
            <img className="picture-img" src={dummyImage.url} alt="poularPicture" />
            <span className="picture-nickname">
              {dummyImage.User.nickname}
            </span>
          </div>
          <div className="main-picture">
            <img className="picture-img" src={dummyImage.url} alt="poularPicture" />
            <span className="picture-nickname">
              {dummyImage.User.nickname}
            </span>
          </div>
          <div className="main-picture">
            <img className="picture-img" src={dummyImage.url} alt="poularPicture" />
            <span className="picture-nickname">
              {dummyImage.User.nickname}
            </span>
          </div>
          <div className="main-picture">
            <img className="picture-img" src={dummyImage.url} alt="poularPicture" />
            <span className="picture-nickname">
              {dummyImage.User.nickname}
            </span>
          </div>
          <div className="main-picture">
            <img className="picture-img" src={dummyImage.url} alt="poularPicture" />
            <span className="picture-nickname">
              {dummyImage.User.nickname}
            </span>
          </div>
        </div>
      </div>
    )
}

export default Picture;