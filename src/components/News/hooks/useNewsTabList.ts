import React from "react";
import type { RootState } from "../../../redux/store";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { updatedKeyword } from "../../../redux/keyword/keywordsSlice";
export const useNewsTabList = () => {
  const userKeywords = useAppSelector(state => state.keywords);
  const [start, setStart] = useState<any>(null); //시작 위치
  const [currentTab, setCurrentTab] = useState(0);

  const dispatch = useAppDispatch();
  function changeCurrentTab(index: number) {
    setCurrentTab(index);
  }

  function dragOver(e: any) {
    e.preventDefault();
  }

  function dragstart(e: any) {
    const target = e.target as HTMLElement;
    setStart(target);
    console.log(target);
    target.classList.add("grabbing");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", `${target}`);
  }

  function dragEnd(e: any) {
    const target = e.target as HTMLElement;
    target.classList.remove("grabbing");
    e.dataTransfer.dropEffect = "move"; //drag effeect
  }

  function dragdrop(e: any) {
    const target = e.target as HTMLElement;
    target.classList.remove("grabbing");
    target.classList.toggle("active");
    let startPosition: number = Number(start.dataset.position);
    let endPosition: number = Number(target.dataset.position);
    console.log(endPosition);
    let newKeywordList = [...userKeywords];
    newKeywordList[startPosition] = newKeywordList.splice(
      endPosition,
      1,
      newKeywordList[startPosition]
    )[0];

    dispatch(updatedKeyword(newKeywordList));
  }

  return {
    currentTab,
    changeCurrentTab,
    dragstart,
    dragOver,
    dragEnd,
    dragdrop
  };
};
