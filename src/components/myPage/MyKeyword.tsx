import React from "react";
import styled from "@emotion/styled";
import { useAppDispatch } from "../../redux/hooks";
import { useAppSelector } from "../../redux/hooks";

export type KeywordsItemType = {
  termType: string;
  typeId: string;
  names: string;
};

const MyKeyword = () => {
  const userTabList = useAppSelector(state => state.keywords);

  interface Keyword {
    data: string;
  }

  return (
    <KeywordsWarp>
      <h3>마이키워드</h3>
      {userTabList.map(userTab => (
        <Keywords>{userTab.data}</Keywords>
      ))}
    </KeywordsWarp>
  );
};

export default MyKeyword;

const KeywordsWarp = styled.div`
  margin-top: 40px;

  h3 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Keywords = styled.button`
  display: inline-block;
  padding: 12px 40px 16px;
  border: solid 1px #48c0b7;
  background-color: #fff;
  border-radius: 5px;
  color: ${({ theme }) => theme.myKeyword};
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  :hover {
    background-color: rgba(72, 192, 183, 0.04);
  }
`;
