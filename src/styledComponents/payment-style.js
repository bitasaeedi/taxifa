import styled from "styled-components";

export const PaymentContainer = styled.div`
  background-color: black;
  color: white;
  padding: 3rem 0 0 ;
  &>h6{
    font-size: 2rem;
    text-align: center;
  }
  &>img{
    width: 150px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-bottom: 3rem;
  }
  @media (min-width: 620px) {
    padding: 8rem 0 0 ;
    &>img{
      width:300px;
     
    }
  }
`
