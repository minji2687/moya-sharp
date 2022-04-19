import styled from "@emotion/styled";
import HomeComponent from "../components/home";


const HomePage = () => {

  return (
    <HomeWrap>
      <InnerWrap className="Inner">
        <HomeComponent />
      </InnerWrap>
    </HomeWrap>
  );
};

export default HomePage;

const HomeWrap = styled.main`
  position: relative;
  background: linear-gradient(
    211.86deg,
    #ffffff -2.13%,
    rgba(244, 253, 251, 0.896614) 19.27%,
    rgba(223, 248, 244, 0.7) 49.34%,
    rgba(253, 221, 210, 0.7) 94.11%
  );
  min-height: 100vh;
  padding-top: 120px;
  padding-bottom: 189px;
`;

const InnerWrap = styled.div`
  position: relative;
  width: 1240px;
  margin: 0 auto;
  &.Inner::after {
    content: "";
    position: absolute;
    top: 130px;
    right: 0;
    width: 800px;
    height: 531px;
    background-image: url("/images/image_main.svg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
  }
`;
