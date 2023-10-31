import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative;
  background-image: ${(props) => props.image};
  height: 90vh;
  background-size: 100% 90vh;

  @media (min-width: 620px) {
    height: 90vh;
    background-size: 100% 90vh;
  }
`

export const Shadow = styled.div`
  background-color: rgba(0, 0, 0, 0.71);
  height: 100%;
  width: 100%;
`

//menu
export const Menu = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;

`

export const MenuLeft = styled.div`
  color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;

  & > img {
    width: 32px;
  }

  & > span {
    padding-left: .4rem;
  }

  @media (min-width: 620px) {
    padding: 0 1.8rem;
    & > img {
      width: 46px;
      height: 36px;
    }

    & > span {
      padding-left: .4rem;
      font-size: 1.5rem;
    }
  }
`

export const MenuRight = styled.div`
  display: none;
  height: fit-content;
  width: 53%;
  color: #FFFFFF;
  //flag
  & > img:first-child {
    width: 32px;
    height: 18px;
  }

  //arrow
  & > img:last-of-type {
    margin-left: .4rem;
    width: 17px;
    height: 17px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 2rem;
    align-items: center;
  }

  & > div > div.active {
    color: #FFB300;
    border-bottom: 1px solid #FFB300;
    padding-bottom: .05rem;
  }

  & > div > div.bookBtn {
    background-color: rgba(255, 179, 0, 1);
    padding: .5rem 1.1rem;
    border-radius: 6px;
    font-size: .9rem;
  }

  @media (min-height: 620px) {
    display: flex;
  }


`

//Home content

export const HomeContent = styled.div`
  display: flex;
  position: absolute;
  top: 0; left: 0;
  @media (min-height: 620px) {
    margin: 13rem 6rem 0;
  }

`
export const HomeContentLeftSide = styled.div`
  width: 44%;
  &>h1{
    color: #E9E9E9;
    margin-bottom: 1.5rem;
  }
  &>h1>span{
    color: #FFB300;
  }
  &>div{
    color: rgba(255, 255, 255, 0.60);
  }
  &>div.images>img{
    margin: 2rem 1.2rem 0 0 ;
    border-radius: 5px;
  }

  @media (min-height: 620px) {
    & > h1 {
      font-size: 3.1rem;
      font-weight: 600;
      line-height: 3.4rem;
    }

    & > h1 > span {

    }

    & > div {
      font-size: 1.1rem;
      font-weight: 300;
      line-height: 1.5rem;
    }

    & > div.images > img {
      width: 80px;
      height: 80px;
    }
  }
  

`
export const HomeContentRightSide = styled.div`
  border: 1px solid #FFB300;
  width: 30%;
  margin-left: 15rem;
  @media (min-height: 620px) {
  }

`
export const Options=styled.div`
    
`
