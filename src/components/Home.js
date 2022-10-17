import React from "react";
import {useContext} from "react";
import {Context} from "./context/SiteContext";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import data from "./data";
import Card from "./Card";

const Home = () => {
  const time = new Date();
  const hours = time.getHours();
  let timeOfTheDay;
  const { number, setNumber} = useContext(Context)

  const cards = data.map((item, i) => {
    return <Card key={i} {...item} />;
  });

  if (hours < 12) {
    timeOfTheDay = "morning";
  } else if (hours >= 12 && hours < 20) {
    timeOfTheDay = "afternoon";
  } else {
    timeOfTheDay = "night";
  }


  const increment = () => {
    setNumber(number + 1);
  };

  const asyncIncrement = () => {
    setTimeout(() => {
      setNumber((prev) => prev + 1);
    }, 2000);
  };
  return (
    <div>
      <Header />
      <div className="app">
        <h1>{number}</h1>
        <h2>Good {timeOfTheDay}</h2>
        <br />
        <button className="btn" onClick={increment}>
          Increase
        </button>
        <br />
        <button className="btn" onClick={asyncIncrement}>
          Increase Async
        </button>
        {cards}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
