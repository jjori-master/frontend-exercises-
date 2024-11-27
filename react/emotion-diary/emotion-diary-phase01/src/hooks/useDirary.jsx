import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryStateContext } from '../App';

const useDiary = id => {
  const nav = useNavigate();

  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDirayItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(item => String(item.id) === String(id));

    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기 입니다.');
      nav('/', { replace: true });
    }

    setCurDirayItem({
      ...currentDiaryItem,
      createdDate: new Date(Number(currentDiaryItem.createdDate)),
    });
  }, [id, data]);

  return curDiaryItem;
};

export default useDiary;
