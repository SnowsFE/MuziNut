"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { StarIcon } from "@/app/components/darkmode/icon";
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
      <ArtistSupport></ArtistSupport>
      <ArtistProfile>
        <img src={artist.profileImage} alt={artist.name} />
        <div>{artist.name}</div>
      </ArtistProfile>
      <ArtistMusic>{artist.music}</ArtistMusic>
      <ArtistVote>{artist.votes}</ArtistVote>
    </ArtistContainer>
  );
};

export default BestPick;

const BestPickContainer = styled.div`
  padding-right: calc(50% - 642px);
  padding-left: calc(50% - 642px);
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BestPickSearch = styled.div`
  position: relative;
  border: 2px solid #eeeeee;
  border-radius: 12px;
  width: 50%;
  height: 50px;
  display: flex;
  background-color: #ffffff;

  &:focus-within {
    box-shadow: 0 0 0 2px rgba(243, 239, 0, 0.5);
    border-color: transparent;
  }
`;

const BestPickInputMargin = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 7px;
  border: none;
  width: 300px;
  &:focus {
    outline: none;
  }
`;

const Search = styled.button`
  border: 1px solid #333;
  border-radius: 5px;
  padding: 7px 15px;

  &:hover {
    transform: scale(1.01);
    background-color: #f4ffdf;
  }
`;

const BestPickArtist = styled.div`
  display: flex;
  align-items: center;
  padding-right: calc(50% - 642px);
  padding-left: calc(50% - 642px);
  padding-top: 50px;
  gap: 10px;
`;

const ArtistContainer = styled.div`
  width: 33%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ArtistSupport = styled.button``;
const ArtistProfile = styled.div``;
const ArtistMusic = styled.div``;
const ArtistVote = styled.button``;
