import React, {useEffect, useRef, useState} from 'react';
import {
    AddressList,
    Button, Clock,
    InputsContainer,
    InputsContainer2,
    InputsContainer3,
    Luggage,
    MainBoxContainer,
    SecondContainer
} from "../../styledComponents/MainBox-style";
import 'react-calendar/dist/Calendar.css';
import {throttle} from 'lodash';
import axios from "../axios";
import {Toast} from "../toast";
import {ToastContainer} from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import {useAppContext} from "../context";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
import { StandaloneSearchBox, useJsApiLoader } from "@react-google-maps/api";
const libraries = ['places'];

function Booking(props) {

    const {setTripInfo, setLoggageFlag, setFinalAddress, finalAddress} = useAppContext();
    const [date, setdate] = useState(null);
    const [date2, setdate2] = useState(null);
    const [numberOfPassengar, setNumberOfPassengar] = useState();
    const [selectedOption, setSelectedOption] = useState(null);
    const [fromInput, setFromInput] = useState({value: '', context: ''});
    const [toInput, setToInput] = useState({value: '', context: ''});
    const [Return, setReturn] = useState(false);
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [fromHouseNumber, setFromHouseNumber] = useState("");
    const [toHouseNumber, setToHouseNumber] = useState("");
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [hour2, setHour2] = useState('');
    const [minute2, setMinute2] = useState('');
    const [flightNumber,setFlightNumber]=useState("")
    const [placeIdFrom,setPlaceIdFrom]=useState()
    const [placeIdTo,setPlaceIdTo]=useState()
    const [airport,setAirport]=useState(false)
    const inputRef = useRef();
    const inputRef2 = useRef();

   // saving time
    const handleHourChange = (event,type) => {
        // Ensure hour is between 0 and 23
        let newHour = Math.min(Math.max(0, parseInt(event.target.value) || 0), 23);
        newHour = newHour < 10 ? '0' + newHour : '' + newHour; // Add leading zero if single digit
        if(type==='from'){
            setHour(newHour);
        }else {
            setHour2(newHour);
        }

    };

    const handleMinuteChange = (event,type) => {
        // Ensure minute is between 0 and 59
        let newMinute = Math.min(Math.max(0, parseInt(event.target.value) || 0), 59);
        newMinute = newMinute < 10 ? '0' + newMinute : '' + newMinute; // Add leading zero if single digit
        if(type==='from'){
            setMinute(newMinute);
        }else {
            setMinute2(newMinute);

        }
    };

    // radion buttons for luggage page
    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);

    };

    //save travel info in context
    function handleSaveInfos() {

        if (placeIdFrom && placeIdTo) {
            setTripInfo((info) => ({
                ...info,
                origin: {
                    postal_code: '',
                    place_id:placeIdFrom,
                    house_number: fromHouseNumber
                },
                destination: {
                    postal_code: '',
                    place_id:placeIdTo,
                    house_number: toHouseNumber
                },
                pickup: {
                    time:hour+':'+minute,
                    date:date
                },
                return: {
                    active:Return,
                    time:Return?hour2+':'+minute2:'',
                    date:date2
                },
                flight_number:flightNumber,
                number_of_passengers: numberOfPassengar
            }));
        }

    }

    //google map

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyAFizMTk39puEPb3hBCQonn5kaY0lAveuU',
        libraries
    });
    // const { isLoaded2, loadError2 } = useJsApiLoader({
    //     googleMapsApiKey: 'AIzaSyAFizMTk39puEPb3hBCQonn5kaY0lAveuU',
    //     libraries
    // });

    //save origin
    const handlePlaceChanged = () => {
        const [ place ] = inputRef.current.getPlaces();
        if(place) {
            console.log(place)
            setPlaceIdFrom(place.place_id);
            setFrom({value:place.name})
            place.types[0]==='airport'?setAirport(true):setAirport(false)
           setFinalAddress({...finalAddress, destination: place.formatted_address});

        }
    }
    //save destination
    const handlePlaceChanged2 = () => {
        const [ place2 ] = inputRef2.current.getPlaces();
        if(place2) {
            setPlaceIdTo(place2.place_id)
            setTo({value:place2.name})
            setFinalAddress({...finalAddress, origin: place2.formatted_address});
        }
    }
    return (
        <>
            <ToastContainer/>
            <MainBoxContainer>
                <h2>{props.t('book1')}</h2>
                <SecondContainer>

                    {/*from*/}
                    <InputsContainer3>
                        <InputsContainer width={'60%'}>
                            <div className="input-label">{props.t('book2')}</div>
                            <div className="input">
                                <img alt={'icon'} src={require('../../public/form.png')}/>
                                { isLoaded
                                    &&
                                    <StandaloneSearchBox
                                        onLoad={ref => inputRef.current = ref}
                                        onPlacesChanged={handlePlaceChanged}
                                    >
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder={props.t('book3')}
                                        />
                                    </StandaloneSearchBox>}
                                {/*<input placeholder={props.t('book3')} value={fromInput.value}*/}
                                {/*       onKeyDown={(event) => handleDeleteAddress('from', event)}*/}
                                {/*       onChange={(event) => {*/}
                                {/*           handleInputChange('from', event)*/}
                                {/*       }}/>*/}
                            </div>
                            {/*<AddressList>*/}
                            {/*    {fromAddress ? fromAddress.map((address, index) => {*/}
                            {/*        return <div onClick={() => {*/}
                            {/*            sendContext(address, 'from', fromInput)*/}
                            {/*            setFrom(address);*/}
                            {/*            setFromAddress(null);*/}
                            {/*        }} key={index}>*/}
                            {/*            {address.value}*/}
                            {/*        </div>*/}
                            {/*    }) : null}*/}
                            {/*</AddressList>*/}
                            {from ? <div className="showAaddress">{from.value}</div> : ''}
                            {/*{from? <div className="showAaddress">{fromAddress.city}-{fromAddress.street}-{fromAddress.houseNumber}</div>:''}*/}
                        </InputsContainer>
                        <InputsContainer width={'38%'}>
                            <div className="input-label" style={{visibility: "hidden"}}>m</div>
                            <div className="input">
                                <input placeholder={'.No'} value={fromHouseNumber}
                                       onChange={(event) => {
                                           setFromHouseNumber(event.target.value)
                                       }}/>
                            </div>
                        </InputsContainer>
                    </InputsContainer3>

                    {/*to*/}
                    <InputsContainer3>
                        <InputsContainer width={'60%'}>
                            <div className="input-label">{props.t('book4')}</div>
                            <div className="input">
                                <img alt={'icon'} src={require('../../public/Group 3.png')}/>
                                { isLoaded
                                    &&
                                    <StandaloneSearchBox
                                        onLoad={ref => inputRef2.current = ref}
                                        onPlacesChanged={handlePlaceChanged2}
                                    >
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder={props.t('book5')}
                                        />
                                    </StandaloneSearchBox>}
                                {/*<input placeholder={props.t('book5')} value={toInput.value}*/}
                                {/*       onKeyDown={(event) => handleDeleteAddress('from', event)}*/}
                                {/*       onChange={(event) => {*/}
                                {/*           handleInputChange('to', event)*/}
                                {/*       }}/>*/}
                            </div>
                            {/*<AddressList>*/}
                            {/*    {toAddress ? toAddress.map((address, index) => {*/}
                            {/*        return <div onClick={() => {*/}
                            {/*            sendContext(address, 'to', toInput)*/}
                            {/*            setTo(address);*/}
                            {/*            setToAddress(null);*/}
                            {/*        }} key={index}>*/}
                            {/*            {address.value}*/}
                            {/*        </div>*/}
                            {/*    }) : null}*/}
                            {/*</AddressList>*/}
                            {to ? <div className="showAaddress">{to.value}</div> : ''}
                            {/*{toAddress? <div className="showAaddress">{toAddress.city}-{toAddress.street}-{toAddress.houseNumber}</div>:''}*/}
                        </InputsContainer>
                        <InputsContainer width={'38%'}>
                            <div className="input-label" style={{visibility: "hidden"}}>m</div>
                            <div className="input">
                                <input placeholder={'.No'} value={toHouseNumber}
                                       onChange={(event) => {
                                           setToHouseNumber(event.target.value)
                                       }}/>
                            </div>
                        </InputsContainer>
                    </InputsContainer3>

                    {/*pickup... and return*/}
                    <InputsContainer2>
                        <InputsContainer position>
                            <div className="input-label">{props.t('book6')}</div>
                            <div className="input">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <MobileDatePicker
                                        value={date}
                                        ampm={false}
                                        onChange={(newValue) => {
                                            setdate(newValue)
                                            console.log(newValue)
                                            console.log(typeof (newValue))
                                        }}/>
                                </LocalizationProvider>
                            </div>
                        </InputsContainer>
                        <Clock>
                            <input
                                type="number" value={hour}
                                onChange={(event)=>handleHourChange(event,'from')} placeholder="Hour"
                                min="0" max="23"
                            />
                            <span>:</span>
                            <input
                                type="number" value={minute}
                                onChange={(event)=>handleMinuteChange(event,'from')} placeholder="Min"
                                min="0" max="59"
                            />
                        </Clock>
                    </InputsContainer2>

                    <InputsContainer2>
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
                                    <MobileDatePicker
                                        value={date2}
                                        ampm={false}
                                        onChange={(newValue) => {
                                            setdate2(newValue)
                                        }}
                                    />
                                </LocalizationProvider>
                            </div>
                        </InputsContainer>
                        <Clock return={Return}>
                            <input
                                type="number" value={hour2}
                                onChange={(event)=>handleHourChange(event,'to')} placeholder="Hour"
                                min="0" max="23"
                            />
                            <span>:</span>
                            <input
                                type="number" value={minute2}
                                onChange={(event)=>handleMinuteChange(event,'to')} placeholder="Min"
                                min="0" max="59"
                            />
                        </Clock>

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
                        {/*air port*/}
                        <InputsContainer return={airport}>
                            {/*<div className="input-label">{props.t('book8')}</div>*/}
                            <div className="input-label">{props.t('flight number')}</div>
                            <div className="input">
                                <img alt={'icon'} src={require('../../public/air.png')} style={{"width":"20px"}}/>
                                <input placeholder={'number'} onChange={(event) => {
                                    setFlightNumber(event.target.value)
                                }}/>
                            </div>
                        </InputsContainer>


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

                    if (fromInput && toInput && numberOfPassengar) {
                        handleSaveInfos();
                        if (selectedOption === 'yes') {
                            setLoggageFlag(true)
                            props.transform(2)
                        } else {
                            setLoggageFlag(false)
                            props.transform(3)
                        }

                    } else {
                        Toast('please fill out the forms', false);
                    }

                }}>{props.t('book12')}</Button>
                {/*</BottomPart>*/}

            </MainBoxContainer>
        </>
    );
}

export default Booking;
// const [fromContext, setFromContext] = useState();
// const [toContext, setToContext] = useState();
// const [inputType, setInputType] = useState(true)
// const [fromAddress, setFromAddress] = useState();
// const [toAddress, setToAddress] = useState();
// const throttledSendRequest = throttle(() => sendRequest(fromInput, 'from'), 1000);
// const throttledSendRequest2 = throttle(() => sendRequest(toInput, 'to'), 1000);
//save inputs of destination and origin
// function handleInputChange(type, event) {//save input value
//
//     if (event.target.value===''&&type === 'from') {
//         setFromInput({value: '', context: ''})
//         setFrom(null)
//         setFromAddress(null)
//     } else if(event.target.value===''&&type === 'to') {
//         setToInput({value: '', context: ''})
//         setTo(null)
//         setToAddress(null)
//     }
//     else if (type === 'from') {
//         setFromInput({...fromInput,value: event.target.value});
//         setInputType(true)
//     } else {
//         setToInput({...toInput,value: event.target.value})
//         setInputType(false)
//     }
//
// }

// remove address when inputs are empty
// function handleDeleteAddress(type, event) {
//     if (type === 'from' && event.key === 'Backspace') {
//         setFrom(null)
//         setFromAddress(null)
//     } else if (type === 'to' && event.key === 'Backspace') {
//         setTo(null)
//         setToAddress(null)
//
//     }
// }

//get list of address that are recommend
// function sendRequest(value, type) {
//     const URL = value.context === '' ? `/trip/autocomplete/post-code/${value.value}` : `/trip/autocomplete/post-code/${value.context}/${value.value}`
//     console.log(URL)
//     axios.get(URL
//     ).then(function (response) {
//             if (type === 'from') {
//                 setFromAddress(response.data.body)
//
//             } else {
//                 setToAddress(response.data.body)
//             }
//         }
//     ).catch(function (error) {
//         console.error('Error:', error);
//         if (error.response && value.value !== "") {
//             Toast('This address does not exist', false)
//         }
//     });
//
// }

// after that user click on an address
// function sendContext(value, type, inputValue) {
//     console.log("value click: ", value)
//     if (value.precision === 'Address') {
//         console.log("this is Address API")
//         axios.get(`/trip/address/details/${value.context}`
//         ).then(function (response) {
//                 let res = response.data.body.address;
//
//                 if (type === 'from') {
//                     console.log('now')
//                     setFromContext(response.data.body)
//                     setFinalAddress({
//                         ...finalAddress, destination: res.locality +" "+ res.street + " "+res.postcode +" "+ res.building});
//                 } else {
//                     setFinalAddress({...finalAddress, origin: res.locality + " "+res.street + " "+res.postcode + " "+res.building});
//                     setToContext(response.data.body)
//                 }
//             }
//         ).catch(function (error) {
//             console.error('Error:', error);
//             if (error.response) {
//                 Toast('This address does not exist', false)
//             }
//         });
//     } else {
//         console.log(toInput, ': ', value.value)
//         type === 'from' ? setFromInput({
//             value: value.value,
//             context: value.context
//         }) : setToInput({value: value.value, context: value.context});
//
//     }
//
// }

// send request when user write in inputs after 1000ns
// useEffect(() => {
//
//     const timer = setTimeout(() => {
//         if (fromInput && inputType) {
//             throttledSendRequest(fromInput);
//         }
//     }, 1000);
//     const timer2 = setTimeout(() => {
//         if (toInput && !inputType) {
//             throttledSendRequest2(toInput);
//         }
//     }, 1000);
//     return () => {
//         clearTimeout(timer);
//         clearTimeout(timer2);
//     }
// }, [fromInput, toInput]);