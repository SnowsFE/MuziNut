import styled from "styled-components";
import Image from "next/image";
import { MiniViewIcon, BookMarkIcon } from "@/app/components/icon/icon";
import React from "react";

// 글 작성 프로필
interface WriterProfileInfoProps {
  image: string;
  writer: string;
  createdDt: string;
  view: number;
  threedot: string;
}

const WriterProfileInfo: React.FC<WriterProfileInfoProps> = ({
  image,
  writer,
  createdDt,
  view,
  threedot,
}) => {
  return (
    <ProfileContainer>
      <ProfileImage src={image} alt="프로필 이미지" />
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
        <BookMarkIcon />
        <Image src={threedot} alt="공유하기, 신고하기"></Image>
      </ShareContainer>
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
    width: 24px;
    height: 32px;
    &:hover {
      background-color: #e7e7e7; /* 배경색을 설정 */
      border-radius: 8px;
    }
  }
`;
