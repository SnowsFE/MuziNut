export interface UseridProps {
  userinfo: {
    name: string;
    follow: number;
    follower: number;
    introduce: string;
    profileImage: string;
    bannerImage: string;
    endDate: number;
    loungeWrite: string | number;
    like: number;
    comment: number;
  };
}

export type UseridPropsWithoutImages = Omit<
  UseridProps["userinfo"],
  | "profileImage"
  | "bannerImage"
  | "endDate"
  | "loungeWrite"
  | "like"
  | "comment"
>;

export const Userdata: UseridPropsWithoutImages[] = [
  {
    name: "John Doe",
    follow: 10,
    follower: 20,
    introduce: "Hello, I am John Doe.",
  },
];

interface CommentProps {
  commentdata: {
    write: string;
    img: string;
    like: number;
    comment: number;
  };
}
export type CommentPropsOmit = Omit<CommentProps["commentdata"], "img">;

export const CommentData: CommentPropsOmit[] = [
  {
    write: "안녕하세요",
    like: 3,
    comment: 4,
  },
  {
    write:
      "반갑습니다 저는 지금 일단 밥을 좀 먹어야겠어요 방구뿡 방구뿡 방구방구 뿡뿡, 반갑습니다 저는 지금 일단 밥을 좀 먹어야겠어요 방구뿡 방구뿡 방구방구 뿡뿡, 반갑습니다 저는 지금 일단 밥을 좀 먹어야겠어요 방구뿡 방구뿡 방구방구 뿡뿡",
    like: 5,
    comment: 7,
  },
  {
    write: "안녕하세요",
    like: 3124,
    comment: 4112,
  },
];

// export const Userdata: UseridProps["userinfo"][] = [
//     {
//       name: "John Doe",
//       follow: 10,
//       follower: 20,
//       introduce: "Hello, I am John Doe.",
//     },
//   ];
