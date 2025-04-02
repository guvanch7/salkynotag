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


    return (

        <>

            <MDBContainer fluid style={{ backgroundColor: "#1a3639" }} className='px-lg-5 uniqueBg'>
                {/* <MDBContainer> */}

                <MDBRow className='align-items-stretc mx-5 justify-content-center'>
                    <MDBCol className='' lg={2}>
                        <div className='text-white'>
                            <div className='d-flex align-items-center my-4'>
                                <h5>Наши контакты </h5>
                                <div className='linee ms-3'></div>
                            </div>
                            <p className='fw-bold'>Телефон: +993 12 75 41 40</p>
                            <p className='fw-light'><b className='fw-bold'>Телефон:</b> +993 65 56 80 60</p>
                            <p className='fw-light'><b className='fw-bold'>Адрес:</b> Г. Кулиева 46 (2127) 744000, Ашхабад, Туркменистан</p>
                            <p className='fw-light'><b className='fw-bold'>E-Mail:</b> info@salkynotag.com.tm</p>
                        </div>

                        <div className='text-white'>
                            <div className='d-flex my-4 align-items-center '>
                                <h5 className=''>Часы работы</h5>
                                <div className='linee ms-3'></div>
                            </div>

                            <p className='fw-light'><b className='fw-bold'>Пн по Пт:</b> 09:00 - 19:00</p>
                            <p className='fw-light'><b className='fw-bold'>Суббота:</b> 09:00-14:00</p>
                            <p className='fw-light'><b className='fw-bold'>Воскресенье:</b> Выходной</p>

                        </div>

                        <img src={iso} className='img-fluid mt-7' style={{ width: '19rem', borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem" }} alt="" />

                    </MDBCol>
                    <MDBCol className='text-white mt-4' style={{ paddingRight: 'unset' }} lg={8}>
                        <p className='fw-light'>Компания "Salkyn Otag" специализируется на предоставлении полного спектра услуг по продаже и установке климатического оборудования, а также дальнейшей оптимизации систем отопления, кондиционирования и вентиляции помещений. Мы предлагаем инженерные решения и монтаж оборудования от мировых производителей, которые может использоваться как на производстве, так и в жилых помещениях и офисах. За многолетний период работы, наша компания успешно реализовала обширный перечень проектов различной сложности на всей территории Туркменистана. Лучше любых слов о профессионализме, ответственности и квалификации специалистов компании скажут только отзывы от наших клиентов. </p>

                        <div className='text-end'>
                            <img src={bg} className='img-fluid image' alt="" />
                        </div>


                        <MDBRow className='mt-3 justify-content-between'>
                            <MDBCol lg={6}>
                                <h5>Гарантия сдачи проектов в срок:</h5>
                                <p className='fw-light'>Компания "Salkyn Otag" гарантирует сдачу проекта в срок. Мы можем себе это позволить благодаря инженерному составу и монтажным бригадам. Весь персонал компании является специалистами высокого класса с большим опытом работы.</p>
                            </MDBCol>

                            <MDBCol lg={6}>
                                <h5>Гибкая ценовая политика:</h5>
                                <p className='fw-light'>Для каждого клиента мы составляем детальную смету, после изучения которой ни у кого не остается сомнений в обоснованности стоимости наших услуг и выборе оптимального технического решения. </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                {/* </MDBContainer> */}

                <MDBRow className='text-white  align-items-' style={{marginTop:'10rem'}}>
                    <MDBCol lg={12}>
                        <h4 className='w-50 mb-5'>
                            Мы соответствуем стандарту качества системы менеджмента ISO 9001, о чем свидетельствует сертификат.
                        </h4>
                    </MDBCol>
                    <MDBCol className='mt-' lg={7}>
                        <h4>Команда профессионалов:</h4>
                        <p className='fw-light mt-4'>Многолетний опыт сотрудников в сфере климатического оборудования. Профессиональное качество обслуживания, индивидуальный подход и полный контроль качества выполняемой работы.</p>
                    </MDBCol>


                    <MDBCol className='text-center' lg={5}>
                        <img style={{ width: '20rem' }} src={sgs} className='img-fluid' alt="" />
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </>

    )
};


export default About;
