import React from 'react';
import './Popular.css';
import Navigator from '../Navigator/Navigator';
import Po_PostCard from '../Poular_PostCard/Po_PostCard';
import Picture from '../Poular_Picture/Po_Picture';

const Popular = () => {
    return (
      <>
        <div className="po-main">
          <div className="po-header">
            <Navigator />
          </div>
          <div className="po-contents">
            <div className="po-Lcontent">
              <div className="po-cards">
                <Po_PostCard />
              </div>
            </div>
            <div className="po-Rcontent">
              <div className="po-pictures">
                <Picture />
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Popular;