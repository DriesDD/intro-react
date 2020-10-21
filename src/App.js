import React, { useState } from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          My todo app
        </h1>
      </header>
      <form>
        <p>Add a new todo:</p>
        <input
          type="text"
        />
      </form>
      <h2>
          My todos:
        </h2>
        <div className="List">
      <Itemlist items={initialTodos} />
      </div>
    </div>
  );
}

const initialTodos = ['Feed the chickens','Water the plants','Fix the doorbell'];


function Itemlist(props) {
  const items = props.items;
  const listItems = items.map((item) =>
    <ul key={item.toString()}>
      <input className="" type="checkbox"/> {item}
    </ul>
  );
  return (
    <ul>{listItems}</ul>
  );
}


export default App;