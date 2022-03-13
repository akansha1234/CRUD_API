import React, { useState } from "react";
import "./Rightscreen.css";
const Rightscreen = ({ tweets }) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState({});
  const [found, setFound] = useState(false);
  const filterData = (e) => {
    if (e.key === "Enter") {
      const filteredData = tweets.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(query.toLowerCase());
      });
      console.log(filteredData, "data");
      if (filteredData.length !== 0) {
        setResult(filteredData[0]);
        setFound(true);
        console.log("filter");
      } else {
        setResult(" ");
        alert("No result Found");
      }
    }
  };
  //const [tweets, setTweets] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     const fetchFromServer = await fetchData();
  //     setTweets(fetchFromServer);
  //   };
  //   getData();
  // }, [query]);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts?q=${query}`
  //   );
  //   const result = data.json();
  //   return result;
  // };
  return (
    <div className="right-screen">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Twitter"
        className="search-input"
        onKeyDown={filterData}
      />

      <div className="search_tweets">
        {found && (
          <div>
            <h3>{result.userName}</h3>
            <p>{result.tweet}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Rightscreen;
