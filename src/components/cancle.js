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
                <h6>it was failed</h6>
            </PaymentContainer>
            <Footer t={t}/>
        </>
    );
}

export default Cancle;