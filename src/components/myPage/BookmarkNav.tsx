import React from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";

const BookmarkNav = () => { 
  return (
    <Wrap>
      <li className="on"><Link to={"/"}>폴더이름</Link><Counts>192개</Counts></li>
      <li><Link to={"/"}>폴더이름</Link><Counts>192개</Counts></li>
      <li><Link to={"/"}>폴더이름</Link><Counts>192개</Counts></li>
      <li><Link to={"/"}>폴더이름</Link><Counts>192개</Counts></li>
      <NewFolderBtn><PlusIcon><img src="../images/Plus.svg" alt="새 폴더 추가 아이콘" /></PlusIcon>새 폴더 추가</NewFolderBtn>
    </Wrap>
  )
}

export default BookmarkNav;

const Wrap = styled.ul`
height: 640px;
color: rgba(255, 255, 255, 0.6);
  h2 {
    font-size: 22px;
    margin-bottom: 67px;
    font-weight: 600;
  }
  li {
    display: flex;
    list-style: none;
    font-size: 20px;
    font-weight: 600;
  }
  a {
    height: 59px;
    display: block;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    margin-left: 52px;
    line-height: 3.5;
  }

  .on {
    background-color: rgba(255, 255, 255, 0.1);
    position: relative;
  }
  .on::before{
    content: '';
    position: absolute;
    height: 100%;
    top: 0;
    border-left: 5px solid #48c0b7;
  }
  .on div {
    background-color: #48c0b7;
    color: #fff;
    border: #48c0b7;
  }
  li:hover {
    background-color: rgba(255, 255, 255, 0.1);
    position: relative;
  }
`
const Counts = styled.div`
  width: 42px;
  height: 16px;
  border-radius: 4px;
  border: solid 1px #bac5ca;
  color: #bac5ca;
  font-size: 10px;
  text-align: center;
  line-height: 1.5;
  margin-top: 20px;
  margin-left: 50px;

` 
const NewFolderBtn = styled.div`
  width: 259px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #48C0B7;
  padding-top: 27px;
  padding-bottom: 10px;
  line-height: 20px;
  img {
    margin-bottom: -2px;
    margin-right: 8px;
  }
`
const PlusIcon = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 8px;
`