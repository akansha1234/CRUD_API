import React, { useState } from "react";
import "./Centerscreen.css";
import Navbar from "./Navbar";
import Tweet from "./Tweet.js";

const Centerscreen = ({ tweets, addTweet, deleteTweet, setElem }) => {
  const [tweet, setTweet] = useState("");

  // to submit the new tweet
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tweet) {
      alert("Please write some tweet!!");
      return;
    }
    addTweet(tweet);
    setTweet("");
  };

  return (
    <div className="center-screen">
      <Navbar />
      <div className="main-content">
        <form onSubmit={handleSubmit} className="add-tweet-form">
          <input
            type="text"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            placeholder="Add your tweet......"
            className="add-tweet-input"
          />
          <button type="submit" className="add-tweet-btn">
            Tweet
          </button>
        </form>
        <div>
          {tweets.map((item) => (
            <Tweet
              key={item.id}
              item={item}
              deleteTweet={deleteTweet}
              setElem={setElem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Centerscreen;
