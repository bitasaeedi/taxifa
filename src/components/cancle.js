import React from 'react';
import PersonInfo from "./personInfo";
import {PaymentContainer} from "../styledComponents/payment-style";
import Footer from "./Footer";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import dayjs from 'dayjs';
import Header from "./Header";
function Cancle({t,handleLanguage}) {
    return (
        <>
            <PersonInfo/>
            <Header handle={handleLanguage} color={'black'}/>
            <PaymentContainer>
                <img src={require('../public/x.png')} alt=''/>
                <h6>Payment was failed</h6>
                <a href={'https://taxicentraalsoest.nl'}>Back to home</a>
            </PaymentContainer>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
            </LocalizationProvider>

            <Footer t={t}/>
        </>
    );
}

export default Cancle;