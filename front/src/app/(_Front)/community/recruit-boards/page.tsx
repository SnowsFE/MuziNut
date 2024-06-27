"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Headers } from "../header";

const RecruitBoards: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("recruit-boards");

  return (
    <RecruitBoardsContainer>
      <Headers />
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
    </RecruitBoardsContainer>
  );
};

export default RecruitBoards;

// 마이페이지 전체를 감싸는 컨테이너
const RecruitBoardsContainer = styled.div``;

// -------------------------------------------------------------------------------------------------------
// 메인, 라운지 선택바
const SelectBar = styled.div`
  padding-right: calc(50% - 642px);
  padding-left: calc(50% - 642px);
  padding-top: 16px;
  display: flex;
  gap: 10px;
  font-size: 16px;
`;

// 메인 라운지를 나란히 하기위한 Flex 박스 컨테이너
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

// 메인 라운지 링크 태그 스타일을 주기위한 요소 추가
const StyledLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
`;
// -------------------------------------------------------------------------------------------------------
