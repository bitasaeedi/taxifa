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
                <h6>it was successful</h6>
            </PaymentContainer>
            <Footer t={t}/>
        </>
    );
}

export default Success;