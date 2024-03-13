import React, {createContext, useContext, useState} from 'react';

const AppContext = createContext();


function AppProvider ({ children }) {
    let [tripInfo,setTripInfo]=useState({
        passenger: {//
        },
        type:"airport",//
        origin: {//
        },
        destination: {//
        },
        pickup:{},//
        return: {},//
        flight_number:'',
        number_of_passengers: 1,//
        luggage: [
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
        ]
    });
    let[response,setResponse]=useState({});
    let [finalAddress,setFinalAddress]=useState({destination:"",origin:""});
    let [loggageFlag,setLoggageFlag]=useState(false);
    return (
        <AppContext.Provider value={{ tripInfo,setTripInfo,response,setResponse,loggageFlag,setLoggageFlag,finalAddress,setFinalAddress}}>
            {children}
        </AppContext.Provider>
    );
}
function useAppContext() {
    return useContext(AppContext);
}

export { AppProvider, useAppContext };