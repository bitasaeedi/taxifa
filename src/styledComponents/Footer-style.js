import styled from "styled-components";

export const FooterContainer = styled.div`
  margin: 0 auto;
  padding: 2rem 0  2rem;
  text-align: center;
  width: 100%;
  background-color: black;

  & > h6 {
    color: #FFB300;
    font-size: 2.05rem;
    font-weight: 400;
  }
  &>div{
    color: #fff;
    font-size: 1.05rem;
    font-weight: 400;
    margin-top: 2rem;
  }
  @media(min-width: 620px){
    padding: 10rem 0  2rem;
    &>div{
      margin-top: 3rem;
    }
  }
`
export const Links = styled.div`
  display: flex;
  justify-content:space-between;
  margin: 2rem 1.2rem 3rem;
  &>a{
    margin: 0 ;
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
  }
  @media(min-width: 620px){
    justify-content:center;

    margin: 2rem 0 5rem;
    &>a{
      margin: 0 1rem;
      font-size: 1.05rem;
    }
  }
`

export const SocialMedia = styled.div`
  & > img {
    margin: 0 1rem;
    display: inline-block;
    cursor: pointer;
  }
`
