import styled from "styled-components";

export const QuestionsContainer = styled.div`
  margin: 6rem 19rem;
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
`
export const Question = styled.div`
  width: 100%;
  display: flex;

  & > div.number {
    background-color: #2CB4AA;
    color: #fff;
    margin-right: 1rem;
    border-radius: 50%;
    width: 42px;
    height: 30px;
    line-height: 30px;
    text-align: center;

  }

  & > div > h6.question {
    color: #2E2E2E;
    font-size: 1.1rem;
    font-weight: 700;
    padding: .3rem 0 1.5rem;
  }

  & > div > p.answer {
    color: #383838;
    width: 95%;
  }
`