import './Editor.css';
import { useState, useRef } from 'react';

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus();
      return;
    }

    onCreate(content);
    setContent('');
  };

  const onEnterkeyDown = (e) => {
    if (e.key !== 'Enter') return;
    onSubmit();
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        type="text"
        value={content}
        onChange={onChangeContent}
        onKeyDown={onEnterkeyDown}
        placeholder="새로운 TODO..."
      />
      <button type="button" onClick={onSubmit}>
        추가
      </button>
    </div>
  );
};

export default Editor;
