"use client";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.3s, color 0.3s; // 부드러운 테마 전환을 위한 트랜지션 추가
  }
`;

const DarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // 테마 정의
  const lightTheme = {
    bgColor: "#ffffff",
    textColor: "#000000",
  };

  const darkTheme = {
    bgColor: "#000000",
    textColor: "#ffffff",
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <DarkModeButton onClick={toggleDarkMode}>
        {darkMode ? "🌙" : "☀️"}
      </DarkModeButton>
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
