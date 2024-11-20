import './App.css';
import { useRef, useReducer } from 'react';

import Header from './components/Header';
import List from './components/List';
import Editor from './components/Editor';

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'create':
      return [action.data, ...todos];
    case 'update':
      return todos.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    case 'delete':
      return todos.filter((todo) => todo.id !== action.targetId);
    default:
      return todos;
  }
};

function App() {
  const idRef = useRef(0);

  const [todos, dispatch] = useReducer(todoReducer, []);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };

    dispatch({ type: 'create', data: newTodo });
  };

  const onUpdate = (targetId) => {
    dispatch({ type: 'update', targetId });
  };

  const onDelete = (targetId) => {
    dispatch({ type: 'delete', targetId });
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
