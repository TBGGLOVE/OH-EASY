import React from "react";
import styled from "styled-components";

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !["color", "backgroundColor"].includes(prop),
})`
  height: 32px;
  padding: 6px 12px;
  font-size: 14px;
  vertical-align: bottom;
  border: 1px solid
    ${({ backgroundColor }) => backgroundColor || "var(--color-primary-black)"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "var(--color-primary-white)"};
  color: ${({ color }) => color || "var(--color-primary-black)"};

  & + button {
    margin-left: 10px;
  }
`;

const CustomButton = ({
  text,
  color,
  backgroundColor,
  id,
  className,
  onClick,
}) => {
  return (
    <StyledButton
      id={id}
      className={className}
      onClick={onClick}
      color={color}
      backgroundColor={backgroundColor}
    >
      {text}
    </StyledButton>
  );
};

export default CustomButton;
