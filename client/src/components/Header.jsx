import { useState, useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBBtn,
} from "mdb-react-ui-kit";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

// Импорты картинок
import slider1 from "../assets/slider/slider.jpg";
import slider2 from "../assets/slider/slider2.jpg";
import slider3 from "../assets/slider/slider3.jpg";

import "../App.css";

const slides = [
    { image: slider1, text: "Широкий выбор моделей от лучших мировых производителей!" },
    { image: slider2, text: "Сервисное и гарантийное обслуживание" },
    { image: slider3, text: "Промышленные холодильные машины с воздушным и водяным охлаждением" },
];

function Header() {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };


    // Автосмена слайдов каждые 5 секунд
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
    }, []);

    return (
        <div className="header-container">
            {/* Блок с анимированной сменой фонового изображения */}
            <div className="background-wrapper bg-image">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={slides[activeIndex].image}
                        src={slides[activeIndex].image}
                        className="background-image"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                </AnimatePresence>
            </div>

            {/* Затемненная маска */}
            <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                <MDBContainer className="h-100">
                    <MDBRow className="align-items-center justify-content-lg-end h-100">
                        <MDBCol lg={12} md={12} sm={12} className="text-white mt-7">
                            <AnimatePresence mode="wait">
                                <motion.h1
                                    style={{}}
                                    key={activeIndex}
                                    className="mb-3 fw-bolder text-header mb-5 display-3"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                >
                                    {t(slides[activeIndex].text)}
                                </motion.h1>
                            </AnimatePresence>
                        </MDBCol>

                        {/* Кнопки переключения слайдов */}
                        <MDBCol
                            className="position-absolute top-50 translate-middle-y d-flex flex-column gap-4"
                            style={{ right: "20px", left: "95%" }}
                        >
                            {slides.map((_, index) => (
                                <MDBBtn
                                    key={index}
                                    floating
                                    className={`btn-design slider-btn ${activeIndex === index ? "active" : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                />
                            ))}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </div>
    );
}

export default Header;
