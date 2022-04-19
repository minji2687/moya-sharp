/* eslint-disable array-callback-return */
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { FilterItemType } from ".";

type Props = {
  filterItem: FilterItemType;
  isOpen: boolean;
  index: number;
  filterList: string[];
  setLanguage: (arg: string) => void;
  setTimeFilter: (arg: string) => void;
  setMediaType: (arg: string) => void;
  openFilterList: (
    index: number,
    event: React.MouseEvent<HTMLDivElement>
  ) => void;
};

type SelecListProps = {
  isOpen: boolean;
};

export const SearchFilterItem = ({
  filterItem,
  isOpen,
  openFilterList,
  index,
  filterList,
  setLanguage,
  setTimeFilter,
  setMediaType
}: Props) => {
  const [defaultLanguage, setDefaultLanguage] = useState("English");
  const [defaultTimeFilter, setDefaultTimeFilter] = useState("한달");
  const [defaultCategory, setDefaultCategory] = useState("ALL");
  const [defaultRretrieveTime, setDefaultRretrieveTime] = useState("5분");

  useEffect(() => {
    setLanguage(defaultLanguage); // api에 현재 디폴트 상태 셋팅하기
    setTimeFilter(defaultTimeFilter);
  }, [defaultLanguage, defaultTimeFilter, setLanguage, setTimeFilter]);

  const clickLanguageName = (lanName: string) => {
    setDefaultLanguage(lanName); // UI에 디폴드 상태 나타내기
    setLanguage(lanName); // api에 디폴트 상태 보내주기
  };
  const clickTimeFiterName = (timeName: string) => {
    setDefaultTimeFilter(timeName);
    setTimeFilter(timeName);
  };
  const clickCategoryName = (categoryName: string) => {
    setDefaultCategory(categoryName);
    setMediaType(categoryName);
  };

  const clickRretrieveTime = (time: string) => {
    setDefaultRretrieveTime(time);
  };

  const setDefaultName = (filterItem: FilterItemType) => {
    if (filterItem.label === "언어") {
      return defaultLanguage;
    } else if (filterItem.label === "발행일") {
      return defaultTimeFilter;
    } else if (filterItem.label === "언론사") {
      return defaultCategory;
    } else if (filterItem.label === "새로고침 속도") {
      return defaultRretrieveTime;
    }
  };
  return (
    <FilterItem>
      <Label>{filterItem.label}</Label>
      <DefaultValue onClick={e => openFilterList(index, e)}>
        <strong>{setDefaultName(filterItem)}</strong>
        <img src="/images/filterArrow.svg" alt="필터리스트 열기 아이콘" />
      </DefaultValue>
      <SelectList isOpen={isOpen}>
        {filterList.map(item => {
          if (filterItem.label === "언어") {
            return (
              <SelectItem key={item} onClick={() => clickLanguageName(item)}>
                {item}
              </SelectItem>
            );
          } else if (filterItem.label === "발행일") {
            return (
              <SelectItem key={item} onClick={() => clickTimeFiterName(item)}>
                {item}
              </SelectItem>
            );
          } else if (filterItem.label === "언론사") {
            return (
              <SelectItem key={item} onClick={() => clickCategoryName(item)}>
                {item}
              </SelectItem>
            );
          } else if (filterItem.label === "새로고침 속도") {
            return (
              <SelectItem key={item} onClick={() => clickRretrieveTime(item)}>
                {item}
              </SelectItem>
            );
          }
        })}
      </SelectList>
    </FilterItem>
  );
};

const Label = styled.span`
  color: #717171;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 6px;
`;

const DefaultValue = styled.div`
  margin-top: 8px;
  height: 30px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SelectList = styled.ul<SelecListProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 94px;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: scroll;
  background: #ffffff;
  box-shadow: 0px 4px 7px rgba(196, 195, 195, 0.25);
  border-radius: 5px;
  padding: 11px 0;
`;

const SelectItem = styled.li`
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  height: 36px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* border: 1px solid transparent;
  box-sizing: border-box;
  border-radius: 5px;
  color: #000;
  background-color: #fff; */
  &:hover {
    background: rgba(72, 192, 183, 0.05);
    /* border: 1px solid #48c0b7;
    color: #48c0b7; */
  }
  transition: all 0.2s ease;
`;

const FilterItem = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 4px 4px 4px 0;
  display: flex;
  width: 179px;
  height: 100%;
  padding-left: 20px;
  flex-direction: column;
  border-right: 1px solid #c4c4c4;
`;
