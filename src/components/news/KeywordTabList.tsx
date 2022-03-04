import styled from "@emotion/styled";
import KeywordTab from "./keywordTab";

const TabAddBtnKeyword = () => {
  return (
    <AddBtn>
      <i></i>키워드 추가
    </AddBtn>
  );
};

const KeywordTabList = () => {
  return (
    <div className="keywordTabs">
      <Wrap>
        <KeywordTab />
        <TabAddBtnKeyword />
      </Wrap>
    </div>
  );
};

export default KeywordTabList;

const Wrap = styled.div`
  display: flex;
`;

const AddBtn = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  outline: none;
  border: none;
  font-family: NotoSans-Display;
  font-size: 16px;
  padding: 10px 32px 10px 20px;
  background-color: rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  i {
    width: 40px;
    height: 40px;

    background-image: url("images/icon-Add.svg");
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 0 4px 0 0;
  }
`;
