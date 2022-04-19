import styled from "@emotion/styled";
import { SearchFilterItem } from "./SearchFilterItem";
import { SetStateAction, useCallback, useState } from "react";
import { useEffect } from "react";
import { languageCode } from "../../../utils/languageCode";
import { timeFilter } from "../../../utils/timeFilter";
import { categories } from "../../../utils/categories";
import { seachInstanceSearch } from "../../../utils/seachInstanceSearch";
import { master, MasterItem } from "../../../utils/master";
import { KeywordPageLinkButton } from "../keywordSelect/KeywordPageLinkButton";
import InstanseSearch from "./InstanseSearch";
type Props = {
  setIsOpendKeywordList: (arg: boolean) => void;
  isOpendKeywordList: boolean;
  setLanguageCode: (arg: string) => void;
  setTimeFilterCode: (arg: string) => void;
  setMediaTypeCode: (arg: string) => void;
  searchNews: (
    keyType: string,
    paramValue: string,
    exchange?: string,
    orderBy?: "top" | "latest" | "popular"
  ) => void;
};

export type FilterItemType = {
  label: string;
  defaultValue: string;
  list: string[];
};

const Search = ({
  setIsOpendKeywordList,
  isOpendKeywordList,
  setLanguageCode,
  setTimeFilterCode,
  setMediaTypeCode
}: Props) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [inputText, setInputText] = useState(" ");
  const [isOpenInstanseSearch, setIsOpenInstanseSearch] = useState(false);
  const [instanseKeyword, setInstanseKeyword] = useState<{
    [key: string]: MasterItem[];
  }>({});

  const filterListArr: Array<FilterItemType> = FILTER_ITEM_LABEL;

  // 필터리스트 아이템 리스트 열고닫는 코드
  const [openIndex, setOpen] = useState<null | number>(null);
  const openFilterList = (
    index: number,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    setOpen(index);
  };

  const closeAll = () => {
    setOpen(null);
  };

  useEffect(() => {
    document.body.addEventListener("click", closeAll);
    return () => {
      document.body.removeEventListener("click", closeAll);
    };
  });

  function closeKeywordList(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsOpendKeywordList(false);
  }

  //필터값 세팅
  const setLanguage = (langName: string) => {
    const langItem = languageCode.find(item => item.name === langName);
    if (!langItem) {
      return;
    }
    setLanguageCode(langItem.code);
  };

  const setTimeFilter = (timeName: string) => {
    const timeFilterItem = timeFilter.find(item => item.name === timeName);
    if (!timeFilterItem) {
      return;
    }
    setTimeFilterCode(timeFilterItem.time_code);
  };

  const setMediaType = (categorieName: string) => {
    const categoriesItem = categories.find(item => item.name === categorieName);
    if (!categoriesItem) {
      return;
    }
    setMediaTypeCode(categoriesItem.code);
  };

  const changeInputText = (value: SetStateAction<string>) => {
    setInputText(value);
  };

  const instanseSearch = useCallback(() => {
    if (inputText === " " || !inputText) {
      setIsOpenInstanseSearch(false);
      return;
    }
    let filterObj: { [key: string]: MasterItem[] } = seachInstanceSearch(
      master,
      inputText
    );

    setInstanseKeyword(filterObj);
    setIsOpenInstanseSearch(true);
  }, [setIsOpenInstanseSearch, inputText]);

  return (
    <SearchArea>
      <KeywordPageLinkButton />
      <SearchWarp>
        <form>
          <SearchFilterSelectWrap>
            <Legend>뉴스 키워드 검색</Legend>
            {filterListArr.map((item, index) => (
              <SearchFilterItem
                key={item.label}
                filterItem={item}
                index={index}
                isOpen={openIndex === index}
                openFilterList={openFilterList}
                filterList={item.list}
                setLanguage={setLanguage}
                setTimeFilter={setTimeFilter}
                setMediaType={setMediaType}
              />
            ))}
            <SearchBox
              focused={focused}
              onFocus={() => {
                setFocused(true);
              }}
            >
              <input
                type="text"
                onFocus={() => {
                  setIsOpendKeywordList(!isOpendKeywordList);
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeInputText(e.target.value)
                }
                onKeyUp={instanseSearch}
                placeholder="AAPL, MSFT, 005930, Gold, Oil, DJIA, Nikkei eg... "
              />
            </SearchBox>
            <KeywordListClose>
              <button onClick={closeKeywordList}>
                <i>키워드 리스트 버튼</i>
              </button>
            </KeywordListClose>
          </SearchFilterSelectWrap>
        </form>
      </SearchWarp>
      {isOpenInstanseSearch && (
        <InstanseSearch
          keyword={instanseKeyword}
          inputText={inputText}
          setIsOpenInstanseSearch={setIsOpenInstanseSearch}
        />
      )}
    </SearchArea>
  );
};

export default Search;

const languageName = languageCode.map(obj => obj.name);
const timeFilterName = timeFilter.map(obj => obj.name);
const categoriesName = categories.map(obj => obj.name);

const FILTER_ITEM_LABEL = [
  {
    label: "언론사",
    defaultValue: "ALL",
    list: categoriesName
  },
  {
    label: "발행일",
    defaultValue: "mth1",
    list: timeFilterName
  },
  {
    label: "언어",
    defaultValue: "영어",
    list: languageName
  },
  {
    label: "새로고침 속도",
    defaultValue: "10초",
    list: ["10초", "30초", "1분", "5분", "10분", "새로고침 없음"]
  }
];

const KeywordListClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #c4c4c4;
  align-items: center;
  button {
    width: 100%;
    height: 100%;
    padding-left: 20px;
    border: none;
    font-size: 0;
    background: none;
  }
  i {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url("/images/main-keyword-list-arrow.svg");
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
  }
`;

export const SearchArea = styled.div`
  position: relative;
  & > div:nth-of-type(1) {
    display: flex;
    justify-content: end;
  }
  z-index: 20;
`;

const Legend = styled.legend`
  visibility: hidden;
  font-size: 0;
`;

const SearchFilterSelectWrap = styled.fieldset`
  display: flex;
`;

const SearchWarp = styled.div`
  box-sizing: border-box;
  width: 1240px;
  height: 120px;
  margin: 32px 0 0;
  padding: 26px 26px 24px 0;
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 7px rgba(196, 195, 195, 0.25);
  border: 1px solid #d5d5d5;
`;

type SearchBoxProps = {
  focused: boolean;
};

const SearchBox = styled.div<SearchBoxProps>`
  display: flex;
  align-items: center;
  width: 41%;
  background: ${({ focused }) =>
      focused ? "url(/images/search-focused.svg)" : "url(/images/search.svg)"}
    no-repeat 4.5%;
  transition: background 0.3s ease;
  input {
    height: 50px;
    font-size: 18px;
    margin-left: 50px;
    width: 100%;
    border: none;
    outline: none;
  }
`;
