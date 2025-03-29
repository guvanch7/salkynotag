import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit'; // или другой импорт в зависимости от версии MDBootstrap
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
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
                <MDBRow className='align-items-center justify-content-center'>
                    <h1 className='text-black'>Contacts</h1>
                    <hr />
                    <MDBCol className='shadow-5 p-5' data-aos="fade-right" lg={4}>
                        <h2 className='text-black'> {t("contactInfo")}</h2>
                        <p>{t("contactInfoTxt")}</p>
                        <div className='mt-4 fs-5'>
                            <p className='py-3'> <MDBIcon className='pe-2' fas icon="map-marker-alt" />  {t("address")}</p>
                            <p className='py-3'> <MDBIcon className='pe-2' fas icon="phone" />+993 12 75 41 40</p>
                            <p className='py-3'> <MDBIcon className='pe-2' fas icon="phone" />+993 65 50 80 60</p>
                            <p className='py-3'> <MDBIcon className='pe-2' fas icon="envelope" />info@salkynotag.com.tm</p>
                        </div>
                    </MDBCol>

                    <MDBCol  data-aos="fade-left"  lg={8}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.572964698913!2d58.414742899999986!3d37.963755899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6fff71e741adf9%3A0xe504828d303c60db!2sHK%20Salkyn%20Otag!5e0!3m2!1sru!2snl!4v1743200445436!5m2!1sru!2snl"
                            width="850" height="560" style={{ border: "0" }}
                            allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
                    </MDBCol>


                   
                </MDBRow>



                {/* <MDBRow className='align-items-center '>
                <MDBCol className='rounded-5  mb-5' lg={8}>
                        <h5 className='text-black mb-4'>FORMANY DOLDURYŇ</h5>
                        <form >
                            <input
                                placeholder="Full Name"
                                type="text"
                                name="fullName"
                                className="mb-3 form"
                                required

                            />

                            <input
                                placeholder="Phone Number"
                                type="tel"
                                name="telephone"
                                className="mb-3 form"
                                required
                            />
                            <textarea
                                placeholder="Message "
                                name="message"
                                className="mb-3 form"
                                rows={2}
                                required
                            />
                            <div className="text-center  gap-2  mx-auto"  >
                                <MDBBtn type="submit" color="orange" className="text-white fw-bolder" style={{ backgroundColor: 'black' }}>
                                    UGRAT
                                </MDBBtn>
                            </div>
                        </form>

                    </MDBCol>
                </MDBRow> */}
            </MDBContainer>
        </>

    )
};


export default Contacts;
