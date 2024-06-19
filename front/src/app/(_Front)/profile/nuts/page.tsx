"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Login from "../../../../../public/images/login.png";
import banner from "../../../../../public/images/banner.png";
import nut from "../../../../../public/images/Nuts.png";
import Link from "next/link";
import { Userdata } from "../userdata";
import { VoteBox } from "@/app/components/icon";
import { Cash, cashData, PurChaseCash, purchaseData } from "./cash";

// UseridProps를 props로 받습니다.
const UseridProfile: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("nuts");
  const [subTab, setSubTab] = useState<string | null>(null);
  const userinfo = Userdata[0];

  useEffect(() => {
    // 페이지가 로드될 때 초기 하위 탭 설정
    setSubTab("#cash");
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

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
            onClick={() => {
              setSelectedTab("nuts");
              setSubTab(null);
            }}
          >
            <SelectItem selected={selectedTab === "nuts"}>넛츠</SelectItem>
          </StyledLink>
        </SelectContainer>
      </SelectBar>
      <NutsContainer>
        <NutsTitle>내 넛츠</NutsTitle>
        <NutsBodyContainer>
          <NutsVotes>
            <Nuts>
              <NutsImage>
                <Image src={nut} alt="Nuts"></Image>
              </NutsImage>
              <MyNuts>
                보유중인 넛츠 &nbsp;<p>n개</p>
              </MyNuts>
              <NutsCharge>
                <p>충전하기</p>
              </NutsCharge>
            </Nuts>
            <Votes>
              <VotesImage>
                <VoteBox />
              </VotesImage>

              <MyVotes>
                {" "}
                보유중인 투표권 &nbsp;<p>n개</p>
              </MyVotes>
              <VotesCharge>
                <p>충전하기</p>
              </VotesCharge>
            </Votes>
          </NutsVotes>

          <NutsReceipt>
            <ul>
              <StyledLink
                href={"/profile/nuts"}
                onClick={() => setSubTab("#cash")}
              >
                <SelectItem selected={subTab === "#cash"}>
                  <li>사용 내역</li>
                </SelectItem>
              </StyledLink>
              <StyledLink
                href={"/profile/nuts/#cash_purchase"}
                onClick={() => setSubTab("#cash_purchase")}
              >
                <SelectItem selected={subTab === "#cash_purchase"}>
                  <li>구매 내역</li>
                </SelectItem>
              </StyledLink>
            </ul>
            {subTab === "#cash" && <Cash data={cashData} />}
            {subTab === "#cash_purchase" && (
              <PurChaseCash purchasedata={purchaseData} />
            )}
          </NutsReceipt>
        </NutsBodyContainer>
      </NutsContainer>
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
// 넛츠를 감싸는 큰 컨테이너
const NutsContainer = styled.div`
  padding-right: calc(50% - 642px);
  padding-left: calc(50% - 642px);
  padding-top: 16px;
  padding-bottom: 24px;
`;

// 넛츠 페이지 제목
const NutsTitle = styled.div`
  font-size: 18px;
  padding: 10px 0;
`;

// 넛츠 바디 컨테이너
const NutsBodyContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 30px;
`;

// 넛츠, 투표권 컨테이너
const NutsVotes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  gap: 20px;
`;

// 넛츠 컨테이너 --------------------

// 내 넛츠
const Nuts = styled.div`
  width: 50%;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 15px 20px;
  align-items: center;
  gap: 15px;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.06),
    rgba(0, 0, 0, 0.05) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 0px 2px 0px;
`;

// 넛츠 이미지
const NutsImage = styled.div`
  img {
    width: 36px;
    height: 36px;
    margin-top: 1px;
  }
`;

// 넛츠 충전하기
const NutsCharge = styled.div`
  display: flex;
  margin-left: auto;
  border: 1px;
  border-radius: 5px;
  padding: 0 30px;
  background-color: #16be78;
  cursor: pointer;
  p {
    color: white;
  }
  &:hover {
    background-color: #1bb373;
  }
`;

// 넛츠 박스 텍스트
const MyNuts = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  p {
    font-size: 18px;
    color: rgb(0, 206, 130);
  }
`;

// 넛츠 컨테이너 --------------------

// 투표권 컨테이너 --------------------

// 내 투표권
const Votes = styled.div`
  width: 50%;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 15px 20px;
  align-items: center;
  gap: 15px;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.06),
    rgba(0, 0, 0, 0.05) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 0px 2px 0px;
`;

// 투표권 이미지
const VotesImage = styled.div`
  margin-bottom: 3px;
`;

// 투표권 충전하기
const VotesCharge = styled.div`
  margin-left: auto;
  border: 1px;
  border-radius: 5px;
  padding: 0 30px;
  background-color: #16be78;
  cursor: pointer;
  p {
    color: white;
  }
  &:hover {
    background-color: #1bb373;
  }
`;

// 투표박스 텍스트
const MyVotes = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;

  p {
    font-size: 18px;
    color: rgb(0, 206, 130);
  }
`;

// 투표권 컨테이너 --------------------

// 넛츠 영수증 [사용내역, 구매내역 + 세부사항]
const NutsReceipt = styled.div`
  padding: 4px 4px 0 4px;
  font-size: 18px;

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 1.75rem;
  }
`;
