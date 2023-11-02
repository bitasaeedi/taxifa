import styled from "styled-components";

export const ServicesContainer = styled.div`
  background-image: ${(props) => props.image};
  width: 100%;
  height: 540px;
  background-size: 100% 540px;
  position: relative;
  & > h2 {
    width: 100%;
    position: absolute;
    top: 3rem;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    color: #FFF;
  }
`
export const Shadow = styled.div`
  background-color: rgba(0, 0, 0, 0.71);
  height: 100%;
  width: 100%;
`
export const AllServicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;  
  top: 10rem;
  margin: 0 7.5rem;
`
export const Service = styled.div`
  width: 21.5%;
  border-radius: 10px;
  border: 0.5px solid #2CB4AA;
  background: lightgray -59 0px / 167% 125% no-repeat, linear-gradient(180deg, rgba(52, 58, 66, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%);
  backdrop-filter: blur(20px);
  padding: 2.5rem 1.5rem 1.5rem;
  & > h6 {
    color: #2CB4AA;
    font-size: 1.1rem;
    font-weight: 700;
  }

  & > p {
    color: #F1F1F1;
    font-size: 1.05rem;
    font-weight: 300;
    margin: 2.5rem 0 3.7rem;
  }

  & > a {
    color: #FFB300;
    font-size: 1.05rem;
    text-decoration: none;
  }

`