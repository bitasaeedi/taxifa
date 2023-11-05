import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative;
  background-image: ${(props) => props.image};
  height: fit-content;
  background-size: 100% 120vh;
padding: 0 0 3rem;
  @media (min-width: 620px) {
    height: fit-content;
    background-size: 100% 91vh;
  }
`
export const Shadow = styled.div`
  background-color: rgba(0, 0, 0, 0.71);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

//menu
export const Menu = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 1.3rem 1.5rem;
  width: 100%;
  @media (min-width: 620px){
    padding: 2rem;
  }
`
export const MenuLeft = styled.div`
  color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;

  & > img {
    width: 42px;
  }

  & > span {
    padding-left: .6rem;
    font-size: 1.2rem;
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

  @media (min-width: 620px) {
    display: flex;
  }


`

//Home content

export const HomeContent = styled.div`
  display: block;
  position: relative;
  top: 0;
  left: 0;
  @media (min-width: 620px) {
    display: flex;
    margin: 0 6rem ;
  }

`
export const HomeContentLeftSide = styled.div`
  height: auto;
  width: 90%;
  margin: 0 auto 0;
  padding: 6rem 0 2rem;
  & > h1 {
    color: #E9E9E9;
    margin-bottom: 1.9rem;
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 2.2rem;
  }

  & > h1 > span {
    color: #FFB300;
  }

  & > div {
    color: rgba(255, 255, 255, 0.60);
    font-size: 1rem;
  }
  &>div.images{
    display: flex;
    justify-content: space-between;
  }
  & > div.images > img {
    margin: 3rem 0 0 0;
    border-radius: 5px;
    cursor: pointer;
    width: 22%;
  }

  @media (min-width: 620px) {
    margin-top: 13rem;
    width: 44%;
    & > h1 {
      margin-bottom: 1.5rem;
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

    &>div.images{
      display: block;
      justify-content: space-between;
    }
    & > div.images > img {
      margin: 2rem 1.2rem 0 0;
      width: 80px;
      height: 80px;
    }
  }


`
export const HomeContentRightSide = styled.div`
  height: auto;
  width: 90%;
  border: 1px solid #FFB300;
  border-radius: 10px;
  padding: 2.6rem 2.2rem 2rem;
  margin: 2.5rem auto 0;
  text-align: center;
  background: lightgray -93px 0 / 168% 125% no-repeat, -webkit-gradient(linear, left top, left bottom, from(rgba(52, 58, 66, 0.1)), to(rgba(0, 0, 0, 0.1)));
  background: lightgray -93px 0 / 168% 125% no-repeat, linear-gradient(180deg, rgba(52, 58, 66, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%);
  -webkit-box-shadow: 4px 4px 25px 0 rgba(0, 0, 0, 0.6);
  box-shadow: 4px 4px 25px 0 rgba(0, 0, 0, 0.6);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);

  & > h6 {
    color: #FFB300;
    font-size: 1rem;
  }

  & > p {
    color: rgba(255, 255, 255, 0.60);
    margin: 1rem 0 2.2rem;
    font-size: .95rem;
  }
  &>a{
    color: #2cb4aa;
    font-size: .9rem;
    font-weight: 400;
    text-decoration: none;
    margin-top: 3rem;
    display: inline-block;
  }

  @media (min-width: 620px) {
    width: 29%;
    max-width: 500px;//
    margin-top: 9rem;
    padding: 2.6rem 2.3rem 2rem;
    margin-left: 16rem;
    & > h6 {
      font-size: 1.2rem;
    }

    & > p {
      font-size: .9rem;
      margin: 1.2rem 0 2.2rem;
    }
    &>a{
      font-size: .75rem;
      font-weight: 400;
    }
  }

`
export const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  padding: 0 2rem;
  & > div {
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 1rem ;
    border-radius: 8px;
    color: #FFFFFF;
    font-size: .8rem;
  }

  & > div > img {
    width: 27px;
    height: 27px;
  }

  & > div > div {
    margin-top: 1rem;
    
  }

  @media (min-width: 620px) {
    padding: 0 2rem;
    & > div {
      padding: 1.2rem 1.5rem 1rem;
      font-size: .8rem;
    }
    & > div > img {
      width: 30px;
      height: 30px;
    }
    & > div > div {
      margin-top: 1.3rem;

    }
  }

`
