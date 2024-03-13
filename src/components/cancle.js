import React from 'react';
import PersonInfo from "./personInfo";
import {PaymentContainer} from "../styledComponents/payment-style";
import Footer from "./Footer";


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


            <Footer t={t}/>
        </>
    );
}

export default Cancle;