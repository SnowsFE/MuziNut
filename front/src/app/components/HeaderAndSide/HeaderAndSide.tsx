"use client";
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

// Navbar에서 받은 함수(toggleSidebar) -> 를 통해 이 변경 사항을 Sidebar에게 전달하여 UI를 업데이트
const HeaderAndSide = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //toggleSiderbar가 호출되면 토글 상황 반전
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default HeaderAndSide;