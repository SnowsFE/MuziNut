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

// export const Userdata: UseridProps["userinfo"][] = [
//     {
//       name: "John Doe",
//       follow: 10,
//       follower: 20,
//       introduce: "Hello, I am John Doe.",
//     },
//   ];
