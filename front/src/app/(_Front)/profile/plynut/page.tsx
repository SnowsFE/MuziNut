"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Login from "../../../../../public/images/login.png";
import banner from "../../../../../public/images/banner.png";
import Link from "next/link";
import { Userdata } from "../userdata";

// UseridProps를 props로 받습니다.
const UseridProfile: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("plynut");
  const userinfo = Userdata[0];

  return (
    <ProfileContainer>
      <Banner>
        <Image src={banner} alt="배너 이미지" />
      </Banner>
      <Profile>
        <Image src={Login} alt="프로필 이미지" width={160} height={160}></Image>
        <ProfileInfo>
          {/* userinfo를 props로 받아온 데이터를 사용합니다. */}
          <ProfileName>닉네임 : {userinfo.name}</ProfileName>
          <FollowInfo>
            팔로잉 {userinfo.follow} &nbsp; 팔로워 {userinfo.follower}
          </FollowInfo>
          <ProfileDescription>
            자기소개 : {userinfo.introduce}
          </ProfileDescription>
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
      <PlyNut>
        <PlyNutHeaderMargin>
          <PlyNutHeader>
            <ul>
              <li>NO</li>
              <li>닉네임</li>
              <li>곡명</li>
              <li>장르</li>
              <li>좋아요</li>
              <li>삭제하기</li>
            </ul>
          </PlyNutHeader>
        </PlyNutHeaderMargin>
        <PlyNutPlayListMargin>
          <PlyNutPlayList>
            <NO>1</NO>
            <AlbumImage>이미지임다</AlbumImage>
            <NickName>코딩</NickName>
            <Genre>d</Genre>
            <Like>dd</Like>
            <Delete>dz</Delete>
          </PlyNutPlayList>
        </PlyNutPlayListMargin>
      </PlyNut>
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
  height: 100%;

  img {
    border-radius: 20px;
    overflow: hidden;
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
// 라운지를 감싸는 큰 컨테이너
const PlyNut = styled.div`
  padding-right: calc(50% - 642px);
  padding-left: calc(50% - 642px);
`;

// 플리넛 헤더 패딩 적용
const PlyNutHeaderMargin = styled.div`
  padding: 10px 0;
`;

const PlyNutHeader = styled.div`
  ul {
    display: flex;
    justify-content: space-around; /* 요소를 좌우로 공간을 나누고 가운데 정렬 */
    list-style-type: none;
    padding: 15px;
    border: 1px solid #1bb373;
    border-radius: 12px;
  }

  li {
    color: #1bb373;
    margin: 0;
  }
`;

// 플리넛 재생목록 패딩 적용
const PlyNutPlayListMargin = styled.div``;

// 플리넛 리스트 스타일링
const PlyNutPlayList = styled.div`
  display: flex;
  justify-content: space-around; /* 좌우 정렬 */
  align-items: center; /* 상하 정렬 */
  padding: 15px;
`;

// 플리넛 NO
const NO = styled.div``;

// 플리넛 앨범 이미지
const AlbumImage = styled.div``;

// 플리넛 닉네임 [굵은 글씨]
const NickName = styled.div``;

// 플리넛 장르
const Genre = styled.div``;

// 플리넛 좋아요
const Like = styled.div``;

// 플리넛 삭제하기
const Delete = styled.div``;
