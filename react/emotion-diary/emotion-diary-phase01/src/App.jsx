import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useReducer, useRef, createContext } from 'react';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: '오늘은 너무 행복하고 기분 좋은 하루였다!',
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: '기분이 꽤 괜찮았다. 특별히 나쁜 일은 없었다.',
  },
  {
    id: 3,
    createdDate: new Date().getTime(),
    emotionId: 3,
    content: '조금 우울한 기분이 들었지만, 괜찮았다.',
  },
  {
    id: 4,
    createdDate: new Date().getTime(),
    emotionId: 4,
    content: '기분이 많이 가라앉았다. 안 좋은 하루였다.',
  },
  {
    id: 5,
    createdDate: new Date().getTime(),
    emotionId: 5,
    content: '정말 힘든 하루였다. 모든 게 잘 풀리지 않았다.',
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map(item =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case 'DELETE':
      return state.filter(item => String(item.id) !== String(action.id));
    default:
      return state;
  }
}
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(6);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = id => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/new" element={<New />}></Route>
            <Route path="/diary/:id" element={<Diary />}></Route>
            <Route path="/edit/:id" element={<Edit />}></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
