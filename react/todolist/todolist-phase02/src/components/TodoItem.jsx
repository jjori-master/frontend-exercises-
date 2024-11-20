import './TodoItem.css';
import { memo } from 'react';

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button type="button" onClick={onClickDeleteButton}>
        삭제
      </button>
    </div>
  );
};

export default memo(TodoItem, (prevProps, nextProps) => {
  // T -> Props가 바뀌지 않음. 리렌더링 X
  // F -> Props가 바뀜. 리렌더링 O

  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
});
