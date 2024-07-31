"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LikeIcon } from "@/app/components/LikePost/like";
import Comments from "@/app/components/board/Comments";
import WriterProfileInfo from "@/app/components/board/WriterProfileInfo";
import WriteCommentForm from "@/app/components/board/WriteCommentForm";
import AxiosURL from "@/app/axios/url";
import { useParams } from "next/navigation";
import axios from "axios";

interface BoardsDataProps {
  id: number;
  title: string;
  quillFilename: string;
  boardLikeStatus: boolean;
  likeCount: number;
}

interface CommentProps {
  commentProfileImg: string;
  commentWriter: string;
  id: any;
  createdDt: string;
  content: string;
  boardLikeStatus: boolean;
  likeCount: number;
  replies: any[];
}

interface QuillProps {
  Quill: string;
}

const PostBox: React.FC = () => {
  const [boardsData, setBoardsData] = useState<BoardsDataProps>({
    id: 0,
    title: "",
    quillFilename: "",
    boardLikeStatus: false,
    likeCount: 0,
  });

  const [profileInfo, setProfileInfo] = useState({
    profileImg: "",
    writer: "",
    writerId: "",
    createdDt: "",
    view: 0,
    isBookmark: false,
  });

  const [commentForm, setCommentForm] = useState({
    comments: 0,
  });

  const [QuillData, setQuillData] = useState<QuillProps>({
    Quill: "",
  });

  const [comments, setComments] = useState<CommentProps[]>([]);
  const [boardId, setBoardId] = useState<number | undefined>(undefined);
  const params = useParams();
  const id: any = params?.id;

  useEffect(() => {
    const DetailBoards = async () => {
      try {
        if (id) {
          const res = await axios.get(
            `${AxiosURL}/community/free-boards/${id}`,
            {
              responseType: "text",
            }
          );

          const boundary = res.data.split("\r\n")[0];
          const parts = res.data.split(boundary);

          let jsonData = "";
          for (let part of parts) {
            if (part.includes("Content-Type: application/json")) {
              jsonData = part.split("\r\n\r\n")[1];
              break;
            }
          }

          if (!jsonData) throw new Error("JSON 데이터가 없습니다.");

          const data = JSON.parse(jsonData.trim());

          console.log("받은 데이터:", data.writerId);

          setBoardId(data.id);

          const profileData = {
            profileImg: data.profileImg,
            writer: data.writer,
            writerId: data.writerId,
            createdDt: data.createdDt,
            view: data.view,
            isBookmark: data.isBookmark,
          };

          setProfileInfo(profileData);

          const boardsData = {
            id: data.id,
            title: data.title,
            quillFilename: data.quillFilename,
            boardLikeStatus: data.boardLikeStatus,
            likeCount: data.likeCount,
          };

          setBoardsData(boardsData);

          setCommentForm({
            comments: data.comments,
          });

          setComments(data.comments);

          const resdata = await axios.get(
            `http://localhost:8080/boards/get-file?filename=${boardsData.quillFilename}`
          );
          setQuillData(resdata.data);
        }
      } catch (error) {
        console.error("데이터를 받지 못했습니다", error);
      }
    };

    DetailBoards();
  }, [id]);

  const redirectToNotice = () => {
    window.location.href = "/community/free-boards";
  };

  return (
    <Container>
      <Header>
        <ListContainer>
          <ListButton onClick={redirectToNotice}>자유 게시판 &gt;</ListButton>
        </ListContainer>
        <Title>{boardsData.title}</Title>
        <WriterProfileInfo
          profileImg={profileInfo.profileImg}
          writer={profileInfo.writer}
          writerId={profileInfo.writerId}
          createdDt={profileInfo.createdDt}
          view={profileInfo.view}
          isBookmark={profileInfo.isBookmark ? true : false}
        />
      </Header>
      <Body dangerouslySetInnerHTML={{ __html: QuillData }} />
      <Footer>
        <LikeButton>
          <LikeIcon
            postId={boardsData.id}
            initialLiked={boardsData.boardLikeStatus ? true : false}
          />
          {boardsData.likeCount}
        </LikeButton>
      </Footer>
      <WriteCommentForm boardId={boardId} />
      {comments.map((comment, index) => (
        <Comments
          key={index}
          profileImg={comment.commentProfileImg}
          writer={comment.commentWriter}
          createdDt={comment.createdDt}
          content={comment.content}
          likeCount={comment.likeCount}
          replies={comment.replies}
          commentId={comment.id}
        />
      ))}
    </Container>
  );
};

export default PostBox;

// ------------------------------------------ 스타일드 컴포넌트-------------------------------------------------------------
// 감싸는 컨테이너
const Container = styled.div`
  margin: 24px 0;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: black;
`;

// 헤더
const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-radius: 12px; /* 동글뱅이 스타일 */
`;

// 목록 컨테이너
const ListContainer = styled.div`
  padding: 5px 0;
`;

// 목록
const ListButton = styled.div`
  color: #16be78;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  margin: -5px 0 6px -8px;
  padding: 5px 8px 4px 8px;
  display: inline-block;

  &:hover {
    background-color: #e0ffe0; /* 배경색을 설정 */
  }
`;

// 제목
const Title = styled.h1`
  font-size: 22px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-family: "esamanru Medium";
`;

// 프로필 컨테이너
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
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

// 조회수
const Views = styled.div`
  display: flex;
  font-size: 12px;
  color: #888;

  img {
    width: 24px;
    height: 24px;
  }
`;

// 북마크와 삼각바 (공유하기, 신고하기) 컨테이너
const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 3px;
  cursor: pointer;

  img {
    width: 24px;
    height: 32px;
    &:hover {
      background-color: #e7e7e7; /* 배경색을 설정 */
      border-radius: 8px;
    }
  }
`;

// 바디
const Body = styled.div`
  font-family: "esamanru Medium";
  min-height: 500px;

  img {
    margin-top: 5px;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

// 푸터
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  border-bottom: 1px solid #ddd;
`;

// 좋아요 버튼
const LikeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 12px;
  font-family: "esamanru Medium";
`;
