import type { RootState } from "../../../redux/store";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useSearch } from "../../../hooks/useSearch";

export const useNewsSorts = () => {
  const [newsCurOption, setNewsCurOption] = useState<any>("정렬순");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOption = (option: string) => {
    setNewsCurOption(option);
  };
  const openDropDown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropDown = () => {
    setIsOpen(false);
  };

  return { isOpen, newsCurOption, handleOption, openDropDown, closeDropDown };
};
