import React, {useState} from 'react';
import {
    BottomPart,
    MainBoxContainer,
    PaymentButton,
    PaymentMethod,
    TravelInfo
} from "../../styledComponents/MainBox-style";

function TravelInformation(props) {
    const [paymentIsOpen,setPaymentIsOpen]=useState(false);
    return (
        <>
            <MainBoxContainer>
                <h2>Travel Information</h2>
                <div className={'price'}>$343,62</div>
                <TravelInfo>

                    <div className={'date'}>
                        <img alt={'icon'} src={require('../../public/CalendarGreen.png')}/>
                        <div>
                            <span>18-10-2023</span>
                            <span>17:25</span>
                        </div>
                    </div>
                    <div className="location-info">
                        <img alt={''} src={require('../../public/road.png')}/>
                        <div>

                            <div>
                               A.B. Nobellaan 1200 - 17:25
                            </div>

                            <div>
                                A.B. Nobellaan 1200
                            </div>

                            <div>
                                Wormserstraat 19 - 19:40
                            </div>

                        </div>
                    </div>
                    <hr/>
                    <div className="extra-info">
                        <h6>Travellers</h6>
                        <div>3 Person</div>
                        <h6>Special Luggage</h6>
                        <div>2 Pets</div>
                        <div>1 Small Checked Case</div>
                    </div>

                </TravelInfo>

                <BottomPart>
                    <div onClick={()=>{props.transform(4)}}>
                        <img alt={'<-'} src={require('../../public/Arrow - Left.png')}/>
                        <div>Back</div>
                    </div>

                    <button onClick={()=>{setPaymentIsOpen(true)}}>Next</button>
                </BottomPart>

                <PaymentMethod display={paymentIsOpen}>
                    <h4>Payment Method :</h4>
                    <PaymentButton color={'yellow'}>Online</PaymentButton>
                    <PaymentButton color={'gray'}>later(Cash...)</PaymentButton>
                    <div>
                        <img alt={'<-'} src={require('../../public/Arrow - Left.png')}/>
                        <div  onClick={()=>{setPaymentIsOpen(false)}}>Back</div>
                    </div>
                </PaymentMethod>

            </MainBoxContainer>
        </>
    );
}

export default TravelInformation;