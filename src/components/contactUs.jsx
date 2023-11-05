import React from 'react';
import {ContactsInfo, ContactUsContainer, Form, FormsInput} from "../styledComponents/ContactUs-style";

function ContactUs() {
    return (
        <>
            <ContactUsContainer>
                <h2>Contact Us</h2>
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
                    <h6>Fill The Form</h6>
                    <input placeholder={'Your Name'}/>
                    <input placeholder={'Your Email'}/>
                    <input placeholder={'Phone Number'}/>
                    <textarea placeholder={'Message'}/>
                    <button>Send</button>
                </Form>
            </ContactUsContainer>
        </>
    );
}

export default ContactUs;