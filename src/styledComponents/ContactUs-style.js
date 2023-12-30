import styled from "styled-components";

export const ContactUsContainer = styled.div`
  margin: 3rem auto;
  width: 90%;
  position: relative;

  & > h2 {
    font-size: 1.7rem;
    font-weight: 700;
  }

  & > p {
    color: #383838;
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.8rem;
    margin: 2rem 0 3rem;
    width: 100%;
  }

  @media (min-width: 620px) {
    margin: 7rem 10rem 5rem;
    width: unset;
    & > h2 {
      font-size: 1.9rem;
      font-weight: 700;
    }
    & > p {
      font-size: 1.05rem;
      margin: 3rem 0;
      width: 40%;
    }
  }
`
export const ContactsInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;

  & > img {
    width: 30px;
    height: 30px;
  }

  & > div {
    padding-left: 1rem;
    color: #454545;
    font-size: 1.05rem;
    font-weight: 400;
  }
  &>a{
    padding-left: 1rem;
    color: #454545;
    font-size: 1.05rem;
    font-weight: 400;
    text-decoration: none;
  }
`
export const Form = styled.div`
  position: static;
  border: 1px solid;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0 3px 28px 2px rgba(0, 0, 0, 0.06);
  padding: 2rem 1rem 2rem;

  & > h6 {
    color: #232323;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 2rem;

  }

  & > input {
    display: block;
    border-radius: 8px;
    border: 0.5px solid rgba(61, 61, 61, 0.30);
    outline: none;
    padding: .7rem .9rem;
    width: 97%;
    margin: 0 auto 1rem;
  }

  & > textarea {
    border-radius: 8px;
    border: 0.5px solid rgba(61, 61, 61, 0.30);
    outline: none;
    padding: .7rem .9rem;
    min-height: 100px;
    width: 97%;
    margin: 0 auto 2rem;
  }

  & > button {
    display: block;
    border-radius: 10px;
    background: #2CB4AA;
    color: #fff;
    width: 100%;
    font-weight: 700;
    font-size: 1.05rem;
    border: 0;
    padding: .6rem 0;
  }

  @media (min-width: 620px) {
    position: absolute;
   right: -5rem;
    top: 2%;
    border: none;
    padding: 2.5rem 2rem 3rem;
    & > input {
      width: 340px;
    }
  }
  @media (min-width: 1200px){
    right: 0;
  }
`
