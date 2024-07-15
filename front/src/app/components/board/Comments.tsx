import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { redirect } from "next/navigation";
import { LikeIcon, ReplyIcon } from "@/app/components/icon/icon";
import Reply from "@/app/components/board/Reply";

const Comments = () => {
  const [comment, setComment] = useState(""); //사용자가 작성하는 댓글
  const [comments, setComments] = useState([]); //서버로 부터 받아온 댓글들 (대댓글 포함)
  const [replyDisplay, setReplyDisplay] = useState(false); //redux 사용해서 적절히 적용

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
          내용이다------------------------------------------------------
          -------------------------------------------------------------------------------------------
        </Content>
        <Option>
          <LikeIcon /> 300
          <span> | </span>
          <ReplyIcon></ReplyIcon>
        </Option>
      </CommentContainer>
      <Reply></Reply>
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
  /* padding-left: 30px; */
  padding-right: 150px;
`;

//댓글 좋아요 버튼
const Option = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  gap: 10px;
  border: solid;
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
  /* margin-right: 10px; */
  flex-shrink: 0; /* 프로필 이미지 고정 */
  padding-right: 10px;
  padding-left: 10px;
`;

// 프로필 정보
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
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
