"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Login from "../../../../../public/images/login.png";
import banner from "../../../../../public/images/banner.png";
import Link from "next/link";
import { BoardData, BookMarkBoardData } from "../userdata";
import {
  BannerData,
  ProfileData,
  useFileState,
  ProfileEditForm,
} from "../../../components/multi-part-form-data/multi-part-form-data";

const UseridProfile: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("boards");
  const [boardVisible, setBoardVisible] = useState(5);
  const [bookmarkVisible, setBookmarkVisible] = useState(5);
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

  // 게시글 더보기 함수
  const AddBoard = () => {
    if (boardVisible + 5 > BoardData.length) {
      setBoardVisible(5);
    } else {
      setBoardVisible(boardVisible + 5);
    }
  };

  // 북마크한 게시글 더보기 함수
  const AddBookMark = () => {
    if (bookmarkVisible + 5 > BookMarkBoardData.length) {
      setBookmarkVisible(5);
    } else {
      setBookmarkVisible(bookmarkVisible + 5);
    }
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

      <Boards>
        <BoardsBoards>
          <BoardsTitle>게시글</BoardsTitle>
          <BoardsContainer>
            {BoardData.slice(0, boardVisible).map((boards, index) => (
              <Box key={index}>{boards.board}</Box>
            ))}
          </BoardsContainer>
          <BoardsAdd>
            <p onClick={AddBoard}>더보기</p>
          </BoardsAdd>
        </BoardsBoards>

        <BoardsBoards style={{ marginTop: "50px" }}>
          <BoardsTitle>북마크한 게시글</BoardsTitle>
          <BoardsContainer>
            {BookMarkBoardData.slice(0, bookmarkVisible).map(
              (bookmarkboards, index) => (
                <Box key={index}>{bookmarkboards.bookmarkboard}</Box>
              )
            )}
          </BoardsContainer>
          <BoardsAdd>
            <p onClick={AddBookMark}>더보기</p>
          </BoardsAdd>
        </BoardsBoards>
      </Boards>
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
    background-color: var(--text-color);
    border-radius: 100px;
    overflow: hidden;
  }
`;

// 프로필 정보 박스
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
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
// 게시글을 감싸는 큰 컨테이너
const Boards = styled.div`
  padding-right: calc(50% - 642px);
  padding-left: calc(50% - 642px);
  padding-top: 16px;
`;

// 박스 섹션을 감싸는 컨테이너
const BoardsBoards = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
`;

// 박스 더보기
const BoardsAdd = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  font-family: "esamanru Light";
  font-size: 14px;

  p {
    cursor: pointer;
    &:hover {
      color: #1bb373;
    }
  }
`;

// 섹션 타이틀
const BoardsTitle = styled.h2`
  font-size: 20px;
`;

// 박스를 감싸는 컨테이너
const BoardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.06);
  font-size: 14px;
`;

// 박스 스타일
const Box = styled.div`
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  transition: box-shadow 0.3s ease;
  width: 100%; /* Ensure the box takes up the full width of its grid cell */

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    transition: 0.3s ease;
    border-color: #1bb373;
  }
`;

// 프로필 에디터
const EditForm = styled.div`
  position: absolute;
  right: 0;
  top: 52px;
  cursor: pointer;
`;
