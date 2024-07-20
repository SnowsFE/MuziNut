"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LikeIcon } from "@/app/components/icon/icon";
import threedot from "../../../../../public/svgs/threedot.svg";
import Comments from "@/app/components/board/Comments";
import WriterProfileInfo from "@/app/components/board/WriterProfileInfo";
import WriteCommentForm from "@/app/components/board/WriteCommentForm";
import AxiosURL from "@/app/axios/url";

import { useParams } from "next/navigation"; // useParams 가져오기
import axios from "axios";

interface BoardsDataProps {
  id: number;
  title: string;
  profileImg: string;
  writer: string;
  createdDt: string;
  view: number;
  quillFilename: string;
  isLike: boolean;
  isBookmark: boolean;
}

interface PostProps {
  title: string;
  writer: string;
  createdDt: string;
  view: number;
  like: number;
  image: string;
  write: string;
}

const Data: PostProps = {
  title: "",
  writer: "",
  createdDt: "",
  view: 0,
  like: 0,
  image: "",
  write: "",
};

const PostBox: React.FC = () => {
  const [boardsData, setBoardsData] = useState<BoardsDataProps>({
    id: 0,
    title: "",
    profileImg: "",
    writer: "",
    createdDt: "",
    view: 0,
    quillFilename: "",
    isLike: false,
    isBookmark: false,
  });

  const authToken =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBuYXZlci5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTiIsImV4cCI6MTcyNDQ3ODE4OH0.3z2IGByLdk3Q-khCsRjdgK4BtMZs-h51If5vYgF45rgegl8WjUfXoIMDzMsqFLVOquamuJ57dMplJEGevon4PQ";

  const { title, writer, createdDt, view, like, image, write } = Data;
  const [comments, setComments] = useState([]); //서버로부터 받는 댓글들
  const [reply, setReply] = useState(""); //대댓글

  const params = useParams<{ id: string }>();
  const id = params?.id;

  //초기에 서버로부터 받는 게시판 & 댓글 데이터 [상세 페이지]
  useEffect(() => {
    const DetailBoards = async () => {
      console.log("아이디는", id);
      try {
        if (id) {
          const res = await axios.get(
            `${AxiosURL}/community/admin-boards/${id}`,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );
          setBoardsData(res.data);
          console.log("받아온 데이터는", res.data);
        }
      } catch (error) {
        console.error("데이터를 받지 못했습니다", error);
      }
    };

    DetailBoards();
  }, [id]);

  const redirectToNotice = () => {
    window.location.href = "/notice";
  };

  return (
    <Container>
      <Header>
        <ListContainer>
          <ListButton onClick={redirectToNotice}>공지사항 &gt;</ListButton>
        </ListContainer>
        <Title>
          {boardsData.profileImg}
          {title}
        </Title>
        <WriterProfileInfo
          image={image}
          writer={writer}
          createdDt={createdDt}
          view={view}
          threedot={threedot}
        ></WriterProfileInfo>
      </Header>
      <Body dangerouslySetInnerHTML={{ __html: boardsData.quillFilename }} />
      <Footer>
        <LikeButton>
          <LikeIcon /> {like}
        </LikeButton>
      </Footer>
      {/* 댓글 작성 폼 Todo 게시판 Id 보내줘야 함*/}
      <WriteCommentForm></WriteCommentForm>
      {/* 게시판 댓글들 */}
      <Comments></Comments>
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
