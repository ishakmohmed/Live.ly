import React, { useState, useEffect } from "react";
import CardInsideRightSection from "./CardInsideRightSection";
import axios from "axios";
import "../App.css";

function RightSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=pbISmD7i8C4XOv0bDFqVxmXfm63mzq50"
      )
      .then((res) => {
        console.log(res.data.results);
        setNews(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="each-container right-section">
      <center>
        <h1 className="main-heading main-heading-right">Hot News</h1>
        {news.map((eachNews) => (
          <CardInsideRightSection
            // imageUrl={eachNews.multimedia[0].url}
            title={eachNews.title}
            newsDescription={eachNews.abstract}
            fullNewsLink={eachNews.url}
          />
        ))}
      </center>
    </div>
  );
}

export default RightSection;
