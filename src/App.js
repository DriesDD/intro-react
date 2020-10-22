import React, { useState } from "react";
import { useRef } from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          My todo app
        </h1>
      </header>
      <Form />
      <h2>
          My todos:
        </h2>
        <div className="List">
        <TodoList />
        </div>
    </div>
  );
}

function TodoList() {
  const initialTodos = ["Buy groceries", "Feed the chickens"];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          <input type="checkbox" /> {todo}
        </li>
      ))}
    </ul>
  );
}

function Form() {
  const inputRef = useRef();

  function clickHandler() {
    const inputElement = inputRef.current;

    // Do something with inputElement...
    console.log(inputElement.value);
  }

  return (
    <div>
              <p>Add a new todo:</p>
      <input ref={inputRef} type="text" placeholder="Write a new todo" />
      <br />
      <button onClick={clickHandler}>Add todo</button>
    </div>
  );
}

export default App;