# 개요

- Todo List 잡지떼기 연습 공간입니다.
- todolist-ui 폴더의 내용을 복사하여 원하는 조건의 TodoList 앱을 제작하면 됩니다.

### 추가 구현 사항

- 필수 기능 외에 아래와 같은 사항을 추가로 구현합니다.

#### memo를 사용하여 리랜더링을 방지합니다.

- `memo` 사용의 효과를 말해 보세요
- `Header.jsx` 컴포넌트를 memo를 사용하여 리렌더링이 되지 않도록 하십시오
- `TodoItem.jsx` 컴포넌트는 단순 memo를 사용한다고 해서 리렌더링을 방지하지 못합니다.  
  memo의 두번째 인자를 통해 리렌더링이 되지 않도록 하십시오.

#### todolist-phase01

- Todo List 기본 연습을 위한 공간입니다.
- 사용 Hook
  - useState, useRef
- todolist-basic 폴더의 내용을 모두 제거 한 후 `todolist-ui` 를 복사 붙여넣기 (node_modules 제회) 하고, 기본 앱을 만들면 됩니다.
- 윈도우 11 Powershell `totolist-phase01` 내용 제거 후 `todolist-ui` 내용 복사하기

```bash
# for Windows Powershell
Remove-Item -Path "./todolist-phase01/*" -Recurse -Force
Copy-Item -Path "./todolist-ui/*" -Destination "./todolist-phase01" -Recurse -Force -Exclude "node_modules"
```

```bash
# for Mac
rm -rf ./todolist-phase01/*
rsync -av --exclude="node_modules" ./todolist-ui/ ./todolist-phase01/
```

#### todolist-phase02

1. phase01 단계에서 사용하던 useState 대신 useReducer를 사용하여 todolist 기능을 사용합니다.
2. **React.memo**를 사용하여 렌더링 최적화를 합니다.

- 다음 질문에 답해 보세요
  - [ ] React Dev Tools의 어떤 설정을 On 해야 렌더링 상황을 확인할 수 있나요?
  - [ ] memo는 어떤 조건일때 다시 렌더링을 하지 않나요?
  - [ ] `TodoItem.jsx` 컴포넌트에서 memo를 사용하였지만 왜 렌더링 최적화가 되지 않았나요?
- **useCallback**을 사용하기 전에 `TodoItem.jsx` 컴포넌트를 최적화하기

4. **useCallback**을 통해 함수 재생성을 방지합니다.

5. **Context**를 사용하여 `Prop drilling`을 해결하세요.

- 다음 질문에 답해 보세요
  - [ ] **Context**을 사용하면 memo를 사용하여 렌더링 최적화한 `TodoItem.jsx`가 다시 리렌더링이 됩니다.  
         왜 리렌더링이 되는 원인과 어떻게 해결해야 하는지 말해보세요.

6. **Context** 를 state, dispatch 로 분리하여 최적화 하세요

- 다음 질문에 답해 보세요
  - [ ] 왜 state 와 dispatch로 분리해야 하나요?
  - [ ] dispatch에 들어갈 메서드들은 useMemo를 사용해야 합니다.  
         왜 사용해야 하는지 정확히 알고 있나요?

강의 자료

- https://goongoguma.github.io/2021/04/26/When-to-useMemo-and-useCallback/

```bash
# for Windows Powershell
Remove-Item -Path "./todolist-phase02/*" -Recurse -Force
Copy-Item -Path "./todolist-phase01/*" -Destination "./todolist-phase02" -Recurse -Force -Exclude "node_modules"
```

```bash
# for Mac
rm -rf ./todolist-phase02/*
rsync -av --exclude="node_modules" ./todolist-phase01/ ./todolist-phase02/
```
