import styled from "styled-components";

export const ServicesContainer = styled.div`
  background-image: ${(props) => props.image};
  width: 100%;
  height: fit-content;
  background-size: 100% 950px;
  position: relative;
  padding-bottom: 2rem;

  & > h2 {
    width: 100%;
    position: relative;
    top: 2rem;
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
    color: #FFF;
  }

  @media (min-width: 620px) {
    height: 540px;
    background-size: 100% 540px;
    & > h2 {
      font-size: 2rem;
      top: 3rem;
    }
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
export const AllServicesContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr;
  position: relative;
  top: 0;
  margin: 4rem 1rem 0;
  gap: 15px;
  @media (min-width: 620px) {
    display: flex;
    margin: 0 7.5rem;
    grid-template-columns: 1fr 1fr;
    top: 5rem;
    gap: 10px;
  }
  @media (min-width: 1200px) {
    top: 6rem;
  }
`
export const Service = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 0.5px solid #2CB4AA;
  background: lightgray -93px 0 / 168% 125% no-repeat, -webkit-gradient(linear, left top, left bottom, from(rgba(52, 58, 66, 0.1)), to(rgba(0, 0, 0, 0.1)));
  background: lightgray -93px 0 / 168% 125% no-repeat, -o-linear-gradient(top, rgba(52, 58, 66, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%);
  background: lightgray -93px 0 / 168% 125% no-repeat, linear-gradient(180deg, rgba(52, 58, 66, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%);
  -webkit-box-shadow: 4px 4px 25px 0 rgba(0, 0, 0, 0.6);
  box-shadow: 4px 4px 25px 0 rgba(0, 0, 0, 0.6);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  padding: 1.5rem 1.2rem 1.2rem;

  & > h6 {
    color: #2CB4AA;
    font-size: 1.1rem;
    font-weight: 700;
  }

  & > p {
    color: #F1F1F1;
    font-size: 1.05rem;
    font-weight: 300;
    margin: 1.5rem 0 2.2rem;
  }

  & > a {
    color: #FFB300;
    font-size: 1.05rem;
    text-decoration: none;
  }

  @media (min-width: 620px) {
    padding: 2rem 1.2rem 1.2rem;
    width: 22.5%;
    & > p {
      margin: 2.3rem 0;
    }
  }
  @media (min-width: 1200px) {
    padding: 2.5rem 1.5rem 1.5rem;
    width: 21.5%;
    & > p {
      margin: 2.5rem 0 3.7rem;
    }
  }

`
export const MyTable = styled.div`
    margin: 3rem 5rem;
`