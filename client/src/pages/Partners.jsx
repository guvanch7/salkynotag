import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit'; // или другой импорт в зависимости от версии MDBootstrap
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

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
                <MDBRow>
                    
                </MDBRow>
            </MDBContainer>
        </>

    )
};


export default Partners;
