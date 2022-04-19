import MoyaLoginAPI from "../../../api/login/MoyaLoginAPI";
import { useAppDispatch } from "../../../redux/hooks";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { loginSucess } from "../../../redux/user/loginSlice";
import { getCookie } from "../../../utils/cookies/loginCookie";
const LoginButton = ({ email, password }: any) => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  console.log(getCookie("session"));
  async function handleLogin(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    //로그인 요청
    const response = await MoyaLoginAPI({ email, password }).then(function (
      response
    ) {
      console.log(response, "전체");
      console.log(response.data, "로그인 결과");
      return response.data;
    });

    //로그인 성공 Request
    const LoginSuccess = (await response) === "login success!!";

    if (LoginSuccess) {
      alert("로그인성공했습니다");
      dispatch(loginSucess());
      history.push("/");
    } else {
      alert("로그인 실패했습니다.");
      return false;
    }
  }

  return (
    <>
      <LoginRequestButton onClick={handleLogin}>로그인</LoginRequestButton>
    </>
  );
};

export default LoginButton;

const LoginRequestButton = styled.button`
  width: 86.5%;
  height: 45px;
  background: #48c0b7;
  color: #fff;
  border: none;
  margin-top: 50px;
  cursor: pointer;
`;
