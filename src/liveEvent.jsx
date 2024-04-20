import React from 'react';
import './App.css';
import Images from './RobndAI.jpeg';

function liveEvent({ title, date, time, location, attendees, isLive }) {
  return (
    <div className="event-card">
      <img className="image" src={Images} alt="" />
      <div className="event-summary">
        <p>
          {date} {time}
        </p>
        <h2>{title}</h2>
      </div>
      <div className="event-details">
        {location && ` By ${location}`}
        <p>{attendees} attendees</p>
        <div className="SocialConnect">
          {isLive && (
            <div className="live">
              {" "}
              <span>
                <ion-icon name="radio-outline"></ion-icon>
              </span>
              Live
            </div>
          )}

          <div className="icons">
            <ion-icon name="share-social-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default liveEvent;