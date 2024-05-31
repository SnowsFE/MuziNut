"use client";
import React from "react";
import styled from "styled-components";

const event = () => {
  return (
    <Eventbox>
      <Eventtap>
        <ul>
          <li>진행중인 이벤트 </li>
          <li>종료된 이벤트</li>
        </ul>
      </Eventtap>
      <Eventlist>
        {Array.from({ length: 9 }).map((_, index) => (
          <GridItem key={index}>아이템 {index + 1}</GridItem>
        ))}
      </Eventlist>
    </Eventbox>
  );
};

// 이벤트 페이지 디자인
const Eventbox = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Eventtap = styled.div`
  padding-top: 88px;
  ul {
    display: flex;
    gap: 20px;
    padding: 0;
  }
  li {
    list-style: none;
  }
`;

const Eventlist = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  height: 260px;
`;

export default event;
