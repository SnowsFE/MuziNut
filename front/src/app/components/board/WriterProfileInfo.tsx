"use client";
import styled from "styled-components";
import threedot from "../../../../public/svgs/threedot.svg";
import { MiniViewIcon, BookMarkIcon } from "@/app/components/icon/icon";
import React from "react";
import Image from "next/image";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import AxiosURL from "@/app/axios/url";
import { getToken } from "@/app/common/common";

// 글 작성 프로필
interface WriterProfileInfoProps {
  profileImg: string;
  writer: string;
  writerId: string;
  createdDt: string;
  view: number;
  isBookmark: boolean;
}

const WriterProfileInfo: React.FC<WriterProfileInfoProps> = ({
  profileImg,
  writer,
  writerId,
  createdDt,
  view,
  isBookmark,
}) => {
  // const tokenData = TokenInfo(); // 토큰 데이터를 가져옵니다.
  const authToken = getToken(); // 토큰을 추출합니다.
  const params = useParams<{ id: string }>();
  const id = params?.id;

  // const handleBookmarkClick = async () => {
  //   try {
  //     if (id && authToken) {
  //       const response = await axios.post(
  //         `${AxiosURL}/bookmark/${id}`,
  //         {
  //           isBookmark, // 유저 정보에 따라 북마크 상태 결정
  //         },
  //         {
  //           headers: {
  //             Authorization: authToken,
  //           },
  //         }
  //       );
  //       console.log("북마크 클릭: ", response.data);
  //     }
  //   } catch (error) {
  //     console.error("북마크 요청 실패: ", error);
  //   }
  // };

  const router = useRouter();

  const userMove = () => {
    router.push(`/profile?userId=${writerId}`);
  };

  return (
    <ProfileContainer>
      <ProfileImage
        onClick={userMove}
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
      {/* <ShareContainer>
        <Image
          onClick={handleBookmarkClick}
          src={`data:image/png;base64,${isBookmark}`}
          alt="북마크"
          width={24}
          height={32}
        />
        <Image
          src={`data:image/png;base64,${threedot}`}
          alt="공유, 신고"
          width={24}
          height={32}
        />
      </ShareContainer>
      {isBookmark} */}
      <ShareContainer>
        <BookMarkIcon />
        <Image src={threedot} alt="수정 삭제" />
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
    &:hover {
      background-color: #e7e7e7; /* 배경색을 설정 */
      border-radius: 8px;
    }
  }
`;
