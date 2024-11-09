import React from "react";
import LogoSite from "../../assets/logo.svg";
import styled from "styled-components";
const Wrapper = styled.div`
  background-color: var(--background-signin-color);
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: var(--bg-color-input);
  }
`;
const Logo = ({ desc }) => {
  return (
    <Wrapper>
      <img src={LogoSite} alt="" />
      <p>{desc}</p>
    </Wrapper>
  );
};
export default Logo;