import React from 'react';
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
      <Itemlist items={items} />
      </div>
    </div>
  );
}

function Itemlist(props) {
  const items = props.items;
  const listItems = items.map((item) =>
    <ul key={item.toString()}>
      <span>☐</span> {item}
    </ul>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const items = ['Feed the chickens','Water the plants','Fix the doorbell'];

export default App;