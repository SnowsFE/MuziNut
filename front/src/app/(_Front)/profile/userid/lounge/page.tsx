"use client";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import Login from "../../../../../../public/images/login.png";
import banner from "../../../../../../public/images/banner.png";
import threedot from "../../../../../../public/svgs/threedot.svg";
import Link from "next/link";
import { LikeIcon, CommentIcon } from "../../../../components/icon/icon";
import { Userdata, CommentData } from "../../userdata";
import FollowButton from "../../../../components/button/button";

// UseridProps를 props로 받습니다.
const UseridProfile: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("lounge");
  const [threedotopen, setThreeDotOpen] = useState(
    Array(CommentData.length).fill(false)
  ); // 배열로 상태 관리

  const userinfo = Userdata[0];

  const threedotRef = useRef<HTMLDivElement | null>(null);

  const handleThreeDotClick = (index: number) => {
    const newThreeDotOpen = [...threedotopen];
    newThreeDotOpen[index] = !newThreeDotOpen[index];
    setThreeDotOpen(newThreeDotOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        threedotRef.current &&
        !threedotRef.current.contains(event.target as Node)
      ) {
        setThreeDotOpen(Array(CommentData.length).fill(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ProfileContainer>
      <Banner>
        <Image src={banner} alt="배너 이미지" />
      </Banner>
      <Profile>
        <Image src={Login} alt="프로필 이미지" width={160} height={160}></Image>
        <ProfileInfo>
          {/* userinfo를 props로 받아온 데이터를 사용합니다. */}
          <ProfileName>{userinfo.name}</ProfileName>
          <FollowInfo>
            팔로잉 {userinfo.follow} &nbsp; 팔로워 {userinfo.follower}
          </FollowInfo>
          <ProfileDescription>{userinfo.introduce}</ProfileDescription>
          <FollowButton />
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
        {CommentData.map((commentdata, index) => (
          <React.Fragment key={index}>
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
                <LoungeProfileDetail
                  ref={threedotRef}
                  onClick={() => handleThreeDotClick(index)}
                >
                  <Image
                    src={threedot}
                    alt="공유하기, 신고하기 기능"
                    width={24}
                    height={24}
                  />
                  {threedotopen[index] && (
                    <ThreeDotOpen>
                      <label>공유</label>|<label>신고</label>
                    </ThreeDotOpen>
                  )}
                </LoungeProfileDetail>
              </LoungeProfileInfo>
              {/* 라운지 글작성 컨테이너 */}
              <LoungeWriteContainer>
                {/* 라운지 글작성 */}
                <LoungeWrite>{commentdata.write}</LoungeWrite>
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
                  {commentdata.like}
                </LoungeLike>
                <LoungeComment>
                  <CommentIcon />
                  {commentdata.comment}
                </LoungeComment>
              </LoungeLikeCommentContainer>
            </LoungeContainer>
          </React.Fragment>
        ))}
      </Lounge>
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
  padding-top: 24px;
`;

// 라운지 Border 컨테이너
const LoungeContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  margin: 0 0 16px 0;
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
  position: relative;
  cursor: pointer;

  img {
    &:hover {
      border: 1px;
      border-radius: 7px;
      background-color: #e7e7e7;
    }
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

// 쓰리닷 오픈 시
const ThreeDotOpen = styled.div`
  position: absolute;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  bottom: -18px;
  left: 50px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100px;

  label {
    padding: 4px 8px;
    border-radius: 12px;
    cursor: pointer;
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;
