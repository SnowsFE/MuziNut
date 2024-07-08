"use client";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import profile from "../../../../public/images/artist.png";
import banner from "../../../../public/images/banner.png";
import Link from "next/link";
import {
  BannerData,
  ProfileData,
  useFileState,
  ProfileEditForm,
} from "../../components/multi-part-form-data/editprofile";
import { BaseImgBox } from "@/app/components/icon/icon";

const UseridProfile: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("main");
  const AlbumImages = [
    { BaseImgBox },
    { BaseImgBox },
    { BaseImgBox },
    { BaseImgBox },
    { BaseImgBox },
  ];

  const [bannerUrl, setBannerUrl] = useState<string>(banner.src);
  const [profileUrl, setProfileUrl] = useState<string>(profile.src);
  const [editFormVisible, setEditFormVisible] = useState(false);

  // onUpload 함수 정의
  const onUpload = (data: { bannerUrl?: string; profileUrl?: string }) => {
    if (data.bannerUrl) {
      console.log("배너 이미지가 변경되었습니다:", data.bannerUrl);
      setBannerUrl(data.bannerUrl);
    }
    if (data.profileUrl) {
      console.log("프로필 이미지가 변경되었습니다:", data.profileUrl);
      setProfileUrl(data.profileUrl);
    }
  };

  // useFileState 훅을 이용하여 상태와 함수들을 가져옵니다.
  const { profileInfo, albumInfo, handleProfileInfoChange, handleSubmit } =
    useFileState(onUpload);

  // 프로필 정보 수정 폼 열기
  const openEditForm = () => {
    setEditFormVisible(true);
  };

  // 프로필 정보 수정 폼 닫기
  const closeEditForm = () => {
    setEditFormVisible(false);
  };

  return (
    <ProfileContainer>
      <Banner>
        <Image src={bannerUrl} alt="banner-image" width={1280} height={210} />
        <BannerData onUpload={onUpload} />
      </Banner>
      <Profile>
        <EditForm onClick={openEditForm}>⚙️</EditForm>
        <Image src={profileUrl} alt="profile-image" width={160} height={160} />
        <ProfileData onUpload={onUpload} />
        <ProfileInfo>
          <ProfileName>{profileInfo.nickname}</ProfileName>
          <FollowInfo>
            팔로잉 {profileInfo.followingCount} &nbsp; 팔로워{" "}
            {profileInfo.followersCount}
          </FollowInfo>
          <ProfileDescription>{profileInfo.intro}</ProfileDescription>
        </ProfileInfo>
      </Profile>
      <SelectBar>
        <SelectContainer>
          <StyledLink href={"/profile"} onClick={() => setSelectedTab("main")}>
            <SelectItem selected={selectedTab === "main"}>메인</SelectItem>
          </StyledLink>
          <StyledLink
            href={"/profile/lounge"}
            onClick={() => setSelectedTab("lounge")}
          >
            <SelectItem selected={selectedTab === "lounge"}>라운지</SelectItem>
          </StyledLink>
          <StyledLink
            href={"/profile/boards"}
            onClick={() => setSelectedTab("boards")}
          >
            <SelectItem selected={selectedTab === "boards"}>게시글</SelectItem>
          </StyledLink>
          <StyledLink
            href={"/profile/plynut"}
            onClick={() => setSelectedTab("plynut")}
          >
            <SelectItem selected={selectedTab === "plynut"}>플리넛</SelectItem>
          </StyledLink>
          |
          <StyledLink
            href={"/profile/nuts"}
            onClick={() => setSelectedTab("nuts")}
          >
            <SelectItem selected={selectedTab === "nuts"}>넛츠</SelectItem>
          </StyledLink>
        </SelectContainer>
      </SelectBar>
      <MainMusicContainer>
        {/* <MainTitle>곡</MainTitle> */}
        <QuestionContainer>
          <BaseImgBox />
        </QuestionContainer>
        <AlbumInfoBox>
          {/* reponse.data.likeCount */}
          <Like>💚 {albumInfo.likeCount}</Like>
          <AlbumInformation>
            <Info1>{albumInfo.songTitle}</Info1>
            <Info2>{albumInfo.genre}</Info2>
            <AlbumMusician>
              <AlbumLyricist>작사 : {albumInfo.lyricist}</AlbumLyricist>
              <AlbumComposer>작곡 : {albumInfo.composer}</AlbumComposer>
            </AlbumMusician>
          </AlbumInformation>
        </AlbumInfoBox>
      </MainMusicContainer>
      <BodyAlbum>
        {/* <AlbumName>앨범</AlbumName> */}
        <AlbumList>
          {AlbumImages.map((img, index) => (
            <AlbumItem key={index}>
              <QuestionContainer2>
                <BaseImgBox />
              </QuestionContainer2>
              <AlbumTitle>{albumInfo.albumTitle}</AlbumTitle>
            </AlbumItem>
          ))}
        </AlbumList>
      </BodyAlbum>
      <ProfileEditForm
        profileInfo={profileInfo}
        onChange={handleProfileInfoChange}
        onSubmit={handleSubmit}
        onCancel={closeEditForm}
        visible={editFormVisible}
      />
      <ProfileEditForm
        profileInfo={profileInfo}
        onChange={handleProfileInfoChange}
        onSubmit={handleSubmit}
        onCancel={closeEditForm}
        visible={editFormVisible}
      />
    </ProfileContainer>
  );
};

export default UseridProfile;

// 마이페이지 전체를 감싸는 컨테이너
const ProfileContainer = styled.div``;

// 배너
const Banner = styled.div`
  padding-right: calc(50% - 642px);
  padding-left: calc(50% - 642px);
  position: relative;

  img {
    background-color: var(--text-color);
    border-radius: 20px;
    overflow: hidden;
  }

  :nth-child(2) {
    display: flex;
    justify-content: flex-end;
  }
`;

// -------------------------------------------------------------------------------------------------------
// 프로필
const Profile = styled.div`
  padding-right: calc(50% - 642px);
  padding-left: calc(50% - 642px);
  padding-top: 16px;
  display: flex;
  align-items: center;
  position: relative;

  // 프로필 이미지
  img {
    border-radius: 100px;
    overflow: hidden;
  }
`;

// 프로필 정보 박스
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 24px;
`;

// 프로필 정보 [닉네임]
const ProfileName = styled.span`
  font-weight: bold;
  font-size: 36px;
`;

// 프로필 정보 [팔로우 팔로워 수]
const FollowInfo = styled.span`
  font-size: 14px;
  margin-top: 8px;
`;

// 프로필 정보 [자기소개]
const ProfileDescription = styled.span`
  font-size: 14px;
  margin-top: 8px;
`;
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// 메인, 라운지 선택바
const SelectBar = styled.div`
  padding-right: calc(50% - 642px);
  padding-left: calc(50% - 642px);
  padding-top: 16px;
  display: flex;
  gap: 10px;
  font-size: 16px;
`;

// 메인 라운지를 나란히 하기위한 Flex 박스 컨테이너
const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  border-bottom: 1px solid #ccc;
  position: relative;
`;

// 선택된 항목에 하단 밑줄을 추가하는 스타일
const SelectItem = styled.div<{ selected: boolean }>`
  padding-bottom: 10px;
  position: relative;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--text-color);
    transform: scaleX(${(props) => (props.selected ? 1 : 0)});
    transition: transform 0.3s ease;
  }
`;

// 메인 라운지 링크 태그 스타일을 주기위한 요소 추가
const StyledLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
`;
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// 메인 곡

// 곡 이미지와 설명을 감싸는 컨테이너
const MainMusicContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  gap: 5%;
  border-bottom: 1px solid #ccc;

  img {
    border: none;
    border-radius: 8px;
    width: 100%;
    height: auto;
  }
`;

// 곡
const MainTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 25px 15px;
  font-size: 24px;
`;

// 퀘스쳔 박스 컨테이너
const QuestionContainer = styled.div`
  width: 50%;
  max-width: 50%;
  max-height: auto;
  height: auto;
  z-index: 1;
`;

// 그림자 애니메이션
const shadowAnimation = keyframes`
  0% {
    box-shadow: 0 2px 12px var(--text-color);
  }
  50% {
    box-shadow: 0 6px 20px var(--text-color);
  }
  100% {
    box-shadow: 0 2px 12px var(--text-color);
  }
`;

// 메인 곡 Json Box
const AlbumInfoBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  margin-right: 55px;
  border-radius: 8px;
  box-shadow: 0 2px 12px var(--text-color);
  transition: 0.3s ease;

  &:hover {
    animation: ${shadowAnimation} 1.2s infinite;
  }
`;

// 좋아요
const Like = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 20px;
  color: #16be78;
  font-weight: bold;
  padding: 20px;
`;

// 앨범 설명 세로 정렬
const AlbumInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// 앨범 제목
const Info1 = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: var(--text-color);
`;

// 앨범 장르
const Info2 = styled.div`
  font-size: 20px;
  color: var(--text-color);
  padding: 5px 0;
`;

// 작사 작곡 컨테이너
const AlbumMusician = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: var(--text-color);
  gap: 5px;
`;

// 작사
const AlbumLyricist = styled.div``;

// 작곡
const AlbumComposer = styled.div``;

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// 바디 앨범
const BodyAlbum = styled.div`
  padding-top: 16px;
  position: relative;
`;

// 바디 앨범 타이틀 [앨범]
const AlbumName = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 25px 15px;
  font-size: 24px;
`;

// 앨범 목록
const AlbumList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 35px 0px 35px;
`;

// 앨범 퀘스쳔 박스
const QuestionContainer2 = styled.div`
  width: 150px;
  height: 150px;
  max-width: 150px;
  max-height: 150px;
`;

// 앨범 설명
const AlbumTitle = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`;

// 앨범 이미지
const AlbumItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 0 2rem 0;

  img {
    border-radius: 12px;
  }
`;

// 프로필 에디터
const EditForm = styled.div`
  position: absolute;
  right: 0;
  top: 52px;
  cursor: pointer;
`;

// -------------------------------------------------------------------------------------------------------
