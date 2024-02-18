import React, {useState} from 'react';
import {
    BottomPart,
    MainBoxContainer,
    PaymentButton,
    PaymentMethod,
    TravelInfo
} from "../../styledComponents/MainBox-style";
import {useAppContext} from "../context";
import axios from "../axios";
import {Toast} from "../toast";
import {Oval} from "react-loader-spinner";
import Swal from 'sweetalert2'

function TravelInformation(props) {
    const [paymentIsOpen, setPaymentIsOpen] = useState(false);
    const {response,finalAddress} = useAppContext();
    const [loader,setLoader]=useState(false)
    const [loader2,setLoader2]=useState(false)
    const formattedDate = new Date(response.pickup_time).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
    let [url, setUrl] = useState()

    function handlePayment(type) {
        console.log(response.id)
        axios.post(`/payment/post-payment-type`,
            {
                payment_type: type,
                trip_id: response.id
            }
        ).then(function (response) {
                console.log(response.data)
                // setUrl(response.data.body.url)
            if(type==='online'){
                window.location.replace(response.data.body.url);
            }else{
                Swal.fire({
                    title: "DONE!",
                    text: "We send you an email",
                    icon: "success",
                    confirmButtonText: "Back to home"
                }).then((result) => {
                    window.location.reload();
                });

            }

            }
        ).catch(function (error) {
            console.error('Error:', error);
            // Toast(error.response.data.message, false);
        });

    }

    console.log('res: ',response)

    return (
        <>

            <MainBoxContainer>
                <h2>{props.t('info1')}</h2>
                <div className={'price'}>${response.amount ? response.amount : ""}</div>
                <TravelInfo>

                    <div className={'date'}>
                        <img alt={'icon'} src={require('../../public/CalendarGreen.png')}/>
                        <div>
                            {formattedDate}
                        </div>
                    </div>
                    <div className="location-info">
                        <img alt={''} src={require('../../public/road.png')}/>
                        <div>

                            <div>
                                {finalAddress.destination ? finalAddress.destination : ''} - 17:25
                            </div>

                            <div>
                                {finalAddress.origin ?finalAddress.origin : ''} - 19:40
                            </div>

                        </div>
                    </div>
                    <hr/>
                    <div className="extra-info">
                        <h6>{props.t('info2')}</h6>
                        <div>{response.number_of_passengers ? response.number_of_passengers : ''} {props.t('info5')}</div>
                        <h6>{props.t('info3')}</h6>
                        {response.luggage ? response.luggage.map((l, index) => {
                            if (l.number !== 0) {
                                return <>
                                    <div key={index}>{l.number} {l.name}</div>
                                </>
                            } else return ''
                        }) : ''}

                    </div>

                </TravelInfo>

                <BottomPart>
                    <div onClick={() => {
                        props.transform(3)
                    }}>
                        <img alt={'<-'} src={require('../../public/Arrow - Left.png')}/>
                        <div>{props.t('back')}</div>
                    </div>

                    <button onClick={() => {
                        setPaymentIsOpen(true)
                    }}>{props.t('next')}
                    </button>
                </BottomPart>

                <PaymentMethod display={paymentIsOpen}>
                    <h4>{props.t('info4')} :</h4>
                    <PaymentButton color={'yellow'} onClick={() => handlePayment('online')}>
                        {loader?<Oval
                            height={20}
                            width={30}
                            color="#414141"
                            visible={loader}
                            ariaLabel='oval-loading'
                            secondaryColor="#ffffff"
                            strokeWidth={6}
                            strokeWidthSecondary={6}

                            />:'Online'}
                    </PaymentButton>
                    <PaymentButton color={'gray'} onClick={() => handlePayment('cash')}>
                        {loader?<Oval
                            height={20}
                            width={30}
                            color="#414141"
                            visible={loader}
                            ariaLabel='oval-loading'
                            secondaryColor="#ffffff"
                            strokeWidth={6}
                            strokeWidthSecondary={6}

                        />:props.t('cash')}</PaymentButton>
                    <div>
                        <img alt={'<-'} src={require('../../public/Arrow - Left.png')}/>
                        <div onClick={() => {
                            setPaymentIsOpen(false)
                        }}>{props.t('back')}</div>
                    </div>
                </PaymentMethod>

            </MainBoxContainer>
        </>
    );
}

export default TravelInformation;