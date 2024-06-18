"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Login from "../../../../../public/images/login.png";
import banner from "../../../../../public/images/banner.png";
import Link from "next/link";
import { Userdata, BoardData, BookMarkBoardData } from "../userdata";

// UseridProps를 props로 받습니다.
const UseridProfile: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("boards");
  const userinfo = Userdata[0];

  // 5개 이상 더보기 누르면 보이게하는것 -------------------------
  const [boardVisible, setboardVisible] = useState(5);
  const [bookmarkVisible, setbookmarkVisible] = useState(5);

  const AddBoard = () => {
    if (boardVisible + 5 > BoardData.length) {
      // 현재 보여지는 항목 수(boardVisible)와 전체 항목 수(BoardData.length)를 비교하여
      // 더 이상 추가적으로 보여줄 데이터가 없을 경우 초기값으로 초기화합니다.
      setboardVisible(5); // 초기값으로 되돌림
    } else {
      setboardVisible(boardVisible + 5); // 5개씩 추가적으로 보여줍니다.
    }
  };

  const AddBookMark = () => {
    if (bookmarkVisible + 5 > BookMarkBoardData.length) {
      setbookmarkVisible(5);
    } else {
      setbookmarkVisible(bookmarkVisible + 5);
    }
  };
  // 5개 이상 더보기 누르면 보이게하는것 -------------------------

  // 백엔드 get data ------------------------------------------------------
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/profile/boards");
  //       setBoardsData(response.data.boards);
  //       console.log(response.data.boards); // 받아온 데이터 확인
  //     } catch (error) {
  //       console.error("데이터를 불러오지 못했습니다");
  //     }
  //   };

  //   fetchData(); // 데이터를 받아오는 함수 호출
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/profile/boards");
  //       setBookMarkBoardsData(response.data.bookmarkboards);
  //       console.log(response.data.bookmarkboards); // 받아온 데이터 확인
  //     } catch (error) {
  //       console.error("데이터를 불러오지 못했습니다");
  //     }
  //   };

  //   fetchData(); // 데이터를 받아오는 함수 호출
  // }, []);
  // 백엔드 get data ------------------------------------------------------

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
      {/* 라운지 큰 컨테이너 */}
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
  font-size: 24px;
`;

// 박스를 감싸는 컨테이너
const BoardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  overflow: hidden;
`;

// 박스 스타일
const Box = styled.div`
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  flex: 1 1 calc(50%); /* 5개의 박스가 한 줄에 들어가도록 설정 */
  box-sizing: border-box;
  transition: box-shadow 0.3s ease; /* 박스 섀도우의 부드러운 전환 효과 추가 */

  &:hover {
    transition: 0.3s ease;
    border-color: #1bb373;
  }
`;