import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homescreen from "./Homescreen";
import Login from "./Login";
import EditTweet from "./EditTweet";
import "./styles.css";
import Profile from "./Profile";

function App() {
  const [user, setUser] = useState("");
  const [tweets, setTweets] = useState([]);
  const [elem, setElem] = useState();
  console.log(user);
  useEffect(() => {
    const getData = async () => {
      const fetchfromserver = await fetchData();
      //console.log(fetchfromserver, "server");
      setTweets(fetchfromserver);
    };
    getData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://tweets.free.beeceptor.com/tweets/all");
    //const data = await fetch("./data.json");
    if (data.status === 200) {
      const result = await data.json();
      console.log("result from API");
      return result;
    } else {
      const db = await fetch("./data.json");
      const res = await db.json();
      console.log("from db");
      return res;
    }
  };

  // to add the new tweet

  const addTweet = (tweet) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const data = {
      id: id,
      userName: "Jolie",
      tweet: tweet,
      date: "20220310"
    };
    setTweets([data, ...tweets]);
  };

  // to delete the tweet

  const deleteTweet = (id) => {
    setTweets(tweets.filter((elem) => elem.id !== id));
  };
  //to add the new tweet
  // const addTweet = async (tweet) => {
  //   const res = await fetch("https://tweets.free.beeceptor.com/tweets/all", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({
  //       userName: "testUser",
  //       tweet: tweet,
  //       date: "10/03/2021"
  //     })
  //   });
  //   console.log(tweet, "tweet");
  //   const data = await res.text();
  //   console.log(data, "data");
  //   setTweets([data, ...tweets]);
  // };

  //to delete the tweet
  // const deleteTweet = async (id) => {
  //   await fetch(`https://tweets.free.beeceptor.com/tweets/all/${id}`, {
  //     method: "DELETE"
  //   });
  //   setTweets(tweets.filter((elem) => elem.id !== id));
  //   console.log(id);
  // };

  return (
    <div className="App">
      <Router>
        <Switch>
          {!user ? (
            <Login setUser={setUser} />
          ) : (
            <Route exact path="/">
              <Homescreen
                tweets={tweets}
                addTweet={addTweet}
                deleteTweet={deleteTweet}
                //setTweets={setTweets}
                setElem={setElem}
              />
            </Route>
          )}
          <Route path="/edit/:id">
            <EditTweet
              elem={elem}
              setElem={setElem}
              tweets={tweets}
              setTweets={setTweets}
            />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
