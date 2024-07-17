import axios from "axios";
import AxiosURL from "../axios/url";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

/**
 * 로컬 스토리지에 있는 토큰 & 리프레시 토큰을 가져오는 메서드
 */
function getToken() {
  return "Bearer " + localStorage.getItem("token");
}

function getRefreshToken() {
  return "Bearer " + localStorage.getItem("refreshToken");
}

// 토큰들을 셋팅하는 메서드
function setToken(token: string, refreshToken: string) {
  localStorage.setItem("token", token);
  localStorage.setItem("refreshToken", refreshToken);
}

const TokenInfo = () => {
  const [tokenData, setTokenData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const res = await axios.post(`${AxiosURL}/api/authenticate`, {
          headers: {
            Authorization: getToken(),
          },
        });
        setTokenData(res.data);
        console.log(res.data);
      } catch (error) {
        if (
          axios.isAxiosError(error) &&
          error.response &&
          error.response.status === 406
        ) {
          // 토큰이 만료된 경우
          try {
            const refreshResponse = await axios.post(
              `${AxiosURL}/users/re-authenticate`,
              null,
              {
                headers: {
                  Authorization: getRefreshToken(),
                },
              }
            );
            setToken(
              refreshResponse.data.token,
              refreshResponse.data.refreshToken
            );
            fetchTokenData(); // 토큰 정보 다시 가져오기
          } catch (refreshError) {
            // 리프레시 토큰마저 만료된 경우
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            router.push("/login");
          }
        } else {
          console.error(error);
        }
      }
    };
    fetchTokenData();
  }, [router]);

  return tokenData;
};

export { getToken, getRefreshToken, setToken, TokenInfo };
