import styled from "@emotion/styled";
import React from "react";
import { MasterItem } from "../../../utils/master";
import { useSearch } from "../hooks/useSearch";

type Props = {
  keyword: { [key: string]: MasterItem[] };
  inputText: string;
  setIsOpenInstanseSearch: (arg: boolean) => void;
};

const InstanseSearch = ({
  keyword,
  inputText,
  setIsOpenInstanseSearch
}: Props) => {
  const { searchNews } = useSearch();

  const search = (item: MasterItem, key: string) => {
    const keyType = key;
    const keyParam = item.paramValue;
    const exchange = item.exchange ? item.exchange : null;

    if (exchange) {
      searchNews(keyType, keyParam, exchange);
    } else {
      searchNews(keyType, keyParam);
    }
  };

  function show() {
    if (inputText === "") {
      return;
    }
    let el: any = [];
    Object.keys(keyword).map((key: string, index) => {
      el.push(<h3 key={`${index}-${key}`}>{key}</h3>);
      keyword[key].forEach((item: MasterItem, index) => {
        const parts = item.name.split(new RegExp(`(${inputText})`, "gi"));
        el.push(
          <div
            onClick={() => search(item, key)}
            key={`${index}-${item.paramValue}`}
          >
            {parts.map((part, index) => {
              return part.toLowerCase() === inputText.toLowerCase() ? (
                <HighlightedText key={index}>{part}</HighlightedText>
              ) : (
                part
              );
            })}
          </div>
        );
      });
    });
    if (!el.length) {
      setIsOpenInstanseSearch(false);
    }
    return el;
  }

  return <InstanseSearchDropDown>{show()}</InstanseSearchDropDown>;
};

export default InstanseSearch;

const InstanseSearchDropDown = styled.div`
  width: 555px;
  height: 300px;
  border: 1px solid #ededed;
  box-shadow: 0px 4px 7px rgba(196, 195, 195, 0.25);
  right: 0;
  background: #fff;
  position: absolute;
  overflow: scroll;
  border-radius: 5px;
  h3 {
    padding: 10px 23px;
    color: ${({ theme }) => theme.primaryColor};
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
  }
  div {
    padding: 11px 23px;
    cursor: pointer;
    color: #424242;
    &:hover {
      background: #f0fcfb;
    }
  }
`;
const HighlightedText = styled.span`
  color: #48c0b7;
`;
