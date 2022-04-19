import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import axios from "axios";
import { useAppSelector } from "../../redux/hooks";
import { NewsItemType } from "../news/list/ImageArticleList";

interface Airline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
}

interface Passenger {
  _id: string;
  name: string;
  trips: number;
  airline: Airline;
  __v: number;
}

interface Response {
  totalPassengers: number;
  totalPages: number;
  data: Array<Passenger>;
}

const BookMarkList = () => {
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [items, setItems] = useState<Array<Passenger>>([]);
  const bookmarkListData: Array<NewsItemType> = useAppSelector(
    state => state.bookmark.bookmarkListData
  );

  const handlePageChange = (crrentPage: number): void => {
    setPage(crrentPage);
  };

  useEffect(() => {
    const fetch = async () => {
      const params = { page, size: 6 };
      const {
        data: { totalPages, data }
      } = await axios.get<Response>(
        "https://api.instantwebtools.net/v1/passenger",
        { params }
      );

      setTotalPages(totalPages);
      setItems(data);
    };
    fetch();
  }, [page]);

  return (
    <>
      <BookmarkList>
        {bookmarkListData.map(item => (
          <li key={item.newsId}>
            <h2>{item.title}</h2>
            <LogoPress></LogoPress>
            <PressName>{item.brandName}</PressName>
            <Wtime>{item.publishTime}</Wtime>
            <Link to={"/"}>
              <MoreIcon>
                <img src="../images/More.svg" alt="more icon" />
              </MoreIcon>
            </Link>
          </li>
        ))}
      </BookmarkList>
      <PageNationItems>
        <span>
          pages {page + 1} of {totalPages}
        </span>
        <Pagination
          count={totalPages}
          page={page}
          onPageChange={handlePageChange}
        />
      </PageNationItems>
    </>
  );
};

export default BookMarkList;

const BookmarkList = styled.ul`
  margin-top: 52px;
  height: 590px;
  li {
    position: relative;
    padding: 14px 0 6px 25px;
    font-weight: 300;
    font-size: 14px;
    width: 925px;
    background-color: #fff;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
  }
  h2 {
    font-weight: 600;
    font-size: 22px;
    color: ${({ theme }) => theme.newsTitle};
    margin-bottom: 11px;
  }
  li + li {
    margin-top: 20px;
  }
  li > div {
    display: inline-block;
  }
  a {
    position: absolute;
    top: 28px;
    right: 49px;
  }
`;
const LogoPress = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: #b2b2b2;
  margin-bottom: -4px;
`;
const PressName = styled.div`
  margin-left: 4px;
  height: 24px;
  line-height: 12px;
`;

const Wtime = styled.div`
  margin-left: 30px;
  height: 24px;
  line-height: 12px;
`;

const PageNationItems = styled.div`
  display: flex;
  span {
    font-weight: 300;
    font-size: 14px;
    color: #90a4ae;
    line-height: 30px;
    margin-top: 81px;
  }
`;
const MoreIcon = styled.div`
  width: 16px;
  height: 4px;
`;
