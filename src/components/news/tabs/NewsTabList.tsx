import styled from "@emotion/styled";
import React, { useState, DragEvent  } from "react";
import { useNewsList } from "./../hooks/useNewsList";
const NewsTabList = () => {
  const { userSavedKeywords } = useNewsList();
  const [keywordList, setKeywordlist] = React.useState(userSavedKeywords);
  const [start, setStart] = useState<any>(null); //시작 위치
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Wrap>
      <TabList>
        {keywordList.map((list:any, index:number) => (
          <li
            key={index}
            data-position={index}
            draggable
            onDragOver={dragOver}
            onDragStart={dragstart}
            onDragEnd={dragEnd}
            onDrop={drop}
            className={
              currentTab === index ? "keywordTab focused" : "keywordTab"
            }
            onClick={() => selectMenuHandler(index)}
          >
            {list.title}
          </li>
        ))}
        <TabAddBtn role="button">
          <i>+</i>키워드 추가
        </TabAddBtn>
      </TabList>
    </Wrap>
  );

  function selectMenuHandler(index: number) {
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

  function drop(e: any) {
    const target = e.target as HTMLElement;
    target.classList.remove("grabbing");
    target.classList.toggle("active");
    let startPosition: number = Number(start.dataset.position);
    let endPosition: number = Number(target.dataset.position);
    console.log(endPosition);
    let newKeywordList = [...keywordList];
    newKeywordList[startPosition] = newKeywordList.splice(
      endPosition,
      1,
      newKeywordList[startPosition]
    )[0];

    setKeywordlist(newKeywordList);
  }
};

export default NewsTabList;

const Wrap = styled.div``;

const TabList = styled.ul`
  display: flex;
  text-decoration: none;
  .keywordTab {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 19px 30px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 600;
    color: white;
    border-radius: 5px 0 0 0px;
    cursor: pointer;
    /* &:first-of-type {
      background-color: ${props => props.theme.BlueGreenColor};
    } */
    &.grabbing {
      cursor: grabbing;
    }

    &.move_up {
      transform: translate(0, -41px);
    }

    &.move_down {
      transform: translate(0, 41px);
    }
    &.focused {
      background-color: ${props => props.theme.BlueGreenColor};
    }
  }
`;

const TabAddBtn = styled.li`
  display: flex;
  align-items: center;
  height: 60px;
  outline: none;
  border: none;
  font-family: NotoSans-Display;
  font-size: 16px;
  padding: 10px 32px 10px 20px;
  background-color: rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  i {
    width: 40px;
    height: 40px;
    background-image: url("images/icon-Add.svg");
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 0 4px 0 0;
    font-size: 0;
  }
`;
