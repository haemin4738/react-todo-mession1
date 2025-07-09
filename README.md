# 📝 React Todo App

할 일 목록을 간단하고 직관적으로 관리할 수 있는 Todo 애플리케이션입니다.  

---

## ✨ 주요 기능

-    할 일 추가, 수정, 삭제
-    할 일 완료 여부 체크
-    `localStorage` 기반 데이터 저장
-     `TypeScript` 사용
-    컴포넌트/로직 분리 및 커스텀 Hook 구조화
-    CSS를 통한 반응형 UI

---

## 📸 페이지 미리보기

### ✅ Todo List
![image](https://github.com/user-attachments/assets/41953c69-e91a-4093-bb53-51b89d3c8370)



---

## ⚙️ 기술 스택

| 기술         | 설명                                       |
| ------------ | ------------------------------------------ |
| React        | UI 라이브러리                              |
| TypeScript   | 정적 타입 언어                             |
| localStorage | 브라우저 저장소      |
| Vite         | 빠른 개발 서버 및 번들러 (프론트엔드 환경) |

---

## 📁 프로젝트 구조 (예시)

```
src/
├── components/         # 재사용 가능한 UI 컴포넌트
│   └── TodoList
│       └──  App.css
│       └── TodoList.tsx
│       └── TodoItem.tsx
│       └── types.ts
├── hooks/              # 커스텀 훅
│ └── useTodos.ts
│ 
├── utils/              # Zustand 기반 상태관리
│ └── storage.ts
├── .prettierrc         # Prettier 설정
├── App.tsx             # 라우팅 구성
└── main.tsx            # 엔트리포인트
```

---

## 🚀 실행 방법

```bash
# 패키지 설치
npm install

# 로컬 실행
npm run dev
```
