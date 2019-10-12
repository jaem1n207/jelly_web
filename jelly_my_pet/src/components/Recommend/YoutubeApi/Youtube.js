import React from 'react';
import axios from "axios";
import './Youtube.css';
import { SERVER } from "config/config.json";


const Youtube = () => {
    const getYoutube = () => {
        try {
          return axios.get(`${SERVER}/rcmnd`);
        } catch (error) {
            console.error(error)
          }
      };
  
    const getYoutubeUrl = () => {
        let data = {
            url: ""
        };
        const getUrl = getYoutube()
            .then(response => {
                data = response.data.url;
                console.log(data);
            })
            .catch(error => {
              console.log(error);
            })
        
    };
    return (
      <>
        <button type="button" onClick={getYoutubeUrl}>Click Me!</button> 
      </>
    )
 }

export default Youtube;