import React from "react";
import { useEffect, useState } from "react";

function ChuckNorris() {
    const [chuck, setChuck] = useState("chucks here");

    useEffect(() => {
      getChuck();
    }, []);
  
    const getChuck = async () => {
        fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((dataAPI) => setChuck(dataAPI));
    }

    return (
        <div className="container">
          <h1>Chuck Norris Facts</h1>
          <p className="joke">{chuck.value}</p>
          <button type="button" className="btn" onClick={getChuck}>
            Get Another Fact
          </button>
        </div>
      );
  }
  
export default ChuckNorris;