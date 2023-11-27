import React from 'react';
import {FooterContainer, Links, SocialMedia} from "../styledComponents/Footer-style";
import '../App.css'

function Footer({t}) {
    return (
        <>
            <FooterContainer>
                <h6 className={'Irish_font'}>TaxiFa</h6>

                <Links>
                    <a href={'index.html#home'} >{t('Home')}</a>
                    <a href={'index.html#blog'}>{t('Blog')}</a>
                    <a href={'index.html#about'}>{t('About')}</a>
                    <a href={'index.html#contact'}>{t('Contact')}</a>
                    <a href={'index.html#faq'}>{t('FAQ')}</a>
                    <a href={'index.html#reviews'}>{t('Reviews')}</a>
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