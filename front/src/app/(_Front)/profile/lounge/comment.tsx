import React, { useState } from "react";
import styled from "styled-components";
import { commentNumber } from "../../mypick/bestartist";
import { LikeIcon, CommentIcon } from "@/app/components/icon/icon";

interface Reply {
  profile: string;
  name: string;
  bodytext: string;
  time: string;
}

interface CommentProps {
  id: number;
  name: string;
  profile: string;
  time: string; // 타임스탬프 형식으로 변경
  bodytext: string;
  like: number;
  comment: number;
  replies: Reply[];
}

const commentData: CommentProps[] = [
  {
    id: 0,
    name: "",
    profile: "",
    time: "",
    bodytext: "",
    like: 0,
    comment: 0,
    replies: [],
  },
  {
    id: 0,
    name: "",
    profile: "",
    time: "",
    bodytext: "",
    like: 0,
    comment: 0,
    replies: [],
  },
];

// 타임스탬프를 사람이 읽기 쉬운 형식으로 변환하는 함수
const timeAgo = (timestamp: string): string => {
  const now = new Date();
  const postTime = new Date(timestamp);

  const diffTime = now.getTime() - postTime.getTime();
  const diffMinutes = Math.floor(diffTime / (1000 * 60));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffMinutes < 60) {
    return `${diffMinutes}분 전`;
  } else if (diffHours < 24) {
    return `${diffHours}시간 전`;
  } else {
    return `${diffDays}일 전`;
  }
};

const handleCommentClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.blur(); // 댓글 등록 버튼에서 포커스 효과 제거를 도와주는 효과
  alert("댓글이 등록되었습니다!");
};

const OpenComment: React.FC = () => {
  const [comments, setComments] = useState(commentData);
  const [replyFormsVisible, setReplyFormsVisible] = useState<boolean[]>(
    commentData.map(() => false) // 모든 리플폼을 처음부터 보이도록 설정
  );
  const [newReplies, setNewReplies] = useState<string[]>(
    commentData.map(() => "")
  );

  const handleReplyClick = (index: number) => {
    setReplyFormsVisible((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const handleReplyChange = (index: number, value: string) => {
    setNewReplies((prev) =>
      prev.map((reply, i) => (i === index ? value : reply))
    );
  };

  const handleReplySubmit = (index: number) => {
    const newReply = newReplies[index];
    if (newReply.trim()) {
      const newReplyData: Reply = {
        profile: "",
        name: "",
        bodytext: newReply,
        time: new Date().toISOString(),
      };

      const updatedComments = comments.map((comment, i) =>
        i === index
          ? { ...comment, replies: [...comment.replies, newReplyData] }
          : comment
      );

      setComments(updatedComments);
      setNewReplies((prev) =>
        prev.map((reply, i) => (i === index ? "" : reply))
      );
    }
  };

  return (
    <BestCommentContainerList>
      <BestCommentContainerBox>
        <BestComment>댓글 {commentNumber.comment}</BestComment>
        <BestCommentContainer>
          <input type="text" placeholder="댓글을 입력하세요"></input>
          <BestCommentBox onClick={handleCommentClick}>등록</BestCommentBox>
        </BestCommentContainer>
      </BestCommentContainerBox>
      {comments.map((comment, index) => (
        <BestCommentList key={comment.id}>
          <BestCommentHeader>
            <BestCommentProfile src={comment.profile} />
            <BestCommentNickname>{comment.name}</BestCommentNickname>
            <BestCommentTime>{timeAgo(comment.time)}</BestCommentTime>
          </BestCommentHeader>
          <BestCommentBody>
            <BestCommentText>{comment.bodytext}</BestCommentText>
            <BestCommentActions>
              <BestCommentLike>
                <LikeIcon /> {comment.like}
              </BestCommentLike>
              <BestCommentComment onClick={() => handleReplyClick(index)}>
                <CommentIcon />
                {comment.comment}
              </BestCommentComment>
              <BestCommentReport>🚨</BestCommentReport>
            </BestCommentActions>
            {replyFormsVisible[index] && (
              <ReplyForm>
                <input
                  type="text"
                  placeholder="대댓글을 입력하세요"
                  value={newReplies[index]}
                  onChange={(e) => handleReplyChange(index, e.target.value)}
                />
                <BestCommentBox onClick={() => handleReplySubmit(index)}>
                  등록
                </BestCommentBox>
              </ReplyForm>
            )}
            {comment.replies.map((reply) => (
              <Reply key={reply.profile}>
                <ReplyHeader>
                  <ReplyProfile src={comment.profile} />
                  <ReplyNickname>{reply.name}</ReplyNickname>
                  <ReplyTime>{timeAgo(reply.time)}</ReplyTime>
                </ReplyHeader>
                <ReplyBody>{reply.bodytext}</ReplyBody>
              </Reply>
            ))}
          </BestCommentBody>
        </BestCommentList>
      ))}
    </BestCommentContainerList>
  );
};

export { OpenComment };

// 베스트 픽 댓글 컨테이너를 감싸는 박스와 댓글 목록을 합친 박스
const BestCommentContainerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 베스트 픽 댓글 목록
const BestCommentList = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 40px 50px 0 50px;

  position: relative; /* 부모 요소로부터 상대적 위치 설정 */

  /* ::after 가상 요소를 사용하여 하단에 선 추가 */
  &::after {
    content: ""; /* 가상 요소의 내용을 빈 문자열로 설정 */
    position: absolute; /* 절대적 위치 설정 */
    bottom: -1px; /* 아래쪽에 배치 */
    width: 92.5%; /* 가로 너비를 100%로 설정 */
    height: 1px; /* 선의 높이(두께)를 설정 */
    background-color: #ccc; /* 선의 색상 설정 */
  }
`;

// 베스트 픽 댓글 목록 헤더 [ 프로필, 닉네임, 시간 ]
const BestCommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  :first-child {
    margin-right: 2px;
  }
`;

// 베스트 픽 댓글 작성자 프로필
const BestCommentProfile = styled.img<{ src: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;

// 베스트 픽 댓글 작성자 닉네임
const BestCommentNickname = styled.div`
  font-size: 13px;
`;

// 베스트 픽 댓글 작성 시간
const BestCommentTime = styled.div`
  font-size: 13px;
`;

// 베스트 픽 댓글 본문
const BestCommentBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

// 베스트 픽 댓글 본문
const BestCommentText = styled.div`
  padding: 5px 0;
  font-size: 14px;
  font-family: "esamanru Medium";
  margin-left: 33px;
`;

// 베스트 픽 댓글 작동
const BestCommentActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

// 베스트 픽 댓글 좋아요
const BestCommentLike = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 7px;

  :first-child {
    margin-top: 1px;
  }
`;

// 베스트 픽 댓글 좋아요
const BestCommentComment = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  font-size: 14px;
  gap: 7px;
  margin-left: 18px;

  :first-child {
    margin-top: 3px;
  }

  cursor: pointer; /* 대댓글 아이콘에 커서 포인터 추가 */
`;

// 베스트 픽 댓글 신고
const BestCommentReport = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// 베스트 픽 댓글 컨테이너를 감싸는 박스
const BestCommentContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  padding-top: 30px;
`;

// 베스트 픽 댓글 수
const BestComment = styled.div`
  display: flex;
  align-self: flex-start;
  font-size: 18px;
  padding: 0 0 10px 0;
  cursor: pointer;
`;

// 베스트 픽 댓글 컨테이너
const BestCommentContainer = styled.div`
  width: 98%;
  height: auto; /* 높이를 자동으로 조정 */
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 15px;
  display: flex;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;

  input {
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
    color: var(--text-color);
    line-height: 1.5;
  }

  &:focus-within {
    box-shadow: 0 0 0 2px #8dd9b9;
    border-color: transparent;
  }
`;

// 베스트 픽 댓글 등록 버튼
const BestCommentBox = styled.button`
  width: 5%;
  padding: 10px 15px;
  border: 1px solid #1bd185;
  border-radius: 12px;
  background-color: var(--bg-color);
  color: var(--text-color);
  cursor: pointer;
  font-family: "esamanru Light";

  &:hover {
    background-color: #16be78;
    transition: 0.3s ease;
  }

  &:focus {
    outline: none; /* 포커스 스타일 제거, 필요시 커스텀 스타일 추가 */
  }
`;

// 대댓글 폼 스타일
const ReplyForm = styled.div`
  display: flex;
  padding: 10px 0;
  input {
    width: 100%;
    outline: none;
    border: none;
    padding: 10px 0;
    font-size: 14px;
    background: transparent;
    color: var(--text-color);
    line-height: 1.5;
  }
`;

// 대댓글 스타일
const Reply = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  padding-left: 20px;
  border-left: 2px solid #ddd;
`;

const ReplyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const ReplyProfile = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
`;

const ReplyNickname = styled.div`
  font-size: 10px;
`;

const ReplyTime = styled.div`
  font-size: 10px;
`;

const ReplyBody = styled.div`
  margin-left: 27px;
  margin-top: 7px;
  font-size: 14px;
  font-family: "esamanru Medium";
`;
