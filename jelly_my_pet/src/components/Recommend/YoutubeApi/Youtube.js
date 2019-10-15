import React, {Component} from 'react';
import axios from "axios";
import './Youtube.css';
import {SERVER} from '../../../config/config.json';

class Youtube extends Component {

  state = {
    url : [],
    title : [],
  };
  
  async getYoutubeinfo () {
    try {
      const info = await axios.get(`${SERVER}/rcmnd`);
      console.log(info);
      this.setState({
        title: info.data.title,
        url: info.data.url,
      });
    }catch (error){
      console.log(error);
    }
      
  }

  render() {
    
    this.getYoutubeinfo();
    return (
      <>
        <div className="yo-main">
          <div className="yo-youtubelist">
            <div className="yo-youtube">
              <iframe src={this.state.url}/>
            </div>
            <div className="yo-youtube">
              <iframe src={this.state.url}/>
            </div>
            <div className="yo-youtube">
              <iframe src={this.state.url}/>
            </div>
            <div className="yo-youtube">
              <iframe src={this.state.url}/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Youtube;