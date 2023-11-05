import React, {useState} from 'react';
import {
    Attributes, Descript, DescriptionContainer, DescriptionLeftSide,
    DescriptionRightSide, Infos
} from "../styledComponents/Description-style";
import FsLightbox from "fslightbox-react";

function Description() {
    const [lightboxController, setLightboxController] = useState({toggler: false, sourceIndex: 0,});

    function openLightbox(sourceIndex) {
        setLightboxController({toggler: !lightboxController.toggler, sourceIndex});
    }

    return (
        <>
            <DescriptionContainer>
                <Attributes>
                    <div>
                        <img alt='icon' src={require('../public/descript1.png')}/>
                        <div>
                            <h6>Fast</h6>
                            <div>Lorem ipsum dolor</div>
                        </div>
                    </div>

                    <div>
                        <img alt='icon' src={require('../public/descript1.png')}/>
                        <div>
                            <h6>Safe</h6>
                            <div>Lorem ipsum dolor</div>
                        </div>
                    </div>

                    <div>
                        <img alt='icon' src={require('../public/descript1.png')}/>
                        <div>
                            <h6>Comfortable</h6>
                            <div>Lorem ipsum dolor</div>
                        </div>
                    </div>

                    <div>
                        <img alt='icon' src={require('../public/descript1.png')}/>
                        <div>
                            <h6>Inexpensive</h6>
                            <div>Lorem ipsum dolor</div>
                        </div>
                    </div>
                </Attributes>

                <Descript>

                    {/* left side */}
                    <DescriptionLeftSide>
                        <h2>Who We Are</h2>
                        <p>Lorem ipsum dolor sit amet. A doloribus odio sed accusamus molestiae
                            sit earum adipisci et quos obcaecati ut dolores commodi 33 ipsam omnis.
                            33 labore impedit hic tenetur omnis aut sapiente aspernatur et repudiandae nostrum et quae
                            consectetur et pariatur ipsa.
                        </p>

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
                            <img alt='car' src={require('../public/des1.png')} onClick={() => openLightbox(0)}/>
                            <img alt='car' src={require('../public/des2.png')} onClick={() => openLightbox(1)}/>
                            <img alt='car' src={require('../public/des3.png')} onClick={() => openLightbox(2)}/>
                            <img alt='car' src={require('../public/des4.png')} onClick={() => openLightbox(3)}/>
                        </div>
                        <div onClick={() => openLightbox(0)}>brows gallery</div>
                    </DescriptionRightSide>

                    <FsLightbox
                        toggler={lightboxController.toggler}
                        sources={[
                            require('../public/des1.png'),
                            require('../public/des2.png'),
                            require('../public/des3.png'),
                            require('../public/des4.png')
                        ]}
                        sourceIndex={lightboxController.sourceIndex}
                    />

                </Descript>


            </DescriptionContainer>
        </>
    );
}

export default Description;