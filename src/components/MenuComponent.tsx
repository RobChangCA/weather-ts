import React from "react";
import styled from "styled-components";
import { ScreenType } from "../App";

type MenuComponentProps = {
  screen: ScreenType;
  setScreen: React.Dispatch<React.SetStateAction<ScreenType>>;
};
type MenuItemProps = {
  screen: ScreenType;
  selected: boolean;
  setScreen: React.Dispatch<React.SetStateAction<ScreenType>>;
};
export const screens = [
  "weather",
  "temperature",
  "aqi",
  "uv",
  "covid",
] as const;
type StyledButtonProps = { selected: boolean };
const StyledButton = styled("button")<StyledButtonProps>`
  height: 200px;
  width: 200px;
  background: ${(props) => (props.selected ? "blue" : "green")};
`;

const MenuItem: React.FC<MenuItemProps> = ({ screen, selected, setScreen }) => {
  return (
    <StyledButton selected={selected} onClick={() => setScreen(screen)}>
      {screen}
    </StyledButton>
  );
};

const MenuComponent: React.FC<MenuComponentProps> = ({ screen, setScreen }) => {
  return (
    <div>
      {screens.map((screenItem) => (
        <MenuItem
          selected={screenItem === screen}
          screen={screenItem}
          setScreen={setScreen}
        />
      ))}
    </div>
  );
};

export default MenuComponent;
