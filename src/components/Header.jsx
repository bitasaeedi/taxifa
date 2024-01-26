import React, {useState} from 'react';
import {Header2} from "../styledComponents/Home-style";

function Header({handle,color}) {
    const [flag, setFlag] = useState(true)
    return (
        <>
            <Header2 color={color}>
                <div> <img alt={'Taxifa'} src={require('../public/taxicentral2.png')}/>
                    <span className={'Irish_font'}>Taxicentraal</span></div>
                <div>  <img alt={'uk'} className={'flag'}
                            src={flag ? require('../public/flag.png') : require('../public/netherlands.png')} onClick={() => {
                    setFlag(!flag);
                    handle()
                }}/>
                    <a href={''}>home</a>
                </div>


            </Header2>
        </>
    );
}

export default Header;