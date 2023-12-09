import styled from "styled-components";

export const QuestionsContainer = styled.div`
  width: 90%;
  margin: 4rem auto;
  & > h2 {
    text-align: center;
    margin-bottom: 3rem;
  }

  & > div.all_questions_container {
    display: block;
    width: fit-content;
    margin: 0 auto;
  }
  @media (min-width: 620px) {
    margin: 6rem 15rem;
    width: unset;
    & > h2 {
      text-align: center;
      margin-bottom: 4rem;
    }
    & > div.all_questions_container {
      display: grid;
      grid-template-columns: auto auto;
      gap: 4rem 3rem;
      justify-content: space-between;
    }
     }
  @media (min-width: 1200px) {
    margin: 6rem 19rem;
  }
`
export const Question = styled.div`
  width: 100%;
  display: flex;

  & > div.number {
    background-color: #2CB4AA;
    color: #fff;
    margin-right: .5rem;
    border-radius: 50%;
    width: 33px;
    height: 30px;
    line-height: 30px;
    text-align: center;

  }
  &>div.text{
    width: fit-content;
    margin-bottom: 1rem;
    border-bottom: 1px solid #2CB4AA;
    padding-bottom: 1rem;
  }
  &>div.text:last-of-type{
   border: none;
  }

  & > div > h6.question {
    color: #2E2E2E;
    font-size: 1.1rem;
    font-weight: 700;
    padding: .3rem 0 1rem;
  }

  & > div > p.answer {
    color: #383838;
    width: 95%;
  }
@media(min-width: 620px){
  & > div.number{
    margin-right: 1rem;
  }
  &>div{
    width: unset;
    margin-bottom: 0;
    padding-bottom: 0;
    border: 0;
  }
  & > div > h6.question {
    padding: .3rem 0 1rem;
  }
}
`