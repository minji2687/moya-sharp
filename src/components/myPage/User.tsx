import React from "react";
import styled from "@emotion/styled";

const User = () => {
  return (
    <Usercard>
      <Profic></Profic>
      <h4>kim hana</h4>
      <p>kimhana1234@gamil.com</p>
      <EditBtn>프로필 편집</EditBtn>
      <BottomLine />
    </Usercard>
  );
};

export default User;

const Usercard = styled.div`
  margin-bottom: 36px;
  padding-left: 30px;
  padding-top: 20px;
  padding-right: 32px;
  color: rgba(255, 255, 255, 0.6);
  h4 {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    color: #ffffff;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
  }
`;

const Profic = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50px;
  background-color: #fff;
  display: block;
  margin-top: 31px;
  margin-left: 70px;
  margin-bottom: 28px;
  background-image: url("https://placeimg.com/64/64/any");
  background-size: cover;
  cursor: pointer;
`;
const EditBtn = styled.button`
  width: 118px;
  height: 37px;
  border-radius: 5px;
  border: solid 1px #48c0b7;
  color: #48c0b7;
  text-align: center;
  line-height: 2.3;
  background-color: inherit;
  margin-bottom: 36px;
  margin-top: 33px;
  cursor: pointer;
`;
const BottomLine = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
`;
