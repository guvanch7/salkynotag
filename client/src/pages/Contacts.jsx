import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit'; // или другой импорт в зависимости от версии MDBootstrap
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import tiktok from '../assets/icon/tik-tok.png'
import instagram from '../assets/icon/instagram.png'
import facebook from '../assets/icon/facebook.png'
import whatsapp from '../assets/icon/whatsapp.png'
import { ScrollParallax, MouseParallax } from 'react-just-parallax';


const Contacts = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (

        <>

            <MDBContainer className='my-4'>
                <MDBRow className='justify-content-center align-items-center'>
                    <h1 className='text-black text-center'>{t("contactUs")}</h1>
                    <p className='text-center'>{t("contactPar")}</p>

                    <MDBCol className='conta shadow-5 rounded-6 text-white p-5 position-relative' style={{ backgroundColor: "rgb(11, 85, 94)" }} data-aos="fade-right" lg={4}>


                        <div className="circle circle-small"></div>
                        <div className="circle circle-large"></div>


                        <h2 className='text-white'>{t("contactInfo")}</h2>
                        <p>{t("contactInfoTxt")}</p>
                        <div className='mt-4 text-white fs-5'>
                            <p className='py-2'> <MDBIcon className='pe-2' fas icon="map-marker-alt" />  {t("address")}</p>
                            <p className='py-2'> <MDBIcon className='pe-2' fas icon="phone" />+993 12 75 41 40</p>
                            <p className='py-2'> <MDBIcon className='pe-2' fas icon="phone" />+993 65 50 80 60</p>
                            <p className='py-2'> <MDBIcon className='pe-2' fas icon="envelope" />info@salkynotag.com.tm</p>
                        </div>

                        <div className="social-icons mt-7 d-flex align-items-center gap-3">
                            <a href="https://www.instagram.com/salkyn_otag/" className="p-1 social">
                                <img src={instagram} style={{ width: '1.5rem' }} alt="Instagram" />
                            </a>

                            <a href="https://www.tiktok.com/@salkyn_otag" className=" p-1 social">
                                <img src={tiktok} style={{ width: '1.3rem' }} alt="TikTok" />
                            </a>

                            <a href="https://www.facebook.com/hashtag/salkynotag/?source=feed_text&epa=HASHTAG&locale=ms_MY" className="p-1 social">
                                <img src={facebook} style={{ width: '.7rem' }} alt="Facebook" />
                            </a>

                            <a href="#" className="p-1 social">
                                <img src={whatsapp} style={{ width: '1.6rem' }} alt="Whatsapp" />
                            </a>
                        </div>
                    </MDBCol>

                    <MDBCol data-aos="fade-left" lg={8} sm={12} className="map-container">
                        <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.572964698913!2d58.414742899999986!3d37.963755899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6fff71e741adf9%3A0xe504828d303c60db!2sHK%20Salkyn%20Otag!5e0!3m2!1sru!2snl!4v1743200445436!5m2!1sru!2snl"
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                    border: "0"
                                }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </MDBCol>



                </MDBRow>




            </MDBContainer>
        </>

    )
};


export default Contacts;
