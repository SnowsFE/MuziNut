import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Submit } from "@/app/components/icon/icon";
import {
  MiniViewIcon,
  LikeIcon,
  BookMarkIcon,
} from "@/app/components/icon/icon";

const WriteCommentForm = () => {
  const [comment, setComment] = useState(""); //작성할 댓글
  const [commentLength, setCommentLength] = useState(0); // 댓글 길이 상태 추가

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    // 최대 글자 수 체크
    if (text.length <= 500) {
      setComment(text);
      setCommentLength(text.length); // 입력된 글자 수 업데이트
    }
  };

  const handleCommentSubmit = async () => {
    if (comment.trim()) {
      const token = localStorage.getItem("userToken");
      if (token) {
        const response = await fetch("/api/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ comment }),
        });
        if (response.ok) {
          setComment("");
          setCommentLength(0); // 댓글 제출 후 길이 초기화
          // 댓글 등록 후 추가적인 작업 (예: 댓글 목록 갱신)
        } else {
          alert("댓글 등록에 실패했습니다.");
        }
      } else {
        alert("로그인이 필요합니다.");
      }
    }
  };

  return (
    <CommentsSection>
      {" "}
      {/* 댓글 작성 폼 */}
      <CommentsCount>댓글 0개</CommentsCount>
      <CommentInputContainer>
        <CommentInput
          value={comment}
          onChange={handleCommentChange}
          placeholder="댓글을 입력하세요..."
          maxLength={500} // 최대 입력 글자 수
        />
        <CommentSubmitButton onClick={handleCommentSubmit}>
          <Submit />
        </CommentSubmitButton>
        <CommentLength>{commentLength}/500</CommentLength>
      </CommentInputContainer>
    </CommentsSection>
  );
};

export default WriteCommentForm;

const CommentsSection = styled.div`
  margin-top: 20px;
  font-family: "esamanru Medium";
`;
const CommentsCount = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const CommentInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 12px;
  border: 1px solid #ddd;
  padding: 10px;
  font-family: "esamanru Light";
  font-size: 14px;
  line-height: 17px;
  resize: none;
  outline: none;

  &:focus {
    border-color: #b8b8b8;
  }
`;

// 댓글 제출 버튼
const CommentSubmitButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

// 댓글 길이 표시
const CommentLength = styled.div`
  position: absolute;
  right: 45px;
  bottom: 13px;
  font-size: 12px;
  padding: 10px;
  color: #888;
`;