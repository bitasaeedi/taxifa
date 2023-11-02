import styled from "styled-components";

export const DescriptionContainer = styled.div`
  margin: 5rem 9rem 7rem;

  @media (min-width: 620px) {
   
  }
`
export const Attributes = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  &>div{//each item
    display: flex;
  }
  &>div>div{ //texts
    margin-left: .8rem;
  }
  
  &>div>div>h6{ 
    color: #2CB4AA;
    font-size: 1.1rem;
    margin-bottom: .4rem;
    font-weight: 600;
  }
  &>div>div>div{
    color: #383838;
    font-size: .9rem;
    font-weight: 300;
  }
  @media (min-width: 620px) {
    grid-template-columns: auto auto auto auto;
    margin: 0 3rem;
    &>div>img{
      width: 59px;
      height: 34px;
    }
  }
`

export const Descript = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7rem;
  
  @media (min-width: 620px) {

  }
`

export const DescriptionLeftSide = styled.div`
  width: 60%;
  &>h2{
    margin: 5rem 0 3rem;
    font-size: 1.8rem;
    font-weight: 700;
  }
  
  &>p{
    color: #383838;
  }
  @media (min-width: 620px) {
    &>h2{
      font-size: 1.8rem;
      font-weight: 700;
      margin: 6rem 0 3rem;
    }
    &>p{
      font-size: 1.1rem;
      font-weight: 300;
      line-height: 1.4rem;
    }
    
  }
`

export const DescriptionRightSide = styled.div`
  width: fit-content;
  
  &>div.images{
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    border-radius: 50px;
  }
  &>div.images>img{
    width: 215px;
  }
  &>div{
    text-align: center;
    margin-top: 2rem;
    color: #2CB4AA;
    font-weight: 700;
  }
  
  
  @media (min-width: 620px) {

  }
`

export const Infos = styled.div`
  display: flex;
  margin-top: 6rem;
  &>div{
    text-align: center;
    width: 33%;
  }
  &>div.center{
    border-right: 1px solid #D0D0D0;
    border-left: 1px solid #D0D0D0;
  }
  &>div>h6{
    color: #2CB4AA;
    font-size: 1.5rem;
    font-weight: 700;
  }
  &>div>div{
    color: #454545;
    font-size: 1.05rem;
    font-weight: 400;
  }
  @media (min-width: 620px) {

  }
`