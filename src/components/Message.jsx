import React from "react";

import "../styles/message.scss";

export const Message = ({ message, time, author }) => {
  return (
    <div className="message">
      <div className="content">
        <span>{message}</span>
      </div>
      <div className="info">
        <span className="time">{time}</span>
        <span className="author">{author}</span>
      </div>
    </div>
  );
};
