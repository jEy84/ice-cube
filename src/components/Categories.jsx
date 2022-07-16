// to show category like indain , thai, etc ..

import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiRiceCooker } from "react-icons/gi";

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        {/*  Slink styled  NavLink from router*/}
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>

      <SLink to={"/cuisine/Indian"}>
        <GiRiceCooker />
        <h4>Indian</h4>
      </SLink>

      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;
export default Categories;
