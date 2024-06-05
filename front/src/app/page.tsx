"use client";
import styled from "styled-components";
const MainPage = () => {
  return (
    <div>
      <a href="/profile/userid">
        <Main>남이 보는 마이페이지</Main>
      </a>
      <a href="/profile">
        <Main>내가 보는 마이페이지</Main>
      </a>
    </div>
  );
};

export default MainPage;

const Main = styled.div`
  padding-top: 88px;
`;
