import React, {useEffect, useState} from 'react';
import {
    AddressList,
    Button,
    InputsContainer,
    InputsContainer2,
    Luggage,
    MainBoxContainer,
    SecondContainer
} from "../../styledComponents/MainBox-style";
import 'react-calendar/dist/Calendar.css';
import {throttle} from 'lodash';
import axios from "../axios";
import {Toast} from "../toast";
import {ToastContainer} from "react-toastify";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {useAppContext} from "../context";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import dayjs from 'dayjs';
function Booking(props) {
    const {setTripInfo, setLoggageFlag} = useAppContext();
    const [date, setdate] = useState(null);
    const [date2, setdate2] = useState(null);
    const [numberOfPassengar, setNumberOfPassengar] = useState();
    const [fromContext, setFromContext] = useState();
    const [toContext, setToContext] = useState();
    const [inputType, setInputType] = useState(true)
    const [selectedOption, setSelectedOption] = useState(null);
    const [fromInput, setFromInput] = useState('');
    const [toInput, setToInput] = useState('');
    const [fromAddress, setFromAddress] = useState();
    const [toAddress, setToAddress] = useState();
    const [Return, setReturn] = useState(false);
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const throttledSendRequest = throttle(() => sendRequest(fromInput, 'from'), 1000);
    const throttledSendRequest2 = throttle(() => sendRequest(toInput, 'to'), 1000);

    //save travel info in context
    function handleSaveInfos() {

        if (fromContext && toContext) {
            setTripInfo((info) => ({
                ...info,
                origin: {
                    // postal_code: fromContext.postcode+fromAddress.houseNumber.toString(),
                    postal_code: fromContext.address.postcode,
                    lat: fromContext.location.latitude,
                    lan: fromContext.location.longitude,
                    address: fromContext.address.country+' '+fromContext.address.locality+' '+fromContext.address.street
                },
                destination: {
                    postal_code: toContext.address.postcode,
                    lat: toContext.location.latitude,
                    lan: toContext.location.longitude,
                    address: toContext.address.country+' '+toContext.address.locality+' '+toContext.address.street

        },
                pickup_time: date.$d,
                return: Return ? "true" : "false",
                return_time: Return ? date2.$d : "",
                number_of_passengers: numberOfPassengar
            }));
        }

    }

    // radion buttons for luggage page
    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);

    };

    //save inputs of destination and origin
    function handleInputChange(type, event) {//save input value

        if (type === 'from') {
            setFromInput(event.target.value);
            setInputType(true)
        } else {
            setToInput(event.target.value)
            setInputType(false)
        }

    }

    // remove address when inputs are empty
    function handleDeleteAddress(type, event) {
        if (type === 'from' && event.key === 'Backspace') {
            setFrom(null)
        } else if (type === 'to' && event.key === 'Backspace') {
            setTo(null)
        }
    }

    //get list of address that are recommend
    function sendRequest(value, type) {

        axios.get(`/trip/autocomplete/post-code/${value}`
        ).then(function (response) {
                if (type === 'from') {
                    setFromAddress(response.data.body)
                    console.log(response)
                } else {
                    setToAddress(response.data.body)
                }
            }
        ).catch(function (error) {
            console.error('Error:', error);
            if (error.response) {
                Toast('This address does not exist', false)
            }
        });

    }

    // after that user click on an address
    function sendContext(value, type, inputValue) {

        if (inputValue.length > 5) {
            console.log('type1')
            axios.get(`/trip/address/details/${value.context}`
            ).then(function (response) {
                    console.log(response)
                    if (type === 'from') {
                        setFromContext(response.data.body)
                    } else {
                        setToContext(response.data.body)
                    }
                }
            ).catch(function (error) {
                console.error('Error:', error);
                if (error.response) {
                    Toast('This address does not exist', false)
                }
            });
        }
        else {
            console.log(toInput,': ',value.value)
            type==='from'?setFromInput(value.value):setToInput(value.value);


            console.log('type2')
        }

    }

    // send request when user write in inputs after 1000ns
    useEffect(() => {

        const timer = setTimeout(() => {
            if (fromInput && inputType) {
                throttledSendRequest(fromInput);
            }
        }, 1000);
        const timer2 = setTimeout(() => {
            if (toInput && !inputType) {
                throttledSendRequest2(toInput);
            }
        }, 1000);
        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
        }
    }, [fromInput, toInput]);
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
                            <input placeholder={props.t('book3')} value={fromInput}
                                   onKeyDown={(event) => handleDeleteAddress('from', event)}
                                   onChange={(event) => {
                                       handleInputChange('from', event)
                                   }}/>
                        </div>
                        <AddressList>
                            {fromAddress ? fromAddress.map((address, index) => {
                                return <div onClick={() => {
                                    sendContext(address, 'from', fromInput)
                                    setFrom(address);
                                    setFromAddress(null);
                                }} key={index}>
                                    {address.value}
                                </div>
                            }) : null}
                        </AddressList>
                        {from ? <div className="showAaddress">{from.value}</div> : ''}
                        {/*{from? <div className="showAaddress">{fromAddress.city}-{fromAddress.street}-{fromAddress.houseNumber}</div>:''}*/}
                    </InputsContainer>
                    {/*to*/}
                    <InputsContainer>
                        <div className="input-label">{props.t('book4')}</div>
                        <div className="input">
                            <img alt={'icon'} src={require('../../public/Group 3.png')}/>
                            <input placeholder={props.t('book5')} value={toInput}
                                   onKeyDown={(event) => handleDeleteAddress('from', event)}
                                   onChange={(event) => {
                                       handleInputChange('to', event)
                                   }}/>
                        </div>
                        <AddressList>
                            {toAddress ? toAddress.map((address, index) => {
                                return <div onClick={() => {
                                    sendContext(address, 'to', toInput)
                                    setTo(address);
                                    setToAddress(null);
                                }} key={index}>
                                    {address.value}
                                </div>
                            }) : null}
                        </AddressList>
                        {to ? <div className="showAaddress">{to.value}</div> : ''}
                        {/*{toAddress? <div className="showAaddress">{toAddress.city}-{toAddress.street}-{toAddress.houseNumber}</div>:''}*/}
                    </InputsContainer>
                    {/*pickup... and return*/}
                    <InputsContainer2>

                        <InputsContainer position>
                            <div className="input-label">{props.t('book6')}</div>
                            <div className="input">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <MobileDateTimePicker
                                        value={date}
                                        onChange={(newValue)=>{setdate(newValue)}} />
                                </LocalizationProvider>
                            </div>
                        </InputsContainer>

                        <InputsContainer return={Return} position>

                            <div className="input-label">
                                <input type={'radio'} onClick={(event) => {
                                    event.target.checked = !Return
                                    setReturn(!Return);

                                    console.log(event.target.checked)
                                }}/>{props.t('book7')}
                            </div>
                            <div className="input">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <MobileDateTimePicker
                                        value={date2}
                                        onChange={(newValue)=>{setdate2(newValue)}}
                                        />
                                </LocalizationProvider>
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
                {/*<BottomPart>*/}
                {/*<div onClick={()=>{props.transform(1)}}>*/}
                {/*    <img alt={'<-'} src={require('../../public/Arrow - Left.png')}/>*/}
                {/*    <div>{props.t('back')}</div>*/}
                {/*</div>*/}

                <Button onClick={() => {

                    if(fromInput&&toInput&&numberOfPassengar){
                        handleSaveInfos();
                        if (selectedOption === 'yes') {
                            setLoggageFlag(true)
                            props.transform(2)
                        } else {
                            setLoggageFlag(false)
                            props.transform(3)
                        }

                    }
                    else{
                        Toast('please fill out the forms',false);
                    }

                }}>{props.t('book12')}</Button>
                {/*</BottomPart>*/}

            </MainBoxContainer>
        </>
    );
}

export default Booking;