import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../redux/hooks";
import Container from "../Container";
import Member from "./Member";
import NonMember from "./NonMember";

const Header = () => {
  const { isLogin } = useAppSelector(state => state.userLogin);

  return (
    <Wrap id="fixed-bar" className="fixed-bar-box-shadow">
      <Container className="header">
        <Inner>
          <Link to="/">
            <Logo />
          </Link>
          {isLogin ? <Member /> : <NonMember></NonMember>}
        </Inner>
      </Container>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.header`
  &.fixed-bar-box-shadow {
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    z-index: 400;
    height: 68px;
    background-color: #fff;
    box-shadow: none;
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
`;

const Logo = styled.div`
  width: 62.6px;
  height: 24px;
  background-image: url("/images/icon-Moya-logo.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;

// 비회원

// useEffect(() => {
//   const handleScroll = () => {
//     if (!scrolled && window.scrollY > 30) {
//       setScrolled(true);
//     } else if (scrolled && window.scrollY <= 30) {
//       setScrolled(false);
//     }
//   };

//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.addEventListener("scroll", handleScroll);
//   };
// }, [scrolled]);
