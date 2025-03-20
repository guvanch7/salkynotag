import React, { useState } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit'; // или другой импорт в зависимости от версии MDBootstrap
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import bgPreloader from '../assets/bgPreloader.mp4'

const Preloader = ({ onComplete }) => {

    const [fadeOut, setFadeOut] = useState(false);

    const handleVideoEnd = () => {
        // Запускаем анимацию исчезновения
        setFadeOut(true);
    };

    const handleTransitionEnd = () => {
        // Когда анимация завершится, сообщаем, что прелоадер можно убрать
        if (fadeOut) {
            onComplete();
        }
    };

    return (
        <div
            onTransitionEnd={handleTransitionEnd}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 9999,
                backgroundColor: '#000',
                opacity: fadeOut ? 0 : 1,
                transition: 'opacity 1s ease'
            }}
        >
            <video
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            >
                <source src={bgPreloader} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

const Prel = () => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <Preloader onComplete={() => setLoading(false)} />}
            {!loading && (
                <MDBContainer className="mt-5">
                    {/* Основное содержимое сайта */}
                    <h1>Добро пожаловать на сайт!</h1>
                    <p>Основной контент...</p>
                </MDBContainer>
            )}
        </>
    );
};

export default Prel;
