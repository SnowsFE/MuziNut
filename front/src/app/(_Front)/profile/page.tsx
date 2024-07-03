"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Login from "../../../../public/images/login.png";
import banner from "../../../../public/images/banner.png";
import Link from "next/link";
import {
  BannerData,
  ProfileData,
  useFileState,
  ProfileEditForm,
} from "../../components/multi-part-form-data/editprofile";

const UseridProfile: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("main");
  const images = [Login, Login, Login, Login, Login];
  const imagesName = [
    "앨범 제목",
    "앨범 제목",
    "앨범 제목",
    "앨범 제목",
    "앨범 제목",
    "앨범 제목",
    "앨범 제목",
    "앨범 제목",
    "앨범 제목",
    "앨범 제목",
  ];

  const [bannerUrl, setBannerUrl] = useState<string>(banner.src);
  const [profileUrl, setProfileUrl] = useState<string>(Login.src);
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
  const { profileInfo, handleProfileInfoChange, handleSubmit } =
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
          <ProfileName>{profileInfo.name}</ProfileName>
          <FollowInfo>
            팔로잉 {profileInfo.follow} &nbsp; 팔로워 {profileInfo.follower}
          </FollowInfo>
          <ProfileDescription>{profileInfo.introduce}</ProfileDescription>
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
      <MainAlbum>
        <MainAlbumContainer>
          <Image src={Login} alt="메인 앨범" width={500} height={400}></Image>
          <Like>💚 130</Like>
          <AlbumInformation>
            <Info1>곡 이름</Info1>
            <Info2>장르</Info2>
            <AlbumIntro>
              <AlbumIntroTitle>곡 소개</AlbumIntroTitle>
              <AlbumIntroBody>
                이 곡은 제가 제일 좋아하는 사람에게 헌정하는 곡입니다.
              </AlbumIntroBody>
            </AlbumIntro>
          </AlbumInformation>
        </MainAlbumContainer>
      </MainAlbum>
      <BodyAlbum>
        <AlbumName>앨범</AlbumName>
        <AlbumList>
          {images.map((img, index) => (
            <AlbumItem key={index}>
              <Image
                src={img}
                alt={`바디 앨범 ${index + 1}`}
                width={150}
                height={150}
              />
              <AlbumTitle>{imagesName[index]}</AlbumTitle>
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
// 메인 앨범
const MainAlbum = styled.div`
  padding-right: calc(50% - 642px);
  padding-left: calc(50% - 642px);
  padding-top: 16px;
`;

// 앨범 이미지와 설명을 감싸는 컨테이너
const MainAlbumContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 16px 35px 33px 35px;
  gap: 5%;
  border-bottom: 1px solid #ccc;

  img {
    border: none;
    border-radius: 12px;
  }
`;

// 좋아요
const Like = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 33px 40px;
  font-size: 18px;
`;

// 앨범 설명 세로 정렬
const AlbumInformation = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;
`;

// 앨범 설명
const Info1 = styled.div`
  font-size: 32px;
`;

// 앨범 장르
const Info2 = styled.div`
  font-size: 23px;
`;

// 앨범 소개
const AlbumIntro = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// 앨범 소개 제목
const AlbumIntroTitle = styled.div`
  font-size: 23px;
`;

// 앨범 소개 본문
const AlbumIntroBody = styled.div`
  font-size: 18px;
`;
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// 바디 앨범
const BodyAlbum = styled.div`
  padding-right: calc(50% - 642px);
  padding-left: calc(50% - 642px);
  padding-top: 16px;
`;
// 바디 앨범 타이틀 [앨범]
const AlbumName = styled.div`
  padding: 10px 35px 0px 35px;
`;
// 앨범 목록
const AlbumList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 35px 0px 35px;
`;

// 앨범 설명
const AlbumTitle = styled.div`
  margin-top: 8px;
  font-size: 14px;
`;

// 앨범 이미지
const AlbumItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 0 2rem 0;
`;

// 프로필 에디터
const EditForm = styled.div`
  position: absolute;
  right: 0;
  top: 52px;
  cursor: pointer;
`;

// -------------------------------------------------------------------------------------------------------
