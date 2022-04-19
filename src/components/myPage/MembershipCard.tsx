import React from "react";
import styled from "@emotion/styled";

const MembershipCard = () => {
  return (
    <CardWrap>
      <h5>내 구독 정보</h5>
      <Card>
        <CardCont>
          <h5>유료 멤버십</h5>
          <p>메인메뉴 키워드 탭 최대 10개 생성</p>
        </CardCont>
        <CardBtn>구독관리</CardBtn>
      </Card>
    </CardWrap>
  );
};

export default MembershipCard;

const CardWrap = styled.div`
  display: block;
  color: #414141;
  margin-right: 37px;
  h5 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

const Card = styled.div`
  position: relative;
  width: 400px;
  height: 247px;
  border: solid 1px #d9d9d9;
  background-color: #fff;
  display: inline-block;
  border-radius: 5px;
`;
const CardCont = styled.div`
  margin: 31px 0 24px 34px;
  h5 {
    color: #48c0b7;
    margin-bottom: 12px;
    line-height: 30px;
  }
  p {
    font-size: 16px;
  }
`;

const CardBtn = styled.button`
  position: absolute;
  top: 186px;
  right: 38px;
  border: 0;
  width: 99px;
  height: 37px;
  border-radius: 5px;
  background-color: #48c0b7;
  color: #fff;
  line-height: 2.2;
  text-align: center;
  cursor: pointer;
`;
