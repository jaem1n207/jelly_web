import React, { Component } from "react";
import Navigator from "../Navigator/Navigator";
import "./Recommend.css";
import { withRouter } from "react-router-dom";
import Youtube from "./YoutubeApi/Youtube";
import Snack from "./Snack/Snack";
import "./button.css";

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: null };

    this.handleYoutubeClick = this.handleYoutubeClick.bind(this);
    this.handleSnackClick = this.handleSnackClick.bind(this);
  }
  handleYoutubeClick() {
    this.setState(() => ({
      isToggleOn: false
    }));
  }
  handleSnackClick() {
    this.setState(() => ({
      isToggleOn: true
    }));
  }

  render() {
    return (
      <>
        <div className="re-main">
          <div className="re-header">
            <Navigator />
          </div>
          <div className="re-contents">
            <div className="re-Lcontent">
              <div className="re-txts">
                <button
                  class="bttn-stretch bttn-md bttn-primary"
                  onClick={this.handleSnackClick}
                >
                  {" "}
                  추천간식{" "}
                </button>
                <button
                  class="bttn-stretch bttn-md bttn-primary"
                  onClick={this.handleYoutubeClick}
                >
                  {" "}
                  추천동영상{" "}
                </button>
              </div>
            </div>
            <div className="re-Rcontent">
              {this.state.isToggleOn == true ? (
                <div className="re-snack">
                  <Snack />
                </div>
              ) : (
                <div className="re-youtube">
                  <Youtube />
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Recommend);
