import styled from "styled-components";
import { commentNumber } from "../../mypick/bestartist";
import { LikeIcon } from "@/app/components/icon/icon";

interface CommentProps {
  id: number;
  name: string;
  profile: string;
  time: string;
  bodytext: string;
  like: number;
}

const commentData: CommentProps[] = [
  {
    id: 1,
    name: "마냥",
    profile:
      "https://nng-phinf.pstatic.net/MjAyMzEyMTFfMTM3/MDAxNzAyMjgyNjI1MDgw.Ozu1fi3gdfyooyBjO_SGXJBDqRWgDFLlmWAFZg6qYIUg.rlnppQX9tMgn2nvgjhXwqsJhfktN23Gdjj09CgJ--BYg.JPEG/104.%EB%A7%88%EC%9D%B8%ED%81%AC%EB%9E%98%ED%94%84%ED%8A%B8_%EC%99%84%EC%84%B1%EB%B3%B8_%EC%9D%B4%EB%8B%AC%EB%8B%98.jpg",
    time: "3시간",
    bodytext: "안녕하세요 마냥님이 1등이라니 믿을 수가 없어요..",
    like: 3,
  },
  {
    id: 1,
    name: "마냥",
    profile:
      "https://nng-phinf.pstatic.net/MjAyMzEyMTFfMTM3/MDAxNzAyMjgyNjI1MDgw.Ozu1fi3gdfyooyBjO_SGXJBDqRWgDFLlmWAFZg6qYIUg.rlnppQX9tMgn2nvgjhXwqsJhfktN23Gdjj09CgJ--BYg.JPEG/104.%EB%A7%88%EC%9D%B8%ED%81%AC%EB%9E%98%ED%94%84%ED%8A%B8_%EC%99%84%EC%84%B1%EB%B3%B8_%EC%9D%B4%EB%8B%AC%EB%8B%98.jpg",
    time: "3시간",
    bodytext: "안녕하세요 마냥님이 1등이라니 믿을 수가 없어요..",
    like: 3,
  },
];

const handleCommentClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.blur(); // 댓글 등록 버튼에서 포커스 효과 제거를 도와주는 효과
  alert("댓글이 등록되었습니다!");
};

const OpenComment: React.FC = () => {
  return (
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
    </BestCommentContainerList>
  );
};

export { OpenComment };

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
  padding: 40px 50px 0 50px;

  position: relative; /* 부모 요소로부터 상대적 위치 설정 */

  /* ::after 가상 요소를 사용하여 하단에 선 추가 */
  &::after {
    content: ""; /* 가상 요소의 내용을 빈 문자열로 설정 */
    position: absolute; /* 절대적 위치 설정 */
    bottom: -1px; /* 아래쪽에 배치 */
    width: 92.5%; /* 가로 너비를 100%로 설정 */
    height: 1px; /* 선의 높이(두께)를 설정 */
    background-color: #ccc; /* 선의 색상 설정 */
  }
`;

// 베스트 픽 댓글 목록 헤더 [ 프로필, 닉네임, 시간 ]
const BestCommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  :first-child {
    margin-right: 2px;
  }
`;

// 베스트 픽 댓글 작성자 프로필
const BestCommentProfile = styled.img<{ src: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;

// 베스트 픽 댓글 작성자 닉네임
const BestCommentNickname = styled.div`
  font-size: 13px;
`;

// 베스트 픽 댓글 작성 시간
const BestCommentTime = styled.div`
  font-size: 13px;
`;

// 베스트 픽 댓글 본문
const BestCommentBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

// 베스트 픽 댓글 본문
const BestCommentText = styled.div`
  padding: 10px 0;
  font-size: 14px;
  font-family: "esamanru Medium";
`;

// 베스트 픽 댓글 작동
const BestCommentActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

// 베스트 픽 댓글 좋아요
const BestCommentLike = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;

  :first-child {
    margin-top: 1px;
  }
`;

// 베스트 픽 댓글 신고
const BestCommentReport = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// 베스트 픽 댓글 컨테이너를 감싸는 박스
const BestCommentContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  padding-top: 30px;
`;

// 베스트 픽 댓글 수
const BestComment = styled.div`
  display: flex;
  align-self: flex-start;
  font-size: 18px;
  padding: 0 0 10px 0;
  cursor: pointer;
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
