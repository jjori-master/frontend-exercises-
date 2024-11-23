import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

import Button from './ components/Button';
import Header from './ components/Header';

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회 하는 Diary 페이지
// 4. "/edit" : 일기를 수정하는 Edit 페이지

function App() {
  return (
    <>
      <Header
        title={'Header'}
        leftChild={<Button text={'left'} />}
        rightChild={<Button text={'right'} />}
      />

      <Button
        text={'안녕'}
        type={'DEFAULT'}
        onClick={() => {
          console.log('안녕');
        }}
      />
      <Button
        text={'헬로우'}
        type={'POSITIVE'}
        onClick={() => {
          console.log('긍정 메시지');
        }}
      />

      <Button
        text={'니가'}
        type={'NEGATIVE'}
        onClick={() => {
          console.log('부정 메시지');
        }}
      />

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary/1"}>Diary</Link>
        <Link to={"/edit/1"}>Edit</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary/:id" element={<Diary />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
