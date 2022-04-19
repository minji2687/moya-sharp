import styled from "@emotion/styled";

const Intro = () => {
  return (
    <>
      <Introduction>
        <h1>
          글로벌 경제 금융 <br /> 정보검색 서비스, 모야
        </h1>
        <SubIntro>
          주식(미국, 한국, 중국)과 상품, 인덱스와 채권, 통화, 글로벌 이슈, 토픽,
          섹터 등 전세계 32개국의 12,000개 매체로부터 관련 뉴스를 실시간으로
          수집, 제공합니다.
        </SubIntro>
      </Introduction>
      <MembershipButton>멤버십 가입하기</MembershipButton>
    </>
  );
};

export default Intro;

const Introduction = styled.section`
  color: ${({ theme }) => theme.blueGreenColor};
  margin-bottom: 65px;
  h1 {
    width: 538.7px;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 64px;
  }
`;

const SubIntro = styled.p`
  width: 594px;
  height: 84px;
  line-height: 2.25;
  font-size: 16px;
  font-weight: bold;
  color: rgba(20, 64, 86, 0.7);
`;

const MembershipButton = styled.button`
  width: 241px;
  height: 59px;
  flex-grow: 0;
  font-size: 20px;
  text-align: center;
  border-radius: 5px;
  border: none;
  color: #fff;
  margin-bottom: 145px;
  background: ${({ theme }) => theme.blueGreenColor};
`;
