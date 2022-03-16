import styled from "@emotion/styled";
import { useNewsTabList } from "../hooks/useNewsTabList";

const NewsTabList = () => {
  const {
    keywordList,
    currentTab,
    selectMenuHandler,
    dragstart,
    dragOver,
    dragEnd,
    drop
  } = useNewsTabList();
  return (
    <Wrap>
      <TabList>
        {keywordList.map((list: any, index: number) => (
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
