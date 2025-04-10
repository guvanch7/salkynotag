import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import AirConditionerCard from './AirConditionerCard';
import AirConditionerFilter from './AirConditionerFilter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MDBSpinner, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const AirConditionersList = ({ isFilterOpen, searchQuery }) => {
  const [airConditioners, setAirConditioners] = useState([]);
  const [visibleAirConditioners, setVisibleAirConditioners] = useState(9); // 3x3
  const [loading, setLoading] = useState(true);
  // Расширяем состояние фильтров: homeType теперь хранится как массив
  const [filters, setFilters] = useState({ type: [], brand: [], power: [], color: [], homeType: [] });
  const loadMoreRef = useRef(null);
  const API_URL = import.meta.env.VITE_API_URL;

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
    // Проверяем стандартные фильтры
    const matchesType = filters.type.length === 0 || filters.type.includes(ac.category);
    const matchesBrand = filters.brand.length === 0 || filters.brand.includes(ac.brand);
    const matchesPower = filters.power.length === 0 || filters.power.includes(ac.power);
    const matchesColor = filters.color.length === 0 || filters.color.includes(ac.color);
    const matchesSearch = ac.name.toLowerCase().includes(searchQuery.toLowerCase());

    // Новая проверка для фильтрации по inverter, когда выбран тип "Для Дома"
    let matchesInverter = true;
    if (filters.type.includes('home') && filters.homeType.length > 0) {
      // Если выбраны оба варианта, то выводим все
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
        {/* Блок фильтра (левая колонка) */}
        <MDBCol md="4" lg="3" xl={2}>
          <AirConditionerFilter onFilterChange={handleFilterChange} isFilterOpen={isFilterOpen} />
        </MDBCol>

        {/* Карточки (правая колонка) */}
        <MDBCol md="9" lg="9">
          {loading ? (
            <MDBSpinner role='status' className="d-block mx-auto">
              <span className='visually-hidden'>Загрузка...</span>
            </MDBSpinner>
          ) : (
            <MDBRow className='justify-content-center'>
              {filteredAirConditioners.slice(0, visibleAirConditioners).map(ac => (
                <MDBCol xl={3} lg={6} md={6} sm={12} key={ac.id} className="" data-aos="fade-up">
                  <AirConditionerCard
                    name={ac.name}
                    brand={ac.brand}
                    power={ac.power}
                    coolingCapacity={ac.coolingCapacity}
                    price={ac.price}
                    oldPrice={ac.oldPrice}
                    image={ac.image}
                  />
                </MDBCol>
              ))}
            </MDBRow>
          )}

          {/* Кнопка загрузки */}
          <div ref={loadMoreRef} className="text-center mt-3">
            {visibleAirConditioners < filteredAirConditioners.length && (
              <MDBSpinner role='status'>
                <span className='visually-hidden'>Загрузка...</span>
              </MDBSpinner>
            )}
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AirConditionersList;
