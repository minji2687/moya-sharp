import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmButton from "../../ConfirmButton";
import LoginConfirmButton from "../../confirm/loginConfirmButton";
const NonMember = () => {
  return (
    <Wrap>
      <div className="login">
        <i className="icon-login">로그인 아이콘</i>
        <LoginConfirmButton message="로그인하시겠습니까">
          로그인
        </LoginConfirmButton>
      </div>
      <div className="join">
        <i className="icon-join">회원가입 아이콘</i>
        <Link to="/" className="join-btn">
          회원가입
        </Link>
      </div>
    </Wrap>
  );
};
export default NonMember;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  .login {
    display: flex;
    align-items: center;
    .icon-login {
      width: 40px;
      height: 40px;
      background-image: url("/images/icon-log-in.svg");
      background-repeat: no-repeat;
      background-size: cover;
      font-size: 0;
    }
  }
  .join {
    display: flex;
    align-items: center;
    height: 100%;
    .icon-join {
      width: 40px;
      height: 40px;
      background-image: url("/images/icon-join.svg");
      background-repeat: no-repeat;
      background-size: cover;
      font-size: 0;
    }
    .join-btn {
      text-decoration: none;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
    }
  }
`;
