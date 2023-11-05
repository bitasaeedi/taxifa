import styled from "styled-components";

export const DescriptionContainer = styled.div`
  margin: 3rem auto 3rem;
  width: 88%;
  @media (min-width: 620px) {
    margin: 5rem 9rem 7rem;
    width: unset;
  }
`
export const Attributes = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  margin: 0 .5rem;

  & > div { //each item
    display: flex;
    margin-bottom: 2rem;
  }

  & > div > div { //texts
    margin-left: .8rem;
  }

  & > div > div > h6 {
    color: #2CB4AA;
    font-size: 1rem;
    margin-bottom: .4rem;
    font-weight: 600;
  }

  & > div > div > div {
    color: #383838;
    font-size: .75rem;
    font-weight: 300;
  }

  & > div > img {
    width: 32px;
    height: 20px;
  }

  @media (min-width: 620px) {
    grid-template-columns: auto auto auto auto;
    margin: 0 3rem;
    & > div {
      margin-bottom: 0;
    }

    & > div > img {
      width: 59px;
      height: 34px;
    }

    & > div > div > h6 {
      font-size: 1.1rem;
    }

    & > div > div > div {
      font-size: .9rem;
    }
  }
`

export const Descript = styled.div`
  display: block;
  margin-top: 2rem;

  @media (min-width: 620px) {
    display: flex;
    justify-content: space-between;
    margin-top: 7rem;
  }
`

export const DescriptionLeftSide = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  & > h2 {
    margin: 1rem 0 2rem;
    font-size: 1.7rem;
    font-weight: 700;
  }

  & > p {
    color: #383838;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.4rem;
  }

  @media (min-width: 620px) {
    width: 60%;
    margin-bottom: 0;
    & > h2 {
      margin: 5rem 0 3rem;
      font-size: 1.8rem;
    }

    & > p {
      font-size: 1.1rem;
    }

  }
`

export const DescriptionRightSide = styled.div`

  width: fit-content;

  & > div.images {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    border-radius: 20px;
    overflow: hidden;
  }

  & > div.images > img {
    width: 100%;
    cursor: pointer;
  }

  & > div {
    text-align: center;
    margin-top: 2rem;
    color: #2CB4AA;
    font-weight: 700;
  }


  @media (min-width: 620px) {
    & > div.images {
      border-radius: 50px;
    }
    & > div.images > img {
      width: 215px;
    }
  }
`

export const Infos = styled.div`
  display: flex;
  margin-top: 3rem;

  & > div {
    text-align: center;
    width: 33%;
  }

  & > div.center {
    border-right: 1px solid #D0D0D0;
    border-left: 1px solid #D0D0D0;
  }

  & > div > h6 {
    color: #2CB4AA;
    font-size: 1.45rem;
    font-weight: 700;
    margin-bottom: .5rem;
  }

  & > div > div {
    color: #454545;
    font-size: 1rem;
    font-weight: 400;
  }

  @media (min-width: 620px) {
    margin-top: 6rem;
    & > div > h6 {
      margin-bottom: 0;
      font-size: 1.5rem;
    }
    & > div > div {
      font-size: 1.05rem;
    }
  }
`

