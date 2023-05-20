## (서비스)의 핵심 기능

### 1️⃣ (기능)

[]()

**(강조단어)** (기능설명)

<br />

### 2️⃣ (기능)

[]()

**(강조단어)** (기능설명)

<br />

## 👨‍💻 개발자들
| 오형근 (Geun-Oh) | 심은서 (simeunseo) | 서아름 (seoAreum) |
| --- | --- | --- |
| https://github.com/Geun-Oh | https://github.com/simeunseo | https://github.com/Arooming |


<br />

## 🛠 기술스택

    ✅ Base: JS + React + react-router-dom

    ✅ data fetch: axios

    ✅ style: styled-components + styled-reset

    ✅ Global state managing: Recoil

## 💡 주요 라이브러리

<br />

## 📄 컨벤션 및 브랜치 전략

🚀 **브랜치 규칙**

| 브랜치 | 규칙|
| --- | --- |
| main | 배포, 시연 영상 제작용 |
| develop | 실제 개발 |
| feature/개발하는 기능 | 각자 개발하는 브랜치 |

<br />

🚀 **브랜치 전략**

→ <strong>`feature/개발하는 기능 설명`</strong>

<br />

🚀 **네이밍 규칙**

| 구분 | 네이밍 규칙 |
| --- | --- |
| 상수 | UPPER_CASE |
| 리액트 컴포넌트 | PascalCase |
| 그 외 | camelCase |
| 컴포넌트 규모가 커지거나 동일한 역할의 페이지인데 종류가 많아져서 나눠야할 때 → index 파일 제작하고 폴더화하기 | PascalCase |

<br />

🚀 **그 외 규칙**

| 구분 | 규칙 |
| --- | --- |
| 컴포넌트 파일 작성 | rfce로 시작 |
| 내부 함수 | const 사용 |
| 코드 작성 순서 | import ⇒ function ⇒ styled-componet ⇒ export |
| 스타일 컴포넌트 | St = {}, <St.어쩌구 /> |
| 감싸는 친구 | Wrapper로 만들기 |

<br />

## 📁 폴더 구조
```
.
├── constants 🗂 목 데이터 저장
├── apis 🗂 api 폴더
├── package.json 📦 설치된 패키지를 관리하는 파일
├── public
├── utils 🗂 공통으로 쓰일 컴포넌트 저장
└── src
    └── assets
    |   ├── icon
    |   └── images
    ├── App.jsx ✡️ 앱의 라우팅과 글로벌 스타일 지정
    ├── index.js
    ├── component
    |    └── common 🗂 공통으로 쓰일 컴포넌트 저장
    ├── pages 🗂 라우팅 시 보여질 페이지 컴포넌트 저장
    │   
    └── styles
        ├── theme.ts
        ├── styled.d.ts	
        └── globalStyles.ts
        
```
