import './Editor.css';
import { useState, useRef, useContext } from 'react';
import { TodoDispatchContext } from '../App';

const Editor = () => {
  const [content, setContent] = useState('');
  const inputRef = useRef();
  const { onCreate } = useContext(TodoDispatchContext);

  const onChange = e => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === '') {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  const onKeyDown = e => {
    if (e.keyCode !== 13) return;
    onSubmit();
  };

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        type="text"
        placeholder="새로운 TODO..."
        value={content}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button type="button" onClick={onSubmit}>
        추가
      </button>
    </div>
  );
};

export default Editor;
