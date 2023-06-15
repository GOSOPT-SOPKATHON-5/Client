## DAWNNECT
![던넥트](https://github.com/GOSOPT-SOPKATHON-5/SOPKATHON5-Client/assets/55528304/f546170c-2a11-4e9c-9eec-4385188614dd)


### 1️⃣ 랜딩 페이지

**프로필** 유저 프로필 사진과 이름을 보여준다.<br/>
**메시지 확인** 로그인된 유저에게 전송된 답변의 일부(키워드)를 보여준다.<br/>
**투표 하러 가기 버튼** 다른 유저에 대한 답변을 할 수 있는 창으로 넘어간다.<br/>
**포인트 확인** 현재 나에게 쌓인 포인트 수를 보여준다..

<br />

### 2️⃣ 투표 페이지

**사람** 랜덤으로 내가 투표할 사람이 정해진다.<br/>
**질문** 특정 부분에 구멍이 뚫린 랜덤 질문이 주어진다.<br/>
**투표** 구멍에 들어갈 키워드를 고른다.<br/>
**스킵 버튼** 스킵 버튼을 누르면 투표할 사람과 질문이 달라진다.

<br />

### 3️⃣ 답변 확인 페이지

**사람** 누가 답변한 건지를 보여준다.<br/>
**질문** 구멍이 메워진 질문 전체를 보여준다.

<br />

### 4️⃣ 모달

**코인이 없을 때** '답변을 개봉하려면 코인이 필요합니다. 코인을 얻기 위해 투표를 하러 가시겠습니까?' 라는 문구를 띄우고 투표 페이지로 넘어가는 버튼을 보여준다.<br/>
**코인이 있을 때** '답변을 개봉하려면 코인이 필요합니다. 코인을 차감하고 투표를 하러 가시겠습니까?' 라는 문구를 띄우고 투표 페이지로 넘어가는 버튼을 보여준다.


<br />

## 👍 시연영상
https://github.com/GOSOPT-SOPKATHON-5/SOPKATHON5-Client/assets/55528304/0747ebfe-d748-48c6-940f-e9592381e449

<br />


## 👨‍💻 개발자들
| 오형근 (Geun-Oh) | 심은서 (simeunseo) | 서아름 (seoAreum) |
| --- | --- | --- |
| https://github.com/Geun-Oh | https://github.com/simeunseo | https://github.com/Arooming |
| 리드, 초기 세팅, 투표 페이지 | 초기 세팅, 랜딩 페이지 | 답변 확인 페이지, 모달 |
| `[GET] 랜덤 질문 및 답변 조회` `[POST] 질문 및 답변 저장` | `[GET] 메인화면 조회` | `[GET] 질문 ` |


<br />

## 🛠 기술스택

    ✅ Base: JS + React + react-router-dom

    ✅ data fetch: axios

    ✅ style: styled-components + styled-reset

    ✅ Global state managing: Recoil

## 💡 주요 라이브러리
React, StyledComponent

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
