import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit'; // или другой импорт в зависимости от версии MDBootstrap
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import iso from '../assets/icon/ISO.jpg'
import sgs from '../assets/icon/SGS.png'
import bg from '../assets/pages/bg.jpg'



const About = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);
    return (

        <>

            <MDBContainer fluid style={{ backgroundColor: "#1a3639" }} className='px-lg-5 uniqueBg'>
                {/* <MDBContainer> */}

                <MDBRow className='align-items-stretc mx-5 justify-content-center'>
                    <MDBCol className='' data-aos="fade-up" data-aos-duration="220" lg={2}>
                        <div className='text-white' >
                            <div className='d-flex align-items-center my-4'>
                                <h5>{t("contactsTitle")}</h5>
                                <div className='linee ms-3'></div>
                            </div>
                            <p className='fw-bold'>{t("phone1")}</p>
                            <p className='fw-light'><b className='fw-bold'>{t("phone")}</b> +993 65 56 80 60</p>
                            <p className='fw-light'><b className='fw-bold'>{t("address2")}</b> {t("addressText")}</p>
                            <p className='fw-light'><b className='fw-bold'>{t("email")}</b> info@salkynotag.com.tm</p>
                        </div>

                        <div className='text-white' data-aos="fade-up" data-aos-duration="260">
                            <div className='d-flex my-4 align-items-center '>
                                <h5 className=''>{t("workingHoursTitle")}</h5>
                                <div className='linee ms-3'></div>
                            </div>

                            <p className='fw-light'><b className='fw-bold'>{t("weekdays")}</b> 09:00 - 19:00</p>
                            <p className='fw-light'><b className='fw-bold'>{t("saturday")}</b> 09:00-14:00</p>
                            <p className='fw-light'><b className='fw-bold'>{t("sunday")}</b> {t("sundayClosed")}</p>

                        </div>

                        <img  data-aos="fade-right" data-aos-duration="500" src={iso} className='img-fluid mt-7' style={{ width: '19rem', borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem" }} alt="" />

                    </MDBCol>
                    <MDBCol className='text-white mt-4' style={{ paddingRight: 'unset' }} lg={8}>
                        <p className='fw-light' data-aos="fade-up" data-aos-duration="210">{t("companyDescription")}</p>

                        <div className='text-end'>
                            <img src={bg} data-aos="fade-left" data-aos-duration="300" className='img-fluid image' alt="" />
                        </div>

                        <MDBRow className='mt-3 justify-content-between'>
                            <MDBCol lg={6}>
                                <h5 data-aos="fade-up" data-aos-duration="400">{t("projectGuaranteeTitle")}</h5>
                                <p data-aos="fade-up" data-aos-duration="600" className='fw-light'>{t("projectGuaranteeDescription")}</p>
                            </MDBCol>

                            <MDBCol lg={6}>
                                <h5 data-aos="fade-up" data-aos-duration="400">{t("flexiblePricingTitle")}</h5>
                                <p data-aos="fade-up" data-aos-duration="600" className='fw-light'>{t("flexiblePricingDescription")}</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>

                <MDBRow className='text-white  align-items-' style={{ marginTop: '10rem' }}>
                    <MDBCol lg={12}>
                        <h4 data-aos="fade-up" data-aos-duration="300" className='w-50 mb-5'>
                            {t("isoQualityStandard")}
                        </h4>
                    </MDBCol>
                    <MDBCol className='mt-' lg={7}>
                        <h4 data-aos="fade-up" data-aos-duration="600">{t("professionalTeamTitle")}</h4>
                        <p data-aos="fade-up" data-aos-duration="900" className='fw-light mt-4'>{t("professionalTeamDescription")}</p>
                    </MDBCol>

                    <MDBCol className='text-center' lg={5}>
                        <img style={{ width: '20rem' }}  data-aos="fade-left" data-aos-duration="500" src={sgs} className='img-fluid' alt="" />
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </>

    )
};


export default About;
