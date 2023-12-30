import React from 'react';
import {PersonInfoContainer} from "../styledComponents/Home-style";

function PersonInfo(props) {
    return (
        <>
            <PersonInfoContainer>
                <div>
                    <img alt={'message'} src={require('../public/Message.png')}/>
                    <a href={'mailto:taxicentraals@gmail.com'}>taxicentraals@gmail.com</a>
                </div>
                <div>
                    <img alt={'calling'} src={require('../public/Calling.png')}/>
                    <a href={'tel:0633939345'}>0633939345</a>
                </div>
            </PersonInfoContainer>
        </>
    );
}

export default PersonInfo;