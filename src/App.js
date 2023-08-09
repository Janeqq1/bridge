import "./App.css";
import BiddingSystem from "./BiddingSystem.js";
import React from "react";

const biddingUrl = "http://localhost:3000/ourprecision.json";

function App() {
  const { useState, useEffect } = React;
  const [data, setData] = useState({ biddings: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(biddingUrl);
      const myData = await response.json(); 
      console.log("after fetch");
      console.log(myData);
      setData(myData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <button className="btn btn-warning" type="submit">
        TestBS
      </button>

      <h2>Jiang and Qinqin's Simplified Modern Precision </h2>

      {isLoading ?
        (<div>Loading Data....</div>)
        :
        (<BiddingSystem biddings = { data.biddings } />)
      }

    </div>
  );
}

export default App;
