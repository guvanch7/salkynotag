import { useState, useEffect, useRef } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import './assets/style/navbar.css';
import Home from './pages/Home';
import Prel from './components/Preloader';

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBRow,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
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

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

          

          <MDBNavbar light style={{ backgroundColor: '#0b555e' }} className="container-fluid topbar py-2">
            <MDBContainer fluid className="d-flex justify-content-between align-items-center topbar-content">
              <div className="d-flex social-icons flex-wrap align-items-center gap-3">
                <a className="text-white social me-4" href="#">
                  <MDBIcon className='pe-1' fas icon="map-marker-alt" /> Г. Кулиева 46, Ашхабад, Туркменистан
                </a>

                <a className="text-white social me-4" href="mailto:info@salkynotag.com.tm">
                  <MDBIcon className='pe-1' fas icon="envelope" /> info@salkynotag.com.tm
                </a>

                <a className="text-white social me-4" href="tel:+99312754140">
                  <MDBIcon className='pe-1' fas icon="phone" /> +993 12 75 41 40
                </a>

                <a className="text-white social me-4" href="tel:+99365508060">
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


          >
            <MDBContainer fluid>
              <MDBNavbarBrand className='-5' href="#">
                <img src={logob} style={{ height: '85px', transition: "0.3s ease-in-out" }}
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
                        <MDBDropdownItem  onClick={() => changeLanguage('tm')} link><Link className='text-black' >Türkmençe</Link></MDBDropdownItem>
                        <MDBDropdownItem  onClick={() => changeLanguage('ru')} link><Link className='text-black' >Русский</Link></MDBDropdownItem>
                        <MDBDropdownItem  onClick={() => changeLanguage('en')} link><Link className='text-black' >English</Link></MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavbarItem>
                  <MDBNavbarItem className="me-3">

                    <form className='d-flex input-group   me-3' onSubmit={(e) => e.preventDefault()}>
                      <input
                        type='search'
                        className='form-control'
                        placeholder='Search for products'
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
          </Routes>
          {/* <Home /> */}

        </div>
      </Router>
    </>
  )
}

export default App
