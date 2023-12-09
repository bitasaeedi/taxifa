import styled from "styled-components";

export const Menu = styled.ul`
  display: ${(props) => (props.menu ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 100;
  
  width: 65%;
  height: 100%;
  padding-top: 2rem;
  &>a{
    font-weight: 500;
    text-align: center;
    padding: 1.6rem 0;
    color: white;
    text-decoration: none;
    display: block;
  }
  &>a:hover{
    background-color: white;
    color: black;
  }
  @media (min-width: 620px) {
   
  }
`
