import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Submit } from "@/app/components/icon/icon";
import {
  MiniViewIcon,
  LikeIcon,
  BookMarkIcon,
} from "@/app/components/icon/icon";
import Image from "next/image";
import threedot from "../../../../../public/svgs/threedot.svg";
import Comments from "@/app/components/board/Comments";
import WriterProfileInfo from "@/app/components/board/WriterProfileInfo";
import WriteCommentForm from "@/app/components/board/WriteCommentForm";

import { getToken, getRefreshToken, setToken } from "@/app/common/common";

interface PostProps {
  title: string;
  writer: string;
  createdDt: string;
  view: number;
  like: number;
  image: string;
  write: string;
}

interface UserProfile {
  nickname: string;
  profileImage: string;
}

const Data: PostProps = {
  title: "게시글 제목",
  writer: "작성자 이름",
  createdDt: "2024-07-06",
  view: 1234,
  like: 567,
  image: "http://stimg.afreecatv.com/LOGO/ma/maluckitty/maluckitty.jpg",
  write: "<p>본문 내용입니다.</p>",
};

const PostBox: React.FC = () => {
  const { title, writer, createdDt, view, like, image, write } = Data;
  const [comments, setComments] = useState([]); //서버로부터 받는 댓글들
  const [reply, setReply] = useState(""); //대댓글
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  //초기에 서버로부터 받는 게시판 & 댓글 데이터
  useEffect(() => {
    const fetchUserProfile = async () => {
      //Todo 경로 수정
      const response = await fetch("/community/admin-board/", {
        headers: {
          Authorization: getToken(),
        },
      });
      if (response.ok) {
        const data: UserProfile = await response.json();
        setUserProfile(data);
      }
    };

    fetchUserProfile();
  }, []);

  const redirectToEvent = () => {
    window.location.href = "/event";
  };

  return (
    <Container>
      <Header>
        <ListContainer>
          <ListButton onClick={redirectToEvent}>이벤트 &gt;</ListButton>
        </ListContainer>
        <Title>{title}</Title>
        <WriterProfileInfo
          image={image}
          writer={writer}
          createdDt={createdDt}
          view={view}
          threedot={threedot}
        ></WriterProfileInfo>
      </Header>
      <Body dangerouslySetInnerHTML={{ __html: write }} />
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
