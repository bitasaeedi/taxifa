import React from 'react';
import backGround from '../public/serviceBackGround.png';
import {AllServicesContainer, Service, ServicesContainer, Shadow} from "../styledComponents/ServicesInfo-style";
function ServicesInfo() {
    return (
        <>
            <ServicesContainer image={`url(${backGround})`}>
                <Shadow/>
                <h2>Our Services</h2>
                <AllServicesContainer>
                    <Service>
                        <h6>Group Taxi </h6>
                        <p>Lorem ipsum dolor sit amet. A doloribus odio sed accusamus molestiae
                            sit earum adipisci et quos obcaecati ut .
                        </p>
                        <a href={''}>Book</a>
                    </Service>
                    <Service>
                        <h6>Group Taxi </h6>
                        <p>Lorem ipsum dolor sit amet. A doloribus odio sed accusamus molestiae
                            sit earum adipisci et quos obcaecati ut .
                        </p>
                        <a href={''}>Book</a>
                    </Service>

                    <Service>
                        <h6>Group Taxi </h6>
                        <p>Lorem ipsum dolor sit amet. A doloribus odio sed accusamus molestiae
                            sit earum adipisci et quos obcaecati ut .
                        </p>
                        <a href={''}>Book</a>
                    </Service>

                    <Service>
                        <h6>Group Taxi </h6>
                        <p>Lorem ipsum dolor sit amet. A doloribus odio sed accusamus molestiae
                            sit earum adipisci et quos obcaecati ut .
                        </p>
                        <a href={''}>Book</a>
                    </Service>

                </AllServicesContainer>
            </ServicesContainer>
        </>
    );
}

export default ServicesInfo;