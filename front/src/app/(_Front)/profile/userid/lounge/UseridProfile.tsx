"use client";
import React, { useState } from "react";
import Image from "next/image";
import Login from "../../../../../../public/images/login.png";
import banner from "../../../../../../public/images/banner.png";
import {
  ProfileContainer,
  Banner,
  Profile,
  ProfileInfo,
  ProfileName,
  FollowInfo,
  ProfileDescription,
  FollowButton,
  SelectBar,
  SelectContainer,
  StyledLink,
  SelectItem,
  Lounge,
  LoungeProfileInfo,
  LoungeProfileImage,
  LoungeProfileName,
  LoungeProfileUploadTime,
} from "./page";

export const UseridProfile: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("lounge");

  return (
    <ProfileContainer>
      <Banner>
        <Image src={banner} alt="배너 이미지" />
      </Banner>
      <Profile>
        <Image src={Login} alt="프로필 이미지" width={160} height={160}></Image>
        <ProfileInfo>
          <ProfileName>닉네임</ProfileName>
          <FollowInfo>팔로잉 1 팔로워 1</FollowInfo>
          <ProfileDescription>자기소개</ProfileDescription>
          <FollowButton>팔로우</FollowButton>
        </ProfileInfo>
      </Profile>
      <SelectBar>
        <SelectContainer>
          <StyledLink
            href={"/profile/userid"}
            onClick={() => setSelectedTab("main")}
          >
            <SelectItem selected={selectedTab === "main"}>메인</SelectItem>
          </StyledLink>
          <StyledLink
            href={"/profile/userid/lounge"}
            onClick={() => setSelectedTab("lounge")}
          >
            <SelectItem selected={selectedTab === "lounge"}>라운지</SelectItem>
          </StyledLink>
        </SelectContainer>
      </SelectBar>
      {/* 라운지 컨테이너 */}
      <Lounge>
        {/* 라운지 프로필 */}
        <LoungeProfileInfo>
          <LoungeProfileImage>
            <Image
              src={Login}
              alt="프로필 이미지"
              width={32}
              height={32}
            ></Image>
          </LoungeProfileImage>
          <LoungeProfileName>코딩</LoungeProfileName>
          <LoungeProfileUploadTime>3일전</LoungeProfileUploadTime>
        </LoungeProfileInfo>
        {/* 라운지 글쓰기 */}
        <LoungeWrite>
          <LoungeHeader></LoungeHeader>
          <LoungeImage></LoungeImage>
        </LoungeWrite>
      </Lounge>
    </ProfileContainer>
  );
};
