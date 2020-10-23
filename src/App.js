import React, { useState, useEffect } from 'react';
import './App.css';
import del from './icons/delete.png';
import add from './icons/add.png';
import check from './icons/check.png';
import collapse from './icons/collapse.png';
import expand from './icons/expand.png';
const App = () => {
  // STATE
  const [todos, setTodos] = useState([]);

  // ON PAGE LOAD
  useEffect(() => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, []);

  // ON TODOS CHANGE
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // FUNCTIONS
  const addNewTodo = (newBody) => {
    setTodos([...todos, { id: newID(), body: newBody, completed: false }]);
  };

  let lastId = 0;
  const newID = () => {
    lastId++;
    return `${lastId}`;
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  // JSX
  return (
    <div>
      <Header />
      <div>
        <div>
          <AddTodo addNewTodo={addNewTodo} />
          {todos.length > 0 ? (
            <TodoList
              todos={todos}
              complete={completeTodo}
              remove={removeTodo}
            />
          ) : (
            <p>
              All done!
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const AddTodo = ({ addNewTodo }) => {
  const setUserInput = (e) => {
    e.preventDefault();
    addNewTodo(e.target.input.value);
    e.target.input.value = '';
  };

  // JSX
  return (
    <div>
      <form action='' onSubmit={setUserInput}>
        <div className='flex-container'>
        <input
          name='input'
          type='text'
          placeholder='Add Todo...'
          className=''
          required
        />
        <button>
         +
        </button>
        </div>
      </form>
    </div>
  );
};

const TodoList = ({ todos, complete, remove }) => {
  // STATE
  const [reverse, setReverse] = useState(true);
  const [hideCompleted, setHideCompleted] = useState(true);
  const [printTodos, setPrintTodos] = useState(todos);

  // EFFECT
  useEffect(() => {
    if (hideCompleted) {
      setPrintTodos(
        reverse
          ? todos
              .slice(0)
              .reverse()
              .filter((todo) => !todo.completed)
          : todos.filter((todo) => !todo.completed)
      );
    } else {
      setPrintTodos(reverse ? todos.slice(0).reverse() : todos);
    }
  }, [hideCompleted, reverse, todos]);

  // FUNCTIONS
  const reverseOrder = () => {
    setReverse(!reverse);
  };
  const toggleCompleted = () => {
    setHideCompleted(!hideCompleted);
  };

  // JSX
  return (
    <div>
      <div className = 'flex-container'>
      <button
        onClick={toggleCompleted}
        title='Hide Completed'
      >
        Hide completed
      </button>
      <button
        onClick={reverseOrder}
        title='Reverse Order'
      >
        Reverse order
      </button>
      </div>
      <h2>Things to do</h2>
      <ul>
        {printTodos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            body={todo.body}
            completed={todo.completed}
            complete={complete}
            remove={remove}
          />
        ))}
      </ul>
    </div>
  );
};

const Todo = ({ id, body, completed, complete, remove }) => {
  // FUNCTIONS
  const removeTodo = () => {
    remove(id);
  };
  const completeTodo = () => {
    complete(id);
  };

  // JSX
  return (
    <div className='flex-container'>
      <div title='Mark Completed' onClick={completeTodo}>
      <img src={check} alt='check'/>
      </div>
      <div title='Remove' onClick={removeTodo}>
      <img src={del} alt='delete'/>
      </div>
      
      <div>
        {body}
      </div>

    </div>
  );
};

const Header = () => {
  return (
    <header>
    </header>
  );
};


const Footer = () => {
  return (
    <footer>
    </footer>
  );
};

export default App;