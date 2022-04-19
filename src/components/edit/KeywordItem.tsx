import styled from "@emotion/styled";
import { useAppDispatch } from "../../redux/hooks";
import { addKeyword, deleteKeyword } from "../../redux/keyword/keywordsSlice";

type Props = {
  names: any;
};

const KeywordItem = ({ names }: Props) => {
  const dispatch = useAppDispatch();
  const handleAdd = () => dispatch(addKeyword(names));
  const handleDelete = () => dispatch(deleteKeyword(names));

  return (
    <KeyWordItemWrap>
      <KeywordText onClick={handleAdd}>{names}</KeywordText>
      <DeleteBtn onClick={handleDelete}>
        <img src="/images/keyword-delete.svg" alt="삭제하기 버튼" />
      </DeleteBtn>
    </KeyWordItemWrap>
  );
};

export default KeywordItem;

const KeyWordItemWrap = styled.div`
  cursor: pointer;
  display: inline-block;
  max-width: 300px;
  padding: 0 10px;
  height: 30px;
  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
`;

const KeywordText = styled.div`
  display: inline-block;
  font-size: 16px;
  line-height: 30px;
  font-weight: 500;
`;
const DeleteBtn = styled.button`
  margin-left: 8px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;
