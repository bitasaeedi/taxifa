import React from 'react';
import {Menu} from "../styledComponents/MobileMenu-style";

function MobileMenu({t,menu,handleMenu}) {
    return (
        <>
            <Menu menu={menu}>
                <a href={'#home'} onClick={handleMenu} >{t('Home')}</a>
                <a href={'#blog'} onClick={handleMenu}>{t('Blog')}</a>
                <a href={'#about'} onClick={handleMenu}>{t('About')}</a>
                <a href={'#contact'} onClick={handleMenu}>{t('Contact')}</a>
                <a href={'#faq'} onClick={handleMenu}>{t('FAQ')}</a>
                <a href={'#reviews'} onClick={handleMenu}>{t('Reviews')}</a>
            </Menu>
        </>
    );
}

export default MobileMenu;