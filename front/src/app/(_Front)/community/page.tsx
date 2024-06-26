"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Nuts from "../../../../public/images/Nuts.png";

const Main: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("community");

  return (
    <MainContainer>
      <Header>
        <HeaderIcon>
          <Image src={Nuts} alt="Nuts"></Image>
        </HeaderIcon>
        <HeaderCopy>
          <ul>
            <li>뮤지넛</li>
            <li>여러분의 음악적 재능을 뽐내주세요!</li>
          </ul>
        </HeaderCopy>
      </Header>
      <SelectBar>
        <SelectContainer>
          <StyledLink
            href={"/community"}
            onClick={() => setSelectedTab("community")}
          >
            <SelectItem selected={selectedTab === "community"}>Home</SelectItem>
          </StyledLink>
          <StyledLink
            href={"/community/free-boards"}
            onClick={() => setSelectedTab("free-boards")}
          >
            <SelectItem selected={selectedTab === "free-boards"}>
              자유 게시판
            </SelectItem>
          </StyledLink>
          <StyledLink
            href={"/community/music-boards"}
            onClick={() => setSelectedTab("music-boards")}
          >
            <SelectItem selected={selectedTab === "music-boards"}>
              음악 게시판
            </SelectItem>
          </StyledLink>
          <StyledLink
            href={"/community/request-boards"}
            onClick={() => setSelectedTab("request-boards")}
          >
            <SelectItem selected={selectedTab === "request-boards"}>
              게시판 요청
            </SelectItem>
          </StyledLink>
          <StyledLink
            href={"/community/recruit-boards"}
            onClick={() => setSelectedTab("recruit-boards")}
          >
            <SelectItem selected={selectedTab === "recruit-boards"}>
              모집
            </SelectItem>
          </StyledLink>
        </SelectContainer>
      </SelectBar>
    </MainContainer>
  );
};

export default Main;

// 메인 전체를 감싸는 컨테이너
const MainContainer = styled.div``;

// 헤더
const Header = styled.div`
  display: flex;
`;

// 헤더 아이콘
const HeaderIcon = styled.div`
  img {
    margin-right: 24px;
    width: 86px;
    height: 86px;
    border-radius: 16px;
    background-color: var(--text-color);
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  }
`;

// 헤더 카피
const HeaderCopy = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
  }

  li:nth-child(1) {
    font-size: 30px;
  }

  li:nth-child(2) {
    font-size: 14px;
  }
`;

// -------------------------------------------------------------------------------------------------------
// 선택 네비바
const SelectBar = styled.div`
  padding-right: calc(50% - 642px);
  padding-left: calc(50% - 642px);
  padding-top: 16px;
  display: flex;
  gap: 10px;
  font-size: 16px;
`;

// 나란히 하기위한 Flex 박스 컨테이너
const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  border-bottom: 1px solid #ccc;
  position: relative;
`;

// 선택된 항목에 하단 밑줄을 추가하는 스타일
const SelectItem = styled.div<{ selected: boolean }>`
  padding-bottom: 10px;
  position: relative;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--text-color);
    transform: scaleX(${(props) => (props.selected ? 1 : 0)});
    transition: transform 0.3s ease;
  }
`;

// 링크 태그 스타일을 주기위한 요소 추가
const StyledLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
`;
// -------------------------------------------------------------------------------------------------------
