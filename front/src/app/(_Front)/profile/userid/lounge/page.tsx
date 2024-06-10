"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Login from "../../../../../../public/images/login.png";
import banner from "../../../../../../public/images/banner.png";
import threedot from "../../../../../../public/svgs/threedot.svg";
import Link from "next/link";
import { LikeIcon, CommentIcon } from "../../../../../app/components/icon";
import { Userdata } from "../../userdata";

// UseridProps를 props로 받습니다.
const UseridProfile: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("lounge");
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
      {/* 라운지 큰 컨테이너 */}
      <Lounge>
        {/* 라운지 Border 컨테이너 */}
        <LoungeContainer>
          {/* 라운지 프로필 */}
          <LoungeProfileInfo>
            {/* 라운지 프로필 이미지 */}
            <LoungeProfileImage>
              <Image
                src={Login}
                alt="프로필 이미지"
                width={50}
                height={50}
              ></Image>
            </LoungeProfileImage>
            {/* 라운지 프로필 닉네임 */}
            <LoungeProfileName>코딩</LoungeProfileName>
            {/* 라운지 프로필 업로드 시간 ~ 기간 */}
            <LoungeProfileUploadTime>3일전</LoungeProfileUploadTime>
            {/* 라운지 (공유하기, 신고하기 기능) */}
            <LoungeProfileDetail>
              {" "}
              <Image
                src={threedot}
                alt="공유하기, 신고하기 기능"
                width={24}
                height={24}
              ></Image>
            </LoungeProfileDetail>
          </LoungeProfileInfo>
          {/* 라운지 글작성 컨테이너 */}
          <LoungeWriteContainer>
            {/* 라운지 글작성 */}
            <LoungeWrite>
              안녕하세요 여러분..! 유튜브를 개설한지 하루만에 구독자 1000명을
              달성했습니다!! 앞으로 더 좋은 모습으로 여러분들께 찾아뵙도록
              하겠습니다!! 앞으로 더 좋은 모습으로 여러분들께 찾아뵙도록
              하겠습니다!!앞으로 더 좋은 모습으로 여러분들께 찾아뵙도록
              하겠습니다!!앞으로 더 좋은 모습으로 여러분들께 찾아뵙도록
              하겠습니다!!앞으로 더 좋은 모습으로 여러분들께 찾아뵙도록
              하겠습니다!!앞으로 더 좋은 모습으로 여러분들께 찾아뵙도록
              하겠습니다!!앞으로 더 좋은 모습으로 여러분들께 찾아뵙도록
              하겠습니다!!앞으로 더 좋은 모습으로 여러분들께 찾아뵙도록
              하겠습니다!!앞으로 더 좋은 모습으로 여러분들께 찾아뵙도록
              하겠습니다!!앞으로 더 좋은 모습으로 여러분들께 찾아뵙도록
              하겠습니다!!
            </LoungeWrite>
            {/* 라운지 글작성 이미지 */}
            <LoungeImage>
              <Image
                src={banner}
                alt="프로필 이미지"
                width={1280}
                height={256}
              ></Image>
            </LoungeImage>
          </LoungeWriteContainer>
          {/* 라운지 좋아요 댓글 컨테이너 */}
          <LoungeLikeCommentContainer>
            <LoungeLike>
              <LikeIcon />
              24
            </LoungeLike>
            <LoungeComment>
              <CommentIcon />
              35
            </LoungeComment>
          </LoungeLikeCommentContainer>
        </LoungeContainer>
      </Lounge>
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
const Lounge = styled.div`
  padding-right: calc(50% - 642px);
  padding-left: calc(50% - 642px);
  padding-top: 16px;
`;

// 라운지 Border 컨테이너
const LoungeContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
`;

// -------------------------------------------------------------------------------------------------------
// 라운지 프로필 정보를 감싸는 컨테이너
const LoungeProfileInfo = styled.div`
  display: flex;
  padding: 15px 15px 15px 15px;
  gap: 10px;
  align-items: center;
  :first-child {
    margin-right: 1px;
  }
`;

// 라운지 게시글 프로필 정보
const LoungeProfileImage = styled.div`
  img {
    border-radius: 32px;
  }
`;

// 라운지 프로필 닉네임
const LoungeProfileName = styled.div``;

// 라운지 프로필 업로드 시간 ~ 기간
const LoungeProfileUploadTime = styled.div``;

// 라운지 프로필 삼각점바 (공유하기, 신고하기 기능)
const LoungeProfileDetail = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; /* 오른쪽 끝으로 이동 */
  cursor: pointer;

  &:hover {
    border: 1px;
    border-radius: 7px;
    background-color: #e7e7e7;
  }
`;
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// 라운지 글쓰기 컨테이너
const LoungeWriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px 25px 15px;
`;

// 라운지 글쓰기
const LoungeWrite = styled.div`
  padding: 0 0 10px 0;
`;

// 라운지 글쓰기 이미지
const LoungeImage = styled.div`
  img {
    max-width: 100%;
    max-height: none;
    border-radius: 12px;
  }
`;
// -------------------------------------------------------------------------------------------------------
// 라운지 좋아요, 댓글 컨테이너
const LoungeLikeCommentContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 15px 25px 15px;
  gap: 20px;
`;

// 라운지 좋아요
const LoungeLike = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// 라운지 댓글
const LoungeComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
