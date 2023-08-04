import React, { useState, useEffect } from "react";
import "./random.css";

const Quotes = [
  {
    phrase: "Either write something worth reading or do something worth writing",
    author: "Benjamin Franklin",
    background: "rgb(119, 177, 169)",
  },
  {
    phrase:
      "When everything seems to be going against you, remember that the airplane takes off against the wind, not with i",
    author: "Henry Ford",
    background: "rgb(71, 46, 50)",
  },
  {
    phrase: "You miss 100% of the shots you don’t take",
    author: "Wayne Gretzky",
    background: "rgb(115, 168, 87)",
  },
  {
    phrase: "I have learned over the years that when one’s mind is made up, this diminishes fear",
    author: "Rosa Parks",
    background: "rgb(22, 160, 133)",
  },
  {
    phrase: "Fall seven times and stand up eight",
    author: "Japanese Proverb",
    background: "rgb(243, 156, 18)",
  },
  {
    phrase: "The only person you are destined to become is the person you decide to be",
    author: "Ralph Waldo Emerson",
    background: "rgb(231, 76, 60)",
  },
];

const Random = () => {
  const [data, setData] = useState({});

  const handleRandom = () => {
    const random = Quotes[Math.floor(Math.random() * Quotes.length)];
    setData({ ...random });
  };

  useEffect(() => {
    if (!data.length) {
      handleRandom();
    }
  }, []);

  return (
    <div className="wrapper" style={{ background: data.background }}>
      <div className="quote-box" id="quote-box">
        <h1 className="text" id="text" style={{ color: data.background }}>
          {data.phrase}
        </h1>
        <strong className="author" id="author" style={{ color: data.background }}>
          - {data.author}
        </strong>

        <div className="buttons">
          <a
            className="post"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
            href="twitter.com/intent/tweet"
            style={{ background: data.background }}
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="post"
            id="tumblr-quote"
            title="post this quote on tumblr!"
            target="_blank"
            style={{ background: data.background }}
          >
            <i className="fab fa-tumblr" />
          </a>

          <button
            className="button"
            id="new-quote"
            onClick={handleRandom}
            style={{ background: data.background }}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Random;
