import React, {useState} from 'react';
import {Header2} from "../styledComponents/Home-style";

function Header({handle,color}) {
    const [flag, setFlag] = useState(true)
    return (
        <>
            <Header2 color={color}>
                <div>
                    <span className={'Irish_font'}>Taxicentraal seost</span></div>
                <div>  <img alt={'uk'} className={'flag'}
                            src={flag ? require('../public/flag.png') : require('../public/netherlands.png')} onClick={() => {
                    setFlag(!flag);
                    handle()
                }}/>
                    <a href={'https://www.taxicentraalsoest.nl/'}>home</a>
                </div>


            </Header2>
        </>
    );
}

export default Header;