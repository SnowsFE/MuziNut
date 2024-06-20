"use client";
import React, { useState } from "react";
import styled from "styled-components";
import {
  MoneyIcon,
  StarIcon,
  GoldMedal,
  SilverMedal,
  BronzeMedal,
} from "../../../components/icon/icon";
import { bestArtists, commentData, commentNumber } from "../bestartist";
import { LikeIcon } from "../../../components/icon/icon";

interface ArtistProps {
  artist: {
    id: number;
    name: string;
    profileImage: string;
    music: string;
    votes: number;
    voterate: number;
  };
  medalIndex: number;
}

const BestPick: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  // const [artists, setArtists] = useState<ArtistProps['artist'][]>([]);

  // useEffect(() => {
  //   const fetchArtists = async () => {
  //     try {
  //       const response = await axios.get('YOUR_BACKEND_ENDPOINT'); // 백엔드 API 엔드포인트
  //       setArtists(response.data);
  //     } catch (error) {
  //       console.error("Error fetching artists:", 에러);
  //     }
  //   };

  //   fetchArtists();
  // }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    // console.log("Input Value:", inputValue);
    alert("해당 아티스트는 저도 좋아합니다😄");
  };

  const handleCommentClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur(); // 댓글 등록 버튼에서 포커스 효과 제거를 도와주는 효과
    alert("댓글이 등록되었습니다!");
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
        {bestArtists.map((artist, index) => (
          <Artist key={artist.id} artist={artist} medalIndex={index} />
        ))}
      </BestPickArtist>
      <BestCommentContainerList>
        <BestCommentContainerBox>
          <BestComment>댓글 {commentNumber.comment}</BestComment>
          <BestCommentContainer>
            <input type="text" placeholder="댓글을 입력하세요"></input>
            <BestCommentBox onClick={handleCommentClick}>등록</BestCommentBox>
          </BestCommentContainer>
        </BestCommentContainerBox>
        {commentData.map((comment, index) => (
          <BestCommentList key={index}>
            <BestCommentHeader>
              <BestCommentProfile src={comment.profile} />
              <BestCommentNickname>{comment.name}</BestCommentNickname>
              <BestCommentTime>{comment.time}</BestCommentTime>
            </BestCommentHeader>
            <BestCommentBody>
              <BestCommentText>{comment.bodytext}</BestCommentText>
              <BestCommentActions>
                <BestCommentLike>
                  <LikeIcon /> {comment.like}
                </BestCommentLike>
                <BestCommentReport>🚨</BestCommentReport>
              </BestCommentActions>
            </BestCommentBody>
          </BestCommentList>
        ))}
        <BestCommentPagination>페이지네이션</BestCommentPagination>
      </BestCommentContainerList>
    </BestPickContainer>
  );
};

const Artist: React.FC<ArtistProps> = ({ artist, medalIndex }) => {
  const renderMedal = () => {
    if (medalIndex === 0) return <GoldMedal />;
    if (medalIndex === 1) return <SilverMedal />;
    if (medalIndex === 2) return <BronzeMedal />;
    return null;
  };

  return (
    <ArtistContainer>
      <ArtistSupport>
        {renderMedal()}
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
        <VoteRate>{artist.voterate}%</VoteRate>
      </VoteRateBox>
      <VoteButton>투표하기</VoteButton>
    </ArtistContainer>
  );
};

export default BestPick;

// 응원하기 베스트 픽 3명을 감싸는 컨테이너
const BestPickContainer = styled.div`
  padding-right: calc(50% - 642px);
  padding-left: calc(50% - 642px);
  padding-top: 10px;
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
  padding: 7px 7px 6px 7px;
  border: none;
  width: 300px;
  height: auto;
  line-height: 1.5;
  &:focus {
    outline: none;
  }
`;

// 베스트 픽 검색 버튼
const Search = styled.div`
  margin-left: 8px;
  padding-left: 8px;
  border-left: 1px solid rgba(90, 101, 119, 0.15);
  color: #ccc;
  cursor: pointer;

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

// 베스트 픽 댓글 컨테이너를 감싸는 박스와 댓글 목록을 합친 박스
const BestCommentContainerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 베스트 픽 댓글 목록
const BestCommentList = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 50px 50px 0 50px;
`;

// 베스트 픽 댓글 목록 헤더 [ 프로필, 닉네임, 시간 ]
const BestCommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const BestCommentProfile = styled.img<{ src: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;

const BestCommentNickname = styled.div`
  margin-left: 3px;
`;

const BestCommentTime = styled.div`
  margin-left: 3px;
`;

// 베스트 픽 댓글 본문
const BestCommentBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const BestCommentText = styled.div`
  padding: 10px 0;
  font-size: 16px;
`;

const BestCommentActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const BestCommentLike = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  :first-child {
    margin-top: 1px;
  }
`;

const BestCommentReport = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const BestCommentPagination = styled.div`
  padding: 10px 0;
  text-align: center;
`;

// 베스트 픽 댓글 컨테이너를 감싸는 박스
const BestCommentContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  padding-top: 50px;
`;

// 베스트 픽 댓글 수
const BestComment = styled.div`
  display: flex;
  align-self: flex-start;
  font-size: 20px;
  padding: 0 0 10px 0;
`;

// 베스트 픽 댓글 컨테이너
const BestCommentContainer = styled.div`
  width: 98%;
  height: auto; /* 높이를 자동으로 조정 */
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 15px;
  display: flex;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;

  input {
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
    color: var(--text-color);
    line-height: 1.5;
  }

  &:focus-within {
    box-shadow: 0 0 0 2px #8dd9b9;
    border-color: transparent;
  }
`;

// 베스트 픽 댓글 등록 버튼
const BestCommentBox = styled.button`
  width: 5%;
  padding: 10px 15px;
  border: 1px solid #1bd185;
  border-radius: 12px;
  background-color: var(--bg-color);
  color: var(--text-color);
  cursor: pointer;
  font-family: "esamanru Light";

  &:hover {
    background-color: #16be78;
    transition: 0.3s ease;
  }

  &:focus {
    outline: none; /* 포커스 스타일 제거, 필요시 커스텀 스타일 추가 */
  }
`;

// 아티스트 리스트 컨테이너
const ArtistContainer = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// 아티스트 후원
const ArtistSupport = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 12px;
  gap: 5px;

  :hover {
    background-color: #16be78;
    transition: 0.3s ease;
  }

  :first-child:hover {
    background-color: initial;
    color: initial;
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
  cursor: pointer;
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
  padding: 40px 40px 35px 40px;
  gap: 10px;
`;

// 아티스트 투표율 텍스트
const VoteText = styled.div``;

// 아티스트 투표율 비율
const VoteRate = styled.div`
  font-size: 36px;
`;

// 아티스트 투표 버튼
const VoteButton = styled.div`
  width: 20%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #1bd185;
  border-radius: 12px;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: #16be78;
  }
`;
