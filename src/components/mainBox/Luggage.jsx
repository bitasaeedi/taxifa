import React, {useEffect, useState} from 'react';
import {BottomPart, LuggageOptionsBox, MainBoxContainer, SecondContainer} from "../../styledComponents/MainBox-style";
import axios from "../axios";
import {Toast} from "../toast";
import {useAppContext} from "../context";
function Luggage(props) {
    const [luggages,setLuggages]=useState([]);
    const [luggagesValue,setLuggageValue]=useState([
        {
            name:'Large checked case',
            description:'85cm x 55cm x 35cm',
            number:0,
            icon:"fa fa-suitcase",
            isSpecial:false},
        {
            name:'Small checked case',
            description:'55cm x 45cm x 25cm',
            number:0,
            icon:"fa fa-briefcase",
            isSpecial:false},
        {
            name:'Hand luggage',
            description:'Handbag, backpack, etc.',
            number:0,
            icon:"fa fa-shopping-bag",
            isSpecial:false},
        {
            name:'Foldable wheelchair',
            description:'',
            number:0,
            icon:"fa fa-wheelchair",
            isSpecial:true},
        {
            name:'Pets',
            description:'',
            number:0,
            icon:"fa-solid fa-paw",
            isSpecial:true},
        {
            name:'Winter sports',
            description:'',
            number:0,
            icon:"fa-solid fa-snowflake",
            isSpecial:true},
        {
            name:'Golf bag',
            description:'',
            number:0,
            icon:"fa-solid fa-golf-ball",
            isSpecial:true},
        {
            name:'Rollator',
            description:'',
            number:0,
            icon:"fa-solid fa-blind",
            isSpecial:true},
        {
            name:'Bicycle',
            description:'',
            number:0,
            icon:"fa-solid fa-bicycle",
            isSpecial:true},
        {
            name:'Stroller',
            description:'',
            number:0,
            icon:"fa-solid fa-baby-carriage",
            isSpecial:true},
        {
            name:'Water sports',
            description:'',
            number:0,
            icon:"fa-solid fa-tint",
            isSpecial:true},
   ]);
    const {setTripInfo} = useAppContext();
    function handleSaveInfos() {
        setTripInfo((info) => ({
            ...info,
            luggage:luggagesValue
        }));
    }
    function handleLuggagesValue(name,type){
        console.log(name,type)
        setLuggageValue(prevState => {
            return prevState.map((luggage, i) => {
                if (luggage.name === name) {
                    if(type==='+'){
                        return { ...luggage, number: luggage.number+1 };
                    }
                    else if(luggage.number>0){
                        return { ...luggage, number: luggage.number-1 };
                    }
                    else {
                        return luggage;
                    }

                } else {
                    return luggage;
                }
            });
        });

    }
    useEffect(()=>{
        axios.get(`/trip/luggage/get-list`
        ).then(function (response) {
                console.log(response.data)
                setLuggages(response.data.body);
            }
        ).catch(function (error) {
            console.error('Error:', error);
            // Toast(error.response.data.message, false);
        });
    },[])
    return (
        <MainBoxContainer>
            <h2>Luggage</h2>
            <SecondContainer>
                {luggages?luggages.map((luggage,index)=>{
                    return<>
                        <LuggageOptionsBox key={index}>
                            <i className={luggage.icon}></i>
                            <div className={'text'}>
                                <div>{luggage.name}</div>
                                <div>{luggage.description}</div>
                            </div>
                            <div className={'amount'}>
                                <img alt={''} src={require('../../public/-.png')}
                                onClick={()=>{handleLuggagesValue(luggage.name,'-')}}/>
                                <div>{luggagesValue[index].number}</div>
                                <img alt={''} src={require('../../public/+.png')}
                                     onClick={()=>{handleLuggagesValue(luggage.name,'+')}}/>
                            </div>
                        </LuggageOptionsBox>
                        {index===2? <h6> Special Luggage</h6>:''}
                    </>
                }):''}

                {/*<LuggageOptionsBox>*/}
                {/*    <img alt={''} src={require('../../public/Work.png')}/>*/}
                {/*    <div className={'text'}>*/}
                {/*        <div>Large Checked Case</div>*/}
                {/*        <div>85cm*55cm*35cm</div>*/}
                {/*    </div>*/}
                {/*    <div className={'amount'}>*/}
                {/*        <img alt={''} src={require('../../public/-.png')}/>*/}
                {/*        <div>1</div>*/}
                {/*        <img alt={''} src={require('../../public/+.png')}/>*/}
                {/*    </div>*/}
                {/*</LuggageOptionsBox>*/}
                {/*/!* small checked ... *!/*/}
                {/*<LuggageOptionsBox>*/}
                {/*    <img alt={''} src={require('../../public/Work.png')}/>*/}
                {/*    <div className={'text'}>*/}
                {/*        <div>Small Checked Case</div>*/}
                {/*        <div>85cm*55cm*35cm</div>*/}
                {/*    </div>*/}
                {/*    <div className={'amount'}>*/}
                {/*        <img alt={''} src={require('../../public/-.png')}/>*/}
                {/*        <div>0</div>*/}
                {/*        <img alt={''} src={require('../../public/+.png')}/>*/}
                {/*    </div>*/}
                {/*</LuggageOptionsBox>*/}
                {/*/!* handle luggage *!/*/}
                {/*<LuggageOptionsBox>*/}
                {/*    <img alt={''} src={require('../../public/Work.png')}/>*/}
                {/*    <div className={'text'}>*/}
                {/*        <div>Handle Luggage</div>*/}
                {/*        <div>HandBag.BackPack</div>*/}
                {/*    </div>*/}
                {/*    <div className={'amount'}>*/}
                {/*        <img alt={''} src={require('../../public/-.png')}/>*/}
                {/*        <div>0</div>*/}
                {/*        <img alt={''} src={require('../../public/+.png')}/>*/}
                {/*    </div>*/}
                {/*</LuggageOptionsBox>*/}
                {/* pets */}
                {/*<h6> Special Luggage</h6>*/}
                {/*<LuggageOptionsBox>*/}
                {/*    <img alt={''} src={require('../../public/Work.png')}/>*/}
                {/*    <div className={'text'}>*/}
                {/*        <div>Pets</div>*/}
                {/*        <div></div>*/}
                {/*    </div>*/}
                {/*    <div className={'amount'}>*/}
                {/*        <img alt={''} src={require('../../public/-.png')}/>*/}
                {/*        <div>0</div>*/}
                {/*        <img alt={''} src={require('../../public/+.png')}/>*/}
                {/*    </div>*/}
                {/*</LuggageOptionsBox>*/}
            </SecondContainer>
            <BottomPart>
                <div onClick={()=>{props.transform(1)}}>
                    <img alt={'<-'} src={require('../../public/Arrow - Left.png')}/>
                    <div>{props.t('back')}</div>
                </div>

                <button onClick={()=>{handleSaveInfos();props.transform(3)}}>{props.t('next')}</button>
            </BottomPart>
        </MainBoxContainer>
    );
}

export default Luggage;