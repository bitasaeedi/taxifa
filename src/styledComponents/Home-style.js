import styled from "styled-components";

export const HomeContainer = styled.div`
  background-image: ${(props) => props.image};
  background-size: 100% 200px;
  height: 200px;

  @media (min-width: 620px) {
    height: 700px;
    background-size: 100% 700px;
  }
`

export const Shadow = styled.div`
  background-color: rgba(0, 0, 0, 0.71);
  height: 100%;
  width: 100%;
`

//menu
export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`

export const MenuLeft = styled.div`
  font-family: 'Irish Grover',sans-serif;

`
export const MenuRight = styled.div`
    
`