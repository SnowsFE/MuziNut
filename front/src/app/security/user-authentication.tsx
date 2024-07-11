import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        alert("로그인이 필요합니다.");
        router.replace("/login");
        return;
      }

      try {
        const response = await axios.post("/api/authenticate", { token });
        if (!response.data.valid) {
          localStorage.removeItem("accessToken");
          alert("유효하지 않은 토큰입니다. 다시 로그인 해주세요.");
          router.replace("/login");
        }
      } catch (error) {
        console.error("토큰 유효성 검사 오류:", error);
        alert("오류가 발생했습니다. 다시 로그인 해주세요.");
        router.replace("/login");
      }
    };

    if (typeof window !== "undefined") {
      checkAuth();
    }
  }, [router]);

  return {}; // 필요에 따라 인증 상태를 반환할 수 있음
};

export default useAuth;
