"use client";
import React from "react";
import styled from "styled-components";
export const navbar = () => {
  return (
    <Navcontainer>
      <Navbar>
        <p>뮤지넛</p>
      </Navbar>
    </Navcontainer>
  );
};

export default navbar;

const Navcontainer = styled.div`
  background-color: white;
  color: var(--color-content-02);
  height: 60px;
  left: 0;
  min-width: 800px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 11000;
`;

const Navbar = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  padding-right: 20px;
  width: 100%;
`;
