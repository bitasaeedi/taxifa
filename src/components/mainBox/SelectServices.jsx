import React from 'react';
import {Options, SelectServicesBox} from "../../styledComponents/MainBox-style";
import {useAppContext} from "../context";

function SelectServices(props) {
    const { setTripInfo} = useAppContext();

    function handleType(type){
        setTripInfo((info) => ({
            ...info,
            type:type
        }));
    }
    return (
        <>
            <SelectServicesBox>
                <h6>{props.t('servicesBox1')}</h6>
                <p>lorem ipsum dolor simit is a standard text which writers use in design</p>

                <Options>
                    <div onClick={()=>{handleType('groupTaxi');props.transform(2)}}>
                        <img alt={'car'} src={require('../../public/option1.png')}/>
                        <div>{props.t('servicesBox3')}</div>
                    </div>
                    <div onClick={()=>{handleType('sochopol');props.transform(2)}}>
                        <img alt={'car'} src={require('../../public/options2.png')}/>
                        <div>{props.t('servicesBox4')}</div>
                    </div>
                    <div onClick={()=>{handleType('studentTransport');props.transform(2)}}>
                        <img alt={'car'} src={require('../../public/options3.png')}/>
                        <div>{props.t('servicesBox5')}</div>
                    </div>
                    <div onClick={()=>{handleType('airport');props.transform(2)}}>
                        <img alt={'car'} src={require('../../public/options4.png')}/>
                        <div>{props.t('servicesBox6')}</div>
                    </div>
                </Options>

                <a href={'/'}>{props.t('servicesBox7')}</a>
            </SelectServicesBox>
        </>
    );
}

export default SelectServices;