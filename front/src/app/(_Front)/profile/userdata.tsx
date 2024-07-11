// 댓글 데이터 -------------------------------------------------
interface LoungePostProps {
  loungepostdata: {
    profile: string;
    name: string;
    write: string;
    img: string;
    like: number;
    comment: number;
  };
}
export type LoungePostPropsOmit = Omit<
  LoungePostProps["loungepostdata"],
  "img"
>;

export const LoungePostData: LoungePostPropsOmit[] = [
  {
    profile: "",
    name: "",
    write: "",
    like: 0,
    comment: 0,
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
    board: "민서",
  },
  {
    board: "정말",
  },
  {
    board: "너무",
  },
  {
    board: "귀엽다",
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
