import React, { Component } from "react";
import Navigator from "../Navigator/Navigator";
import "./Recommend.css";
import { withRouter } from "react-router-dom";
import Youtube from './YoutubeApi/Youtube';
import Snack from './Snack/Snack';

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render(){
    return (
      <>
        <div className="re-main">
          <div className="re-header">
            <Navigator />
          </div>
          <div className="re-contents">
            <div className="re-Lcontent">
              <div className="re-txts">
                <input type="button" className="re-txt" onClick={this.handleClick}  value="추천 간식" />
                <input type="button" className="re-txt" onClick={this.handleClick}  value="추천 동영상" />
              </div>
            </div>
            <div className="re-Rcontent">
            {
               this.state.isToggleOn == true
                ? (<div className="re-snack">
                  <Snack /> 
                </div>)
                : (<div className="re-youtube">
                  <Youtube />
                </div>)
            }
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default withRouter(Recommend);
