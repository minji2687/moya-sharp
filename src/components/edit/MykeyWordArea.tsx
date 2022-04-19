import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import KeywordItem from "./KeywordItem";
 

const MykeyWordArea = () => {
  const myKeywords = useAppSelector(
    (state: RootState) => state.keywords
  );
  const [edited, setEdited] = useState(false)

  const btnText = edited ? '저장' : '편집'
  
  const onClickEditButton = () => {
    edited ? setEdited(false) : setEdited(true)
  }

  return (
    <Wrap>
      <MyKeywordInner>
        {myKeywords.map((item, index) => (
          <KeywordItem key={`mykeyword-${index}`} names={item.data}/>
        ))}
      </MyKeywordInner>
     <EditButton onClick={onClickEditButton}>{btnText}</EditButton>
    </Wrap>
  );
};

export default MykeyWordArea;

const Wrap = styled.section`
  display: flex;
  margin-top: 20px;
`;
const EditButton = styled.button`
  width: 95px;
  height: 120px;
  outline: none;
  border-color: transparent;
  border-radius: 5px;
  cursor: pointer;
`;

const MyKeywordInner = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 0 10px;
  width: calc(100% - 95px);
  height: 120px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #d4d6d1;
  border-radius: 5px;
  margin-right: 10px;
`;