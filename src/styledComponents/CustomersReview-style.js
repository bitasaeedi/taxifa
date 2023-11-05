import styled from "styled-components";

export const CustomersReviewContainer = styled.div`
  width: 100%;
  background-image: ${(props) => props.image};
  height: 500px;
  background-size: 100% 500px;
  position: relative;

  & > h2 {
    color: white;
    position: absolute;
    top: 2.5rem;
    width: 100%;
    text-align: center;
    font-size: 1.9rem;
    font-weight: 700;
  }
`
export const Shadow = styled.div`
  background-color: rgba(0, 0, 0, 0.71);
  height: 100%;
  width: 100%;
`
export const ComentsContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 50%;
  top: 65%;
  transform: translate(-50%, -50%);
`
export const ArrowBtn = styled.div`
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.20);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: rgba(239, 239, 239, 1);
  margin: 0 1rem;
  cursor: pointer;
  @media (min-width: 620px) {
    margin: 0 3.5rem;
    width: 45px;
    height: 45px;
    font-size: 24px;
  }
`
export const Coment = styled.div`
  border-radius: 18px;
  border: 1px solid #2CB4AA;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(5px);
  padding: 1rem;
  min-height: 232px;
  & > img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 5px solid #2CB4AA;
    box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.25);
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }

  & > div.comments-background {
    border-radius: 19px;
    text-align: center;
    background-color: rgba(255, 255, 255, 1);
    width: 250px;
    padding: 3rem 1rem 0;
    min-height: 200px;
  }

  & > div.comments-background > h6 {
    font-weight: 700;
    color: rgba(65, 65, 65, 1);
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  & > div.comments-background > div {
    color: rgba(69, 69, 69, 1);
    font-size: .9rem;
  }
  &>div.comments-background > div.stars>span{
    display: inline-block;
    margin: 1rem .3rem ;
  }
  @media (min-width: 620px) {
    & > div.comments-background {
      width: 420px;
      padding: 3.5rem 2rem 0;
      min-height: 200px;
    }
  }
`
