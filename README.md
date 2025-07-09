✨ Feat: TodoList 완성

📝 Pull Request 설명
어떤 작업을 했나요?

TodoList 기능 구현
TypeScript 적용
Zustand로 전역 상태관리
localStorage를 이용한 데이터 영속화
Intro → Todo 라우팅 기능 추가
Tailwind CSS로 UI 개선
왜 이 작업이 필요한가요?

할 일 목록을 효율적으로 관리할 수 있는 기반 기능을 제공하기 위함입니다.
TypeScript와 상태 관리 도입을 통해 코드 안정성과 유지보수성을 향상시켰습니다.
localStorage 연동으로 사용자의 데이터가 새로고침에도 손실되지 않도록 개선했습니다.
라우팅과 디자인을 분리함으로써 사용자 경험(UX)을 향상시키고, 기능 확장에도 유연한 구조를 만들었습니다.
✅ 체크리스트
 관련 이슈에 연결했나요? (Closes #번호 등)
 기능/버그 테스트를 완료했나요?
 로컬에서 정상 작동 확인했나요?
 문서(README 등)를 수정했나요?
🔗 관련 이슈
이슈 없음

📸 스크린샷 (선택)
Intro
TodoPage

README.md
📝 React Todo App
할 일 목록을 간단하고 직관적으로 관리할 수 있는 Todo 애플리케이션입니다.
TypeScript + Zustand + Tailwind CSS를 기반으로 구성되었으며,
Intro → Todo 라우팅 구조, localStorage를 통한 데이터 영속성,
모듈화된 컴포넌트 & 커스텀 Hook 설계가 특징입니다.

✨ 주요 기능
✅ 할 일 추가, 수정, 삭제
🗂️ 할 일 완료 여부 체크
🔄 새로고침에도 유지되는 localStorage 기반 데이터 저장
⚡ 전역 상태 관리를 위한 Zustand 도입
🛡️ 타입 안정성을 위한 TypeScript 사용
🔀 Intro 페이지 → Todo 페이지로 라우팅
🧩 컴포넌트/로직 분리 및 커스텀 Hook 구조화
🎨 Tailwind CSS를 통한 반응형 UI
📸 페이지 미리보기
🖼️ Intro
Intro

✅ Todo List
TodoPage

⚙️ 기술 스택
기술	설명
React	UI 라이브러리
TypeScript	정적 타입 언어
Zustand	가벼운 전역 상태 관리 라이브러리
React Router	페이지 라우팅 처리
Tailwind CSS	유틸리티 기반 CSS 프레임워크
localStorage	브라우저 저장소 (데이터 영속성 확보)
Vite	빠른 개발 서버 및 번들러 (프론트엔드 환경)
📁 프로젝트 구조 (예시)
src/
├── components/         # 재사용 가능한 UI 컴포넌트
│   └── TodoList
│       └── TodoItem.tsx
│       └── TodoList.tsx
│   └── TodoSubmitForm
│       └── TodoSubmitForm.tsx
├── hooks/              # 커스텀 훅
│ └── useTodos.ts
│ └── useBoolean.ts
│ └── useLocalStorage.ts
├── store/              # Zustand 기반 상태관리
│ └── useTodoStore.ts
├── interfaces/ # 타입
│ └── todo.ts
├── contexts/           # Context API 관련 로직
│ └── TodoContext.ts
│ └── TodoProvider.ts
├── consts/             # 공통 상수 값
│ └── index.ts
├── pages/              # 페이지 컴포넌트
│ └── Intro.ts
│ └── TodoPage.ts
├── .prettierrc         # Prettier 설정
├── tailwind.config.js  # Tailwind 설정
├── App.tsx             # 라우팅 구성
└── main.tsx            # 엔트리포인트
🚀 실행 방법
# 패키지 설치
npm install

# 로컬 실행
npm run dev
