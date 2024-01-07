import React, {useState} from 'react';
import {ContactsInfo, ContactUsContainer, Form, FormsInput} from "../styledComponents/ContactUs-style";
import axios from "./axios";
import {Toast} from "./toast";

function ContactUs({t}) {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    function sendRequest(){

        axios.post(`/mail/contact-us`,
            {
                name:name,
                email:email,
                phoneNumber:number,
                message:message
            }
        ).then(function (response) {
                console.log(response.data)
            }
        ).catch(function (error) {
            console.log(error.response)
            // Toast(error.response.data.message, false);
        });

    }
    return (
        <>
            <ContactUsContainer id={'contact'}>
                <h2>{t('Contact1')}</h2>
                <p> </p>

                <ContactsInfo>
                    <img src={require('../public/Message.png')} alt={'icon'}/>
                    <a href={'mailto:taxicentraals@gmail.com'}>taxicentraals@gmail.com</a>
                </ContactsInfo>

                <ContactsInfo>
                    <img src={require('../public/Calling.png')} alt={'icon'}/>
                    <a href={'tel:0633939345'}>0633939345</a>
                </ContactsInfo>

                <ContactsInfo>
                    <img src={require('../public/Location.png')} alt={'icon'}/>
                    <div>Varenstraat 368 3765 WZ Soest</div>
                </ContactsInfo>

                <Form>
                    <h6>{t('Contact2')}</h6>
                    <input placeholder={t('Contact3')}  onChange={(event) => {
                        setName(event.target.value)
                    }} value={name}/>

                    <input placeholder={t('Contact4')} onChange={(event) => {
                        setEmail(event.target.value)
                    }} value={email}/>

                    <input placeholder={t('Contact5')} onChange={(event) => {
                        setNumber(event.target.value)
                    }} value={number}/>

                    <textarea placeholder={t('Contact6')} onChange={(event) => {
                        setMessage(event.target.value)
                    }} value={message}/>

                    <button onClick={sendRequest}>{t('Contact7')}</button>
                </Form>
            </ContactUsContainer>
        </>
    );
}

export default ContactUs;