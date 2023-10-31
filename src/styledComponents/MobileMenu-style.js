import styled from "styled-components";

export const Menu = styled.ul`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  color: white;
  width: 65%;
  height: 100%;
  padding-top: 2rem;
  &>li{
    font-weight: 500;
    text-align: center;
    padding: 1.6rem 0;
  }
  &>li:hover{
    background-color: white;
    color: black;
  }
  @media (min-width: 620px) {
   
  }
`
