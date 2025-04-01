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

            <MDBContainer className='my-4'>
                <h1 className='text-center text-black'> {t("partners")}</h1>
                <p className='text-center'> {t("partnerSlogan")}</p>
                <MDBRow>
                    <MDBCol lg={12}>
                        <h2 className='text-black'>Партнеры</h2>
                        <h4 className='text-muted fw-light'></h4>
                        <p>
                            ИП «Салкын Отаг» активно ищет партнёров, а также продукты, интересные для рынка Туркменистана. Мы всегда открыты для новых идей и моделей сотрудничества. Стратегическая цель «Салкын Отаг» – постоянное развитие портфеля продуктов и увеличение продаж. Почему мы можем считать себя лучшим партнёром:
                    <br />        • Глубокое знание рынка позволяет нам функционировать во всех городах Туркменистана и осуществлять продажи по выгодным ценам, а сервис качественно и в срок.
                    <br />        • Мы нацелены на долгосрочные партнёрские отношения.
                    <br />        • Эффективная организация логистики, и последующая цепочка продаж и маркетинга.
                    <br />        • Собственная команда инженеров и технический состав с международной квалификацией.
                    <br />        • Хорошо развитые функции PR.
                    <br />        • Следование этическим нормам ведения бизнеса.
                    <br />        В качестве первого шага к успешному партнерству свяжитесь с нами для получения более подробной информации.
                        </p>
                    </MDBCol>




                    <MDBCol lg={12}>

                        <ul class="clients-grid grid-border row row-cols-2 row-cols-sm-3 row-cols-md-6 mb-0">
                            <li class="col-padding"><a class="op-08" href="#"><img className='img-fluid' src={bouygues} alt="Clients" /></a></li>
                            <li class="col-padding"><a class="op-08" href="#"><img className='img-fluid' src={gazprom} alt="Clients" /></a></li>
                            <li class="col-padding"><a class="op-08" href="#"><img className='img-fluid' src={byy} alt="Clients" /></a></li>
                            <li class="col-padding"><a class="op-08" href="#"><img className='img-fluid' src={georgia} alt="Clients" /></a></li>
                            <li class="col-padding"><a class="op-08" href="#"><img className='img-fluid' src={aragatnasyk} alt="Clients" /></a></li>
                            <li class="col-padding"><a class="op-08" href="#"><img className='img-fluid' src={kopetdag} alt="Clients" /></a></li>
                            <li class="col-padding"><a class="op-08 " href="#"><img className='img-fluid' src={petrogas} alt="Clients" /></a></li>
                            <li class="col-padding" > <a class="op-08" href="#"><img className='img-fluid' src={russianPos} alt="Clients" /></a></li>
                            <li class="col-padding"><a class="op-08" href="#"><img className='img-fluid' src={seaport} alt="Clients" /></a></li>
                            <li class="col-padding" style={{ paddingTop: '3.3rem' }}><a class="op-08" href="#"><img className='img-fluid' src={softline} alt="Clients" /></a></li>
                            <li class="col-padding" style={{ paddingTop: '3.9rem' }}><a class="op-08 " href="#"><img className='img-fluid' src={telecom} alt="Clients" /></a></li>
                            <li class="col-padding"><a class="op-08" href="#"><img className='img-fluid' src={teleradio} alt="Clients" /></a></li>
                            <li class="col-padding p-3"><a class="op-08" href="#"><img src={tmcell} className='img-fluid' alt="Clients" /></a></li>
                            <li class="col-padding p-3"><a class="op-08" href="#"><img src={toyota} className='img-fluid' alt="Clients" /></a></li>
                            <li class="col-padding p-3"><a class="op-08" href="#"><img src={unrcca} className='img-fluid' alt="Clients" /></a></li>
                            <li class="col-padding p-3"><a class="op-08" href="#"><img src={vneshka} className='img-fluid' alt="Clients" /></a></li>
                            <li class="col-padding p-3"><a class="op-08" href="#"><img src={gurlusyk} className='img-fluid' alt="Clients" /></a></li>
                            <li class="col-padding p-3"><a class="op-08" href="#"><img src={belarus} className='img-fluid' alt="Clients" /></a></li>
                            <li class="col-padding p-3"><a class="op-08" href="#"><img src={hyundai} className='img-fluid' alt="Clients" /></a></li>
                            <li class="col-padding p-3"><a class="op-08" href="#"><img src={who} className='img-fluid' alt="Clients" /></a></li>
                            <li class="col-padding p-3"><a class="op-08" href="#"><img src={aktoprak} className='img-fluid' alt="Clients" /></a></li>
                            <li class="col-padding p-3"><a class="op-08" href="#"><img src={morin} className='img-fluid' alt="Clients" /></a></li>
                            <li class="col-padding p-3"><a class="op-08" href="#"><img src={chatma} className='img-fluid' alt="Clients" /></a></li>
                        </ul>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
        </>

    )
};


export default Partners;
