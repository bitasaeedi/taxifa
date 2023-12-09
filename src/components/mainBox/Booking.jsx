import React, {useEffect, useState} from 'react';
import {
    BottomPart,
    Button,
    InputsContainer,
    InputsContainer2,
    Luggage,
    MainBoxContainer,
    SecondContainer
} from "../../styledComponents/MainBox-style";
import 'react-calendar/dist/Calendar.css';
import {throttle} from 'lodash';
import axios from "axios";
import {Toast} from "../toast";
import {ToastContainer} from "react-toastify";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {useAppContext} from "../context";

function Booking(props) {
    const {setTripInfo,loggageFlag,setLoggageFlag} = useAppContext();
    const [date, setdate] = useState(new Date());
    const [date2, setdate2] = useState(new Date());
    const [numberOfPassengar, setNumberOfPassengar] = useState();

    function handleSaveInfos() {
        setTripInfo((info) => ({
            ...info,
            origin: {
                postal_code: "1200 AB 14",
                lat: "51.152468",
                lan: "4.568742",
                address: "NL JOrge Street"
            },
            destination: {
                postal_code: "3067EV 19",
                lat: "51.178468",
                lan: "4.568942",
                address: "NL JOrge Street"
            },
            pickup_time: date,
            return: Return?"true":"false",
            return_time: Return?date2:"",
            number_of_passengers: numberOfPassengar
        }));
    }

    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);

    };

    const [fromInput, setFromInput] = useState('');
    const [toInput, setToInput] = useState('');
    const [fromAddress, setFromAddress] = useState('');
    const [toAddress, setToAddress] = useState('');
    const [Return, setReturn] = useState(false);
    const throttledSendRequest = throttle(() => sendRequest(fromInput, 'from'), 1000);
    const throttledSendRequest2 = throttle(() => sendRequest(toInput, 'to'), 1000);

    // const [date, setDate] = useState(new Date());

    function handleInputChange(type, event) {//save input value
        console.log(type, event.target.value)
        if (type === 'from') {
            setFromInput(event.target.value);
        } else {
            setToInput(event.target.value)
        }

    }

    useEffect(() => {

        const timer = setTimeout(() => {
            if (fromInput) {
                throttledSendRequest(fromInput);
            }
        }, 1000);
        const timer2 = setTimeout(() => {
            if (toInput) {
                throttledSendRequest2(toInput);
            }
        }, 1000);
        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
        }
    }, [fromInput, toInput]);

    function sendRequest(value, type) {//send reqest

        axios.get(`http://46.249.102.100:3002/api/trip/address/get-by-post-code/3067EV13`
        ).then(function (response) {
                if (type === 'from') {
                    setFromAddress(response.data.body[0])
                    console.log(response)
                } else {
                    setToAddress(response.data.body[0])
                }
            }
        ).catch(function (error) {
            console.error('Error:', error);
        });
    }

    return (
        <>
            <ToastContainer/>
            <MainBoxContainer>
                <h2>{props.t('book1')}</h2>
                <SecondContainer>

                    {/*from*/}
                    <InputsContainer>
                        <div className="input-label">{props.t('book2')}</div>
                        <div className="input">
                            <img alt={'icon'} src={require('../../public/form.png')}/>
                            <input placeholder={props.t('book3')} value={fromInput} onChange={(event) => {
                                handleInputChange('from', event)
                            }}/>
                        </div>
                        {fromAddress ? <div className="showAaddress">{fromAddress.label}</div> : ''}
                        {/*{fromAddress? <div className="showAaddress">{fromAddress.city}-{fromAddress.street}-{fromAddress.houseNumber}</div>:''}*/}
                    </InputsContainer>
                    {/*to*/}
                    <InputsContainer>
                        <div className="input-label">{props.t('book4')}</div>
                        <div className="input">
                            <img alt={'icon'} src={require('../../public/Group 3.png')}/>
                            <input placeholder={props.t('book5')} value={toInput} onChange={(event) => {
                                handleInputChange('to', event)
                            }}/>
                        </div>
                        {toAddress ? <div className="showAaddress">{toAddress.label}</div> : ''}
                        {/*{toAddress? <div className="showAaddress">{toAddress.city}-{toAddress.street}-{toAddress.houseNumber}</div>:''}*/}
                    </InputsContainer>
                    {/*pickup... and return*/}
                    <InputsContainer2>

                        <InputsContainer>
                            <div className="input-label">{props.t('book6')}</div>
                            <div className="input">
                                <img alt={'icon'} src={require('../../public/Calendar.png')}/>
                                <DatePicker
                                    selected={date}
                                    onChange={(date) => setdate(date)}
                                    timeInputLabel="Time:"
                                    dateFormat="MM/dd/yyyy h:mm aa"
                                    showTimeInput
                                />
                            </div>
                        </InputsContainer>

                        <InputsContainer  return={Return}>

                            <div className="input-label">
                                <input type={'radio'} onClick={(event) => {
                                    event.target.checked=!Return
                                    setReturn(!Return);

                                    console.log(event.target.checked)
                                }}/>{props.t('book7')}
                            </div>
                            <div className="input">
                                <img alt={'icon'} src={require('../../public/Calendar.png')}/>
                                <DatePicker
                                    selected={date2}
                                    onChange={(date) => setdate2(date)}
                                    timeInputLabel="Time:"
                                    dateFormat="MM/dd/yyyy h:mm aa"
                                    showTimeInput
                                />
                            </div>
                        </InputsContainer>

                    </InputsContainer2>
                    {/*number of ...*/}
                    <InputsContainer2>

                        <InputsContainer>
                            <div className="input-label">{props.t('book8')}</div>
                            <div className="input">
                                <img alt={'icon'} src={require('../../public/Calendar.png')}/>
                                <input placeholder={'Select'} min={1} type={"number"} onChange={(event) => {
                                    setNumberOfPassengar(event.target.value)
                                }}/>
                            </div>
                        </InputsContainer>

                        <InputsContainer/>

                    </InputsContainer2>

                    <Luggage>
                        <img alt={'icon'} src={require('../../public/Work.png')}/>
                        <p>{props.t('book9')}</p>
                        <div><input type={'radio'} name={'buttons'} value={'yes'} onChange={handleRadioChange}
                                    checked={selectedOption === 'yes'}/> {props.t('book10')}
                        </div>
                        <div><input type={'radio'} name={'buttons'} value={'no'} onChange={handleRadioChange}
                                    checked={selectedOption === 'no'}/> {props.t('book11')}
                        </div>
                    </Luggage>

                </SecondContainer>
                <BottomPart>
                    <div onClick={()=>{props.transform(1)}}>
                        <img alt={'<-'} src={require('../../public/Arrow - Left.png')}/>
                        <div>{props.t('back')}</div>
                    </div>

                    <button onClick={() => {
                        handleSaveInfos();
                        if (selectedOption === 'yes') {
                            setLoggageFlag(true)
                            props.transform(3)
                        } else {
                            setLoggageFlag(false)
                            props.transform(4)
                        }

                    }}>{props.t('book12')}</button>
                </BottomPart>

            </MainBoxContainer>
        </>
    );
}

export default Booking;