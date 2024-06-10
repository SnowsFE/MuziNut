"use client";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";

const DarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // 컴포넌트가 마운트되었음을 표시
    if (typeof window !== "undefined") {
      // 초기 상태를 로컬 스토리지에서 가져옴
      const savedTheme = localStorage.getItem("darkMode");
      setDarkMode(savedTheme ? JSON.parse(savedTheme) : false);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.body.dataset.theme = darkMode ? "dark" : "light";
      // 다크 모드 상태를 로컬 스토리지에 저장
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode, isMounted]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // 테마 정의
  const lightTheme = {
    bgColor: "#fff",
    textColor: "#0f0f0f",
  };

  const darkTheme = {
    bgColor: "#0f0f0f",
    textColor: "#f1f1f1",
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      {isMounted && (
        <DarkModeButton onClick={toggleDarkMode}>
          {darkMode ? "🌙" : "☀️"}
        </DarkModeButton>
      )}
    </ThemeProvider>
  );
};

export default DarkMode;

const DarkModeButton = styled.div`
  width: 24px;
  height: 24px;
  padding: 16px;
  cursor: pointer;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.3s, color 0.3s; // 부드러운 테마 전환을 위한 트랜지션 추가
  }
`;
