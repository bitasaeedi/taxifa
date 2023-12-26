import React, {useState} from 'react';
import backGround from '../public/background-min.png';
import { useMediaQuery } from 'react-responsive';
import '../App.css';
import {HomeContainer, HomeContent, HomeContentLeftSide,
    HomeContentRightSide, HomeContentRightSideContainer, Menu, MenuLeft, MenuRight, Shadow
} from "../styledComponents/Home-style";
import FsLightbox from "fslightbox-react";
import MobileMenu from "./MobileMenu";
import SelectServices from "./mainBox/SelectServices";
import Luggage from "./mainBox/Luggage";
import FillTheForm from "./mainBox/FillTheForm";
import TravelInformation from "./mainBox/TravelInformation";
import Booking from "./mainBox/Booking";
import {ToastContainer} from "react-toastify";

function Home({t,handleLanguage}) {

    const [lightboxController, setLightboxController] = useState({toggler: false, sourceIndex: 0,});
    const [menu, setMenu] = useState(false)
    const [transformWidth, setTransformWidth] = useState(0);
    const isdesc = useMediaQuery({ query: `(min-width: 620px)` });
    const isMobile2 = useMediaQuery({ query: `(min-width: 380px)` });
    function transform(page) {
        if (isdesc) {
            setTransformWidth(-(page - 1) * 400);
        } else if(isMobile2) {
            setTransformWidth(-(page - 1) * 360);
        }
        else {
            setTransformWidth(-(page - 1) * 310);
        }
    }
function handleMenu(){
        setMenu(!menu)
}

    function openLightbox(sourceIndex) {
        setLightboxController({toggler: !lightboxController.toggler, sourceIndex});
    }

    return <>
        <ToastContainer/>
        <HomeContainer image={`url(${backGround})`} id={'home'}>
            <Shadow/>
            {/*  menu  */}
            <Menu>
                <MobileMenu t={t} menu={menu} handleMenu={handleMenu}/>
                <MenuLeft mobile={!isdesc} >
                    <img alt={'Taxifa'} className={'menu'} onClick={()=>{
                        handleMenu();
                        console.log(menu)}} src={require('../public/menu.png')}/>
                    <img alt={'Taxifa'} src={require('../public/taxi.png')}/>
                    <span className={'Irish_font'}>TaxiFa</span>
                </MenuLeft>

                <MenuRight>

                    <img alt={'uk'} src={require('../public/flag.png')} onClick={handleLanguage}/>
                    <img alt={'arrow'} src={require('../public/arrow.png')}/>

                    <div>
                        <a href={'#home'} >{t('Home')}</a>
                        <a href={'#blog'}>{t('Blog')}</a>
                        <a href={'#about'}>{t('About')}</a>
                        <a href={'#contact'}>{t('Contact')}</a>
                        <a href={'#faq'}>{t('FAQ')}</a>
                        <a href={'#reviews'}>{t('Reviews')}</a>
                        <div className='bookBtn'>{t('Book')}</div>
                    </div>


                </MenuRight>
            </Menu>

            {/* Home content  */}
            <HomeContent>

                {/* left side */}
                <HomeContentLeftSide>
                    <h1 dangerouslySetInnerHTML={{ __html: t('homeTitle') }}/>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className='images'>
                        <img alt={'car'} src={require('../public/car1.png')} onClick={() => openLightbox(0)}/>
                        <img alt={'car'} src={require('../public/car2.png')} onClick={() => openLightbox(1)}/>
                        <img alt={'car'} src={require('../public/car3.png')} onClick={() => openLightbox(2)}/>
                        <img alt={'car'} src={require('../public/car4.png')} onClick={() => openLightbox(3)}/>
                    </div>
                    <FsLightbox
                        toggler={lightboxController.toggler}
                        sources={[
                            require('../public/car1b.jpeg'),
                            require('../public/car2b.jpeg'),
                            require('../public/car3b.jpeg'),
                            require('../public/car4b.jpeg')
                        ]}
                        sourceIndex={lightboxController.sourceIndex}
                    />
                </HomeContentLeftSide>

                {/*right side*/}

                <HomeContentRightSide>
                    <HomeContentRightSideContainer translate={transformWidth}>
                        <SelectServices transform={transform} t={t}/>
                        <Booking transform={transform} t={t}/>
                        <Luggage transform={transform} t={t}/>
                        <FillTheForm transform={transform} t={t}/>
                        <TravelInformation transform={transform} t={t}/>
                    </HomeContentRightSideContainer>
                </HomeContentRightSide>

            </HomeContent>

        </HomeContainer>
    </>;
}

export default Home;