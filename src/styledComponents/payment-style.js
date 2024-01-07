import styled from "styled-components";

export const PaymentContainer = styled.div`
  background-color: black;
  color: white;
  padding: 10rem 0 5rem ;
  min-height: 70vh;
  &>h6{
    font-size: 1.5rem;
    text-align: center;
  }
  &>img{
    width: 40px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-bottom: 3rem;
  }
  &>a{
    border: 1px solid #FFB300;
    text-decoration: none;
    color: white;
    padding: .5rem;
    border-radius: 10px;
    margin: 2rem  auto 0;
    display: block;
    width: fit-content;
  }
  @media (min-width: 620px) {
    padding: 8rem 0 0 ;
    &>img{
      width:150px;
     
    }
  }
`
