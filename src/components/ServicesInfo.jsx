import React from 'react';
import backGround from '../public/serviceBackGround.png';
import {AllServicesContainer, Service, ServicesContainer, Shadow} from "../styledComponents/ServicesInfo-style";

function ServicesInfo({t}) {
    return (
        <>
            <ServicesContainer image={`url(${backGround})`} id={'blog'}>
                <Shadow/>
                <h2>{t("servicesInfo1")}</h2>
                <AllServicesContainer>

                    <Service>
                        <h6>{t("servicesInfo2")}</h6>
                        <p>Lorem ipsum dolor sit amet. A doloribus odio sed accusamus molestiae
                            sit earum adipisci et quos obcaecati ut .
                        </p>
                        <a href={''}>{t("servicesInfo3")}</a>
                    </Service>

                    <Service>
                        <h6>{t("servicesInfo2")}</h6>
                        <p>Lorem ipsum dolor sit amet. A doloribus odio sed accusamus molestiae
                            sit earum adipisci et quos obcaecati ut .
                        </p>
                        <a href={''}>{t("servicesInfo3")}</a>
                    </Service>

                    <Service>
                        <h6>{t("servicesInfo2")}</h6>
                        <p>Lorem ipsum dolor sit amet. A doloribus odio sed accusamus molestiae
                            sit earum adipisci et quos obcaecati ut .
                        </p>
                        <a href={''}>{t("servicesInfo3")}</a>
                    </Service>

                    <Service>
                        <h6>{t("servicesInfo2")}</h6>
                        <p>Lorem ipsum dolor sit amet. A doloribus odio sed accusamus molestiae
                            sit earum adipisci et quos obcaecati ut .
                        </p>
                        <a href={''}>{t("servicesInfo3")}</a>
                    </Service>

                </AllServicesContainer>
            </ServicesContainer>
        </>
    );
}

export default ServicesInfo;