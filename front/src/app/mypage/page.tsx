"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Login from "../../../public/images/login.png";
import banner from "../../../public/images/banner.png";

interface WriteType {
  ProfileName?: string;
  FollowInfo?: string;
  ProfileDescription?: string;
  FollowButton?: string;
}

const mypage: React.FC<WriteType> = () => {
  return (
    <MypageContainer>
      <Banner>
        <Image src={banner} alt="배너 이미지" />
      </Banner>
      <Profile>
        <Image src={Login} alt="프로필 이미지" width={160} height={160}></Image>
        <ProfileInfo>
          <ProfileName>닉네임</ProfileName>
          <FollowInfo>팔로잉 팔로워 수</FollowInfo>
          <ProfileDescription>자기소개</ProfileDescription>
          <FollowButton>팔로우</FollowButton>
        </ProfileInfo>
      </Profile>
      <SelectBar>
        <SelectContainer>
          <Select1>메인</Select1>
          <Select2>라운지</Select2>
        </SelectContainer>
      </SelectBar>
    </MypageContainer>
  );
};

export default mypage;

// 마이페이지 전체를 감싸는 컨테이너
const MypageContainer = styled.div`
  padding-top: 60px;
  margin: auto;
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
const ProfileName = styled.span<WriteType>`
  font-weight: bold;
  font-size: 36px;
`;

// 프로필 정보 [팔로우 팔로워 수]
const FollowInfo = styled.span<WriteType>`
  font-size: 14px;
  margin-top: 8px;
`;

// 프로필 정보 [자기소개]
const ProfileDescription = styled.span<WriteType>`
  font-size: 14px;
  margin-top: 8px;
`;

// 프로필 정보 [팔로우 버튼]
const FollowButton = styled.button<WriteType>`
  background-color: white;
  border: 1px solid yellowgreen;
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

const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  border: 1px solid black;
  padding: 10px;
`;
const Select1 = styled.div``;

const Select2 = styled.div``;
// -------------------------------------------------------------------------------------------------------
