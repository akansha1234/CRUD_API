import React from "react";
import Centerscreen from "./Centerscreen";
import Leftscreen from "./Leftscreen";
import Rightscreen from "./Rightscreen";
const Homescreen = ({ tweets, addTweet, deleteTweet, setElem }) => {
  return (
    <div>
      <div className="home-screen">
        <Leftscreen />
        <Centerscreen
          tweets={tweets}
          addTweet={addTweet}
          deleteTweet={deleteTweet}
          setElem={setElem}
        />
        <Rightscreen tweets={tweets} />
      </div>
    </div>
  );
};
export default Homescreen;
