import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReplyIcon } from "@/app/components/icon/icon";
import Reply from "@/app/components/board/Reply";
import WriteReplyForm from "../board/WriteReplyForm";
import axios from "axios";
import { getToken } from "@/app/common/common";
import AxiosURL from "@/app/axios/url";
import { CommentLikeIcon } from "../LikePost/like";

// 댓글 컴포넌트
interface CommentProps {
  profileImg: string;
  writer: string;
  createdDt: string;
  content: string;
  // boardLikeStatus: boolean;
  likeCount: number;
  replies: any[];
  commentId: any;
}

const Comments: React.FC<CommentProps> = ({
  profileImg,
  writer,
  createdDt,
  content,
  // boardLikeStatus,
  likeCount,
  commentId,
  replies,
}) => {
  let [modal, setModal] = useState(false); //대댓글 모달창

  // const authToken = getToken();

  // const likeButtonHandler = async () => {
  //   try {
  //     const response = await axios.post(
  //       `${AxiosURL}/comment-like/${commentId}`,
  //       {},
  //       {
  //         headers: {
  //           Authorization: `${authToken}`,
  //         },
  //       }
  //     );
  //     // 성공적으로 요청이 완료된 경우의 처리
  //     console.log(response.data);
  //   } catch (error) {
  //     // error가 AxiosError인지 확인하고 타입을 명시적으로 변환
  //     if (axios.isAxiosError(error)) {
  //       if (error.response && error.response.status === 401) {
  //         alert("만료된 토큰입니다"); // Todo: 리프레시 토큰 전송
  //       } else if (error.response && error.response.status === 403) {
  //         alert("권한이 없습니다");
  //       } else {
  //         console.error("Error:", error);
  //       }
  //     } else {
  //       // AxiosError가 아닌 다른 에러 처리
  //       console.error("Unexpected error:", error);
  //     }
  //   }
  // };

  const replyButtonHandler = () => {
    modal == true ? setModal(false) : setModal(true);
  };

  return (
    <>
      <CommentContainer>
        <ProfileImage
          src={`data:image/png;base64,${profileImg}`}
          alt="프로필 이미지"
        />
        <ProfileInfo>
          <ProfileName>{writer}</ProfileName>
          <TimeViewsContainer>
            <Time>{createdDt}</Time>
          </TimeViewsContainer>
        </ProfileInfo>
        <Content>{content}</Content>
        <Option>
          <LikeButton>
            <CommentLikeIcon commentId={commentId} />
            <LikeCount>{likeCount}</LikeCount>
          </LikeButton>
          <span> | </span>
          <ReplyButton onClick={replyButtonHandler}>
            <ReplyIcon></ReplyIcon>
          </ReplyButton>
        </Option>
        {/* 대댓글 모달창 */}
        {modal == true ? (
          <WriteReplyForm commentId={commentId}></WriteReplyForm>
        ) : null}
        {/* 대댓글 리스트 */}
      </CommentContainer>

      {replies.map((reply, index) => (
        <Reply
          key={index}
          id={reply.id}
          content={reply.content}
          replyWriter={reply.replyWriter}
          replyProfileImg={reply.replyProfileImg}
          createdDt={reply.createdDt}
        />
      ))}
    </>
  );
};

export default Comments;

// 댓글 컨테이너
const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  font-family: "esamanru Medium";
`;

//댓글 내용
const Content = styled.span`
  margin-top: 19px;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
`;

//댓글 좋아요 버튼
const Option = styled.div`
  display: flex;
  gap: 10px;
  border-radius: 20px;
  padding: 6px 8px;
  background-color: #f0f0f0;
  cursor: pointer;
  font-size: 12px;
  align-items: center;
  font-family: "esamanru Medium";
  margin-left: auto;
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
  padding-right: 10px;
  gap: 5px;
  min-width: 200px;
  max-width: 200px;
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
