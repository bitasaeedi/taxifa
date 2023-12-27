import React, {useEffect, useState} from 'react';
import {
    AddressList,
    BottomPart, Button,
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

function Booking(props) {
    const {setTripInfo,setLoggageFlag} = useAppContext();
    const [date, setdate] = useState(new Date());
    const [date2, setdate2] = useState(new Date());
    const [numberOfPassengar, setNumberOfPassengar] = useState();
    const [fromContext,setFromContext]=useState();
    const [toContext,setToContext]=useState();
    const [inputType,setInputType]=useState(true)
    const [selectedOption, setSelectedOption] = useState(null);
    const [fromInput, setFromInput] = useState('');
    const [toInput, setToInput] = useState('');
    const [fromAddress, setFromAddress] = useState();
    const [toAddress, setToAddress] = useState();
    const [Return, setReturn] = useState(false);
    const [from,setFrom]=useState();
    const [to,setTo]=useState();
    const throttledSendRequest = throttle(() => sendRequest(fromInput, 'from'), 1000);
    const throttledSendRequest2 = throttle(() => sendRequest(toInput, 'to'), 1000);

    function handleSaveInfos() {

        if(fromContext&&toContext){
        setTripInfo((info) => ({
            ...info,
            origin: {
                // postal_code: fromContext.postcode+fromAddress.houseNumber.toString(),
                postal_code: fromContext.address.postcode,
                lat: fromContext.location.latitude,
                lan: fromContext.location.longitude,
                address: fromContext.address.locality
            },
            destination: {
                postal_code: toContext.address.postcode,
                lat:  toContext.location.latitude,
                lan:  toContext.location.longitude,
                address: toContext.address.locality
            },
            pickup_time: date,
            return: Return?"true":"false",
            return_time: Return?date2:"",
            number_of_passengers: numberOfPassengar
        }));}

    }

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);

    };

    function handleInputChange(type, event) {//save input value

        if (type === 'from') {
            setFromInput(event.target.value);
            setInputType(true)
        } else {
            setToInput(event.target.value)
            setInputType(false)
        }

    }
    function handleDeleteAddress(type,event){
        if (type === 'from'&& event.key === 'Backspace') {
            setFrom(null)
        }
        else if(type === 'to'&& event.key === 'Backspace') {
            setTo(null)
        }
    }

    useEffect(() => {

        const timer = setTimeout(() => {
            if (fromInput&&inputType) {
                throttledSendRequest(fromInput);
            }
        }, 1000);
        const timer2 = setTimeout(() => {
            if (toInput&&!inputType) {
                throttledSendRequest2(toInput);
            }
        }, 1000);
        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
        }
    }, [fromInput, toInput]);

    function sendRequest(value, type) {//send reqest

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
            if(error.response){
                Toast('This address does not exist',false)
            }
        });

    }
    function sendContext(value, type) {//send reqest

        axios.get(`/trip/address/details/${value}`
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
            if(error.response){
                Toast('This address does not exist',false)
            }
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
                            <input placeholder={props.t('book3')} value={fromInput} onKeyDown={(event)=>handleDeleteAddress('from',event)}
                                   onChange={(event) => {
                                handleInputChange('from', event)
                            }}/>
                        </div>
                       <AddressList>
                           {fromAddress?fromAddress.map((address,index)=>{
                               return <div  onClick={()=>{
                                   sendContext(address.context,'from')
                                   setFrom(address);
                                   setFromAddress(null);
                               }} key={index} >
                                   {address.value}
                               </div>
                           }):null}
                       </AddressList>
                        {from ? <div className="showAaddress">{from.value}</div> : ''}
                        {/*{from? <div className="showAaddress">{fromAddress.city}-{fromAddress.street}-{fromAddress.houseNumber}</div>:''}*/}
                    </InputsContainer>
                    {/*to*/}
                    <InputsContainer>
                        <div className="input-label">{props.t('book4')}</div>
                        <div className="input">
                            <img alt={'icon'} src={require('../../public/Group 3.png')}/>
                            <input placeholder={props.t('book5')} value={toInput} onKeyDown={(event)=>handleDeleteAddress('from',event)}
                                   onChange={(event) => {
                                handleInputChange('to', event)
                            }}/>
                        </div>
                        <AddressList>
                            {toAddress?toAddress.map((address,index)=>{
                                return <div onClick={()=>{
                                    sendContext(address.context,'to')
                                    setTo(address);
                                    setToAddress(null);
                                }} key={index}>
                                    {address.value}
                                </div>
                            }):null}
                        </AddressList>
                        {to ? <div className="showAaddress">{to.value}</div> : ''}
                        {/*{toAddress? <div className="showAaddress">{toAddress.city}-{toAddress.street}-{toAddress.houseNumber}</div>:''}*/}
                    </InputsContainer>
                    {/*pickup... and return*/}
                    <InputsContainer2>

                        <InputsContainer>
                            <div className="input-label">{props.t('book6')}</div>
                            <div className="input">
                                <img alt={'icon'} src={require('../../public/Calendar.png')}/>
                                <DatePicker
                                    className={'react-datepicker-popper'}
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
                                    className={'react-datepicker'}
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
                {/*<BottomPart>*/}
                    {/*<div onClick={()=>{props.transform(1)}}>*/}
                    {/*    <img alt={'<-'} src={require('../../public/Arrow - Left.png')}/>*/}
                    {/*    <div>{props.t('back')}</div>*/}
                    {/*</div>*/}

                    <Button onClick={() => {
                        handleSaveInfos();
                        if (selectedOption === 'yes') {
                            setLoggageFlag(true)
                            props.transform(2)
                        } else {
                            setLoggageFlag(false)
                            props.transform(3)
                        }

                    }}>{props.t('book12')}</Button>
                {/*</BottomPart>*/}

            </MainBoxContainer>
        </>
    );
}

export default Booking;