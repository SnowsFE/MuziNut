"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { StarIcon } from "@/app/components/darkmode/icon";

const Vote: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    console.log("Input Value:", inputValue);
    // 데이터를 서버로 보내거나 다른 작업을 수행할 수 있습니다.
  };

  return (
    <VoteContainer>
      <VoteSearch>
        <VoteInputMargin>
          <StarIcon />
          <StyledInput
            type="text"
            placeholder="나의 아티스트 찾기"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Search onClick={handleSearchClick}>검색</Search>
        </VoteInputMargin>
      </VoteSearch>
    </VoteContainer>
  );
};

export default Vote;

const VoteContainer = styled.div`
  padding-right: calc(50% - 642px);
  padding-left: calc(50% - 642px);
  padding-top: 88px;
  display: flex;
  justify-content: center;

  &:focus-within {
    border: none; // 보더 없애기
  }
`;

const VoteSearch = styled.div`
  position: relative;
  border: 2px solid #eeeeee;
  border-radius: 12px;
  width: 50%;
  height: 50px;
  display: flex;
  background-color: #ffffff;

  &:focus-within {
    box-shadow: 0 0 0 2px rgba(243, 239, 0, 0.5); // 포커스 테두리 효과
    border-color: transparent; // 보더 색상을 투명하게 변경
  }
`;

const VoteInputMargin = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 7px;
  border: none;
  width: 300px;
  &:focus {
    outline: none;
  }
`;

const Search = styled.button`
  border: 1px solid #333;
  border-radius: 5px;
  padding: 7px 15px;

  &:hover {
    transform: scale(1.01);
    background-color: #f4ffdf;
  }
`;
