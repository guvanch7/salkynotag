import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit'; // или другой импорт в зависимости от версии MDBootstrap
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import bouygues from '../assets/partners/bougues.png'
import gazprom from '../assets/partners/gazprom.png'
import byy from '../assets/partners/byy.png'
import georgia from '../assets/partners/georgia.png'
import aragatnasyk from '../assets/partners/aragatnasyk.png'
import kopetdag from '../assets/partners/kopetdag.png'
import petrogas from '../assets/partners/petrogas.png'
import russianPos from '../assets/partners/russianPos.png'
import seaport from '../assets/partners/seaport.png'
import softline from '../assets/partners/softline.png'
import telecom from '../assets/partners/telecom.png'
import teleradio from '../assets/partners/teleradio.png'
import tmcell from '../assets/partners/tmcell.png'
import toyota from '../assets/partners/toyota.svg'
import unrcca from '../assets/partners/unrcca.png'
import vneshka from '../assets/partners/vneshka.png'
import gurlusyk from '../assets/partners/gurlusyk.png'
import belarus from '../assets/partners/belarus.png'
import hyundai from '../assets/partners/hyundai.png'
import who from '../assets/partners/who.png'
import aktoprak from '../assets/partners/aktoprak.png'
import morin from '../assets/partners/morin.png'
import chatma from '../assets/partners/chatma.png'
import turkmenturk from '../assets/partners/turkmenturk.png'
import './partner.css'


const Partners = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (

        <>

            <MDBContainer fluid className='my-4 px-8' >
                <h1 className='text-center text-black'> {t("partners")}</h1>
                <p className='text-center'> {t("partnerSlogan")}</p>
                <MDBRow className=''>
                    <MDBCol lg={12}>
                        <h2 className='text-black'>Партнеры</h2>
                        <h4 className='text-muted fw-light'></h4>
                        <p>  {t("partnerTxt1")}

                            <br />         {t("partnerList1")}
                            <br />       {t("partnerList2")}
                            <br />       {t("partnerList3")}
                            <br />     {t("partnerList4")}
                            <br />       {t("partnerList5")}
                            <br />      {t("partnerList6")}
                            <br />        {t("partnerTxt2")}

                        </p>
                    </MDBCol>




                    <MDBRow className="g-0 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6">
                        {[bouygues, gazprom, byy, georgia, aragatnasyk, kopetdag, petrogas, russianPos, seaport, softline, telecom, teleradio, tmcell, toyota, unrcca, vneshka, gurlusyk, belarus, hyundai, who, aktoprak, morin, chatma, turkmenturk].map((logo, idx) => (
                            <MDBCol key={idx} className="d-flex justify-content-center align-items-center p-5">
                                <a href="#" data-aos="fade-down" data-aos-duration="500" className="op-08">
                                    <img src={logo} alt="Client Logo" className="img-logo" />
                                </a>
                            </MDBCol>
                        ))}
                    </MDBRow>
                </MDBRow>
            </MDBContainer>
        </>

    )
};


export default Partners;
