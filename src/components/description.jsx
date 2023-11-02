import React from 'react';
import {
    Attributes,
    Descript,
    DescriptionContainer,
    DescriptionLeftSide,
    DescriptionRightSide, Infos
} from "../styledComponents/Description-style";

function Description(props) {
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
                            <img alt='car' src={require('../public/des1.png')}/>
                            <img alt='car' src={require('../public/des2.png')}/>
                            <img alt='car' src={require('../public/des3.png')}/>
                            <img alt='car' src={require('../public/des4.png')}/>
                        </div>
                        <div>brows gallery</div>
                    </DescriptionRightSide>

                </Descript>


            </DescriptionContainer>
        </>
    );
}

export default Description;