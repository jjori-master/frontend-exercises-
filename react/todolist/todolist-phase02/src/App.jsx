import './App.css';
import { useRef, useReducer, createContext } from 'react';

import Header from './components/Header';
import List from './components/List';
import Editor from './components/Editor';

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...todos];
    case 'UPDATE':
      return todos.map(todo =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    case 'DELETE':
      return todos.filter(todo => todo.id !== action.targetId);
    default:
      return todos;
  }
};

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const idRef = useRef(0);

  const onCreate = content => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };

    dispatch({ type: 'CREATE', data: newTodo });
  };

  const onUpdate = targetId => {
    dispatch({ type: 'UPDATE', targetId });
  };

  const onDelete = targetId => {
    dispatch({ type: 'DELETE', targetId });
  };

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
