import { useState, useEffect } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import './assets/style/navbar.css';
import Home from './pages/Home';

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
import youtube from './assets/icon/youtube.png'
import linkedin from './assets/icon/linkedin.png'



function App() {
  const [scrolled, setScrolled] = useState(false);
  const [openBasic, setOpenBasic] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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


  return (
    <>
      <Router>
        <div>

          <MDBNavbar light style={{ backgroundColor: '#0b555e' }} className="container-fluid topbar py-2">
            <MDBContainer fluid className="d-flex justify-content-between align-items-center">
              <MDBRow>
                <div className="d-flex ps-5 align-items-center">
                  <a className="text-white" href="mailto:info@heatcoldtm.com">
                    <MDBIcon className='pe-1' fas icon="envelope" /> info@heatcoldtm.com
                  </a>

                  <a className="text-white ps-5" href="#">
                    <MDBIcon className='pe-1' fas icon="map-marker-alt" />Г. Кулиева 46 (2127) 744000, Ашхабад, Туркменистан
                  </a>

                  <a className="text-white ps-5" href="tel: +99312754140">
                    <MDBIcon className='pe-1' fas icon="phone" /> +993 12 75 41 40</a>
                </div>
              </MDBRow>




              <div className="d-flex align-items-center gap-4">

                <div className="d-flex align-items-center gap-4">

                  <a href="#" className="bg-white py-1 px-2 rounded-pill">
                    <img src={tiktok} style={{ width: '1rem' }} alt="TikTok" />
                  </a>
                  <a href="#" className="bg-white py-1 px-2 rounded-pill">
                    <img src={instagram} style={{ width: '1rem' }} alt="Instagram" />
                  </a>
                  <a href="#" className="bg-white py-1 px-2 rounded-pill">
                    <img src={facebook} style={{ width: '1rem' }} alt="Facebook" />
                  </a>

                  <a href="#" className="bg-white py-1 px-2 rounded-pill">
                    <img src={youtube} style={{ width: '1rem' }} alt="Facebook" />
                  </a>

                  <a href="#" className="bg-white py-1 px-2 rounded-pill">
                    <img src={linkedin} style={{ width: '1rem' }} alt="Facebook" />
                  </a>
                </div>
                {/* Блок выбора языков */}

              </div>
            </MDBContainer>
          </MDBNavbar>


          <MDBNavbar
            expand="lg"
            light
            fluid
            className={`container-fluid navbar2 ${scrolled ? 'scrolled' : ''} ${openBasic ? 'menu-open' : ''} ${hovered ? "menu-open" : ""}`}
            fixed="top"
            onMouseLeave={() => setHovered(false)}
            onMouseEnter={() => setHovered(true)}
          >
            <MDBContainer fluid>
              <MDBNavbarBrand className='mx-5' href="#">
                <img src={hovered || scrolled ? logob : logow} style={{ height: '70px', transition: "0.3s ease-in-out" }}
                  alt="Brand Logo" />
              </MDBNavbarBrand>

              <MDBNavbarToggler
                className="text-white"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setOpenBasic(!openBasic)}
              >
                <MDBIcon icon="bars" fas />
              </MDBNavbarToggler>

              <MDBCollapse navbar className="justify-content-end" open={openBasic}>
                <MDBNavbarNav className="mb-2 mb-lg-0 align-items-center justify-content-center">
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
                        <MDBDropdownItem link><Link className='text-black' onClick={() => changeLanguage('tm')}>Türkmençe</Link></MDBDropdownItem>
                        <MDBDropdownItem link><Link className='text-black' onClick={() => changeLanguage('ru')}>Русский</Link></MDBDropdownItem>
                        <MDBDropdownItem link><Link className='text-black' onClick={() => changeLanguage('en')}>English</Link></MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavbarItem>

                  <form className='d-flex input-group w-auto' onSubmit={(e) => e.preventDefault()}>
                    <input
                      type='search'
                      className='form-control'
                      placeholder='Search for products'
                      aria-label='Search'
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <MDBBtn color='secondary'>
                      <MDBIcon fas icon="search" />
                    </MDBBtn>
                  </form>





                </MDBNavbarNav>
              </MDBCollapse>


            </MDBContainer>
          </MDBNavbar>
          <Routes>
            <Route path='/' element={<Home searchQuery={searchQuery} />} ></Route>
          </Routes>
          {/* <Home /> */}

        </div>
      </Router>
    </>
  )
}

export default App
