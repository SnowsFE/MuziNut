"use client";
import React, { useState } from "react";
import styled from "styled-components";
import {
  MoneyIcon,
  StarIcon,
  GoldMedal,
} from "../../../../app/components/icon";
import { bestArtists } from "../bestartist";

const BestPick: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    console.log("Input Value:", inputValue);
    // 데이터를 서버로 보내거나 다른 작업을 수행할 수 있습니다.
  };

  return (
    <BestPickContainer>
      <BestPickSearch>
        <BestPickInputMargin>
          <StarIcon />
          <StyledInput
            type="text"
            placeholder="나의 아티스트 찾기"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Search onClick={handleSearchClick}>검색</Search>
        </BestPickInputMargin>
      </BestPickSearch>
      <BestPickArtist>
        {bestArtists.map((artist) => (
          <Artist key={artist.id} artist={artist} />
        ))}
      </BestPickArtist>
    </BestPickContainer>
  );
};

interface ArtistProps {
  artist: {
    id: number;
    name: string;
    profileImage: string;
    music: string;
    votes: number;
  };
}

const Artist: React.FC<ArtistProps> = ({ artist }) => {
  return (
    <ArtistContainer>
      <ArtistSupport>
        <GoldMedal />
        <IconTextBox>
          <MoneyIcon />
          <SupportText>후원</SupportText>
        </IconTextBox>
      </ArtistSupport>
      <ArtistProfile>
        <ProfileImage src={artist.profileImage} />
        <ArtistName>{artist.name}</ArtistName>
      </ArtistProfile>
      <ArtistMusicVote>
        <ArtistMusic>{artist.music}</ArtistMusic>
        <ArtistVote>{artist.votes}표</ArtistVote>
      </ArtistMusicVote>
      <VoteRateBox>
        <VoteText>투표율</VoteText>
        <VoteRate>70%</VoteRate>
      </VoteRateBox>
    </ArtistContainer>
  );
};

export default BestPick;

// 응원하기 베스트 픽 3명을 감싸는 컨테이너
const BestPickContainer = styled.div`
  padding-right: calc(50% - 642px);
  padding-left: calc(50% - 642px);
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 베스트 픽 검색창
const BestPickSearch = styled.div`
  position: relative;
  border: 2px solid #eeeeee;
  border-radius: 12px;
  width: 50%;
  height: 50px;
  display: flex;
  background-color: #ffffff;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;

  &:focus-within {
    box-shadow: 0 0 0 2px #8dd9b9;
    border-color: transparent;
  }
`;

// 베스트 픽 인풋박스 내부 마진
const BestPickInputMargin = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
`;

// 베스트 픽 인풋 박스
const StyledInput = styled.input`
  flex: 1;
  padding: 7px;
  border: none;
  width: 300px;
  &:focus {
    outline: none;
  }
`;

// 베스트 픽 검색 버튼
const Search = styled.div`
  margin-left: 8px;
  padding-left: 8px;
  border-left: 1px solid rgba(90, 101, 119, 0.15);
  cursor: pointer;

  color: #ccc;

  &:hover {
    transform: scale(1.01);
    color: #0f0f0f;
    transition: 0.3s ease;
  }
`;

// 베스트 픽 아티스트 목록 [ Map함수 ]
const BestPickArtist = styled.div`
  display: flex;
  align-items: center;
  padding-right: calc(50% - 642px);
  padding-left: calc(50% - 642px);
  padding-top: 50px;
  gap: 30px;
`;

// 아티스트 리스트 컨테이너
const ArtistContainer = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: relative;
`;

// 아티스트 후원
const ArtistSupport = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 12px;
  gap: 5px;

  :hover {
    cursor: pointer;
    background-color: #16be78;
    transition: 0.3s ease;
  }
`;

// 후원 아이콘 텍스트 박스
const IconTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1bd185;
  border: transparent;
  border-radius: 10px;
  padding: 4px 10px 4px 5px;
`;

// 아티스트 후원 텍스트
const SupportText = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

// 아티스트 프로필
const ArtistProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

// 아티스트 프로필 이미지
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

// 아티스트 이름
const ArtistName = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

// 아티스트 음악, 투표 컨테이너
const ArtistMusicVote = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

// 아티스트 음악 [ 곡 ]
const ArtistMusic = styled.div``;

// 아티스트 투표
const ArtistVote = styled.div``;

// 아티스트 투표 박스
const VoteRateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 10px;
`;

// 아티스트 투표율 텍스트
const VoteText = styled.div``;

// 아티스트 투표율 비율
const VoteRate = styled.div`
  font-size: 36px;
`;
