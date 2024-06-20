// 프로필 데이터 -------------------------------------------------

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

// 프로필 데이터 -------------------------------------------------

// 댓글 데이터 -------------------------------------------------
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

// 댓글 데이터 -------------------------------------------------

// 게시글 데이터 ------------------------------------------------
interface BoardsData {
  board: string | number;
}

export const BoardData: BoardsData[] = [
  {
    board: "다리 짧은 민서에 대해서 신고합니다",
  },
  {
    board: "항녕",
  },
  {
    board: "왕녕",
  },
  {
    board: "앙녕",
  },
  {
    board: "앙냥",
  },
  {
    board: "안녕",
  },
  {
    board: "항녕",
  },
  {
    board: "왕녕",
  },
  {
    board: "앙녕",
  },
  {
    board: "앙냥",
  },
  {
    board: "안녕",
  },
  {
    board: "항녕",
  },
  {
    board: "왕녕",
  },
  {
    board: "앙녕",
  },
  {
    board: "앙냥",
  },
  {
    board: "안녕",
  },
  {
    board: "항녕",
  },
  {
    board: "왕녕",
  },
  {
    board: "앙녕",
  },
  {
    board: "앙냥",
  },
];
// 게시글 데이터 ------------------------------------------------

// 북마크 게시글 데이터 ------------------------------------------------
interface BookMark {
  bookmarkboard: string | number;
}

export const BookMarkBoardData: BookMark[] = [
  {
    bookmarkboard: "배터리 1% 남았잖아 보일러 고장났잖아",
  },
  {
    bookmarkboard: "안녕2",
  },
  {
    bookmarkboard: "안녕3",
  },
  {
    bookmarkboard: "안녕4",
  },
  {
    bookmarkboard: "안녕5",
  },
  {
    bookmarkboard: "안녕6",
  },
  {
    bookmarkboard: "안녕7",
  },
  {
    bookmarkboard: "안녕8",
  },
  {
    bookmarkboard: "안녕9",
  },
  {
    bookmarkboard: "안녕7",
  },
  {
    bookmarkboard: "안녕7",
  },
];
// 북마크 게시글 데이터 ------------------------------------------------
