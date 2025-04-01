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

            <MDBContainer style={{ backgroundColor: "#0f413e" }} className='my-4 rounded-7'>
                <MDBRow className='align-items-stretch justify-content-between'>
                    <MDBCol className='px-5' lg={7}>
                        <h1 className='mt-7 ps-3 text-white'>Наши услуги</h1>
                        <MDBRow className='mt-5 ps-3 text-white'>
                            <MDBCol data-aos="fade-up"  data-aos-duration="500" lg={6}>
                                <div className="d-flex align-items-start ">
                                    <img src={cart} className='img-fluid pe-2 pt-1' style={{ width: "2rem" }} />
                                    <div>
                                        <h3>Продажа кондиционеров</h3>
                                        <p className='fw-light'>Бытовые и промышленные системы кондиционирования различной мощности.</p>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol data-aos="fade-up"  data-aos-duration="1000" lg={6}>
                                <div className="d-flex align-items-start ">
                                    <img src={tool} className='img-fluid pe-2 pt-1' style={{ width: "2rem" }} />
                                    <div>
                                        <h3>Монтаж и установка</h3>
                                        <p className='fw-light'>Профессиональный монтаж с соблюдением всех технических норм.</p>
                                    </div>
                                </div>

                            </MDBCol>
                            <MDBCol data-aos="fade-up"  data-aos-duration="1500"  lg={6}>
                                <div className="d-flex align-items-start ">
                                    <img src={setting} className='img-fluid pe-2 pt-1' style={{ width: "2rem" }} />
                                    <div>
                                        <h3>Сервис и ремонт</h3>
                                        <p className='fw-light'>Диагностика, профилактика заправка и полное восстановление систем.</p>
                                    </div>
                                </div>


                            </MDBCol>

                            <MDBCol data-aos="fade-up"  data-aos-duration="2000" lg={6}>
                                <div className="d-flex align-items-start ">
                                    <img src={speech} className='img-fluid pe-2 pt-1' style={{ width: "2rem" }} />
                                    <div>
                                        <h3>Консультации</h3>
                                        <p className='fw-light'>Помощь в выборе оптимального оборудования для ваших потребностей.</p>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol className='text-end' style={{ paddingRight: 'unset' }} lg={5}>
                        <img src="https://placehold.co/450x600" className=' img-fluid text-end ' style={{ borderTopRightRadius: "1rem", borderEndEndRadius: "1rem" }} alt="" />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer style={{ backgroundColor: "#0f413e", position: 'relative' }} className='my-4 rounded-7'>

                <MDBRow className='p-3'>
                    <h1 className='text-white ps-5 py-4'>Процесс работы</h1>
                    <MDBCol  className='ps-5'>
                        <div style={{ position: 'relative' }}>
                            <img
                                className='img-fluid'
                                src={fav}
                                style={{ opacity: '.2', position: 'absolute', width: '30rem', left: '65%' }}
                            />
                        </div>

                        <div  data-aos="fade-right"  data-aos-duration="500" className='d-flex align-items-center'>
                            <div class="icon-container me-3">
                                <img src={phone} style={{ width: '2.5rem' }} className='img-fluid' alt="Phone Icon" />
                            </div>
                            <div className='text-white'>
                                <h4>Консультация</h4>
                                <p>Бесплатный выезд и оценка объекта.</p>
                            </div>
                        </div>

                        <div data-aos="fade-right"  data-aos-duration="1000" className='d-flex align-items-center'>
                            <div class="icon-container me-3">
                                <img src={glass} style={{ width: '2.5rem' }} className='img-fluid' alt="Phone Icon" />
                            </div>
                            <div className='text-white'>
                                <h4>Подбор</h4>
                                <p>Оптимальное оборудование для ваших задач.</p>
                            </div>
                        </div>

                        <div data-aos="fade-right"  data-aos-duration="1500" className='d-flex align-items-center'>
                            <div class="icon-container me-3">
                                <img src={hammer} style={{ width: '2.5rem' }} className='img-fluid' alt="Phone Icon" />
                            </div>
                            <div className='text-white'>
                                <h4>Монтаж</h4>
                                <p>Профессиональная установка системы.</p>
                            </div>
                        </div>

                        <div data-aos="fade-right"  data-aos-duration="2000" className='d-flex align-items-center'>
                            <div class="icon-container me-3">
                                <img src={tick} style={{ width: '2.5rem' }} className='img-fluid' alt="Phone Icon" />
                            </div>
                            <div className='text-white'>
                                <h4>Пусконаладка</h4>
                                <p>Тестирование и ввод в эксплуатацию.</p>
                            </div>
                        </div>

                        <div data-aos="fade-right"  data-aos-duration="2500" className='d-flex align-items-center'>
                            <div class="icon-container me-3">
                                <img src={shield} style={{ width: '2.5rem' }} className='img-fluid' alt="Phone Icon" />
                            </div>
                            <div className='text-white'>
                                <h4>Обслуживание</h4>
                                <p>Гарантийный и постгарантийный сервис.</p>
                            </div>
                        </div>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>

    )
};


export default About;
