import React, { useState } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import bgPreloader from '../assets/bgPreloader.mp4';

const Preloader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleVideoEnd = () => {
    setFadeOut(true);
  };

  const handleTransitionEnd = () => {
    if (fadeOut) {
      onComplete();
    }
  };

  return (
    <div
      className={`preloader-container ${fadeOut ? 'fade-out' : ''}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src={bgPreloader} type="video/mp4" />
        Ваш браузер не поддерживает тег video.
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
        <MDBContainer>
          {/* Ваш основной контент */}
        </MDBContainer>
      )}
    </>
  );
};

export default Prel;
