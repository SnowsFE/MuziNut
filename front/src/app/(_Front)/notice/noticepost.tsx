import { useState } from "react";
import styled from "styled-components";

const NoticePost: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "첫 번째 게시글",
      author: "작성자1",
      date: "2024-07-01",
      views: 100,
      likes: 10,
    },
    {
      id: 2,
      title: "두 번째 게시글",
      author: "작성자2",
      date: "2024-07-02",
      views: 150,
      likes: 20,
    },
    {
      id: 3,
      title: "세 번째 게시글",
      author: "작성자3",
      date: "2024-07-03",
      views: 200,
      likes: 30,
    },
    {
      id: 4,
      title: "네 번째 게시글",
      author: "작성자4",
      date: "2024-07-04",
      views: 250,
      likes: 40,
    },
    {
      id: 5,
      title: "다섯 번째 게시글",
      author: "작성자5",
      date: "2024-07-05",
      views: 300,
      likes: 50,
    },
    {
      id: 6,
      title: "여섯 번째 게시글",
      author: "작성자6",
      date: "2024-07-06",
      views: 350,
      likes: 60,
    },
    {
      id: 7,
      title: "일곱 번째 게시글",
      author: "작성자7",
      date: "2024-07-07",
      views: 400,
      likes: 70,
    },
    {
      id: 8,
      title: "여덟 번째 게시글",
      author: "작성자8",
      date: "2024-07-08",
      views: 450,
      likes: 80,
    },
    {
      id: 9,
      title: "아홉 번째 게시글",
      author: "작성자9",
      date: "2024-07-09",
      views: 500,
      likes: 90,
    },
    {
      id: 10,
      title: "열 번째 게시글",
      author: "작성자10",
      date: "2024-07-10",
      views: 550,
      likes: 100,
    },
    {
      id: 11,
      title: "열 번째 게시글",
      author: "작성자10",
      date: "2024-07-10",
      views: 550,
      likes: 100,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // 현재 페이지에 해당하는 게시글을 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 번호를 계산
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <DarkBackground />
      <Content>
        <Header>
          <HeaderItem>제목</HeaderItem>
          <HeaderItem>작성자</HeaderItem>
          <HeaderItem>작성일</HeaderItem>
          <HeaderItem>조회수</HeaderItem>
          <HeaderItem>좋아요</HeaderItem>
        </Header>
        {currentPosts.map((post) => (
          <Post key={post.id}>
            <PostItem>{post.title}</PostItem>
            <PostItem>{post.author}</PostItem>
            <PostItem>{post.date}</PostItem>
            <PostItem>{post.views}</PostItem>
            <PostItem>{post.likes}</PostItem>
          </Post>
        ))}
        <PageNation>
          <PageButton onClick={() => setCurrentPage(1)}>{"<<"}</PageButton>
          {pageNumbers.map((number) => (
            <PageButton
              key={number}
              onClick={() => setCurrentPage(number)}
              isActive={number === currentPage}
            >
              {number}
            </PageButton>
          ))}
          <PageButton onClick={() => setCurrentPage(pageNumbers.length)}>
            {">>"}
          </PageButton>
        </PageNation>
      </Content>
    </Container>
  );
};

export default NoticePost;

const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
`;

const DarkBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 12px;
  z-index: 1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 10px 20px;
  height: 30px;
  border-bottom: 2px solid #ccc;
`;

const HeaderItem = styled.div`
  flex: 1;
  text-align: center;
  font-size: 15px;
`;

const Post = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #ebedf3;
  color: black;
`;

const PostItem = styled.div`
  flex: 1;
  text-align: center;
  font-size: 13px;
  font-family: "esamanru Medium";
`;

const PageNation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  padding: 18px 0;
  border-radius: 12px;
  background-color: #fff;
`;

const PageButton = styled.div<{ isActive?: boolean }>`
  font-size: 14px;
  font-family: "esamanru Medium";
  margin: 0 5px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${({ isActive }) => (isActive ? "#ddd" : "#f1f1f1")};
  &:hover {
    background-color: #ddd;
  }
  color: black;
`;
