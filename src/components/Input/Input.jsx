import React from "react";
import styled from "styled-components";
const StyledInput = styled.input`
  padding: 0 0 0 10px;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  border: ${(props) =>
    props.boderColor ? `1px solid ${props.boderColor}` : "none"};
  border-radius: ${(props) => props.borderRadius + "px"};
  background: ${(props) => props.bgColor};
  font-weight: 500;
  line-height: 21px;
  color: ${(props) => props.textColor};
  /* color: ${(props) => props.fontSize}; */
  img {
    margin-right: 8px;
  }
`;
const Input = ({
  label,
  width,
  height,
  textColor,
  bgColor,
  boderColor,
  fontSize,
  borderRadius,
  children,
  type,
  id,
  name,
  placeholder,
  onChange,
  value,
  ...rest
}) => {
  return (
    <StyledInput
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      boderColor={boderColor}
      fontSize={fontSize}
      borderRadius={borderRadius}
      placeholder={placeholder}
      id={id}
      name={name}
      onChange={onChange}
      type={type}
      value={value}
      {...rest}
    >
      {children}
    </StyledInput>
  );
};
export default Input;
Input.defaultProps = {
  bgColor: "#FFFFFF",
  textColor: "#5429FF",
  width: "128px",
  height: "46px",
  borderRadius: "40px",
  fontSize: 16,
};
