import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import User from "./User";
import SideNav from "./SideNav";
import MembershipCard from "./MembershipCard";
import PaymentsCard from "./PaymentsCard";
import MyKeyword from "./MyKeyword";

const MyPage = () => {
  return (
    <Wrap>
      <Container>
        <SideBar>
          <h2>마이페이지</h2>
          <SideContainer>
            <User />
            <SideNav />
          </SideContainer>
        </SideBar>
        <Content>
          <ContContainer>
            <ContTop>
              <MembershipCard />
              <PaymentsCard />
            </ContTop>
            <MyKeyword />
            <EditKeywords>
              <Link to={"/edit"}>
                키워드 편집
                <img src="../images/icon-navi-bottom.svg" alt="키워드 편집" />
              </Link>
            </EditKeywords>
          </ContContainer>
        </Content>
      </Container>
    </Wrap>
  );
};

export default MyPage;

const Wrap = styled.div`
  background-color: #f9faff;
  padding-top: 87px;
  height: 100vh;
`;

const Container = styled.div`
  width: 1240px;
  margin: 0 auto;
`;
const SideContainer = styled.div`
  background-color: #144056;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 81px;
`;

const ContContainer = styled.div`
  margin-left: 50px;
  margin-top: 135px;
`;

const ContTop = styled.div`
  display: flex;
`;
const Content = styled.div`
  background-color: #f9faff;
  width: 975px;
  float: left;
  position: relative;
`;

const EditKeywords = styled.button`
  position: absolute;
  border: 0;
  background-color: inherit;
  /* bottom: 75px; */
  top: 460px;
  right: 0;
  cursor: pointer;
  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    display: inline;
    color: ${({ theme }) => theme.newsDescription};
    text-decoration: none;
  }
  img {
    transform: rotate(-90deg);
    margin-bottom: -14px;
    margin-left: -10px;
  }
`;

const SideBar = styled.div`
  width: 265px;
  margin-top: 85px;
  float: left;
  h2 {
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    color: #144056;
    margin-bottom: 20px;
  }
`;
