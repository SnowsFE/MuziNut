import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import AxiosURL from "@/app/axios/url";

interface Post {
  id: number;
  title: string;
  writer: string;
  createdDt: string;
  view: number;
  like: number;
}

interface NoticePostProps {
  selected: string;
}

const NoticePost: React.FC<NoticePostProps> = ({ selected }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const [adminBoardsForms, setAdminBoardsForms] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const authToken =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBuYXZlci5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTiIsImV4cCI6MTcyNDU2MzA5Mn0.jjHOaODsvIRqhefGtI5SJ9mBlQdBcouiiWqXVyB0tXh73S7V83e-bH4Wi6K-ImwMOMgPge7gXOcGpEqUxpVZsw";

  useEffect(() => {
    const fetchData = async (page: number, size: number) => {
      try {
        const res = await axios.get(`${AxiosURL}/community/admin-boards`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          params: {
            page,
            size,
          },
        });
        const { adminBoardsForms, totalPage } = res.data;
        setAdminBoardsForms(adminBoardsForms);
        setTotalPages(totalPage);
        console.log(res.data);
      } catch (error) {
        console.error("데이터가 불러와지지 않았습니다", error);
      }
    };

    fetchData(currentPage, postsPerPage);
  }, [currentPage]);

  const sortPosts = (criterion: string, posts: Post[]): Post[] => {
    switch (criterion) {
      case "인기순":
        return [...posts].sort((a, b) => b.view - a.view);
      case "최신순":
        return [...posts].sort(
          (a, b) =>
            new Date(b.createdDt).getTime() - new Date(a.createdDt).getTime()
        );
      case "좋아요순":
        return [...posts].sort((a, b) => b.like - a.like);
      default:
        return posts;
    }
  };

  const sortedPosts = sortPosts(selected, adminBoardsForms);

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
        {sortedPosts.map((post) => (
          <Post key={post.id}>
            <PostItem>{post.title}</PostItem>
            <PostItem>{post.writer}</PostItem>
            <PostItem>{post.createdDt}</PostItem>
            <PostItem>{post.view}</PostItem>
            <PostItem>{post.like}</PostItem>
          </Post>
        ))}
        <PageNation>
          <PageButton onClick={() => handlePageClick(1)}>{"<<"}</PageButton>
          <PageButton onClick={handlePrevPage}>{"<"}</PageButton>
          {Array.from({ length: totalPages }, (_, index) => (
            <PageButton
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              isActive={index + 1 === currentPage}
            >
              {index + 1}
            </PageButton>
          ))}
          <PageButton onClick={handleNextPage}>{">"}</PageButton>
          <PageButton onClick={() => handlePageClick(totalPages)}>
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Post = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #ebedf3;
  color: black;
  cursor: pointer;
`;

const PostItem = styled.div`
  flex: 1;
  text-align: center;
  font-size: 13px;
  font-family: "esamanru Medium";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  cursor: pointer;
  width: 20px;
  text-align: center;
  padding: 8.5px 7px;
  border-radius: 5px;
  background-color: ${({ isActive }) => (isActive ? "#ddd" : "#f1f1f1")};
  &:hover {
    background-color: #ddd;
  }
  color: black;
`;
