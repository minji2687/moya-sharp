import styled from "@emotion/styled";
import React from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "./Portal";
import "./Modal.css"

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selector?: string;
}

const Modal: React.FC<Props> = ({ children, onClose, isOpen, selector = '#modal-root' }) => (
  <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
    <Portal selector={selector}>
      <Overlay>
        <Container>
          {children}
          <ButtonArea>  
            <CancleBTn onClick={onClose}>취소</CancleBTn>
            <SaveBtn>저장</SaveBtn>
          </ButtonArea>
        </Container>
      </Overlay>
    </Portal>
  </CSSTransition>
)

export default Modal;

const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  top: 60px;
  right: -400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 4px 7px rgba(196, 195, 195, 0.25);
`

const Container = styled.div`
  max-width: 567px;
  position: relative;
  width: 100%;
  padding-bottom: 16px;
`

const ButtonArea = styled.div`
  float: right;
  margin-right: 16px;
`

const CancleBTn = styled.button`
  border: 1px solid #48C0B7;
  background-color: #fff;
  border-radius: 5px;
  color: #48C0B7;
  font-weight: 400;
  font-size: 16px;
  margin-right: 10px;
`

const SaveBtn = styled.button`
  border: 0;
  color: #fff;
  background-color: #48C0B7;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
`