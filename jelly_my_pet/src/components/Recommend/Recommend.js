import React, { Fragment } from "react";
import Navigator from "../Navigator/Navigator";
import "./Recommend.css";
import { withRouter } from "react-router-dom";

const Recommend = () => {
  return (
    <Fragment>
      <Navigator />
    </Fragment>
  );
};

export default withRouter(Recommend);
