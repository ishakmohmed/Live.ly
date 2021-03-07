import React, { useState, useEffect } from "react";
import CardInsideRightSection from "./CardInsideRightSection";
import axios from "axios";
import "../App.css";

function RightSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2021-03-06&sortBy=popularity&apiKey=2a05267e461349dab16670aa6ad054ad"
      )
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="each-container right-section">
      <center>
        <h1 className="main-heading main-heading-right">UK Tech News</h1>
          {news.map((eachNews) => (
            <CardInsideRightSection
              imageUrl={eachNews.urlToImage}
              title={eachNews.title}
              newsDescription={eachNews.description}
              fullNewsLink={eachNews.url}
            />
          ))}
      </center>
    </div>
  );
}

export default RightSection;
