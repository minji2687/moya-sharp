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
          <i>+</i>
          <span>키워드 추가</span>
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
    font-weight: 400;
    color: #7a7a7a;
    background-color: #f4f4f4;
    border-top: 5px solid transparent;
    cursor: pointer;
    &:first-of-type {
      border-radius: 5px 0 0 0px;
    }
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
      border-top: 5px solid ${props => props.theme.BlueGreenColor};
      font-weight: 600;
      background-color: #fff;
      color: ${props => props.theme.BlueGreenColor};
    }
  }
`;

const TabAddBtn = styled.li`
  display: flex;
  align-items: center;
  width: 166px;
  height: 60px;
  font-family: NotoSans-Display;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  outline: none;
  border: none;
  background-color: ${props => props.theme.BlueGreenColor};
  box-sizing: border-box;
  border-radius: 0px 5px 0px 0px;
  padding-left: 14px;
  cursor: pointer;
  i {
    width: 40px;
    height: 40px;
    background-image: url("images/icon-add-white.svg");
    background-size: contain;
    background-repeat: no-repeat;
    font-size: 0;
    box-sizing: border-box;
  }
`;