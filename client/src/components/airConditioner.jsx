import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import AirConditionerCard from './AirConditionerCard';
import AirConditionerFilter from './AirConditionerFilter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import {
  MDBContainer,
  MDBRow,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalFooter,
  MDBCol,
  MDBCard,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBSpinner
} from 'mdb-react-ui-kit';

const AirConditionersList = ({ isFilterOpen, searchQuery, onAddToCart, cartItems  }) => {
  const [airConditioners, setAirConditioners] = useState([]);
  const [visibleAirConditioners, setVisibleAirConditioners] = useState(9);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ type: [], brand: [], power: [], color: [], homeType: [] });
  const loadMoreRef = useRef(null);
  const API_URL = import.meta.env.VITE_API_URL;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);

  const [selectedAC, setSelectedAC] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  const handleShowDetails = (ac) => {
    setModalLoading(true);
    setSelectedAC(ac);
    setModalOpen(true);

    setTimeout(() => {
      setModalLoading(false);
    }, 600); // Имитация загрузки
  };

  const handleAddToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  useEffect(() => {
    axios.get(`${API_URL}/api/air-conditioners`)
      .then((response) => {
        setAirConditioners(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка загрузки данных:", error);
        setLoading(false);
      });
  }, []);

  const handleLoadMore = () => {
    setVisibleAirConditioners(prev => prev + 9);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handleLoadMore();
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredAirConditioners = airConditioners.filter(ac => {
    const matchesType = filters.type.length === 0 || filters.type.includes(ac.category);
    const matchesBrand = filters.brand.length === 0 || filters.brand.includes(ac.brand);
    const matchesPower = filters.power.length === 0 || filters.power.includes(ac.power);
    const matchesColor = filters.color.length === 0 || filters.color.includes(ac.color);
    const matchesSearch = ac.name.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesInverter = true;
    if (filters.type.includes('home') && filters.homeType.length > 0) {
      if (filters.homeType.includes('inverter') && filters.homeType.includes('nonInverter')) {
        matchesInverter = true;
      } else if (filters.homeType.includes('inverter')) {
        matchesInverter = ac.inverter === true;
      } else if (filters.homeType.includes('nonInverter')) {
        matchesInverter = ac.inverter === false;
      }
    }

    return matchesType && matchesBrand && matchesPower && matchesColor && matchesSearch && matchesInverter;
  });

  return (
    <MDBContainer fluid className="mt-4">
      <MDBRow className='justify-content-center'>
        <MDBCol md="4" lg="3" xl={2}>
          <AirConditionerFilter onFilterChange={handleFilterChange} isFilterOpen={isFilterOpen} />
        </MDBCol>

        <MDBCol md="9" lg="9">
          {loading ? (
            <MDBSpinner role='status' className="d-block mx-auto">
              <span className='visually-hidden'>Загрузка...</span>
            </MDBSpinner>
          ) : (
            <MDBRow className='justify-content-lg-center'>
              {filteredAirConditioners.slice(0, visibleAirConditioners).map(ac => (
                <MDBCol xl={3} lg={4} md={4} sm={6} xs={6} key={ac.id} className="col-half-mobile" data-aos="fade-up">
                  <div className="card-hover-wrapper" style={{ position: 'relative' }}>
                    <AirConditionerCard
                      name={ac.name}
                      brand={ac.brand}
                      power={ac.power}
                      coolingCapacity={ac.coolingCapacity}
                      price={ac.price}
                      oldPrice={ac.oldPrice}
                      image={ac.image}
                      onMoreClick={() => handleShowDetails(ac)}
                      onAddToCart={() => onAddToCart(ac)}
                      isInCart={cartItems.some(item => item.id === ac.id)}
                    />
                    <div className="overlay-effect"></div>
                  </div>
                </MDBCol>
              ))}
            </MDBRow>
          )}

          <div ref={loadMoreRef} className="text-center mt-3">
            {visibleAirConditioners < filteredAirConditioners.length && (
              <MDBSpinner role='status'>
                <span className='visually-hidden'>Загрузка...</span>
              </MDBSpinner>
            )}
          </div>
        </MDBCol>
      </MDBRow>

      <MDBModal tabIndex='-1' open={modalOpen} onClose={() => setModalOpen(false)}>
        <MDBModalDialog size="lg" centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{modalLoading ? <Skeleton width={200} /> : selectedAC?.name}</MDBModalTitle>
              <MDBBtn type='button' className='btn-close' color='none' onClick={() => setModalOpen(false)}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {modalLoading || !selectedAC ? (
                <div className="d-flex flex-column flex-md-row gap-4">
                  <Skeleton height={250} width={300} />
                  <div className="flex-grow-1">
                    <Skeleton height={25} width="60%" className="mb-3" />
                    <Skeleton height={18} count={4} />
                  </div>
                </div>
              ) : (
                <div className="d-flex flex-column flex-md-row gap-4">
                  <img
                    src={selectedAC.image}
                    alt={selectedAC.name}
                    style={{ width: '100%', maxWidth: '300px', borderRadius: '8px', cursor: 'pointer' }}
                    onClick={() => setLightboxOpen(true)}
                  />
                  <div>
                    <p><strong>Бренд:</strong> {selectedAC.brand}</p>
                    <p><strong>Мощность:</strong> {selectedAC.power}</p>
                    <p><strong>Охлаждение:</strong> {selectedAC.coolingCapacity}</p>
                    <p><strong>Цена:</strong> {selectedAC.price} TMT</p>
                  </div>
                </div>
              )}
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setModalOpen(false)}>
                Закрыть
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={selectedAC ? [{ src: selectedAC.image }] : []}
      />
    </MDBContainer>
  );
};

export default AirConditionersList;
