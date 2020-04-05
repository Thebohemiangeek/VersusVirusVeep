import React from "react";
import styled from "styled-components";
import { FaUniversity, FaComment } from "react-icons/fa";
import LogoPng from '../images/Logo.png'
const Nav = () => {
  return (
    <NavWrapper>
      <Logo><img src={LogoPng} /></Logo>
      <Buttons>
        <li>
          <FaUniversity /> login
        </li>
        <li>
          <FaComment />
          contact
        </li>
      </Buttons>
    </NavWrapper>
  );
};

export default Nav;

const Buttons = styled.ul`
  list-style-type: none;
  font-size: 1.5rem;
  display: flex;
  margin-right: 50px;
  li {
    display: flex;
    align-items: center;
    margin: auto 10px;
    svg {
      margin: auto 5px;
    }
  }
`;
const Logo = styled.div`
 img{ height:80px;}
`;
const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  width: 100%;
  color: #000F55;
`;
