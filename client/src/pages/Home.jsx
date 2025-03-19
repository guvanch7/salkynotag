import { useState, forwardRef  } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBContainer,
    MDBBtn,
} from "mdb-react-ui-kit";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Work from "../components/workProcess";
import AirConditionersList from "../components/airConditioner";
import AirConditionerFilter from "../components/AirConditionerFilter";
import { ScrollParallax, MouseParallax } from 'react-just-parallax';

import about from '../assets/pages/about.jpg'
import bg from '../assets/pages/bg.jpg'

import conditionary from '../assets/icon/conditionary.png'
import heating from '../assets/icon/heating.png'
import ventilation from '../assets/icon/ventilation.png'
import service from '../assets/icon/service.png'

import handshake from '../assets/icon/handshake.png'
import innovation from '../assets/icon/innovation.png'
import details from '../assets/icon/details.png'
import quality from '../assets/icon/quality.png'
import logistics from '../assets/icon/logistics.png'
import reputation from '../assets/icon/reputation.png'
import "../App.css";



function Home({ searchQuery, targetRef  }) {
    const { t } = useTranslation();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState({ type: [], brand: [], power: [], color: [] });
    const [activeIndex, setActiveIndex] = useState(0);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const toggleFilter = () => {
        setIsFilterOpen(prev => !prev);
    };
    const handleSlideChange = (index) => {
        setActiveIndex(index);
    };

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <Header />

            <div className="bg-white">


                {/* <MDBContainer className="text-black" style={{ marginTop: '-40px', position: 'relative' }}>
                    <MDBRow className="justify-content-evenly" style={{ height: '100%' }}>
                        <MDBCol lg={3} className="s-prod-list__item  d-flex flex-column" style={{ minHeight: '300px' }}>
                            <div className="d-flex flex-column p-4" style={{ flexGrow: 1 }}>
                                <img src={conditionary} style={{ width: '6rem' }} className="mb-3" />
                                <h4 className="text-black">Кондиционирование</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </MDBCol>
                        <MDBCol lg={3} className="s-prod-list__item d-flex flex-column" style={{ minHeight: '300px' }}>
                            <div className="d-flex flex-column p-4" style={{ flexGrow: 1 }}>
                                <img src={heating} style={{ width: '6rem' }} className="mb-3" />
                                <h4>Обогрев</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </MDBCol>
                        <MDBCol lg={3} className="s-prod-list__item d-flex flex-column" style={{ minHeight: '300px' }}>
                            <div className="d-flex flex-column p-4" style={{ flexGrow: 1 }}>
                                <img src={ventilation} className="img-fluid mb-3" style={{ width: '6rem' }} />
                                <h4>Вентиляция</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </MDBCol>

                        <MDBCol lg={3} className="s-prod-list__item d-flex flex-column" style={{ minHeight: '300px' }}>
                            <div className="d-flex flex-column p-4" style={{ flexGrow: 1 }}>
                                <img src={service} className="img-fluid mb-3" style={{ width: '6rem' }} />
                                <h4>Сервисное обслуживание</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer> */}


                <MDBContainer fluid className="pt-4 mb-5" id="products-section">
                        {/* <div>
                            <span class="badge bg-white text-black rounded-pill">Продукты</span>
                        </div>
                        <h1 className="text-black">Оборудования</h1> */}




                        {/* Передаем isFilterOpen в AirConditionersList */}
                        {/* Кнопка управления фильтром */}
                        {/* <div className="text-lg-end ">

                            <button onClick={toggleFilter} className="my-3 filterBtn   bg-none border-0">

                                <div data-testid="filters-icon" alt="" class="[&amp;_svg]:w-inherit [&amp;_svg]:h-inherit [&amp;_svg]:[stroke-opacity:1] mx-3  inline-block relative top-0.5 pe-3 fill-current-color">
                                    {isFilterOpen ? 'Скрыть фильтр' : 'Показать фильтр'}
                                    <svg xml:space="preserve" className=" " style={{ fill: "#2e2e2e", margin:'0 10px' }} viewBox="0 0 14 10.7" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="prefix-Layer_1" version="1.1" aria-hidden="true" focusable="false" fill="currentColor" width="1em" height="1em">

                                        <path d="M14,8.7c0,0.3-0.4,0.6-0.8,0.6c-0.1,0-0.3,0-0.4,0c-1.4,0-2.7,0-4.1,0c-0.6,0-1.2,0-1.8,0
	c-0.3,0.8-1,1.4-1.9,1.4c-0.9,0-1.6-0.6-1.9-1.4c-0.8,0-1.6,0-2.4,0C0.4,9.3,0,9,0,8.7c0-0.3,0.4-0.6,0.8-0.6c0.1,0,0.3,0,0.4,0
	c0.6,0,1.3,0,1.9,0c0.2-0.8,1-1.4,1.9-1.4C6,6.7,6.7,7.3,7,8.1c1.2,0,2.5,0,3.7,0c0.9,0,1.8,0,2.6,0C13.7,8.1,14,8.4,14,8.7z
	 M0.8,2.6c0.9,0,1.8,0,2.6,0c1.4,0,2.7,0,4.1,0C7.7,3.5,8.5,4,9.4,4c0.9,0,1.7-0.6,1.9-1.4c0.5,0,1,0,1.5,0c0.1,0,0.3,0,0.4,0
	C13.7,2.6,14,2.4,14,2c0-0.3-0.4-0.6-0.8-0.6c-0.7,0-1.3,0-2,0C11,0.6,10.3,0,9.4,0C8.5,0,7.7,0.6,7.5,1.4c-0.7,0-1.4,0-2.1,0
	c-1.4,0-2.7,0-4.1,0c-0.1,0-0.3,0-0.4,0C0.4,1.4,0,1.7,0,2C0,2.4,0.4,2.6,0.8,2.6z"></path></svg></div>

                            </button>
                        </div> */}
                    <MDBRow>


                        {/* Передаем состояние фильтра */}
                        <AirConditionersList isFilterOpen={!isFilterOpen}  searchQuery={searchQuery} ref={targetRef} />
                    </MDBRow>
                </MDBContainer>


                {/* <MDBContainer className="mt-5">
                    <MDBRow>
                        <MDBCol lg={6} className="" style={{ position: 'relative' }}>
                            <div className="rounded-9 bg-dark px-3 py-3" style={{ position: 'absolute', top: '30px', left: "5%" }}>
                                <h3 className="text-white fw-bolder">10+ years</h3>
                                <h3 className="text-white fw-bolder">Experience</h3>
                            </div>

                            <img src={about} className="img-fluid" />

                            <div className="rounded-9 bg-dark px-3 py-3" style={{ position: 'absolute', bottom: '30px', left: "48%" }}>
                                <h3 className="text-white  fw-bolder">Смотреть! </h3>
                                <MDBBtn className="text-center mx-5" size='lg' floating style={{ backgroundColor: 'red', margin: '0 auto' }} href='#'>
                                    <MDBIcon fas size="lg" icon="play" />
                                </MDBBtn>
                            </div>

                        </MDBCol>

                        <MDBCol lg={6}>
                            <div>
                                <span class="badge bg-white text-black rounded-pill">О нас</span>
                            </div>
                            <h1 className="text-black">Мы создадим <span> правильный климат и температуру </span> для вашего дома</h1>
                            <p className="mt-3">Sed risus augue, commodo ornare felis non, eleifend molestie metus. Donec nec purus porttitor, ultrices diam id, laoreet mi. Aenean sit amet enim quis massa pharetra eleifend.</p>

                            <div className="py-3">
                                <h6 className="text-black  pt-2"><MDBIcon className="text-success pe-4" fas icon="check" /> Qualified specialists</h6>
                                <h6 className="text-black  pt-2"><MDBIcon className="text-success pe-4" fas icon="check" /> 5 years warranty</h6>
                                <h6 className="text-black  pt-2"><MDBIcon className="text-success pe-4" fas icon="check" /> Bonus system</h6>
                            </div>

                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <a href="tel:+99361123456" className=" d-flex align-items-center">
                                        <MDBBtn className="text-center me-4" size='lg' floating style={{ backgroundColor: 'green' }} href='#'>
                                            <MDBIcon size="xl" fas icon="phone" />
                                        </MDBBtn>
                                        <h5 className="text-black">+993 (61)-12-34-56</h5>
                                    </a>


                                </div>

                                <div className="col-lg-6">
                                    <a href="" className=" d-flex align-items-center">
                                        <MDBBtn className="text-center me-4" size='lg' floating style={{ backgroundColor: 'red' }} href='#'>
                                            <MDBIcon size="xl" fas icon="file-pdf" />
                                        </MDBBtn>
                                        <h5 className="text-black">Скачать PDF-каталог</h5>
                                    </a>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer> */}


                {/* <MDBContainer fluid className="bg-black bg-image mt-3" style={{ backgroundImage: `url(${bg})` }}>
                    <div>

                        <MDBContainer className="mt-3 pt-5">
                            <ScrollParallax>
                                <MDBRow className="pt-5">
                                    <MDBCol lg={3}>

                                        <div>
                                            <span class="badge bg-white text-black rounded-pill">Преимущества</span>
                                        </div>
                                        <h1 className="text-light">Почему выбирают нас?</h1>
                                        <p className="text-white">Мы ценим доверие наших клиентов и предлагаем надежные решения, высокий уровень сервиса и профессиональный подход. Наш опыт и ответственность помогают нам находить оптимальные решения для любых задач.</p>
                                    </MDBCol>

                                    <MDBCol lg={9}>
                                        <MDBRow className="justify-content-center gap-2">

                                            <MDBCol lg={3} className="s-prod-list__item bg-white m-3 d-flex flex-column" style={{ minHeight: '300px' }}>
                                                <div className="d-flex flex-column p-2" style={{ flexGrow: 1 }}>
                                                    <div class="diamond-container mt-2">
                                                        <img src={handshake} style={{ width: '6rem' }} className="mb-3" />
                                                    </div>

                                                    <h4 className="text-black">Большой опыт</h4>
                                                    <p>Успешно реализовано более 100 проектов </p>
                                                </div>
                                            </MDBCol>

                                            <MDBCol lg={3} className="s-prod-list__item m-3 d-flex flex-column" style={{ minHeight: '300px' }}>
                                                <div className="d-flex flex-column p-2" style={{ flexGrow: 1 }}>
                                                    <div class="diamond-container mt-2">
                                                        <img src={innovation} style={{ width: '6rem' }} className="mb-3" />
                                                    </div>
                                                    <h4 className="text-black">Инновационные решения</h4>
                                                    <p>Самые современные инженерные технологии и оброудования</p>
                                                </div>
                                            </MDBCol>

                                            <MDBCol lg={3} className="s-prod-list__item m-3 d-flex flex-column" style={{ minHeight: '300px' }}>
                                                <div className="d-flex flex-column p-2" style={{ flexGrow: 1 }}>
                                                    <div class="diamond-container mt-2">
                                                        <img src={details} style={{ width: '6rem' }} className="mb-3" />
                                                    </div>
                                                    <h4 className="text-black">Внимание к деталям</h4>
                                                    <p>Полная концентрация на потребностях и желаниях наших клиентов </p>
                                                </div>
                                            </MDBCol>

                                            <MDBCol lg={3} className="s-prod-list__item m-3 d-flex flex-column" style={{ minHeight: '300px' }}>
                                                <div className="d-flex flex-column p-2" style={{ flexGrow: 1 }}>
                                                    <div class="diamond-container mt-2">
                                                        <img src={quality} style={{ width: '6rem' }} className="mb-3" />
                                                    </div>
                                                    <h4 className="text-black">Опыт и качество</h4>
                                                    <p>Большой опыт по установке и продаже климатического оборудования</p>
                                                </div>
                                            </MDBCol>

                                            <MDBCol lg={3} className="s-prod-list__item m-3 d-flex flex-column" style={{ minHeight: '300px' }}>
                                                <div className="d-flex flex-column p-2" style={{ flexGrow: 1 }}>
                                                    <div class="diamond-container mt-2">
                                                        <img src={logistics} style={{ width: '6rem' }} className="mb-3" />
                                                    </div>
                                                    <h4 className="text-black">Бесперебойные поставки</h4>
                                                    <p>Благодаря налаженному комплексу услуг по логистике, достигается стабильность поставок</p>
                                                </div>
                                            </MDBCol>

                                            <MDBCol lg={3} className="s-prod-list__item m-3 d-flex flex-column" style={{ minHeight: '300px' }}>
                                                <div className="d-flex flex-column p-2" style={{ flexGrow: 1 }}>
                                                    <div class="diamond-container mt-2">
                                                        <img src={reputation} style={{ width: '6rem' }} className="mb-3" />
                                                    </div>
                                                    <h4 className="text-black">Надежные специалисты</h4>
                                                    <p>Внушительный опыт, ответственность и постоянный профессиональный рост наших специалистов</p>
                                                </div>
                                            </MDBCol>
                                        </MDBRow>

                                    </MDBCol>
                                </MDBRow>
                            </ScrollParallax>
                        </MDBContainer>
                    </div>

                </MDBContainer> */}

                {/* <Work /> */}


                {/* <MDBContainer className="mt-5">
                    <MDBRow>
                        <h1 className="text-black">Наши партнеры</h1>
                    </MDBRow>
                </MDBContainer> */}

            </div>



        </>
    );
}

export default Home;
