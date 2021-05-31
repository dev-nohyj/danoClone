# 다노 클론 코딩 프로젝트

## 개요

- 프로젝트 주제: 클론 코딩
- 개발인원 2명 (프론트엔드: 노유진 / 백엔드: 김남석)
- 개발 기간: 2021.05.17 ~ 2021.05.21
- 클라이언트: React, 서버: spring-boot 사용
- 형상관리 툴: git
- 리펙토링 전 프로젝트 링크: https://github.com/noh-yj/dano-clone
<hr/>
<br/>

## 프로젝트 특징

- 본 프로젝트는 팀 프로젝트로 특정 웹사이트(다노샵)를 선정하여 클론코딩을 진행함
- 타입스크립트를 이용해서 기존 다노 클론코딩 프로젝트를 리펙토링함
- UI 부분은 styled-components, material-ui, react-bootstrap(캐러셀)을 사용
- 컴포넌트 구성: 컴포넌트는 중간단위 및 페이지 단위로 구성했으며 디렉토리로 구분함
- 주요 기능: 로그인, 회원가입, 회원정보 수정 및 탈퇴, 장바구니 추가, 삭제, 조회, 주문내역 추가, 조회, 상품 조회 등
- 페이지 단위 컴포넌트 구성: 메인, 회원가입, 로그인, 마이페이지, 회원정보 수정, 제품 상세, 전체 제품, 인기 상품, 신상품, 다노제품, 알뜰상품, 무료배송, 다노샵 소개, 장바구니, 구매내역, 준비중 페이지
- DB구성
- user: {userName, nickName, password, email, phone}
- product: {productId, imageUrl, title, price}
- cart: {cartId, imageUrl, title, price, amount}
- order: {productId, imageUrl, title, price, amount}
<hr/>
<br/>

## 상태관리 패키지

- react-redux, redux (+ redux-actions, immer 사용)
- redux-middleware(redux-thunk)
- react-router-dom
- 클라이언트-서버 통신: axios 사용
<br>
<hr>

## Project Overview

### Login View

<details>
<summary>해당 이미지</summary>
<div markdown="1">

![danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled.png](danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled.png)

</div>
</details>
💬 로그인 페이지에서 구현한 기능
- 일반 로그인(JWT 토큰 방식 적용)
- 아이디가 존재하지 않거나 비밀번호가 틀릴경우 alert 알림
<br>
<br>
<hr>

### Signup View

<details>
<summary>해당 이미지</summary>
<div markdown="1">

![danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/_2021-05-31__10.40.46.png](danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/_2021-05-31__10.40.46.png)

</div>
</details>

💬 회원가입 페이지에서 구현한 기능

- 아이디, 비밀번호, 이메일, 휴대폰 번호 정규식으로 유효성 검증 및 공란 시 알림 기능
<br>
<br>
<hr>

### Main Page

<details>
<summary>해당 이미지</summary>
<div markdown="1">

![danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%201.png](danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%201.png)

</div>
</details>

💬 메인 페이지에서 구현한 기능

- 크롤링한 데이터 조회
  - 인기상품, 무료배송상품의 경우 해당하는 데이터를 조회했으며 그 외 상품들은 slice를 이용해 조회함
- 캐러셀의 경우 BootStrap을 이용함
<br>
<br>
<hr>

### Detail Page

<details>
<summary>해당 이미지</summary>
<div markdown="1">

![danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%202.png](danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%202.png)

</div>
</details>

💬 상세 페이지에서 구현한 기능

- 상품 수량을 선택할 수 있는 카운팅 기능(UseState Hook을 이용)
- 장바구니 담기 및 바로 구매하기 기능은 로그인 유저만 이용할 수 있게 했으며 비로그인 유저는 로그인 유도 알림창을 띄움(쿠키에 저장된 토큰으로 로그인 여부 판단)
<br>
<br>
<hr>

### Category Page

<details>
<summary>해당 이미지</summary>
<div markdown="1">

![danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%203.png](danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%203.png)

![danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%204.png](danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%204.png)

![danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%205.png](danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%205.png)

![danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%206.png](danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%206.png)

![danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%207.png](danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%207.png)

![danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%208.png](danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%208.png)

![danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%209.png](danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%209.png)

![danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%2010.png](danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%2010.png)

</div>
</details>

💬 카테고리 페이지에서 구현한 기능

- 전체보기, 인기상품, 신상품, 다노상제품, 알뜰 상품, 무료 배송의 경우 각각 api통신을 통해 조회
- 상품 유형별 및 공지사항 카테고리는 미구현 페이지 처리(개발 기간 고려)
<br>
<br>
<hr>

### Cart Page

<details>
<summary>해당 이미지</summary>
<div markdown="1">

![danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%2011.png](danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%2011.png)

</div>
</details>

💬 장바구니 페이지에서 구현한 기능

- 장바구니 항목 조회
- 개별 삭제 기능(CartId를 파라미터에 헤더에 토큰을 실어 서버에 보내 삭제)
- 구매하기 버튼을 누르면 장바구니에 있는 상품들이 전부 주문 내역으로 이동 및 알림
<br>
<br>
<hr>

### Order Page

<details>
<summary>해당 이미지</summary>
<div markdown="1">

![danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%2012.png](danoclone%20-%20image%209e0f8f3e2ff1419c859908f2c4ccbbf0/Untitled%2012.png)

</div>
</details>

💬 주문 내역 페이지에서 구현한 기능

- 주문 목록 조회 - 해당 유저가 구매한 상품 조회 (헤더에 토큰을 담아 api 통신)
