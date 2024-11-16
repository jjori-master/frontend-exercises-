import './Editor.css';

const Editor = () => {
  return (
    <div className="Editor">
      <input type="text" placeholder="새로운 TODO..." />
      <button type="button">추가</button>
    </div>
  );
};

export default Editor;
