import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { redirect } from "next/navigation";
import { LikeIcon, ReplyIcon } from "@/app/components/icon/icon";

const Comments = () => {
  const [comment, setComment] = useState(""); //사용자가 작성하는 댓글
  const [comments, setComments] = useState([]); //서버로 부터 받아온 댓글들 (대댓글 포함)

  return (
    <>
      <CommentContainer>
        <ProfileImage src={"/test"} alt="프로필 이미지" />
        <ProfileInfo>
          <ProfileName>writer</ProfileName>
          <TimeViewsContainer>
            <Time>createdDt</Time>
          </TimeViewsContainer>
        </ProfileInfo>
        <Content>
          <ReplyIcon />
          내용이다
          띄어쓰기------------------------------------------------------------------------------------
          ---------------------------------------------------------------------
        </Content>
        <LikeButton>
          <LikeIcon /> 300
        </LikeButton>
      </CommentContainer>
    </>
  );
};

export default Comments;

// 댓글 컨테이너
const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  font-family: "esamanru Medium";
`;

//댓글 내용
const Content = styled.span`
  padding-left: 30px;
  padding-right: 150px;
`;

//댓글 좋아요 버튼
// 좋아요 버튼
const LikeButton = styled.button`
  display: flex;
  position: absolute;
  right: 10px;
  gap: 10px;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 12px;
  align-items: center;
  font-family: "esamanru Medium";
`;

// 프로필 이미지
const ProfileImage = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 10px;
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
