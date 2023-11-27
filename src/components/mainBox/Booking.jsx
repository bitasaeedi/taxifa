import React, {useState} from 'react';
import {
    Button,
    InputsContainer,
    InputsContainer2, Luggage,
    MainBoxContainer,
    SecondContainer
} from "../../styledComponents/MainBox-style";

function Booking(props) {


    return (
        <>
            <MainBoxContainer>
                <h2>Book Your Taxi !</h2>
                <SecondContainer>

                    {/*from*/}
                    <InputsContainer>
                        <div className="input-label">Origin</div>
                        <div className="input">
                            <img alt={'icon'} src={require('../../public/form.png')}/>
                            <input placeholder={'Form'}/>
                        </div>
                    </InputsContainer>
                    {/*to*/}
                    <InputsContainer>
                        <div className="input-label">Destination</div>
                        <div className="input">
                            <img alt={'icon'} src={require('../../public/Group 3.png')}/>
                            <input placeholder={'To'}/>
                        </div>
                    </InputsContainer>
                    {/*pickup... and return*/}
                    <InputsContainer2>

                        <InputsContainer>
                            <div className="input-label">Pickup time ride</div>
                            <div className="input">
                                <img alt={'icon'} src={require('../../public/Calendar.png')}/>
                                <input placeholder={'Select'}/>
                            </div>
                        </InputsContainer>

                        <InputsContainer>

                            <div className="input-label"><input type={"checkbox"}/>Return</div>
                            <div className="input">
                                <img alt={'icon'} src={require('../../public/Calendar.png')}/>
                                <input placeholder={'Select'}/>
                            </div>
                        </InputsContainer>

                    </InputsContainer2>
                    {/*number of ...*/}
                    <InputsContainer2>

                        <InputsContainer>
                            <div className="input-label">Number of travelers</div>
                            <div className="input">
                                <img alt={'icon'} src={require('../../public/Calendar.png')}/>
                                <input placeholder={'Select'}/>
                            </div>
                        </InputsContainer>

                        <InputsContainer/>

                    </InputsContainer2>

                    <Luggage>
                        <img alt={'icon'} src={require('../../public/Work.png')}/>
                        <p>Do you have luggage?</p>
                        <div><input type={'checkbox'}/> Yes</div>
                        <div><input type={'checkbox'}/> No</div>
                    </Luggage>
                    <Button onClick={()=>{props.transform(3)}}>Calculate my ride price</Button>
                </SecondContainer>
            </MainBoxContainer>
        </>
    );
}

export default Booking;