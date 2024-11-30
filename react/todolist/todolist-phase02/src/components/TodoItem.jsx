import './TodoItem.css';

import { useContext } from 'react';
import { TodoDispatchContext } from '../App';

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={() => onUpdate(id)} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button type="button" onClick={() => onDelete(id)}>
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
