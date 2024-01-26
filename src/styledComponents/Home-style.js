import styled from "styled-components";

//person info
export const PersonInfoContainer = styled.div`
  background-color: black;
  font-size: .8rem;
  padding: .8rem 1.5rem;
  display: flex;

  & > div {
    display: flex;
    align-items: center;
    margin-right: 2rem;
  }

  & > div > img {
    width: 20px;
    margin-right: .3rem;
  }

  & > div > a {
    text-decoration: none;
    color: white;
  }

  @media (min-width: 620px) {
    padding: .8rem 3.5rem;
  }

`

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
  @media (min-width: 620px) {
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

  & > img.menu {
    width: 30px;
    margin-right: .6rem;
    position: relative;
    z-index: 10;
    display: ${(props) => (props.mobile ? 'unset' : 'none')};
  }

  & > span {
    padding-left: .6rem;
    font-size: 1.2rem;
  }

  & > img.flag {
    display: inline-block;
    width: 35px;
    margin-left: 1rem;
    position: relative;
    z-index: 10;
  }

  @media (min-width: 620px) {
    padding: 0 1.8rem;
    & > img {
      width: 60px;
      height: 40px;
    }

    & > img.flag {
      display: none;
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
  align-items: center;
  color: #FFFFFF;
  position: relative;
  z-index: 10;
  //flag
  & > img.flag {
    width: 40px;
    height: 22px;

  }

  //arrow
  & > img:last-of-type {
    margin-left: .4rem;
    width: 17px;
    height: 17px;
    cursor: pointer;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-right: 2rem;
    align-items: center;
  }

  & > div > a {
    padding: 0 .9rem;
    cursor: pointer;
    text-decoration: none;
    color: white;
  }

  & > div > a:hover {
    color: #FFB300;
    border-bottom: 1px solid #FFB300;
    padding-bottom: .05rem;

  }

  & > div > div.bookBtn {
    background-color: rgba(255, 179, 0, 1);
    padding: .5rem 1rem;
    border-radius: 6px;
    font-size: .85rem;
    cursor: pointer;
    margin-left: 1.3rem;
  }

  @media (min-width: 620px) {
    display: flex;
    & > div > a {
      padding: 0 .4rem;
      margin: 0 .4rem;
    }
  }
  @media (min-width: 1200px) {
    & > div > a {
      padding: 0 .8rem;
      margin: 0 .5rem;
    }

    & > div > div.bookBtn {
      padding: .5rem 1.1rem;
      font-size: .9rem;
    }
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
    margin: 0 auto ;
    width: 85%;
  }

`
export const HomeContentLeftSide = styled.div`
  height: auto;
  width: 90%;
  margin: 0 auto 0;
  padding: 4rem 0 2rem;

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

  & > div.images {
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
    margin-top: 9rem;
    width: 70%;
    & > h1 {
      margin-bottom: 1.5rem;
      font-size: 2.8rem;
      font-weight: 600;
      line-height: 3.4rem;
    }

    & > div {
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.5rem;
    }

    & > div.images {
      display: block;
      justify-content: space-between;
    }

    & > div.images > img {
      margin: 2rem .9rem 0 0;
      width: 70px;
      height: 70px;
    }
  }
  @media (min-width: 1200px) {
    width: 44%;
    & > div.images > img {
      margin: 2rem 1.2rem 0 0;
      width: 80px;
      height: 80px;
    }

    & > h1 {
      font-size: 3.1rem;
    }

    & > div {
      font-size: 1.1rem;
    }
  }
`

export const HomeContentRightSide = styled.div`
  width: 310px;
  height: 495px;
  border: 1px solid #FFB300;
  border-radius: 10px;
  margin: 2.5rem auto 0;
  text-align: center;
  background: lightgray -93px 0 / 168% 125% no-repeat, -webkit-gradient(linear, left top, left bottom, from(rgba(52, 58, 66, 0.1)), to(rgba(0, 0, 0, 0.1)));
  background: lightgray -93px 0 / 168% 125% no-repeat, linear-gradient(180deg, rgba(52, 58, 66, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%);
  -webkit-box-shadow: 4px 4px 25px 0 rgba(0, 0, 0, 0.6);
  box-shadow: 4px 4px 25px 0 rgba(0, 0, 0, 0.6);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  overflow-x: hidden;
  position: relative;

  & > h6 {
    color: #FFB300;
    font-size: 1rem;
  }

  & > p {
    color: rgba(255, 255, 255, 0.60);
    margin: 1rem 0 2.2rem;
    font-size: .95rem;
  }

  & > a {
    color: #2cb4aa;
    font-size: .9rem;
    font-weight: 400;
    text-decoration: none;
    margin-top: 3rem;
    display: inline-block;
  }

  @media (min-width: 380px) {
    width: 360px;
  }
  @media (min-width: 620px) {
    width: 400px;
    min-width: 400px;
    margin-top: 9rem;
    margin-left: 8rem;
    height: 510px;
    & > h6 {
      font-size: 1.2rem;
    }

    & > p {
      font-size: .9rem;
      margin: 1.2rem 0 2.2rem;
    }

    & > a {
      font-size: .75rem;
      font-weight: 400;
    }
  }

`
export const HomeContentRightSideContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  transform: ${(props) => (`translateX(${props.translate}px)`)};
  transition: transform .5s ease-in-out;
`
export const Header2 = styled.div`
  background: ${(props) => (props.color==='white'?'white':'black')};

  display: flex;
  align-items: center;
  justify-content: space-between;
 padding: 1rem 1rem;
  &>div{
    color: ${(props) => (props.color==='white'?'black':'white')};
    display: flex;
    align-items: center;
    font-size: .9rem;
  }
  &>div>img{
    width: 45px;
  }
&>div>img.flag{
  width: 38px;
 
}
  &>div>a{
    text-decoration: none;
    font-size: 1rem;
    margin-left: 1rem;
    padding: .4rem .8rem;
    background: black;
    color: white;
    border-radius: 8px;
  }
  @media (min-width: 620px){
    padding: 1rem 3rem;
    &>div>img{
      width: 60px;
    }
    &>div{
      font-size: 1rem;
    }
    &>div>img.flag{
      width: 42px;
      margin-left: 5rem;
    }
    &>div>a {
      font-size: 1.1rem;
      margin-left: 2rem;
      padding: .5rem .8rem;
    }
  }
`