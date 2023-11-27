import styled from "styled-components";

export const CustomersReviewContainer = styled.div`
  background-image: ${(props) => props.image};
  height: fit-content;
  background-size: 100% 500px;
  position: relative;
padding: 7rem 0 2rem;
  & > h2 {
    color: white;
    position: absolute;
    top: 2rem;
    width: 100%;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 700;
  }
  @media(min-width: 620px){
    padding: 12rem 0 2rem;
    &>h2{
      font-size: 1.9rem;
      top: 2.5rem;
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
export const ComentsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
margin: 0 auto;
  width: fit-content;
  
  @media(min-width: 620px){
  
   
  }
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
  cursor: pointer;
  margin-${(props) =>(props.side==='right'?'left':'right')}:.8rem;
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
  padding: .8rem;
  min-height: 232px;
  & > img {
    width: 80px;
    height: 80px;
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
    width: 240px;
    padding: 3rem .6rem 0;
    min-height: 200px;
  }

  & > div.comments-background > h6 {
    font-weight: 700;
    color: rgba(65, 65, 65, 1);
    font-size: 1rem;
    margin-bottom: .8rem;
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
    padding: 1rem;
    & > div.comments-background {
      width: 420px;
      padding: 3.5rem 2rem 0;
      min-height: 200px;
    }
    & > img {
      width: 90px;
      height: 90px;
    }
    & > div.comments-background > h6 {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
    
  }
`
