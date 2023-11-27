import React from 'react';
import {ContactsInfo, ContactUsContainer, Form, FormsInput} from "../styledComponents/ContactUs-style";

function ContactUs({t}) {
    return (
        <>
            <ContactUsContainer id={'contact'}>
                <h2>{t('Contact1')}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

                <ContactsInfo>
                    <img src={require('../public/Message.png')} alt={'icon'}/>
                    <div>rezamafakheri@gmail.com</div>
                </ContactsInfo>

                <ContactsInfo>
                    <img src={require('../public/Calling.png')} alt={'icon'}/>
                    <div>+98918 518 0915</div>
                </ContactsInfo>

                <ContactsInfo>
                    <img src={require('../public/Location.png')} alt={'icon'}/>
                    <div>Lorem ipsum dolor sit amet, consectetur</div>
                </ContactsInfo>

                <Form>
                    <h6>{t('Contact2')}</h6>
                    <input placeholder={t('Contact3')}/>
                    <input placeholder={t('Contact4')}/>
                    <input placeholder={t('Contact5')}/>
                    <textarea placeholder={t('Contact6')}/>
                    <button>{t('Contact7')}</button>
                </Form>
            </ContactUsContainer>
        </>
    );
}

export default ContactUs;