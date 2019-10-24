import React, { Fragment, useState } from "react";
import "./myProfile.css";
import { withRouter } from "react-router-dom";
import Navigator from "../Navigator/Navigator";
import { FaRegUserCircle } from "react-icons/fa";

const myProfile = () => {
  return (
    <Fragment>
      <div className="Pro-Main">
        <Navigator />
        <div className="Pro-Container">
          <header className="Pro-Head">
            <div className="Pro-Picture">
              <FaRegUserCircle size={150}></FaRegUserCircle>
            </div>
            <section className="Pro-Info"></section>
          </header>
          <div className="Pro-Post"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(myProfile);
