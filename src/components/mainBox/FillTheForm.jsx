import React, {useState} from 'react';
import {BottomPart, FormsInput, MainBoxContainer, SecondContainer} from "../../styledComponents/MainBox-style";
import {useAppContext} from "../context";
import axios from "../axios";
import {Toast} from "../toast";
import {Oval} from "react-loader-spinner";

function FillTheForm(props) {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const {setTripInfo} = useAppContext();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const {tripInfo,setResponse,loggageFlag} = useAppContext();
    const [loader,setLoader]=useState(false)

    function sendRequest(){
      setLoader(true)
        axios.post(`/trip`, tripInfo
        ).then(function (response) {
                console.log(response.data)
                setResponse(response.data.body)
            setLoader(false)
            props.transform(4);
            }
        ).catch(function (error) {
            setLoader(false)
            console.error('Error:', error);
            if (!emailPattern.test(email)) {
                Toast('Email is not valid. Please enter a valid email address',false);
            }
            else if(name===''){
                Toast('you dont write your name',false);
            }
            else if(lastName===''){
                Toast('you dont write your last name',false);
            }
            else if(number.length!==11){
                Toast('your phone number is not true',false);
            }
            else{
                // Toast(error.response.data.message,false)
            }
            // Toast(error.response.data.message, false);
        });


    }
    function handleSaveInfos(type) {
       if (emailPattern.test(email)) {
           setTripInfo((info) => ({
                ...info,
                passenger: {
                    first_name: name,
                    last_name: lastName,
                    email: email,
                    phone_number: number
                },
            }))
        } else {
            alert('Email is not valid. Please enter a valid email address.');
        }

    }

    return (
        <MainBoxContainer >
            <h2>{props.t('form')}</h2>

            <SecondContainer type={'fill'}>
                <h6>{props.t('form1')}</h6>
                <FormsInput  onChange={(event) => {
                    console.log(tripInfo)
                    setTripInfo((info) => ({
                        ...info,
                        passenger: {
                            ...info.passenger,
                            first_name: event.target.value,
                        },
                    }))
                    setName(event.target.value)
                }} value={name}/>

                <h6>{props.t('form2')}</h6>
                <FormsInput onChange={(event) => {
                    setLastName(event.target.value)
                    setTripInfo((info) => ({
                        ...info,
                        passenger: {
                            ...info.passenger,
                            last_name: event.target.value,
                        },
                    }))
                }} value={lastName}/>

                <h6>{props.t('form3')}</h6>
                <FormsInput  type="tel" onChange={(event) => {
                    setNumber(event.target.value)
                    setTripInfo((info) => ({
                        ...info,
                        passenger: {
                            ...info.passenger,
                            phone_number: event.target.value,
                        },
                    }))
                }} value={number}/>

                <h6>Email</h6>
                <FormsInput type={'email'} name="email" onChange={(event) => {
                    setEmail(event.target.value)
                    setTripInfo((info) => ({
                        ...info,
                        passenger: {
                            ...info.passenger,
                            email: event.target.value,
                        },
                    }))
                }} value={email}/>
            </SecondContainer>

            <BottomPart>
                <div onClick={() => {
                    if(loggageFlag){
                        props.transform(2)
                    }
                    else {
                        props.transform(1)
                    }

                }}>
                    <img alt={'<-'} src={require('../../public/Arrow - Left.png')}/>
                    <div>{props.t('back')}</div>
                </div>

                <button onClick={() => {
                    sendRequest();
                }}>
                    {loader?<Oval
                        height={18}
                        width={30}
                        color="#414141"
                        visible={loader}
                        ariaLabel='oval-loading'
                        secondaryColor="#ffffff"
                        strokeWidth={6}
                        strokeWidthSecondary={6}

                    />:props.t('next')}</button>
            </BottomPart>

        </MainBoxContainer>
    );
}

export default FillTheForm;