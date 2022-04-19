import React from "react";
import styled from "@emotion/styled";
import BookmarkNav from "./BookmarkNav";
import BookMarkList from "./BookMarkList";

const Bookmark = () => {
  return (
    <Wrap>
      <Container>
        <SideBar>
          <h2>스크랩한 뉴스</h2>
          <SideContainer>
            <BookmarkNav />
          </SideContainer>
        </SideBar>
        <Content>
          <ContContainer>
            <FilterList>
              <select name="filter">
                <option value="none">정렬순</option>
                <option value="최신순">최신순</option>
                <option value="인기순">인기순</option>
              </select>
            </FilterList>
            <BookMarkList />
          </ContContainer>
        </Content>
      </Container>
    </Wrap>
  );
};

export default Bookmark;

const Wrap = styled.div`
  background-color: #f9faff;
`;

const Container = styled.div`
  width: 1240px;
  height: 940px;
  margin: 0 auto;
  display: flex;
`;

const SideContainer = styled.div`
  background-color: #144056;
  text-align: center;
  border-radius: 5px;
`;

const ContContainer = styled.div`
  margin-left: 50px;
  margin-top: 55px;
`;
const SideBar = styled.div`
  float: left;
  h2 {
    margin-top: 85px;
    font-size: 22px;
    font-weight: 600;
    color: #144056;
    margin-bottom: 20px;
  }
`;
const Content = styled.div`
  height: 1050px;
  width: 1315px;
  float: left;
`;
const FilterList = styled.div`
  margin-left: 765px;
  select {
    padding-left: 10px;
    width: 160px;
    height: 40px;
    border: 1px solid #dadada;
    border-radius: 3px;
  }
`;
