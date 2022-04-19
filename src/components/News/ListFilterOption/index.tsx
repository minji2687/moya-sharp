import styled from "@emotion/styled";
import Container from "../../common/layout/Container";
import { useState } from "react";
import { useNewsFormats } from "../hooks/useNewsFormat";
import ListSortController from "./ListSortController";

const ListFiterOption = () => {
  const { changeToTextFormat, changeToImgFormat, handleTextSize } =
    useNewsFormats();
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <section id="snb" role="navigation">
      <Container>
        <ListFeatures>
          {/* <span className="result">Results of ‘Silver’</span> */}
          <ListSortController />
          <TextSizeControl onClick={handleTextSize} />
          <ImageFormatViewBtn role="button" onClick={changeToImgFormat}>
            <HambugerIcon
              onClick={() => setIsActive(true)}
              role="button"
              iconActive={isActive}
            />
          </ImageFormatViewBtn>
          <TextFormatViewBtn role="button" onClick={changeToTextFormat}>
            <GridIcon
              onClick={() => setIsActive(false)}
              role="button"
              iconActive={isActive}
            ></GridIcon>
          </TextFormatViewBtn>
        </ListFeatures>
      </Container>
    </section>
  );
};

export default ListFiterOption;
const ListFeatures = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 99px;
  border-bottom: 1px solid #d9d9d9;

  .result {
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
    font-family: "Noto Sans";
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.subTitle};
  }
`;

const TextSizeControl = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/images/icon-Text-Size.svg");
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

type Props = {
  iconActive: boolean;
};

const ImageFormatViewBtn = styled.div``;
const HambugerIcon = styled.i<Props>`
  display: block;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  background: ${({ iconActive }) =>
      iconActive
        ? "url(/images/icon-Grid-filled.svg)"
        : "url(/images/icon-Grid.svg)"}
    no-repeat 4.5%;
`;

const GridIcon = styled.i<Props>`
  display: block;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  background: ${({ iconActive }) =>
      iconActive
        ? "url(/images/icon-Grid-list.svg)"
        : "url(/images/icon-hamburger-button.svg)"}
    no-repeat 4.5%;
`;

const TextFormatViewBtn = styled.div``;
