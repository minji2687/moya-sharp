import styled from "@emotion/styled";
import React from "react";

type Props = {
  sortedSector: any;
  //    {
  //      A:{
  //         exchange?: string;
  //         name: string;
  //         paramValue: string;
  //         key: string;
  //        }
  //    } 이런 형태의 객체의 나열
  selectFilterKeyInSector: (key: string) => void;
};

const SectorKeywordFindKey = ({
  sortedSector,
  selectFilterKeyInSector
}: Props) => {
  const filterKeysInSector = Object.keys(sortedSector).sort();

  return (
    <CategoryList>
      <ul>
        {filterKeysInSector.map(filterKeyItem => (
          <CategoryListItem
            key={`Sector-${filterKeyItem}`}
            onClick={() => selectFilterKeyInSector(filterKeyItem)}
          >
            <span>{filterKeyItem}</span>
            <img
              src="/images/keyword-arrow.svg"
              alt="섹터 탭 키워드 정렬 화살표"
            />
          </CategoryListItem>
        ))}
      </ul>
    </CategoryList>
  );
};

export default SectorKeywordFindKey;

const CategoryList = styled.div`
  width: 324px;
  overflow-y: scroll;
  ul {
    margin-left: 10px;
  }
`;
const CategoryListItem = styled.li`
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  color: #4f4f4f;
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
  transition: all 0.2s ease;
  img {
    padding-bottom: 3px;
    display: none;
  }
  &:hover {
    background: #f0fcfb;
  }
  &:hover img {
    display: block;
  }
`;
