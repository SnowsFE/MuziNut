import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { redirect } from "next/navigation";
import { LikeIcon, ReplyIcon } from "@/app/components/icon/icon";
import { useOutData } from "./AxiosData";

// 대댓글 내용
const Reply = () => {
  const { replyData } = useOutData();
  return (
    <>
      <ReplyContainer>
        <ReplyIcon />
        <ProfileImage src={replyData.ReplyProfileImg} alt="프로필 이미지" />
        <ProfileInfo>
          <ProfileName>{replyData.ReplyWriter}</ProfileName>
          <TimeViewsContainer>
            <Time>{replyData.ReplycreatedDt}</Time>
          </TimeViewsContainer>
        </ProfileInfo>
      </ReplyContainer>
    </>
  );
};

export default Reply;

// 댓글 컨테이너
const ReplyContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  font-family: "esamanru Medium";
`;

// 프로필 이미지
const ProfileImage = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 10px;
  flex-shrink: 0; /* 프로필 이미지 고정 */
  padding-left: 10px;
`;

// 프로필 정보
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

// 프로필 이름
const ProfileName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

// 시간과 조회수 컨테이너
const TimeViewsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

// 업로드 시간
const Time = styled.div`
  font-size: 12px;
  color: #888;
`;
