import React from 'react';
import PersonInfo from "./personInfo";
import Footer from "./Footer";
import {PaymentContainer} from "../styledComponents/payment-style";

function Success({t,handleLanguage}) {
    return (
        <>
            <PersonInfo/>
            <PaymentContainer>
                <img src={require('../public/tick.png')} alt=''/>
                <h6>Payment was successful</h6>
                <a href={'https://taxicentraalsoest.nl'}>Back to home</a>

            </PaymentContainer>
            <Footer t={t}/>
        </>
    );
}

export default Success;