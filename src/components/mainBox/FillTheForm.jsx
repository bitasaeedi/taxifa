import React, {useState} from 'react';
import {BottomPart, FormsInput, MainBoxContainer, SecondContainer} from "../../styledComponents/MainBox-style";
import {useAppContext} from "../context";
import axios from "../axios";

function FillTheForm(props) {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const {setTripInfo} = useAppContext();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const {tripInfo,setResponse,loggageFlag} = useAppContext();

    function sendRequest(){
        console.log(tripInfo)
        axios.post(`/trip`, tripInfo
        ).then(function (response) {
                console.log(response.data)
                setResponse(response.data.body)
            props.transform(5);
            }
        ).catch(function (error) {
            console.error('Error:', error);
            if (!emailPattern.test(email)) {
                alert('Email is not valid. Please enter a valid email address.');
            }
            else if(name===''){
                alert('you dont write your name.');
            }
            else if(lastName===''){
                alert('you dont write your last name.');
            }
            else if(number.length!==11){
                alert('your phone number is not true.');
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
        <MainBoxContainer>
            <h2>{props.t('form')}</h2>

            <SecondContainer>
                <h6>{props.t('form1')}</h6>
                <FormsInput onChange={(event) => {
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
                <FormsInput onChange={(event) => {
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
                <FormsInput onChange={(event) => {
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
                        props.transform(3)
                    }
                    else {
                        props.transform(2)
                    }

                }}>
                    <img alt={'<-'} src={require('../../public/Arrow - Left.png')}/>
                    <div>{props.t('back')}</div>
                </div>

                <button onClick={() => {
                    sendRequest();
                }}>{props.t('next')}</button>
            </BottomPart>

        </MainBoxContainer>
    );
}

export default FillTheForm;