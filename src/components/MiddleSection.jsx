import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function MiddleSection(props) {
  const [advice, setAdvice] = useState([]);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        console.log(res.data.slip.advice);
        setAdvice(res.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="middle-section">
      <center>
        <h2 className="greeting">Hello, User!</h2>
        <h3 className="advice">
          Today's randomly generated advice: "{advice}"
        </h3>

        <div className="time-container">
          <h1>Local Time </h1>
          <h1>{time.toLocaleTimeString()}</h1>
        </div>
      </center>
    </div>
  );
}

export default MiddleSection;
