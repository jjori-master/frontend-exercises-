import './List.css';
import TodoItem from './TodoItem';
import { useState, useContext } from 'react';

import { TodoStateContext } from '../App';

const List = () => {
  const [search, setSearch] = useState('');

  const todos = useContext(TodoStateContext);

  const onChangeSearch = e => {
    setSearch(e.target.value);
  };

  const getFilterTodos = e => {
    if (!search) {
      return todos;
    }

    return todos.filter(todo =>
      todo.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  };

  const filteredTodos = getFilterTodos();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filteredTodos.map(todo => {
          return <TodoItem {...todo} key={todo.id} />;
        })}
      </div>
    </div>
  );
};

export default List;
