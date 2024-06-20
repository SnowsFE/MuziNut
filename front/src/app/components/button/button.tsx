import React, { useState } from "react";
import styled from "styled-components";

const FollowButton: React.FC = () => {
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setButton(!button);
  };

  return (
    <>
      {button ? (
        <FollowBefore onClick={handleClick}>팔로우</FollowBefore>
      ) : (
        <FollowAfter onClick={handleClick}>취소</FollowAfter>
      )}
    </>
  );
};

export default FollowButton;

const FollowBefore = styled.button`
  background-color: white;
  border: 1px solid #1bb373;
  border-radius: 50px;
  padding: 10px;
  margin-top: 16px;

  &:hover {
    transform: scale(1.05);
    color: black;
    cursor: pointer;
  }

  transition: transform 0.3s ease; /* 스케일 변화에 대한 부드러운 전환 효과 추가 */
`;

const FollowAfter = styled.button`
  background-color: white;
  border: 1px solid #1bb373;
  border-radius: 50px;
  padding: 10px;
  margin-top: 16px;

  &:hover {
    transform: scale(1.05);
    color: black;
    cursor: pointer;
  }

  transition: transform 0.3s ease; /* 스케일 변화에 대한 부드러운 전환 효과 추가 */
`;
