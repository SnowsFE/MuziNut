import axios from "axios";

/**
 * 로컬 스토리지에 있는 토큰 & 리프레시 토큰을 가져오는 메서드
 */
function getToken() {
  return "Bearer " + localStorage.getItem("token");
}

function getRefreshToken() {
  return "Bearer " + localStorage.getItem("refreshToken");
}

//토큰들을 셋팅하는 메서드
function setToken(token: string, refreshToken: string) {
  localStorage.setItem("token", token);
  localStorage.setItem("refreshToken", refreshToken);
}

export { getToken, getRefreshToken, setToken };
