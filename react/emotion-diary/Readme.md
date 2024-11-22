# 개요

- 감정 일기 잡지떼기 연습 공간입니다.
- emotion-diary-template 폴더의 내용을 복사하여 원하는 조건의 감정 일기 앱을 제작하면 됩니다.

#### emotion-dary-phase01

- Emotion Diary 1단계 연습을 위한 공간입니다.
- 윈도우 11 Powershell `emotion-diary-phase01` 내용 제거 후 `emotion-diary-template` 내용 복사하기

```bash
# for Windows Powershell
Remove-Item -Path "./emotion-diary-phase01/*" -Recurse -Force
Copy-Item -Path "./emotion-diary-template/*" -Destination "./emotion-diary-phase01" -Recurse -Force -Exclude "node_modules"
```

```bash
# for Mac
rm -rf ./emotion-diary-phase01/*
rsync -av --exclude="node_modules" ./emotion-diary-template/ ./emotion-diary-phase01/
```
