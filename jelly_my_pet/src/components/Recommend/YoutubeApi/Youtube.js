import React, { Component } from "react";
import axios from "axios";
import "./Youtube.css";
import { SERVER } from "../../../config/config.json";

class Youtube extends Component {
  state = {
    video_id: [],
    title: []
  };

  async getYoutubeinfo() {
    try {
      const info = await axios.get(`${SERVER}/rcmnd`);
      console.log(info);
      this.setState({
        title: info.data.data.title,
        video_id: info.data.data.video_id
      });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    await this.getYoutubeinfo();
  }

  render() {
    return (
      <>
        <div className="yo-main">
          <div className="yo-youtubelist">
            <div className="yo-youtube">
              <iframe
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/" + this.state.video_id[0]}
                frameborder="0"
              />
            </div>
            <div className="yo-youtube">
              <iframe
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/" + this.state.video_id[1]}
                frameborder="0"
              />
            </div>
            <div className="yo-youtube">
              <iframe
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/" + this.state.video_id[2]}
                frameborder="0"
              />
            </div>
            <div className="yo-youtube">
              <iframe
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/" + this.state.video_id[3]}
                frameborder="0"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Youtube;
