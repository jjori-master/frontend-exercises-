import './App.css';
import { useRef, useReducer, useCallback, createContext, useMemo } from 'react';

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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const idRef = useRef(0);

  const [todos, dispatch] = useReducer(todoReducer, []);

  const onCreate = useCallback((content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };

    dispatch({ type: 'create', data: newTodo });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({ type: 'update', targetId });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({ type: 'delete', targetId });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
