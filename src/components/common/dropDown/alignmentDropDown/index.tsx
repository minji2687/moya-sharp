import styled from "@emotion/styled";
import { useRef, useState, useEffect, MouseEvent } from "react";
import { Menu } from "./Menu";

interface Props {
  optionList: object[];
  currentOption: string;
}
const AlignmentDropDown = ({ currentOption, optionList }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropCurrentOption, setDropCurrentOption] =
    useState<string>(currentOption);
  const area = useRef<HTMLDivElement>(null);

  const openDropDown = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  function handleClickOutside(event: any) {
    if (area.current && !area.current.contains(event.target)) setIsOpen(false);
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <DropDown>
      <CurrentOption
        ref={area}
        role="button"
        onClick={(e: MouseEvent) => openDropDown()}
      >
        {dropCurrentOption}
        <i className="nav-bottom"></i>
      </CurrentOption>
      {isOpen && (
        <Menu
          optionList={optionList}
          onOpen={setIsOpen}
          changeOption={setDropCurrentOption}
        ></Menu>
      )}
    </DropDown>
  );
};

export default AlignmentDropDown;

const DropDown = styled.div`
  position: relative;
  z-index: 100;
`;
const CurrentOption = styled.div`
  width: 160px;
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  border: 1px solid #dadada;
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  border-radius: 3px;
  margin-right: 20px;
  cursor: pointer;
  .nav-bottom {
    position: absolute;
    top: 20px;
    right: 10px;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-image: url("/images/icon-navi-bottom.svg");
    background-size: cover;
  }
`;
