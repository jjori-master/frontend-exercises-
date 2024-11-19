import './App.css';
import { useRef, useReducer } from 'react';

import Header from './components/Header';
import List from './components/List';
import Editor from './components/Editor';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map(todo =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    case 'DELETE':
      return state.filter(todo => todo.id !== action.targetId);
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  const onCreate = content => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = targetId => {
    dispatch({
      type: 'UPDATE',
      targetId,
    });
  };

  const onDelete = targetId => {
    dispatch({
      type: 'DELETE',
      targetId,
    });
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
