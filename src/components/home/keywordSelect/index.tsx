import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { category, MasterItem, sectors, startup } from "../../../utils/master";
import TitleTabList, { Title } from "./TitleTabList";
import { divideSectorKey } from "../../../utils/divideSectorKey";
import SectorKeywordFindKey from "./SectorKeywordFindKey";

type Props = {
  searchNews: (
    keyType: string,
    keyParam: string,
    exchange?: string,
    orderBy?: "top" | "latest" | "popular"
  ) => void;
};

const KeywordSelect = ({ searchNews }: Props) => {
  const [currentTapTitle, setCurrentTabTitle] = useState<Title>("Category");

  const sortedSector = divideSectorKey(sectors);

  const setTitle = useCallback(
    (title: Title) => {
      setCurrentTabTitle(title);
    },
    [setCurrentTabTitle]
  );

  const [filterKeyInSector, setFilterKeyInSector] = useState<string>("A");

  const selectFilterKeyInSector = (key: string) => {
    setFilterKeyInSector(key);
  };

  const fetchNewsApi = (searchObj: MasterItem, keyType: string) => {
    if (!searchObj.exchange) {
      searchNews(keyType, searchObj.paramValue);
    } else {
      searchNews(keyType, searchObj.paramValue, searchObj.exchange);
    }
  };

  return (
    <KeywordSelectWrap>
      <TitleTabList setTitle={setTitle} tabTitle={currentTapTitle} />
      {currentTapTitle === "Sector" && (
        <KeywordListContainer>
          <SectorKeywordFindKey
            sortedSector={sortedSector}
            selectFilterKeyInSector={selectFilterKeyInSector}
          />

          <KeywordListWrap>
            {sortedSector[filterKeyInSector].map(
              (item: MasterItem, index: number) => (
                <KeywordListItem
                  key={`Sector-${item}-${index}`}
                  onClick={() => {
                    fetchNewsApi(item, "sectors");
                  }}
                >
                  {item.name}
                </KeywordListItem>
              )
            )}
          </KeywordListWrap>
        </KeywordListContainer>
      )}

      {currentTapTitle === "Startup" && (
        <KeywordListContainer>
          <StartupKeywordList>
            <ul>
              {startup.map(item => (
                <li
                  key={`Startup-${item.paramValue}`}
                  onClick={() => {
                    fetchNewsApi(item, "startup");
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </StartupKeywordList>
        </KeywordListContainer>
      )}

      {currentTapTitle === "Category" && (
        <KeywordListContainer>
          <StartupKeywordList>
            <ul>
              {category.map(item => (
                <li
                  key={`Category-${item.paramValue}`}
                  onClick={() => {
                    fetchNewsApi(item, "category");
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </StartupKeywordList>
        </KeywordListContainer>
      )}
    </KeywordSelectWrap>
  );
};

export default KeywordSelect;

const StartupKeywordList = styled.div`
  overflow-y: scroll;
  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin: 10px;
    grid-gap: 0;

    li {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
    }
    & > li:nth-of-type(12n + 1),
    & > li:nth-of-type(12n + 2),
    & > li:nth-of-type(12n + 3),
    & > li:nth-of-type(12n + 4),
    & > li:nth-of-type(12n + 5),
    & > li:nth-of-type(12n + 6) {
      background-color: #fbfbfb;
    }
    li:hover {
      background: #f0fcfb;
    }
  }
`;

const KeywordSelectWrap = styled.div`
  position: relative;
  z-index: 3;
  margin-top: 14px;
  background: #fff;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 0px 7px rgba(196, 195, 195, 0.25);
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;

const KeywordListContainer = styled.div`
  width: 100%;
  height: 450px;
  background: #fff;
  display: flex;
`;

export const KeywordListWrap = styled.div`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: start;
  overflow-y: scroll;

  & > p:nth-of-type(3n) {
    border: none;
  }

  & > p:nth-of-type(6n + 1),
  & > p:nth-of-type(6n + 2),
  & > p:nth-of-type(6n + 3) {
    background-color: #fbfbfb;
  }
  & > p:hover {
    background: #f0fcfb;
  }
`;

const KeywordListItem = styled.p`
  display: flex;
  height: 37px;
  padding-left: 20px;
  align-items: center;
  font-family: "Noto Sans";
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #4f4f4f;
  cursor: pointer;
`;
