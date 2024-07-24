// 사용자 정보 전역 관리
"use client";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

// 사용자 정보
export type UserInfo = {
  password: string;
  avatar: string;
  nickname: string;
  useremail: string;
};

// 컨텍스트에서 사용할 타입
type UserContextType = {
  user: UserInfo | null; // null일 경우 로그인 하지 않은 상태
  setUser: (user: UserInfo | null) => void;
};

// 컨텍스트는 전역적인 상태를 관리하고 공유하는 데 사용
const UserContext = createContext<UserContextType | undefined>(undefined);

// UserProvider 컴포넌트 - 사용자 정보 관리(user, setUser) + 하위 컴포넌트에 컨텍스트 제공
export const UserProvider = ({ children }: { children: ReactNode }) => {
  console.log("UserProvider 생성");
  const [user, setUser] = useState<UserInfo | null>(null); // 유저 상태 정보

  // useEffect 훅은 컴포넌트가 마운트될 때 한 번 실행
  useEffect(() => {
    // 로컬 스토리지에서 token을 가져와 파싱하여 사용자 정보를 설정
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:8080/users/authenticate", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
          console.log("UserContext의 사용자 정보:", response.data);
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    }
  }, []);

  return (
    // value로 user, setUser 객체를 전달하여 children으로 전달된 모든 하위 컴포넌트에서 useContext 사용 가능
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 커스텀 훅 - 사용자 정보 접근하기 위해 - UserContext 반환
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    // UserProvider 내에서 사용되지 않았다면
    throw new Error("useUser 는 UserProvider 내에서 쓰여져야 함.");
  }
  return context; // context 반환하여 user와 setUser에 접근할 수 있음
};
