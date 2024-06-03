"use client";
import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import loginimage from "../../../public/images/login.png";

const login = () => {
  return (
    <Background>
      <ImageContainer>
        <AnimatedImage src={loginimage} alt="login" width={600} height={600} />
      </ImageContainer>
    </Background>
  );
};

const Background = styled.div`
  background: linear-gradient(135deg, #1bb373 0%, #2ecf75 100%);
  height: 100vh;
  padding: 0px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AnimatedImage = styled(Image)`
  animation: ${slideUp} 1s ease-out;
`;

export default login;
