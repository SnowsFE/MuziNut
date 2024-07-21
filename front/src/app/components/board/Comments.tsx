import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LikeIcon, ReplyIcon } from "@/app/components/icon/icon";
import Reply from "@/app/components/board/Reply";
import WriteReplyForm from "../board/WriteReplyForm";
import axios from "axios";

// 댓글 컴포넌트
interface CommentProps {
  profileImg: string;
  writer: string;
  createdDt: string;
  contents: string;
  isLike: boolean;
  likeCount: number;
}

const Comments: React.FC<CommentProps> = ({}) => {
  const [comment, setComment] = useState({}); //사용자가 작성하는 댓글
  const [comments, setComments] = useState({
    profileImg: "",
    writer: "",
    createdDt: "",
    contents: "",
    isLike: false,
    likeCount: 0,
  }); //서버로 부터 받아온 댓글들 (대댓글 포함)
  let [modal, setModal] = useState(false); //대댓글 모달창

  const likeButtonHandler = async () => {
    alert("댓글 좋아요 클릭");
    // Todo 댓글에 대한 pk 를 받아와서 좋아요 전송할 것
    const response = await axios
      .post(`http://localhost:8080/comment-like/${comment}`, {
        headers: { Authorization: `Bearer token` },
      })
      .catch(function (error) {
        if (error.response.data.status == 401) {
          alert("만료된 토큰입니다"); //Todo 리프레시 토큰 전송
        }
      });
  };

  const replyButtonHandler = () => {
    modal == true ? setModal(false) : setModal(true);
  };

  return (
    <>
      <CommentContainer>
        <ProfileImage
          src={`data:image/png;base64,${comments.profileImg}`}
          alt="프로필 이미지"
        />
        <ProfileInfo>
          <ProfileName>{comments.writer}</ProfileName>
          <TimeViewsContainer>
            <Time>{comments.createdDt}</Time>
          </TimeViewsContainer>
        </ProfileInfo>
        <Content>{comments.contents}</Content>
        <Option>
          <LikeButton onClick={likeButtonHandler}>
            <LikeIcon />
            {comments.isLike ? true : false}
            <LikeCount>{comments.likeCount}</LikeCount>
          </LikeButton>
          <span> | </span>
          <ReplyButton onClick={replyButtonHandler}>
            <ReplyIcon></ReplyIcon>
          </ReplyButton>
        </Option>
        {/* 대댓글 모달창 */}
        {modal == true ? <WriteReplyForm></WriteReplyForm> : null}
        {/* 대댓글 리스트 */}
      </CommentContainer>

      <Reply />
    </>
  );
};

export default Comments;

// 댓글 컨테이너
const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
  font-family: "esamanru Medium";
`;

//댓글 내용
const Content = styled.span`
  padding-right: 178px;
  margin-top: 7px;
`;

//댓글 좋아요 버튼
const Option = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  bottom: 1px;
  gap: 10px;
  border-radius: 20px;
  padding: 10px 10px;
  margin-bottom: 15px;
  background-color: #f0f0f0;
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

// 좋아요 버튼
const LikeButton = styled.button`
  display: flex;
  border: 0;
  background-color: transparent;
  align-items: center;
  font-family: "esamanru Medium";
`;

const LikeCount = styled.span`
  padding-left: 5px;
`;

const ReplyButton = styled.button`
  display: flex;
  border: 0;
  background-color: transparent;
  align-items: center;
  cursor: pointer;
`;
