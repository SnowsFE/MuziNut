import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const EventBody: React.FC = () => {
  const [selected, setSelected] = useState<string>("인기순");

  const handleSelect = (option: string) => {
    setSelected(option);
  };

  return (
    <EventContainer>
      <EventTitle>이벤트</EventTitle>
      <EventController>
        <EventOptions>
          <ul>
            {["인기순", "최신순", "좋아요순"].map((option, index) => (
              <li key={option}>
                <EventOption
                  isSelected={selected === option}
                  onClick={() => handleSelect(option)}
                >
                  {selected === option && "✔ "}
                  {option}
                </EventOption>
                {index < 2 && <Dot />}
              </li>
            ))}
          </ul>
        </EventOptions>
        <SearchContainer>
          <ControllerSearchTitle>제목</ControllerSearchTitle>
          <ControllerSearch placeholder="이벤트 검색" />
          <SearchIcon />
        </SearchContainer>
      </EventController>
    </EventContainer>
  );
};

export default EventBody;

// 이벤트 페이지 가장 바깥을 감싸는 컨테이너
const EventContainer = styled.div``;

// 이벤트 페이지 헤더 제목
const EventTitle = styled.div`
  padding: 26px 24px 25px;
  border-radius: 12px;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.06);
  margin-top: 24px;
  background-color: #008d00;
`;

// 이벤트 선택바 인기순, 최신순, 좋아요순, 제목 [ 검색하기 부분 ]
const EventController = styled.div`
  padding: 10px 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EventOptions = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
  }

  li {
    display: flex;
    align-items: center;
  }
`;

// 이벤트 선택바 옵션
const EventOption = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "#16be78" : "inherit")};
  font-family: ${(props) =>
    props.isSelected ? "esamanru Bold" : "esamanru Medium"};
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => (props.isSelected ? "3px" : "0")};
`;

// 옵션 사이의 작은 동그라미
const Dot = styled.div`
  width: 5px;
  height: 5px;
  background-color: var(--text-color);
  border-radius: 50%;
  margin: 0 10px;
`;

// 검색 컨테이너
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ControllerSearchTitle = styled.div`
  background-color: #e9ebf1;
  color: black;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 14px;
  font-family: "esamanru Medium";
`;

const ControllerSearch = styled.input`
  background-color: #e9ebf1;
  color: black;
  width: 250px;
  padding: 10px 10px;
  padding-right: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-family: "esamanru Medium";

  &:focus {
    box-shadow: 0 0 0 2px #8dd9b9;
    border-color: #8dd9b9;
    outline: none;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 10px;
  color: #888;
  cursor: pointer;
`;
