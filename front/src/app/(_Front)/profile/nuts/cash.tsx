import React from "react";
import styled from "styled-components";

interface CashDataProps {
  data: {
    date: string;
    amount: number;
    description: string;
    message: string;
  }[];
}

const cashData: CashDataProps["data"] = [
  {
    date: "2024-06-18 12:34",
    amount: 100,
    description: "후원",
    message: "감사합니다!",
  },
  {
    date: "2024-06-18 12:34",
    amount: 100,
    description: "후원",
    message: "감사합니다!",
  },
];

// 사용 내역 컴포넌트
const Cash: React.FC<{ data: CashDataProps["data"] }> = ({ data }) => {
  return (
    <div>
      {data.length === 0 ? (
        <EmptyMessage>사용내역이 없습니다.</EmptyMessage>
      ) : (
        <div>
          <Labels>
            <Label>사용일시</Label>
            <Label>사용수량</Label>
            <Label>사용내용</Label>
            <Label>후원 메시지</Label>
          </Labels>
          {data.map((item, index) => (
            <Values key={index}>
              <Value>{item.date}</Value>
              <Value>{item.amount}</Value>
              <Value>{item.description}</Value>
              <Value>{item.message}</Value>
            </Values>
          ))}
        </div>
      )}
    </div>
  );
};

interface CashPurchaseProps {
  data: {
    date: string;
    method: string;
    amount: number;
    charge: number;
  }[];
  // 충전일시 충전방식 충전수량 결제금액
}

export { Cash, cashData };

const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f1f1f1;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`;

const Values = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`;

const Label = styled.div`
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
`;

const Value = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "esamanru Light";
  font-size: 12px;
`;

// 데이터 받지 않았을 때 공백 메시지
const EmptyMessage = styled.div`
  padding: 20px;
  text-align: center;
  color: #999;
`;
