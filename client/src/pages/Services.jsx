import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit'; // или другой импорт в зависимости от версии MDBootstrap
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import cart from '../assets/icon/cart.png'
import tool from '../assets/icon/tool.png'
import setting from '../assets/icon/setting.png'
import speech from '../assets/icon/speech.png'


import phone from '../assets/icon/phone.png'
import glass from '../assets/icon/glass.png'
import hammer from '../assets/icon/hammer.png'
import tick from '../assets/icon/tick.png'
import shield from '../assets/icon/shield.png'

import bg1 from '../assets/pages/bgTemplate1.png'
import bg2 from '../assets/pages/bgTemplate2.png'



import fav from "../assets/icon/fav.png";




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

            <MDBContainer fluid style={{

                backgroundImage: `url(${bg1})`,
                height: '1120px ',

                backgroundSize: 'cover',
                // Изображение будет растягиваться на весь блок
                backgroundPosition: 'top center',  // Центрирует изображение
                backgroundRepeat: 'no-repeat',  // Отключает повторение изображения
            }} className=' bg-image '>
                <MDBRow className='align-items-stretch mt-7 justify-content-between'>
                    <MDBCol className='px-4 mt-7' lg={7}>
                        <h1 className='mt-7 ps-3  fw-bold text-white'>Наши услуги</h1>
                        <MDBRow className='mt-5 mt-7 ps-3 text-white align-items-end'>
                            <MDBCol className='p-3' data-aos="fade-up" data-aos-duration="500" lg={6}>
                                <div className="d-flex align-items-start ">
                                    <img src={cart} className='img-fluid pe-2 pt-1' style={{ width: "3.5rem" }} />
                                    <div>
                                        <h2>Продажа кондиционеров</h2>
                                        <p className='fw-light  fs-5'>Бытовые и промышленные системы кондиционирования различной мощности.</p>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className='p-3' data-aos="fade-up" data-aos-duration="1000" lg={6}>
                                <div className="d-flex align-items-start ">
                                    <img src={tool} className='img-fluid pe-2 pt-1' style={{ width: "3.5rem" }} />
                                    <div>
                                        <h2>Монтаж и установка</h2>
                                        <p className='fw-light fs-5'>Профессиональный монтаж с соблюдением всех технических норм.</p>
                                    </div>
                                </div>

                            </MDBCol>
                            <MDBCol className='p-3' data-aos="fade-up" data-aos-duration="1500" lg={6}>
                                <div className="d-flex align-items-start ">
                                    <img src={setting} className='img-fluid pe-2 pt-1' style={{ width: "3.5rem" }} />
                                    <div>
                                        <h2>Сервис и ремонт</h2>
                                        <p className='fw-light fs-5'>Диагностика, профилактика заправка и полное восстановление систем.</p>
                                    </div>
                                </div>


                            </MDBCol>

                            <MDBCol className='p-3' data-aos="fade-up" data-aos-duration="2000" lg={6}>
                                <div className="d-flex align-items-start ">
                                    <img src={speech} className='img-fluid pe-2 pt-1' style={{ width: "3.5rem" }} />
                                    <div>
                                        <h2>Консультации</h2>
                                        <p className='fw-light fs-5'>Помощь в выборе оптимального оборудования для ваших потребностей.</p>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>


            <MDBContainer fluid style={{
                backgroundImage: `url(${bg2})`,
                height: '1600px',
                backgroundSize: 'cover',
                // Изображение будет растягиваться на весь блок
                backgroundPosition: 'top center',  // Центрирует изображение
                backgroundRepeat: 'no-repeat',  // Отключает повторение изображения
            }} className='bg-image'>
                <MDBRow className='justify-content-end mt-7'>
                    <MDBCol className="pe-4 text-end" lg={4}>
                        <h1 className="text-white  py-4">Процесс работы</h1>

                        <div data-aos="fade-left" data-aos-duration="500" className="d-flex align-items-center justify-content-end">
                            <div className="text-white">
                                <h4>Консультация</h4>
                                <p>Бесплатный выезд и оценка объекта.</p>
                            </div>
                            <div className="icon-container ms-3">
                                <img src={phone} style={{ width: "2.5rem" }} className="img-fluid" alt="Phone Icon" />
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="1000" className="d-flex align-items-center justify-content-end">
                            <div className="text-white">
                                <h4>Подбор</h4>
                                <p>Оптимальное оборудование для ваших задач.</p>
                            </div>
                            <div className="icon-container ms-3">
                                <img src={glass} style={{ width: "2.5rem" }} className="img-fluid" alt="Glass Icon" />
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="1500" className="d-flex align-items-center justify-content-end">
                            <div className="text-white">
                                <h4>Монтаж</h4>
                                <p>Профессиональная установка системы.</p>
                            </div>
                            <div className="icon-container ms-3">
                                <img src={hammer} style={{ width: "2.5rem" }} className="img-fluid" alt="Hammer Icon" />
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="2000" className="d-flex align-items-center justify-content-end">
                            <div className="text-white">
                                <h4>Пусконаладка</h4>
                                <p>Тестирование и ввод в эксплуатацию.</p>
                            </div>
                            <div className="icon-container ms-3">
                                <img src={tick} style={{ width: "2.5rem" }} className="img-fluid" alt="Tick Icon" />
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="2500" className="d-flex align-items-center justify-content-end">
                            <div className="text-white">
                                <h4>Обслуживание</h4>
                                <p>Гарантийный и постгарантийный сервис.</p>
                            </div>
                            <div className="icon-container ms-3">
                                <img src={shield} style={{ width: "2.5rem" }} className="img-fluid" alt="Shield Icon" />
                            </div>
                        </div>
                    </MDBCol>




                    <MDBCol lg={12} className='text-white mt-7'>

                        <h1 className='mt-7 text-center'>Свяжитесь с нами</h1>
                        <MDBRow className='justify-content-center mt-5 text-center'>

                            <MDBCol data-aos="fade-up" data-aos-duration="500" lg={6}>
                                <h1>24/7</h1>
                                <h5>Поддержка</h5>
                                <p>Круглосуточная служба помощи клиентам.</p>
                            </MDBCol>

                            <MDBCol data-aos="fade-up" data-aos-duration="1000" lg={6}>
                                <h1>1 год</h1>
                                <h5>Гарантия</h5>
                                <p>Полное обеспечение работы оборудования.</p>
                            </MDBCol>

                            <MDBCol data-aos="fade-up" data-aos-duration="1500" lg={6}>
                                <h1>1 час</h1>
                                <h5>Реакция</h5>
                                <p>Среднее время прибытия специалиста по городу.</p>
                            </MDBCol>
                        </MDBRow>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>




        </>

    )
};


export default About;
