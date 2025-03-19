import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import fav from "../assets/icon/fav.png";
import process from "../assets/icon/process.png";
import '../App.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
    const [activeButton, setActiveButton] = useState(0);

    const contents = [
        {
            title: 'Проектирование, Документация, Надзор',
            paragraphs: [
                'Разработка решений в области вентиляции, отопления и кондиционирования воздуха.',
                'Составление проектной документации.',
                'Содействие и сопровождение проектов с органами государственного надзора',
                'Техническое сопровождение и ответственный надзор',
                'Техническая экспертиза на нулевой стадии'
            ]
        },
        {
            title: 'Сервисное обслуживание',
            paragraphs: [
                'Постоянный мониторинг и полный контроль технического состояния инженерных систем.',
                'Гарантийное обслуживание систем.',
                'Оперативное управление оборудованием и оценка работоспособности инженерных систем',
                'Регламентные и специальные работы',
                'Техническая поддержка',
                'Оптимизация и модернизация устаревших систем',
                'Комплексное техническое обслуживание'
            ]
        },
        {
            title: 'Монтаж систем и пусконаладочные работы',
            paragraphs: [
                'Подбор и закупка оборудования',
                'Монтаж систем согласно проектному плану',
                'В случае необходимости - коррекция изменений проекта',
                'Пусконаладочные работы, тестирование систем'
            ]
        },
    ];

    // Автоматическое переключение каждые 3 секунды
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveButton(prev => (prev + 1) % contents.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [contents.length]);

    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

    useEffect(() => {
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    }, [activeButton]);

    return (
        <MDBContainer className='bg-black py-5' fluid>
            <MDBContainer className="text-white">
                <MDBRow>
                    <MDBCol lg="4" className="bg-image pb-5" style={{ height: '600px' }}>
                        <img
                            className='img-fluid'
                            src={fav}
                            style={{ opacity: '.2', position: 'absolute', top: '27%', right: '10%' }}
                            alt=""
                        />
                        <h1>Этапы работ</h1>
                        <p>
                            Мы предлагаем полный комплекс работ – от проектирования, документации и надзора до монтажа и пусконаладочных работ, обеспечивая надежность инженерных систем.
                        </p>
                    </MDBCol>

                    <MDBCol lg="8" className="justify-content-center align-items-center">
                        {/* Динамический контент */}
                        <div key={`content-${activeButton}`} className="dynamic-content">
                            <div className='d-flex align-items-center' data-aos="fade-up">
                                <img
                                    src={process}
                                    style={{ width: '5rem', height: '5rem' }}
                                    className='bg-white me-5 rounded-8 img-fluid'
                                    alt=""
                                />
                                <h1 data-aos="fade-right">{contents[activeButton].title}</h1>

                                <div  className="circle-buttons d-flex flex-column align-items-center justify-content-center">
                                    {contents.map((_, idx) => (
                                        <button
                                            key={idx}
                                            className={` circle-button ${activeButton === idx ? 'active' : ''}`}
                                            onClick={() => setActiveButton(idx)}
                                        >
                                            <svg width="100"   height="100">
                                                <circle cx="50" cy="50" r="40" />
                                            </svg>
                                        </button>
                                    ))}
                                </div>

                            </div>
                            {contents[activeButton].paragraphs.map((para, idx) => (
                                <p key={idx} className='mt-3 py-2' data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                                    {para}
                                </p>
                            ))}
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBContainer>
    );
};

export default Work;
