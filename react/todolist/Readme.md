# 개요

- Todo List 잡지떼기 연습 공간입니다.
- todolist-ui 폴더의 내용을 복사하여 원하는 조건의 TodoList 앱을 제작하면 됩니다.

#### todolist-basic

- Todo List 기본 연습을 위한 공간입니다.
- 사용 Hook
  - useState, useRef
- todolist-basic 폴더의 내용을 모두 제거 한 후 `todolist-ui` 를 복사 붙여넣기 (node_modules 제회) 하고, 기본 앱을 만들면 됩니다.
- 윈도우 11 Powershell `totolist-basic` 내용 제거 후 `todolist-ui` 내용 복사하기

```bash
# Windows Powershell
Remove-Item -Path "./todolist-basic/*" -Recurse -Force
Copy-Item -Path "./todolist-ui/*" -Destination "./todolist-basic" -Recurse -Force -Exclude "node_modules"
```

#### todolist-use-reducer

- `useReducer` 훅을 사용하는 Todo List 연습 공간입니다.
- 연습 방법은 두가지 입니다.

  - `useState` 훅으로 제작된 `todolist-basic` 프로젝트에서 시작해서 `useState`를 `useReducer`로 업그레이드 하는 연습.
  - `todolist-ui` 로 부터 시작해서 처음 부터 `useReducer`를 사용하는 연습 방법입니다.

- `useReducer` 업그레이드

```bash
# Windows Powershell
Remove-Item -Path "./todolist-use-reducer/*" -Recurse -Force
Copy-Item -Path "./todolist-basic/*" -Destination "./todolist-use-reducer" -Recurse -Force -Exclude "node_modules"
```

- `useReducer` 사용

```bash
# Windows Powershell
Remove-Item -Path "./todolist-use-reducer/*" -Recurse -Force
Copy-Item -Path "./todolist-ui/*" -Destination "./todolist-use-reducer" -Recurse -Force -Exclude "node_modules"
```
