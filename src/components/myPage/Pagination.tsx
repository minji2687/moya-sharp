import React from "react";
import styled from "@emotion/styled";

import usePagination from "./usePagination";

interface Props {
  count: number;
  page: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
  siblingCount?: number;
  boundaryCount?: number;
}

const Pagination: React.FC<Props> = ({ count, page, onPageChange, disabled, siblingCount = 1, boundaryCount = 1 }) => {
  const getLabel = (item: number | string) => {
    if (typeof item === 'number') return item;
    else if (item.indexOf('ellipsis') > -1) return '...'
    else if (item.indexOf('prev') > -1) return <img src="../images/Left.svg" alt="이전 페이지"/>
    else if (item.indexOf('next') > -1) return <img src="../images/Right.svg" alt="다음 페이지"/>
    else if (item.indexOf('start') > -1) return <img src="../images/DoubleLeft.svg" alt="첫 페이지"/>
    else if (item.indexOf('end') > -1) return <img src="../images/DoubleRight.svg" alt="마지막 페이지"/>
    else return item;
  }
  const { items } = usePagination({ count, page, onPageChange, disabled, siblingCount, boundaryCount });
  return (
      <PageNation>
        {
          items.map(({ key, disabled, selected, onClick, item }) => (
            <Pages key={key}>
              <Btn disabled={disabled} selected={selected} onClick={onClick}>{getLabel(item)}</Btn>
            </Pages>
          ))
        }
      </PageNation>

  )
}

export default Pagination;

const PageNation = styled.ul`
  margin-top: 76px;
  margin-left: 325px;
  li {
    display: inline-block;
  }
  li:first-of-type > button, 
  li:last-of-type > button, 
  li:first-of-type + li > button, 
  li:nth-last-of-type(2) > button {
    width: 40px;
    height: 40px;
    background-color: #f9faff;
  }
  li:first-of-type > button, 
  li:last-of-type > button {
    color: rgba(255,255,255,0)
  }
  li:first-of-type > button {
    background-image: url(../images/DoubleLeft.svg);
  }
  li:last-of-type > button {
    background-image: url(../images/DoubleRight.svg);
  }

`

const Pages = styled.li`
  font-size: 14px;
  color: #9BA3A7;
  line-height: 1.5;
  text-align: center;
  position: relative;
  button img {
    position: absolute;
    right: 0;
    top: 0;
  }
`

const Btn = styled.button<{ selected ?: boolean }>`
  width: 24px;
  height: 24px;
  border: 0;
  text-align: center;
  margin-top: 5px;
  background-color: ${({ selected }) => selected ? '#C3EAE7' : '#fff'};
  color: ${({ selected }) => selected ? '#37474F' : '#9BA3A7'};
`
