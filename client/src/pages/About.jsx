import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit'; // или другой импорт в зависимости от версии MDBootstrap
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';



const About = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
   

    return (

        <>

            <MDBContainer  style={{backgroundColor:"#0f413e"}} className='my-4 rounded-7'>
                <MDBRow className='align-items-center justify-content-between'>
                    <MDBCol className='px-5' lg={6}>
                        <h1 className='  text-white'> Добро пожаловать в "Salkyn Otag" </h1>
                        <p className='text-white '>
                            Наша компания лидер на рынке кондиционирования с 2011 года.
                            Более 10000 довольных клиентов доверяют нам свой комфорт.
                            Явялемся официальным диллером ведущих мировых брендов климатической техники.
                        </p>
                    </MDBCol>
                    <MDBCol className='text-end ' style={{paddingRight: 'unset'}} lg={6}>
                        <img src="https://placehold.co/600x400" className=' img-fluid text-end ' style={{borderTopRightRadius:"1rem", borderEndEndRadius: "1rem"}} alt="" />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>

    )
};


export default About;
