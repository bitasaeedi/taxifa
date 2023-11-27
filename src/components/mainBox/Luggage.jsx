import React from 'react';
import {BottomPart, LuggageOptionsBox, MainBoxContainer, SecondContainer} from "../../styledComponents/MainBox-style";

function Luggage(props) {
    return (
        <MainBoxContainer>
            <h2>Luggage</h2>
            <SecondContainer>

                {/* Large checked ... */}
                <LuggageOptionsBox>
                    <img alt={''} src={require('../../public/Work.png')}/>
                    <div className={'text'}>
                        <div>Large Checked Case</div>
                        <div>85cm*55cm*35cm</div>
                    </div>
                    <div className={'amount'}>
                        <img alt={''} src={require('../../public/-.png')}/>
                        <div>1</div>
                        <img alt={''} src={require('../../public/+.png')}/>
                    </div>
                </LuggageOptionsBox>
                {/* small checked ... */}
                <LuggageOptionsBox>
                    <img alt={''} src={require('../../public/Work.png')}/>
                    <div className={'text'}>
                        <div>Small Checked Case</div>
                        <div>85cm*55cm*35cm</div>
                    </div>
                    <div className={'amount'}>
                        <img alt={''} src={require('../../public/-.png')}/>
                        <div>0</div>
                        <img alt={''} src={require('../../public/+.png')}/>
                    </div>
                </LuggageOptionsBox>
                {/* handle luggage */}
                <LuggageOptionsBox>
                    <img alt={''} src={require('../../public/Work.png')}/>
                    <div className={'text'}>
                        <div>Handle Luggage</div>
                        <div>HandBag.BackPack</div>
                    </div>
                    <div className={'amount'}>
                        <img alt={''} src={require('../../public/-.png')}/>
                        <div>0</div>
                        <img alt={''} src={require('../../public/+.png')}/>
                    </div>
                </LuggageOptionsBox>
                {/* pets */}
                <h6> Special Luggage</h6>
                <LuggageOptionsBox>
                    <img alt={''} src={require('../../public/Work.png')}/>
                    <div className={'text'}>
                        <div>Pets</div>
                        <div></div>
                    </div>
                    <div className={'amount'}>
                        <img alt={''} src={require('../../public/-.png')}/>
                        <div>0</div>
                        <img alt={''} src={require('../../public/+.png')}/>
                    </div>
                </LuggageOptionsBox>
                <BottomPart>
                    <div onClick={()=>{props.transform(2)}}>
                        <img alt={'<-'} src={require('../../public/Arrow - Left.png')}/>
                        <div>Back</div>
                    </div>

                    <button onClick={()=>{props.transform(4)}}>Next</button>
                </BottomPart>
            </SecondContainer>
        </MainBoxContainer>
    );
}

export default Luggage;