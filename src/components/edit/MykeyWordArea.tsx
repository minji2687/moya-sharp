import styled from "@emotion/styled";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import KeywordItem from "./KeywordItem";

const MykeyWordArea = () => {
  const myKeywords = useAppSelector(
    (state: RootState) => state.keywords
  );
  console.log(myKeywords);
  return (
    <Wrap>
      <MyKeywordInner>
        {myKeywords.map(item => (
          <KeywordItem key={`mykeyword-${item}`} item={item.data}/>
        ))}
      </MyKeywordInner>
      <EditButton>편집</EditButton>
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
  gap: 0 10px;
  width: calc(100% - 95px);
  height: 120px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #d4d6d1;
  border-radius: 5px;
  margin-right: 10px;
`;
