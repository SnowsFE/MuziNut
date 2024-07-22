import styled from "styled-components";
import threedot from "../../../../public/svgs/threedot.svg";
import { MiniViewIcon, BookMarkIcon } from "@/app/components/icon/icon";
import React, { useEffect } from "react";
import Image from "next/image";
import axios from "axios";

// 글 작성 프로필
interface WriterProfileInfoProps {
  profileImg: string;
  writer: string;
  createdDt: string;
  view: number;
  isBookmark: boolean;
}

const WriterProfileInfo: React.FC<WriterProfileInfoProps> = ({
  profileImg,
  writer,
  createdDt,
  view,
  isBookmark,
}) => {
  const authToken =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBuYXZlci5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTiIsImV4cCI6MTcyNDQ3ODE4OH0.3z2IGByLdk3Q-khCsRjdgK4BtMZs-h51If5vYgF45rgegl8WjUfXoIMDzMsqFLVOquamuJ57dMplJEGevon4PQ";

  // 북마크 클릭 핸들러
  const handleBookmarkClick = async () => {
    try {
      const response = await axios.post(
        "API_ENDPOINT/bookmark",
        {
          // writer, 유저 정보를어떻게 가져오지 유저정보에따라 북마크
          isBookmark,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log("북마크 클릭: ", response.data);
    } catch (error) {
      console.error("북마크 요청 실패: ", error);
    }
  };

  return (
    <ProfileContainer>
      <ProfileImage
        src={`data:image/png;base64,${profileImg}`}
        alt="프로필 이미지"
      />
      <ProfileInfo>
        <ProfileName>{writer}</ProfileName>
        <TimeViewsContainer>
          <Time>{createdDt}</Time>
          <Views>
            <MiniViewIcon /> {view}
          </Views>
        </TimeViewsContainer>
      </ProfileInfo>
      <ShareContainer>
        <Image
          onClick={handleBookmarkClick}
          src={`data:image/svg+xml;base64,${isBookmark}`}
          alt="북마크"
          width={24}
          height={32}
        />
        <Image
          src={`data:image/svg+xml;base64,${threedot}`}
          alt="공유, 신고"
          width={24}
          height={32}
        />
      </ShareContainer>
      {isBookmark}
      <BookMarkIcon />
      <Image src={threedot} alt="수정 삭제" />
      수정 삭제기능 추가
    </ProfileContainer>
  );
};

export default WriterProfileInfo;

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
    &:hover {
      background-color: #e7e7e7; /* 배경색을 설정 */
      border-radius: 8px;
    }
  }
`;
