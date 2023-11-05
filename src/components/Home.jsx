import React, {useState} from 'react';
import backGround from '../public/background.png';
import '../App.css';
import {
    HomeContainer,
    HomeContent,
    HomeContentLeftSide, HomeContentRightSide,
    Menu,
    MenuLeft,
    MenuRight, Options,
    Shadow
} from "../styledComponents/Home-style";
import FsLightbox from "fslightbox-react";
import MobileMenu from "./MobileMenu";
function Home() {

    const [lightboxController, setLightboxController] = useState({toggler: false, sourceIndex: 0,});

    function openLightbox(sourceIndex) {
        setLightboxController({toggler: !lightboxController.toggler, sourceIndex});
    }

    return <>
        <HomeContainer image={`url(${backGround})`}>
            <Shadow/>
        {/*  menu  */}
            <Menu>
                <MobileMenu/>
                <MenuLeft>
                    <img alt={'Taxifa'} src={require('../public/taxi.png')}/>
                   <span className={'Irish_font'}>TaxiFa</span>
                </MenuLeft>

                <MenuRight>

                        <img alt={'uk'} src={require('../public/flag.png')}/>
                        <img alt={'arrow'} src={require('../public/arrow.png')}/>

                    <div>
                        <div>Home</div>
                        <div className='active'>Blog</div>
                        <div>About</div>
                        <div>Contact</div>
                        <div>FAQ</div>
                        <div>Reviews</div>
                        <div className='bookBtn'>BOOK A TAXI</div>
                    </div>


                </MenuRight>
            </Menu>

        {/* Home content  */}
            <HomeContent>

                {/* left side */}
                <HomeContentLeftSide>
                    <h1>Book Your <span>Taxi</span> <br/>From Anywhare Today.</h1>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                    <h6>which services do you want?</h6>
                    <p>lorem ipsum dolor simit is a standard text which writers use in design</p>

                    <Options>
                        <div>
                            <img alt={'car'} src={require('../public/option1.png')}/>
                            <div>Group Taxi</div>
                        </div>
                        <div>
                            <img alt={'car'} src={require('../public/options2.png')}/>
                            <div>Sochopol</div>
                        </div>
                        <div>
                            <img alt={'car'} src={require('../public/options3.png')}/>
                            <div>Student Transport</div>
                        </div>
                        <div>
                            <img alt={'car'} src={require('../public/options4.png')}/>
                            <div>Airport</div>
                        </div>
                    </Options>

                    <a href={'/'}>i have no idea what to choose!</a>

                </HomeContentRightSide>

            </HomeContent>

        </HomeContainer>
    </>;
}

export default Home;