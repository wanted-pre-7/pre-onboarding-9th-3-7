## 원티드 프리온보딩 3주차

주어진 데이터를 기반으로 시계열 차트 만들기

### [배포주소](https://wanted-pre-3-7-flexsys.netlify.app/)
<br/>

<img src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/>
<img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white">
<img src="https://img.shields.io/badge/-Recharts-CA4245?style=flat-square&logo=Recharts&logoColor=white">



<br/>

## 프로젝트 실행 방법

react app

```
npm i
npm run dev
```

<br/>

## 요구사항

>

<br/>

<img src="https://user-images.githubusercontent.com/86880916/225870287-3df177c5-1921-45e7-a759-c15b90399144.png" width="500"/>

<br/>

1. 시계열 차트 만들기
    - 주어진 JSON 데이터의 `key`값(시간)을 기반으로 시계열 차트를 만들어주세요
    - 하나의 차트안에 Area 형태의 그래프와 Bar 형태의 그래프가 모두 존재하는 복합 그래프로 만들어주세요
    - Area 그래프의 기준값은 `value_area` 값을 이용해주세요
    - Bar 그래프의 기준값은 `value_bar` 값을 이용해주세요
    - 차트의 Y축에 대략적인 수치를 표현해주세요(예시 이미지 참고)
    <br/>
2. 호버 기능 구현
    - 특정 데이터 구역에 마우스 호버시 `id, value_area, value_bar` 데이터를 툴팁 형태로 제공해주세요
    <br/>
3. 필터링 기능 구현
    - 필터링 기능을 구현해주세요, 필터링은 특정 데이터를 하이라이트 하는 방식으로 구현해주세요
    - 필터링 기능은 버튼 형태로 ID값(지역이름)을 이용해주세요
    - 필터링 시 버튼에서 선택한 ID값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리를 해주세요
    - 특정 데이터 구역을 클릭 시에도 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역을 하이라이트해주세요


<br/>

## 🌟 최종 결과

<br/>

1. 시계열 차트 만들기
  <img width="700" alt="1" src="https://user-images.githubusercontent.com/86880916/225871029-51bb40b4-81de-4e93-9f8b-ebe55abc794f.png" alt="1">

<br/>

2. 호버 기능 구현 
  <img width="700" src="https://user-images.githubusercontent.com/86880916/225905733-9a9c1cf7-3c79-4a81-871b-52bdb7b64760.gif" alt="2" >

<br/>

3. 버튼을 통한 필터링
  <img width="700" src="https://user-images.githubusercontent.com/86880916/225906911-36e610e1-a962-4621-bda6-b7ed113c905f.gif" alt="3">
  
<br/>

4. 클릭을 통한 필터링 
  <img width="700" src="https://user-images.githubusercontent.com/86880916/225907960-ddeded25-0017-469b-8937-4a6fa7b53477.gif" alt="4" >
  
<br/>

5. area / bar 필터링 
  <img width="700" src="https://user-images.githubusercontent.com/86880916/225908698-f5dbc75f-6f3b-45ed-b9f9-abb3a29b2622.gif" alt="5" >
  
<br/>

## **작업 방식 안내**

1. 차트 라이브러리 recharts, apexcharts, chart.js 중 원하는 라이브러리를 선택합니다.
1. 각 요구사항마다 이슈를 생성합니다.
2. 요구사항에 해당하는 작업이 완료되면, 해당 이슈에 대한 커밋을 작성합니다.
3. 작성한 코드에 대해 리뷰를 진행하며 사용했던 차트 라이브러리에 대한 장단점을 설명합니다.
5. Best Practice를 선정하고, 개선사항을 토론합니다.
6. 개선사항에 맞게 코드를 수정합니다.
7. 모든 작업이 완료되면 최종 결과물을 도출합니다. 

<br/>

## 개선사항

1. Query string을 통한 필터링 구현 

- Query String을 이용한 필터링을 사용하면 URL에 필터링 정보가 들어 있기 때문에 새로그침 등의 이벤트가 발생했을 때도 필터링 정보가 유지된다는 장점이 있어 개선하기로 하였다. 

2. rechart를 사용해 차트 구현 

- rechart 라이브러리는 React에서 개발되었기 때문에 React 앱에서의 사용성이 뛰어나다 또한  빠르고 가벼우며, 데이터 양이 적을 때 빠르게 렌더링 된다는 장점이 있어 사용하기로 하였다.

3. 범례로 필터링 

- 범례를 사용하면 사용자가 여러 개의 데이터 시리즈를 비교하는 데 도움이 된다. 각 데이터 시리즈가 어떤 색상이나 패턴으로 표시되는지 파악할 수 있으므로, 두 개 이상의 데이터 시리즈를 쉽게 비교할 수 있다는 점에서 기능을 추가하기로 결정하였다.


<br/>

## convention

### **git Flow**

- branch : 기능별 작업
- main(master) : 최종 배포
<img src="https://user-images.githubusercontent.com/80516736/221170041-8b7d3762-1152-4407-a600-d9fe1e87e08d.png" width="500px">

<br/>

## **Commit Message Pre-fix**

- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 내부 문서 추가/수정
- style: 코드 스타일 수정
- refactor: 코드 리팩토링
- test: 테스트 추가/수정
- chore: 빌드 관련 코드 수정
- env: 초기 세팅

<br/>

## 회고 및 회의록

[회고](https://solwork.notion.site/3-1d7a2634809f4441b1a96e068d5938ba) <br/> 
[회의록](https://solwork.notion.site/cfbf7c8530ab43f29695dcac5923fd1c)<br/>
[기술 및 기능 리뷰](https://github.com/wanted-pre-7/pre-onboarding-9th-3-7/wiki/%EB%A6%AC%EB%B7%B0)

<br/>

## 팀원

<table>
<tbody>
<tr>
<td align="center"><a href="[https://github.com/yujiseok](https://github.com/yujiseok)"><img src="https://avatars.githubusercontent.com/u/83855636?v=4" width="100px;" alt=""/><br /><sub><b>유지석(팀장)</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/kimhw7](https://github.com/kimhw7)"><img src="https://avatars.githubusercontent.com/u/100066239?v=4" width="100px;" alt=""/><br /><sub><b>김현우</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/Everylisy](https://github.com/Everylisy)"><img src="https://avatars.githubusercontent.com/u/60170829?v=4" width="100px;" alt=""/><br /><sub><b>이영우</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/hansejun](https://github.com/hansejun)"><img src="https://avatars.githubusercontent.com/u/86880916?v=4" width="100px;" alt=""/><br /><sub><b>한세준</b></sub></a><br /></td>
<tr/>
<td align="center"><a href="[https://github.com/cwonho](https://github.com/cwonho)"><img src="https://avatars.githubusercontent.com/u/104820973?v=4" width="100px;" alt=""/><br /><sub><b>정원호</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/sol-pine](https://github.com/sol-pine)"><img src="https://avatars.githubusercontent.com/u/105091138?v=4" width="100px;" alt=""/><br /><sub><b>조해솔</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/ilgon0110](https://github.com/ilgon0110)"><img src="https://avatars.githubusercontent.com/u/82035356?v=4" width="100px;" alt=""/><br /><sub><b>김일곤</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/che-97](https://github.com/che-97)"><img src="https://avatars.githubusercontent.com/u/80516736?v=4" width="100px;" alt=""/><br /><sub><b>최하은</b></sub></a><br /></td>
<tr/>
</tbody>
</table>
