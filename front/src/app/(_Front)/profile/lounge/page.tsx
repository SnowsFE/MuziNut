"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Login from "../../../../../public/images/login.png";
import banner from "../../../../../public/images/banner.png";
import Link from "next/link";
import { UserIdProps } from "../useridprops";

const UseridProfile: React.FC<UserIdProps> = ({ userinfo }) => {
  const [selectedTab, setSelectedTab] = useState("lounge");
  const images = [Login, Login, Login, Login];

  return (
    <ProfileContainer>
      <Banner>
        <Image src={banner} alt="배너 이미지" />
      </Banner>
      <Profile>
        <Image src={Login} alt="프로필 이미지" width={160} height={160}></Image>
        <ProfileInfo>
          <ProfileName>{userinfo.name}닉네임</ProfileName>
          <FollowInfo>{userinfo.follow}팔로잉 1 팔로워 1</FollowInfo>
          <ProfileDescription>{userinfo.introduce}자기소개</ProfileDescription>
          <FollowButton>팔로우</FollowButton>
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
        </SelectContainer>
      </SelectBar>
    </ProfileContainer>
  );
};

export default UseridProfile;

// 마이페이지 전체를 감싸는 컨테이너
const ProfileContainer = styled.div`
  padding-top: 60px;
  padding-left: 88px;
`;

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
  color: #000000;
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

// 프로필 정보 [팔로우 버튼]
const FollowButton = styled.button`
  background-color: white;
  border: 1px solid #1bb373;
  border-radius: 50px;
  padding: 10px;
  margin-top: 16px;

  &:hover {
    transform: scale(1.05);
    color: black;
    cursor: pointer;
  }

  transition: transform 0.3s ease; /* 스케일 변화에 대한 부드러운 전환 효과 추가 */
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
    background-color: black;
    transform: scaleX(${(props) => (props.selected ? 1 : 0)});
    transition: transform 0.3s ease;
  }
`;

// 메인 라운지 링크 태그 스타일을 주기위한 요소 추가
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------