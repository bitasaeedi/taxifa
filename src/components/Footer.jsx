import React from 'react';
import {FooterContainer, Links, SocialMedia} from "../styledComponents/Footer-style";
import '../App.css'

function Footer({t}) {
    return (
        <>
            <FooterContainer>
                <h6 className={'Irish_font'}>Taxicentraal</h6>

                <Links>
                    <a href={'#home'} >{t('Home')}</a>
                    <a href={'#blog'}>{t('Blog')}</a>
                    <a href={'#about'}>{t('About')}</a>
                    <a href={'#contact'}>{t('Contact')}</a>
                    <a href={'#faq'}>{t('FAQ')}</a>
                    <a href={'#reviews'}>{t('Reviews')}</a>
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