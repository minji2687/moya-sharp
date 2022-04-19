import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";

interface Props {
  optionList: object[];
  onOpen: Dispatch<SetStateAction<boolean>>;
  changeOption: Dispatch<SetStateAction<string>>;
}
export const Menu = ({ optionList, onOpen, changeOption }: Props) => {
  return (
    <DropOffEvent onClick={() => onOpen(false)}>
      {optionList.map((option: any, index) => (
        <li key={index} className="dropdown-item" onClick={option.method}>
          <div onClick={() => changeOption(option.name)}>{option.name}</div>
        </li>
      ))}
    </DropOffEvent>
  );
};

const DropOffEvent = styled.ul`
  position: absolute;
  top: 100%;
  background-color: #fff;
  .dropdown-item {
    width: 160px;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    cursor: pointer;
  }
  .sort-item {
    cursor: pointer;
  }
`;
