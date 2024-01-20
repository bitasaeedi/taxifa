import styled from "styled-components";

// select services
export const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  padding: 0 2rem;

  & > div {
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 1rem;
    border-radius: 8px;
    color: #FFFFFF;
    font-size: .8rem;
    cursor: pointer;
  }

  & > div > img {
    width: 27px;
    height: 27px;
  }

  & > div > div {
    margin-top: 1rem;

  }

  @media (min-width: 620px) {
    padding: 0 1.5rem;
    & > div {
      padding: 1.2rem 1.7rem 1rem;
      font-size: .8rem;
    }

    & > div > img {
      width: 30px;
      height: 30px;
    }

    & > div > div {
      margin-top: 1.3rem;

    }
  }

`
export const SelectServicesBox = styled.div`
  padding: 2.6rem 2rem 2rem;
  width: 310px;
  height: 489px;

  & > h6 {
    color: #FFB300;
    font-size: 1rem;
  }

  & > p {
    color: rgba(255, 255, 255, 0.60);
    margin: 1rem 0 2.2rem;
    font-size: .95rem;
  }

  & > a {
    color: #2cb4aa;
    font-size: .9rem;
    font-weight: 400;
    text-decoration: none;
    margin-top: 3rem;
    display: inline-block;
  }

  @media (min-width: 380px) {
    width: 360px;
  }

  @media (min-width: 620px) {
    padding: 2.6rem 3.3rem 1rem;
    width: 400px;
    height: 509px;
    & > h6 {
      font-size: 1.2rem;
    }

    & > p {
      font-size: .9rem;
      margin: 1.2rem 0 2.2rem;
    }

    & > a {
      font-size: .75rem;
      font-weight: 400;
    }
  }
`

export const MainBoxContainer = styled.div`
  text-align: left;
  padding: 1.5rem 1.7rem;
  position: relative;
  transition: transform .5s ease-in-out;
  width: 310px;
  height: 489px;

  & > h2 {
    color: #FFB300;
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    display: inline-block;
  }

  & > h2.form-title {
    margin-bottom: 1rem;
  }

  & > div.price {
    color: #2CB4AA;
    display: inline-block;
    position: absolute;
    right: 1.7rem;
    font-size: 1.6rem;
    font-weight: 700;

  }

  @media (min-width: 380px) {
    width: 360px;
  }
  @media (min-width: 620px) {
    padding: 1.5rem 1.7rem;
    height: 509px;
    width: 400px;
    & > h2 {
      font-size: 1.2rem;
      margin-bottom: 1.6rem;
    }
  }


`
export const SecondContainer = styled.div`
  padding: ${(props) => (props.type === 'fill' ? '0 .3rem .2rem' : '0 .3rem')};
  width: 100%;
  overflow-y: auto;
  max-height: 350px;

  & > h6 {
    color: #F1F1F1;
    font-size: .8rem;
    font-weight: 400;
    margin: 1.1rem 0 .5rem;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (min-width: 620px) {
    max-height: 350px;
    & > h6 {
      margin: 1.5rem 0 .5rem;
    }

    & > h6:first-child {
      margin: .8rem 0 .5rem;
    }
  }
`

//booking
export const InputsContainer = styled.div`
  margin-bottom: .8rem;
  width:${(props) => (props.width? props.width : '100%')};;

  position: ${(props) => (props.position? 'unset' : 'relative')};

  & div.react-datepicker-popper {
    transform: translate3d(34%, 40%, 0px) !important;

  }

  & > div.input-label {
    color: #F1F1F1;
    font-size: .78rem;
    font-weight: 400;
    margin-bottom: .4rem;
  }

  & > div.input-label > input {
    margin-right: .5rem;
    cursor: pointer;
  }

  & > div.input {
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding:${(props) => (props.position? 'none' : '0 .7rem')};
    display: flex;
    align-items: center;
    border-radius: 8px;
    font-size: .9rem;

    pointer-events: ${(props) => (props.return === false ? 'none' : 'auto')};

  }

  & > div.input input {
    background-color: unset;
    border: 0;
    margin-left: .35rem;
    width: 100%;
    height: 100%;
    outline: none;
    color: white;
    min-height: 35px;
    font-size: .8rem;
    filter: ${(props) => (props.return === false ? 'blur(.8px)' : 'unset')};
  }

  & > div.input input.react-datepicker-time__input {
    color: black;
  }

  & > div.showAaddress {
    color: #a7a6a6;
    margin-top: .5rem;
    font-size: .8rem;
  }
  &>div.input>div>div>input{
    padding: 0;
    outline: none;
    border: none;
  }
  
  &>div.input>div{
    outline: none;
    border: none;
  }
  

  @media (min-width: 620px) {
    margin-bottom: 1rem;
    & > div.input-label {
      font-size: .9rem;

    }

    & > div.input {
      padding: 0 .5rem;

    }
  }
  @media (min-width: 380px) {
    & > div.input input {
      min-height: 38px;
    }

  }
`
export const InputsContainer2 = styled.div`
  display: flex;

  & > div:first-child {
    margin-right: 1.5rem;
  }
`
export const InputsContainer3 = styled.div`
  display: flex;

  & > div:first-child {
    width: 200%;

    margin-right: .7rem;
  }
`
export const Luggage = styled.div`
  display: flex;
  align-items: center;
  margin-top: .1rem;

  & > p {
    color: #F1F1F1;
    font-size: .75rem;
    font-weight: 400;
    margin: 0 1.8rem 0 .7rem;
  }

  & > div {
    color: #696967;
    font-size: .8rem;
  }

  & > div:first-of-type {
    margin-right: 1.2rem;
  }

  @media (min-width: 620px) {
    margin-top: .5rem;
    & > p {
      font-size: .85rem;
      margin: 0 2rem 0 .7rem;
    }

    & > div {
      font-size: .9rem;
    }
  }
`
export const Button = styled.div`
  background-color: rgba(255, 179, 0, 1);
  color: #FFF;
  text-align: center;
  margin: 1.7rem 0 0;
  padding: .6rem 0;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
`

//luggage
export const LuggageOptionsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: .7rem .7rem;
  width: 100%;
  margin-bottom: 1rem;

  & > i {
    width: 20px;
    height: 20px;
    color: white;
    margin-left: .3rem;
  }

  & > div.text > div:first-child {
    color: white;
    font-size: .9rem;
    margin-bottom: .3rem;
  }

  & > div.text > div:last-of-type {
    color: rgba(143, 143, 143, 0.80);
    font-size: .75rem;
  }

  & > div.amount {
    display: flex;
    width: 38%;
    color: rgba(255, 255, 255, 0.85);
    justify-content: center;
  }

  & > div.amount > div {
    margin: 0 1rem;
  }

  & > div > input {
    cursor: pointer;
    border: 1px solid white;
  }

  & > div.amount > img {
    cursor: pointer;
  }
`
export const BottomPart = styled.div`
  position: absolute;
  bottom: -.3rem;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.3rem 2rem;
  background: lightgray -19.41px 0px / 167.778% 125.052% no-repeat, linear-gradient(180deg, rgba(52, 58, 66, 0.01) 0%, rgba(0, 0, 0, 0.01) 100%);
  box-shadow: 4.1875px 4.1875px 25.125px 0 rgba(0, 0, 0, 0.61);
  backdrop-filter: blur(20px);

  & > div {
    display: flex;
    align-items: center;
    color: #F1F1F1;
    cursor: pointer;
  }

  & > div > div {
    font-size: .85rem;
    margin-left: .6rem;

  }

  & > button {
    background-color: rgba(255, 179, 0, 1);
    border-radius: 8px;
    padding: .6rem 1.8rem;
    color: #FFF;
    font-weight: 700;
    border: 0;
    cursor: pointer;
  }

  @media (min-width: 620px) {
    bottom: 0;
  }
`
//fill the form
export const FormsInput = styled.input`

  border-radius: 8px;
  border: 0.5px solid rgba(255, 255, 255, 0.30) !important;
  width: 100%;
  background-color: transparent !important;
  padding: .6rem 1rem;
  color: rgba(255, 255, 255, 0.91);
  font-size: .85rem;

  @media (min-width: 620px) {
    padding: .7rem 1rem;
  }
`
//travel info
export const TravelInfo = styled.div`
  & > hr {
    position: absolute;
    width: 100%;
    left: 0;
    top: 15.6rem;
    border-color: rgba(255, 255, 255, 0.1);
  }

  font-size: .95rem;

  & > div.date {
    color: #F1F1F1;
    display: flex;
    align-items: end;
    margin-bottom: 1.5rem;
  }

  & > div.date > div {
    margin: 0 .8rem 0;
  }

  & > div.location-info {
    display: flex;
    color: #F1F1F1;
    margin-bottom: 2.5rem;
  }

  & > div.location-info > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & > div.location-info > div > div {
    margin: 0 0 0 .8rem;
  }

  & > div.extra-info > h6 {
    font-size: .85rem;
    color: rgba(104, 106, 106, 1);
    margin: 1.5rem 0 .4rem 0;
  }

  & > div.extra-info > div {
    font-size: .95rem;
    color: rgba(241, 241, 241, 1);
    margin-bottom: .4rem;
  }

`
export const PaymentMethod = styled.div`
  display: ${(props) => (props.display === false ? 'none' : 'block')};
  background: lightgray -58px 0 / 167% 125% no-repeat, linear-gradient(180deg, rgba(52, 58, 66, 0.01) 0%, rgba(0, 0, 0, 0.01) 100%);
  box-shadow: 4px 4px 25px 0 rgba(0, 0, 0, 0.61);
  backdrop-filter: blur(30px);
  background-color: rgba(0, 0, 0, 0.84);
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem 2rem;
  width: 100%;

  & > h4 {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  & > div {
    display: flex;
    align-items: center;
    color: #F1F1F1;
    margin: .5rem 0;
    cursor: pointer;
  }

  & > div > div {
    font-size: .85rem;
    margin-left: .6rem;
  }
`
export const PaymentButton = styled.button`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  background-color: ${(props) => (props.color === 'yellow' ? 'rgba(255, 179, 0, 1)' : 'unset')};
  border: 1px solid rgba(255, 179, 0, 1);
  border-radius: 8px;
  padding: .7rem 0;
  color: ${(props) => (props.color === 'yellow' ? '#fff' : 'rgba(255, 179, 0, 1)')};
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
`
export const AddressList = styled.div`
  width: 100%;
  background-color: white;
  position: absolute;
  z-index: 10;
  max-height: 150px;
  overflow-y: scroll;
  &>div{
    border-bottom: 1px solid black;
    padding: .5rem;
    font-size: .85rem;
    cursor: pointer;
  }
`