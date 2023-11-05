import React from 'react';
import {FooterContainer, Links, SocialMedia} from "../styledComponents/Footer-style";
import '../App.css'

function Footer(props) {
    return (
        <>
            <FooterContainer>
                <h6 className={'Irish_font'}>TaxiFa</h6>

                <Links>
                    <a href={'/'}>Home</a>
                    <a href={'/'}>Blog</a>
                    <a href={'/'}>About</a>
                    <a href={'/'}>Contact</a>
                    <a href={'/'}>FAQ</a>
                    <a href={'/'}>Reviews</a>
                </Links>


                <SocialMedia>
                    <img alt={'icons'} src={require('../public/insta.png')}/>
                    <img alt={'icons'} src={require('../public/facebook.png')}/>
                    <img alt={'icons'} src={require('../public/whatsup.png')}/>
                    <img alt={'icons'} src={require('../public/tel.png')}/>
                </SocialMedia>

                <div>Copyright © United Nations 2023</div>
            </FooterContainer>

        </>
    );
}

export default Footer;