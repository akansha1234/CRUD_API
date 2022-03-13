import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Tweet.css";
import EditTweet from "./EditTweet";
const Tweet = ({ item, deleteTweet, setElem }) => {
  return (
    <div className="tweet-container">
      <div className="tweet-box">
        <h3>{item.userName}</h3>
        <p>{item.tweet}</p>
      </div>
      <div className="update-tweet">
        <Link to={`/edit/${item.id}`}>
          <i className="fa fa-pencil" onClick={() => setElem(item)}></i>
        </Link>

        <i className="fa fa-trash-o" onClick={() => deleteTweet(item.id)}></i>
      </div>
    </div>
  );
};
export default Tweet;
