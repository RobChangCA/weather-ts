import React from "react";
import styled from "styled-components";
import { ScreenType } from "../App";
import Sun from "../assets/menuImages/sun.svg";

type Props = {
  screen: ScreenType;
  setScreen: React.Dispatch<React.SetStateAction<ScreenType>>;
};

type ButtonProps = {
  text: string;
  selected: boolean;
  image: string;
};

const StyledButton = styled("button")<{ selected?: boolean }>`
  height: 200px;
  width: 200px;
  position: relative;
  display: flex;
  align-items: center;
  &: hover {
    span {
      opacity: 1;
    }
  }
  img {
    width: 100%;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
  }
`;

const Button: React.FC<ButtonProps> = ({ image, text, selected }) => {
  return (
    <StyledButton selected>
      <span>{text}</span>
      <img src={image} alt={text} />
    </StyledButton>
  );
};

const buttons = [{ text: "" }];

const MenuComponent: React.FC<Props> = ({ screen, setScreen }) => {
  return (
    <>
      <Button text="test" selected image={Sun} />
    </>
  );
};

export default MenuComponent;
