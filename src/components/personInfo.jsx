import React from 'react';
import {PersonInfoContainer} from "../styledComponents/Home-style";

function PersonInfo(props) {
    return (
        <>
            <PersonInfoContainer>
                <div>
                    <img alt={'message'} src={require('../public/Message.png')}/>
                    <div>taxicentraals@gmail.com</div>
                </div>
                <div>
                    <img alt={'calling'} src={require('../public/Calling.png')}/>
                    <div>0633939345</div>
                </div>
            </PersonInfoContainer>
        </>
    );
}

export default PersonInfo;