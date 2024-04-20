import React from 'react';
import LiveEvent from './liveEvent';
import './App.css';

function App() {
  return (
    <>
      <LiveEvent
        title="Tech Conference 2023 - Exploring the Future of AI and Robotics"
        date="2023-08-15"
        time="10:00 AM"
        location="Conference Room A"
        attendees={250}
        isLive={true}
      />
    </>
  );
}

export default App;
