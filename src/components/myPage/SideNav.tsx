import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <Wrap>
      <li><Link to={"/mypage/bookmark"} style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.6)' }}>스크랩한 뉴스</Link></li>
      <li><Link to={"/"} style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.6)' }}>최근 본 뉴스</Link></li>
      <li><Link to={"/"} style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.6)' }}>자주 묻는 질문</Link></li>
      <li><Link to={"/"} style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.6)' }}>1:1 문의</Link></li>
    </Wrap>
  )
}

export default SideNav;

const Wrap = styled.ul`
padding: 0;
padding-bottom: 66px;
  li {
    list-style: none;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }
  li + li {
    margin-top: 20px;
  }

`