import styled from "@emotion/styled";
import React from "react";

export type Title = "Category" | "Sector" | "Startup";

type Props = {
  setTitle: (item: Title) => void;
  tabTitle: Title;
};

const TitleTabList = ({ setTitle, tabTitle }: Props) => {
  const tabTitleList: Title[] = ["Category", "Sector", "Startup"];

  return (
    <>
      <KeywordSelectTitles>
        {tabTitleList.map(item => (
          <KeywordTitleItem
            key={item}
            onClick={() => setTitle(item)}
            selected={item === tabTitle}
          >
            {item}
          </KeywordTitleItem>
        ))}
      </KeywordSelectTitles>
    </>
  );
};
export default TitleTabList;

const KeywordSelectTitles = styled.div`
  height: 59px;
  display: flex;
  justify-content: end;
  border-bottom: 1px solid #c4c4c4;
`;

type KeywordTitleItemType = {
  selected: boolean;
};

const KeywordTitleItem = styled.strong<KeywordTitleItemType>`
  display: block;
  width: 329px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ selected, theme }) =>
    selected ? theme.primaryColor : "#787878"};
  border-bottom: ${({ selected, theme }) =>
    selected ? `4px solid ${theme.primaryColor}` : null};
  transition: all 0.2s ease;
`;
