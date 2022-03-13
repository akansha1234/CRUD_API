import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./EditTweet.css";
const EditTweet = ({ elem, setElem, tweets, setTweets }) => {
  const [newTweet, setNewTweet] = useState("");
  const { id } = useParams();
  const history = useHistory();
  console.log(elem, "elem");
  const handleEdit = async (e, id) => {
    e.preventDefault();
    console.log(elem);
    setTweets(tweets.map((tweet) => (tweet.id === elem.id ? elem : tweet)));
    history.push("/");
  };
  // const handleEdit = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch(
  //     `https://tweets.free.beeceptor.com/tweets/all/${id}`,
  //     {
  //       method: "PUT",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-type": "application/json"
  //       },
  //       body: JSON.stringify({ elem })
  //     }
  //   ).catch((err) => {
  //     console.log(err);
  //   });
  //   const data = await res.json();
  //   //console.log(data, "data");
  //   setTweets(
  //     tweets.map((tweet) => (tweet.id === elem.id ? data.elem : tweet))
  //   );
  //   editTweet(id);
  //   history.push("/");
  // };
  // const editTweet = (id) => {
  //   tweets.map((tweet) =>
  //     tweet.id === elem.id ? console.log(tweet, "edit tweet") : " "
  //   );
  // };
  return (
    <div className="edit-screen">
      <h3> Edit your tweet</h3>
      <form className="edit-tweet-form">
        <input
          type="text"
          onChange={(e) => setElem({ ...elem, tweet: e.target.value })}
          value={elem.tweet}
          className="edit-tweet-input"
        />
      </form>
      <button type="submit" className="add-tweet-btn" onClick={handleEdit}>
        Edit Tweet
      </button>
    </div>
  );
};
export default EditTweet;
