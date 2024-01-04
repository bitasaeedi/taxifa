import React from 'react';
import PersonInfo from "./personInfo";
import {PaymentContainer} from "../styledComponents/payment-style";
import Footer from "./Footer";

function Cancle({t,handleLanguage}) {
    return (
        <>
            <PersonInfo/>
            <PaymentContainer>
                <img src={require('../public/x.png')} alt=''/>
                <h6>Payment was failed</h6>
                <a href={'https://taxicentraalsoest.nl'}>Back to home</a>
            </PaymentContainer>
            <Footer t={t}/>
        </>
    );
}

export default Cancle;