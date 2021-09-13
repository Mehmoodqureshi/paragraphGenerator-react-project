import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setcount] = useState(0);
  const [text, setText] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    let account = parseInt(count);
    if (count <= 0) {
      account = 1;
    }
    if (count > 8) {
      account = 8;
    }
    setText(data.slice(0, account));
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorum ipsum</h3>
      <form onSubmit={handleClick} className="lorem-form">
        <label htmlFor="account">paragraph:</label>
        <input
          value={count}
          onChange={(e) => {
            setcount(e.target.value);
          }}
          type="number"
          id="account"
          name="account"
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
