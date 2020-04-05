import React from "react";
import styled from "styled-components";
import { FaUniversity, FaComment } from "react-icons/fa";
const Nav = () => {
  return (
    <NavWrapper>
      <Logo>Veep</Logo>
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
  text-transform: uppercase;
  font-size: 2.5rem;
  margin-left: 40px;
`;
const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
  width: 100%;
  color: white;
`;
