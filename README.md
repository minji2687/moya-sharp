# moya-sharp 모야샵 프로젝트

## 사용한 기술 스택

- React cra 
- Redux / redux-toolkit 
- emotion (css-in-js)
- typescript

## 프로젝트 폴더 구조

```
├── public
│   └── images 
├── assets -- 키워드 리스트 json 목록
├── components
├── containers
├── pages
├── hooks --커스텀 훅
├── redux 
│   ├── modules
│   └── store.ts
├── api
│   └── newsList.ts 
├── util.js
├── App.js
└── index.js
```
## Environment
```
npm start
```
### 해당 폴더 구조에 대한 설명

- public
  - 이미지 파일을 저장해 둔 곳
- assets
  - 키워드 리스트 파일 저장
- components
  - 재활용 가능한 컴포넌트들을 저장해둔 폴더
  - 그 아래 영역별로 (home, newsList, myPage) 하위 폴더가 있어서 그이래 컴포넌트가 작성되어 있음
- containers
  - component를 감싸고 있는 컴포넌트로 보여주는 것 이외에 로직을 component로 내려주는 역활을 함
  - 관리해야할 상태는 container에서 관리하고 component는 받아서 사용하는 역활만 수행하도록 함
- hooks
  - container에서도 페이지 전반에서 재사용되는 상태를 관리하는 로직만 모아둔 파일
  - 또는, 키워드 리스트들의 해당 키워드의 api code를 적어두는 객체를 모아두는 곳으로도 사용함,
- pages
  - 해당 프로젝트의 페이지를 한눈에 볼 수 있도록 라우터에 걸어둔 컴포넌트
  - 컴포넌트의 전반적인 흐름은 App.js -> pages -> container -> components 로 이동함
- styles
  - 각각의 컴포넌트의 경우 해당 컴포넌트 파일에서 스타일을 작성했으므로 styles 폴더는 글로벌 스타일과 테마만 파일만 보관
- App.tsx
  - 라우팅의 용도로 사용하거나 Layout을 설정하는 용도로 사용
- index.tsx
  - 프로젝트의 시작점으로 프로젝트의 전반적으로 해당하는 로직을 작성한거나, 라이브러리를 셋팅할때도 사용


### 구현 목록

![모야-01](https://user-images.githubusercontent.com/71584114/159287249-5c2f749b-f8b5-4f26-981d-c91ddacb6b89.gif)  

1. Sector 키워드 서칭 구현  
2. 검색 헤더 스크롤 시 반응형  

![모야-02](https://user-images.githubusercontent.com/71584114/159287265-5c1953a8-22d3-46c8-ad58-f723194e4dc6.gif)  

1. 이미지, 텍스트 형식 변환  
2. 번역,북마크 클릭 UI 구현    
3. 정렬 시 네트워크상에서는 식별자들이 잘 전송된것으로 보이나 api 호출 시 빈배열값이 나오는 현상 발생 
![모야-03](https://user-images.githubusercontent.com/71584114/159287277-7a4dff3f-d3d4-4c93-b5bc-fff41462ed42.gif)  
![모야-05](https://user-images.githubusercontent.com/71584114/159287293-d6bc38b2-dd9b-403f-ab16-1e002d2551bb.gif)  
1. 키워드 추가 UI 구현  
2. 마이페이지 UI 구현



