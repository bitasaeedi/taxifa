import React from 'react';
import backGround from '../public/serviceBackGround.png';
import {AllServicesContainer, Service, ServicesContainer, Shadow} from "../styledComponents/ServicesInfo-style";
import { useNavigate } from "react-router-dom";
function ServicesInfo({t}) {
    const navigate = useNavigate();
    return (
        <>
            <ServicesContainer image={`url(${backGround})`} id={'blog'}>
                <Shadow/>
                <h2>{t("servicesInfo1")}</h2>
                <AllServicesContainer>

                    <Service onClick={()=>{ navigate('/price');}}>
                        <h6>{t("serviceTitle1")}</h6>
                        <p>{t("service1")}</p>
                        <a href={''}>{t("servicesInfo3")}</a>
                    </Service>

                    <Service onClick={()=>{ navigate('/price');}}>
                        <h6>{t("serviceTitle2")}</h6>
                        <p>{t("service2")}</p>
                        <a href={''}>{t("servicesInfo3")}</a>
                    </Service>

                    <Service onClick={()=>{ navigate('/price');}}>
                        <h6>{t("serviceTitle3")}</h6>
                        <p>{t("service3")}</p>
                        <a href={''}>{t("servicesInfo3")}</a>
                    </Service>

                    <Service onClick={()=>{ navigate('/price');}}>
                        <h6>{t("serviceTitle4")}</h6>
                        <p>{t("service4")}</p>
                        <a href={''}>{t("servicesInfo3")}</a>
                    </Service>

                </AllServicesContainer>
            </ServicesContainer>
        </>
    );
}

export default ServicesInfo;