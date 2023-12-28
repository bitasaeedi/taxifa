import React, {useState} from 'react';
import {
    Attributes, Descript, DescriptionContainer, DescriptionLeftSide,
    DescriptionRightSide, Infos
} from "../styledComponents/Description-style";
import FsLightbox from "fslightbox-react";

function Description({t}) {
    const [lightboxController, setLightboxController] = useState({toggler: false, sourceIndex: 0,});

    function openLightbox(sourceIndex) {
        setLightboxController({toggler: !lightboxController.toggler, sourceIndex});
    }

    return (
        <>
            <DescriptionContainer id={'about'}>
                <Attributes>
                    <div>
                        <img alt='icon' src={require('../public/descript1.png')}/>
                        <div>
                            <h6>{t('descriptinItems1')}</h6>
                            <div>{t('description1')}</div>
                        </div>
                    </div>

                    <div>
                        <img alt='icon' src={require('../public/descript2.png')}/>
                        <div>
                            <h6>{t('descriptinItems2')}</h6>
                            <div>{t('description2')}</div>
                        </div>
                    </div>

                    <div>
                        <img alt='icon' src={require('../public/descript3.png')}/>
                        <div>
                            <h6>{t('descriptinItems3')}</h6>
                            <div>{t('description3')}</div>
                        </div>
                    </div>

                    <div>
                        <img alt='icon' src={require('../public/descript4.png')}/>
                        <div>
                            <h6>{t('descriptinItems4')}</h6>
                            <div>{t('description4')}</div>
                        </div>
                    </div>
                </Attributes>

                <Descript>

                    {/* left side */}
                    <DescriptionLeftSide>
                        <h2>{t('descriptinItems5')}</h2>
                        <p>{t('descriptinItems7')}</p>

                        <Infos>
                            <div>
                                <h6>150+</h6>
                                <div>Lorem</div>
                            </div>
                            <div className='center'>
                                <h6>4</h6>
                                <div>Lorem</div>
                            </div>
                            <div>
                                <h6>1300+</h6>
                                <div>Lorem</div>
                            </div>
                        </Infos>
                    </DescriptionLeftSide>

                    {/* right side */}
                    <DescriptionRightSide>
                        <div className="images">
                            <img alt='car' src={require('../public/desc1.png')} onClick={() => openLightbox(0)}/>
                            <img alt='car' src={require('../public/des2.png')} onClick={() => openLightbox(1)}/>
                            <img alt='car' src={require('../public/des3.png')} onClick={() => openLightbox(2)}/>
                            <img alt='car' src={require('../public/des4.png')} onClick={() => openLightbox(3)}/>
                        </div>
                        <div onClick={() => openLightbox(0)}>{t('descriptinItems6')}</div>
                    </DescriptionRightSide>

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

                </Descript>


            </DescriptionContainer>
        </>
    );
}

export default Description;