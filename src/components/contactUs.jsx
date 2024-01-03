import React from 'react';
import {ContactsInfo, ContactUsContainer, Form, FormsInput} from "../styledComponents/ContactUs-style";

function ContactUs({t}) {
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