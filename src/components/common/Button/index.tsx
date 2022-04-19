import styled from "@emotion/styled";
import { ChildProps } from "../../../types/Common";
const Button = ({ children }: ChildProps) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default Button;
const ButtonStyle = styled.button`
  display: block;
  width: 70px;
  height: 37px;
  background: #48c0b7;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
`;
