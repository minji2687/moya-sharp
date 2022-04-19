import styled from "@emotion/styled";
import Modal from "../../edit/Modal";
import { useState } from "react";
import AddKeyword from "../../edit/AddKeyword";
import { useAppSelector } from "../../../redux/hooks";
import { useNewsTabList } from "../hooks/useNewsTabList";

const TabList = () => {
  const {
    currentTab,
    changeCurrentTab,
    dragstart,
    dragOver,
    dragEnd,
    dragdrop
  } = useNewsTabList();
  const userTabList = useAppSelector(state => state.keywords);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  interface Keyword {
    data: string;
  }

  return (
    <Wrap>
      <Inner>
        <List>
          {userTabList.map((userTab: Keyword, index: number) => (
            <li
              key={index}
              data-position={index}
              draggable
              onDragOver={dragOver}
              onDragStart={dragstart}
              onDragEnd={dragEnd}
              onDrop={dragdrop}
              className={
                currentTab === index ? "keywordTab focused" : "keywordTab"
              }
              onClick={() => changeCurrentTab(index)}
            >
              {userTab.data}
            </li>
          ))}
          <TabAddBtn role="button" onClick={handleOpen}>
            <i>+</i>
            <span>키워드 추가</span>
          </TabAddBtn>
          <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalBody>
              <AddKeyword />
            </ModalBody>
          </Modal>
        </List>
      </Inner>
    </Wrap>
  );
};

export default TabList;

const Wrap = styled.section`
  position: absolute;
  bottom: 0;
`;
const Inner = styled.div`
  /* position: absolute;
  top: calc(100% - 60px);
  z-index: -1; */
  margin-top: 69px;
`;
const List = styled.ul`
  display: flex;
  text-decoration: none;
  position: relative;
  .keywordTab {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 19px 30px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.newsDescription};
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
      border-top: 5px solid ${props => props.theme.primaryColor};
      font-weight: 600;
      background-color: #fff;
      color: ${props => props.theme.primaryColor};
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
  background-color: ${props => props.theme.primaryColor};
  box-sizing: border-box;
  border-radius: 0px 5px 0px 0px;
  padding-left: 14px;
  cursor: pointer;
  i {
    width: 40px;
    height: 40px;
    background-image: url("/images/icon-add-white.svg");
    background-size: contain;
    background-repeat: no-repeat;
    font-size: 0;
    box-sizing: border-box;
  }
`;

const ModalBody = styled.div`
  border-radius: 5px;
  max-height: calc(100vh - 16px);
  overflow: hidden auto;
  position: relative;
  padding-block: 12px;
  padding-inline: 24px;
`;
