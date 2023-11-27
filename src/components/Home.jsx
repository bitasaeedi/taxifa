import React, {useState} from 'react';
import backGround from '../public/background.png';
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

function Home({t,handleLanguage}) {

    const [lightboxController, setLightboxController] = useState({toggler: false, sourceIndex: 0,});
    // const [isMobile, setIsMobile] = useState(false)
    const [transformWidth, setTransformWidth] = useState(0);
    const isMobile = useMediaQuery({ query: `(max-width: 620px)` });

    function transform(page) {
        if (isMobile) {
            setTransformWidth(-(page - 1) * 360);
            console.log(-(page - 1) * 370)
        } else {
            setTransformWidth(-(page - 1) * 400);
            console.log(-(page - 1) * 400)
        }
    }


    function openLightbox(sourceIndex) {
        setLightboxController({toggler: !lightboxController.toggler, sourceIndex});
    }

    return <>
        <HomeContainer image={`url(${backGround})`} id={'home'}>
            <Shadow/>
            {/*  menu  */}
            <Menu>
                <MobileMenu/>
                <MenuLeft>
                    <img alt={'Taxifa'} src={require('../public/taxi.png')}/>
                    <span className={'Irish_font'}>TaxiFa</span>
                </MenuLeft>

                <MenuRight>

                    <img alt={'uk'} src={require('../public/flag.png')} onClick={handleLanguage}/>
                    <img alt={'arrow'} src={require('../public/arrow.png')}/>

                    <div>
                        <a href={'index.html#home'} >{t('Home')}</a>
                        <a href={'index.html#blog'}>{t('Blog')}</a>
                        <a href={'index.html#about'}>{t('About')}</a>
                        <a href={'index.html#contact'}>{t('Contact')}</a>
                        <a href={'index.html#faq'}>{t('FAQ')}</a>
                        <a href={'index.html#reviews'}>{t('Reviews')}</a>
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
                            require('../public/car1.png'),
                            require('../public/car2.png'),
                            require('../public/car3.png'),
                            require('../public/car4.png')
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