import React from 'react';
import backGround from '../public/background.png'
import {HomeContainer, Menu, MenuLeft, MenuRight, Shadow} from "../styledComponents/Home-style";
function Home() {
    return <>
        <HomeContainer image={`url(${backGround})`}>
            <Shadow/>

        {/*  menu  */}
            <Menu>
                <MenuLeft>
                    <img alt={'Taxifa'} src={'../public/taxifa.svg'}/>
                   <span>TaxiFa</span>
                </MenuLeft>

                <MenuRight>

                </MenuRight>
            </Menu>
        </HomeContainer>
    </>;
}

export default Home;