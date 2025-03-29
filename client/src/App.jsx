import { useState, useEffect, useRef } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import './assets/style/navbar.css';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Partners from './pages/Partners';

import Prel from './components/Preloader';

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBInput,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBFooter,
  MDBBtn,
  MDBRow,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { useTranslation } from 'react-i18next';
// import './i18n';
import logow from './assets/logow.png'
import logob from './assets/logob.png'
import tm from './assets/icon/tm.png'
import ru from './assets/icon/ru.png'
import en from './assets/icon/en.png'

import tiktok from './assets/icon/tik-tok.png'
import instagram from './assets/icon/instagram.png'
import facebook from './assets/icon/facebook.png'
import whatsapp from './assets/icon/whatsapp.png'



function App() {
  const [scrolled, setScrolled] = useState(false);
  const [openBasic, setOpenBasic] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const targetRef = useRef(null);


  const [lastScrollTop, setLastScrollTop] = useState(0);
  const threshold = 50; // порог активного скролла вверх для появления

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // Если прокручиваем вниз и уже прокрутили немного (например, больше 50px), скрываем навбар
      if (currentScroll > lastScrollTop && currentScroll > 50) {
        setScrolled(true);
      }
      // Если прокручиваем вверх более чем на threshold пикселей, показываем навбар
      else if (lastScrollTop - currentScroll > threshold) {
        setScrolled(false);
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const [hovered, setHovered] = useState(false);

  const scrollToProducts = () => {
    const section = document.getElementById("products-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <Router>
        <Prel />
        <div>



          <MDBNavbar light style={{ backgroundColor: '#0b555e' }} className="container-fluid topbar  py-2">
            <MDBContainer fluid className="d-flex justify-content-between align-items-center topbar-content">
              <div className="d-flex social-icons flex-wrap align-items-center gap-3" style={{ fontSize: '.95rem', fontWeight: '500' }}>
                <a className="text-white social me-4" style={{ letterSpacing: '1px' }} href="#">
                  <MDBIcon className='pe-1' fas icon="map-marker-alt" /> {t("address")}
                </a>

                <a className="text-white social me-4" style={{ letterSpacing: '1px' }} href="mailto:info@salkynotag.com.tm">
                  <MDBIcon className='pe-1' fas icon="envelope" /> info@salkynotag.com.tm
                </a>

                <a className="text-white social me-4" style={{ letterSpacing: '1px' }} href="tel:+99312754140">
                  <MDBIcon className='pe-1' fas icon="phone" /> +993 12 75 41 40
                </a>

                <a className="text-white social me-4" style={{ letterSpacing: '1px' }} href="tel:+99365508060">
                  <MDBIcon className='pe-1' fas icon="phone" /> +993 65 50 80 60
                </a>
              </div>

              {/* Соц. сети */}
              <div className="social-icons d-flex align-items-center gap-3">
                <a href="https://www.instagram.com/salkyn_otag/" className="p-1 social">
                  <img src={instagram} style={{ width: '1.5rem' }} alt="Instagram" />
                </a>

                <a href="https://www.tiktok.com/@salkyn_otag" className=" p-1 social">
                  <img src={tiktok} style={{ width: '1.3rem' }} alt="TikTok" />
                </a>

                <a href="https://www.facebook.com/hashtag/salkynotag/?source=feed_text&epa=HASHTAG&locale=ms_MY" className="p-1 social">
                  <img src={facebook} style={{ width: '.7rem' }} alt="Facebook" />
                </a>

                <a href="#" className="p-1 social">
                  <img src={whatsapp} style={{ width: '1.6rem' }} alt="Whatsapp" />
                </a>
              </div>
            </MDBContainer>
          </MDBNavbar>


          <MDBNavbar
            expand="lg"
            light
            fluid
            className={`bg-white text-black navbar2 ${scrolled ? 'scrolled' : ''} ${openBasic ? 'menu-open' : ''}`}
            sticky="top"
            style={{
              top: scrolled ? '-150px' : '0',
              transition: 'top 0.3s ease-in-out'
            }}

          >
            <MDBContainer fluid>
              <MDBNavbarBrand  href="#">
                <img src={logob}  style={{ height: '85px', transition: "0.3s ease-in-out" }}
                  alt="Brand Logo" />
              </MDBNavbarBrand>

              <MDBNavbarToggler

                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => {
                  console.log("До:", openBasic);
                  setOpenBasic(!openBasic);
                  console.log("После:", openBasic);
                }}
              >
                <MDBIcon icon="bars" fas />
              </MDBNavbarToggler>

              <MDBCollapse navbar className="justify-content-end" open={openBasic}>
                <MDBNavbarNav className="mb-2 mb-lg-0 w-100 align-items-center justify-content-center fs-5">
                  <MDBNavbarItem className="me-4">
                    <MDBNavbarLink className="nav-link">
                      <Link to="/" className="nav-link">
                        {t("navlink1")}
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem className="me-4">
                    <MDBNavbarLink>
                      <Link to="/about" className="nav-link">
                        {t("navlink2")}
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>



                  <MDBNavbarItem className="me-4">
                    <MDBNavbarLink>
                      <Link to="/certifications" className="nav-link">
                        {t("navlink3")}

                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>


                  <MDBNavbarItem className="me-4">
                    <MDBNavbarLink>
                      <Link to="/certifications" className="nav-link">
                        {t("navlink4")}

                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem className="me-4">
                    <MDBNavbarLink>
                      <Link to="/contacts" className="nav-link">
                        {t("navlink5")}

                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>


                  <MDBNavbarItem className="me-4">
                    <MDBDropdown>
                      <MDBDropdownToggle tag="a" className="nav-link" role="button">
                        <MDBIcon fas icon="globe" />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem onClick={() => changeLanguage('tm')} link> Türkmençe </MDBDropdownItem>
                        <MDBDropdownItem onClick={() => changeLanguage('ru')} link> Русский   </MDBDropdownItem>
                        <MDBDropdownItem onClick={() => changeLanguage('en')} link> English   </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavbarItem>
                  <MDBNavbarItem className="me-3">

                    <form className='d-flex input-group   me-3' onSubmit={(e) => e.preventDefault()}>
                      <input
                        type='search'
                        className='form-control'
                        placeholder={`${t("inputSearch")}`}
                        aria-label='Search'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <MDBBtn color="secondary" onClick={scrollToProducts}>
                        <MDBIcon fas icon="search" />
                      </MDBBtn>
                    </form>

                  </MDBNavbarItem>




                </MDBNavbarNav>
              </MDBCollapse>


            </MDBContainer>
          </MDBNavbar>



          <Routes>
            <Route path='/' element={<Home searchQuery={searchQuery} targetRef={targetRef} />} ></Route>
            <Route path='/contacts' element={<Contacts />} ></Route>
            <Route path='/partners' element={<Partners />} ></Route>

          </Routes>
          {/* <Home /> */}
          <MDBFooter className=' text-center text-lg-start text-muted' style={{ backgroundColor: "rgb(11, 85, 94)" }}>
            <section className='d-flex justify-content-center justify-content-center  border-bottom' >


              <div>

                <MDBNavbarBrand className='' href="#" >
                  <img src={logow} style={{ height: '95px', transition: "0.3s ease-in-out" }}
                    alt="Brand Logo" />
                </MDBNavbarBrand>


              </div>
            </section>

            <section className='text-white'>
              <MDBContainer className='text-center text-md-start  '>
                <MDBRow className='pt-5'>
                  <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>

                    <h6 className='text-uppercase fw-bold mb-4'> {t("navlink5")}</h6>
                    <p>
                      <MDBIcon color='secondary' icon='home' className='me-2' />
                      {t("address")}
                    </p>

                    <p>
                      <MDBIcon color='secondary' icon='envelope' className='me-3' />
                      info@salkynotag.com.tm
                    </p>
                    <p>
                      <MDBIcon color='secondary' icon='phone' className='me-3' />+993 12 75 41 40
                    </p>
                    <p>
                      <MDBIcon color='secondary' icon='phone' className='me-3' />+993 12 75 41 40
                    </p>
                  </MDBCol>

                  <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>{t("company")}</h6>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        {t("navlink1")}
                      </Link>
                    </p>
                    <p>
                      <Link to={'/about'} className='text-reset'>
                        {t("navlink2")}
                      </Link>
                    </p>

                    <p>
                      <Link to={'/'} className='text-reset'>
                        {t("navlink4")}
                      </Link>
                    </p>
                  </MDBCol>

                  <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Goşmaça</h6>

                    <p>
                      <Link to={'/partners'} className='text-reset'>
                        {t("navlink3")}
                      </Link>
                    </p>

                    <p>
                      <Link to={'/'} className='text-reset'>
                        {t("navlink5")}

                      </Link>
                    </p>


                  </MDBCol>

                  <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                    <MDBCard className='bg-light text-black p-3'>
                      <h6>{t("newsletter")}</h6>
                      <MDBCol className='mb-4 mb-md-0'>
                        <MDBInputGroup className='mb-3'>
                          <input className='form-control' placeholder='' type='text' />

                          <MDBBtn style={{ backgroundColor: "rgb(11, 85, 94)" }} >{t("subsBtn")}</MDBBtn>
                        </MDBInputGroup>
                        {/* <p className='text-muted'>Will send you weekly updates for your better tool management</p> */}

                      </MDBCol>
                    </MDBCard>

                    <div className="social-icons mt-2 d-flex align-items-center justify-content-evenly gap-3">
                      <a href="https://www.instagram.com/salkyn_otag/" className="p-1 social">
                        <img src={instagram} style={{ width: '1.5rem' }} alt="Instagram" />
                      </a>

                      <a href="https://www.tiktok.com/@salkyn_otag" className=" p-1 social">
                        <img src={tiktok} style={{ width: '1.3rem' }} alt="TikTok" />
                      </a>

                      <a href="https://www.facebook.com/hashtag/salkynotag/?source=feed_text&epa=HASHTAG&locale=ms_MY" className="p-1 social">
                        <img src={facebook} style={{ width: '.7rem' }} alt="Facebook" />
                      </a>

                      <a href="#" className="p-1 social">
                        <img src={whatsapp} style={{ width: '1.6rem' }} alt="Whatsapp" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <div className='text-center text-white p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
              <p>© Salkyn Otag. {t("copyright")} </p>
            </div>
          </MDBFooter>
        </div>
      </Router>
    </>
  )
}

export default App
