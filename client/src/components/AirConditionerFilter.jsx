import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
// import './AirConditionerFilter.css'; // Подключение кастомных стилей (если требуется)
import { useTranslation } from 'react-i18next';

const AirConditionerFilter = ({ onFilterChange, isFilterOpen }) => {
  const [filters, setFilters] = useState({
    type: [],
    brand: [],
    power: [],
    color: [],
    homeType: '' // Теперь homeType — строка для радиокнопок
  });
  const [scrollDirection, setScrollDirection] = useState('down');


  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
  
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      lastScrollY = currentScrollY;
    };
  
    window.addEventListener('scroll', updateScrollDirection);
  
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);
  

  const handleCheckboxChange = (category, value) => {
    setFilters(prevFilters => {
      if (category === 'color') {
        // Если цвет уже выбран, сбросим выбор, иначе выбираем только этот цвет
        return {
          ...prevFilters,
          color: prevFilters.color.includes(value) ? [] : [value]
        };
      } else {
        const currentValues = prevFilters[category];
        // Если категория не является homeType, то используем прежнюю логику
        if (category !== 'homeType') {
          const updatedValues = currentValues.includes(value)
            ? currentValues.filter(item => item !== value)
            : [...currentValues, value];
          return { ...prevFilters, [category]: updatedValues };
        } else {
          // Для homeType будем использовать value как строку
          return { ...prevFilters, homeType: value };
        }
      }
    });
  };

  // Если "Для Дома" не выбрано, сбрасываем homeType
  useEffect(() => {
    if (!filters.type.includes('home')) {
      setFilters(prevFilters => ({ ...prevFilters, homeType: '' }));
    }
  }, [filters.type]);

  // Фильтр отправляется после каждого изменения
  useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  // Массив цветов кондиционеров
  const colorOptions = [
    { name: 'white', label: 'Белый', code: '#ffffff' },
    { name: 'black', label: 'Черный', code: '#000000' },
    { name: 'silver', label: 'Серебряный', code: '#C0C0C0' },
    { name: 'champagne', label: 'Шампанский', code: '#F7E7CE' }
  ];

  return (
    <>
      <div className="text-end air-conditioner-filter">
        {/* Внутренняя кнопка управления скрыта */}
      </div>

      {isFilterOpen && (
        <motion.div
          className={`filter-panel ${scrollDirection === 'up' ? 'scrolling-up' : ''}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Фильтр по типу кондиционеров */}
          <div className="filter-section">
            <MDBAccordion flush initialActive={0}>
              <MDBAccordionItem collapseId={1} headerTitle={`${t("condType")}`}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label>
                    <input
                      type="checkbox"
                      checked={filters.type.includes('home')}
                      onChange={() => handleCheckboxChange('type', 'home')}
                    />{' '}
                    {t("condType1")}
                     
                  </label>

                  {/* Радиокнопки для "Инверторные" и "Неинверторные" (под "Для Дома") */}
                  {filters.type.includes('home') && (
                    <div style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                      <label style={{ fontSize: "0.85rem" }}>
                        <input
                          type="radio"
                          name="homeType"
                          value="inverter"
                          style={{ transform: "scale(0.8)", marginRight: "0.3rem" }}
                          checked={filters.homeType === 'inverter'}
                          onChange={() => handleCheckboxChange('homeType', 'inverter')}
                        />{' '}
                        {t("invertor")}
                      </label>
                      <label style={{ fontSize: "0.85rem" }}>
                        <input
                          type="radio"
                          name="homeType"
                          value="nonInverter"
                          style={{ transform: "scale(0.8)", marginRight: "0.3rem" }}
                          checked={filters.homeType === 'nonInverter'}
                          onChange={() => handleCheckboxChange('homeType', 'nonInverter')}
                        />{' '}
                        {t("nonInvertor")}
                      </label>
                    </div>
                  )}

                  <label>
                    <input
                      type="checkbox"
                      checked={filters.type.includes('industrial')}
                      onChange={() => handleCheckboxChange('type', 'industrial')}
                    />{' '}
                    {t("condType2")}
                  </label>
                </div>
              </MDBAccordionItem>
            </MDBAccordion>
          </div>

          {/* Фильтр по марке (Бренды) */}
          <div className="filter-section">
            <MDBAccordion flush initialActive={0}>
              <MDBAccordionItem collapseId={1} headerTitle={`${t("brandName")}`}>
                <div>
                  <label className="me-3">
                    <input
                      type="checkbox"
                      checked={filters.brand.includes('King')}
                      onChange={() => handleCheckboxChange('brand', 'King')}
                    />{' '}
                    King Home
                  </label>
                  <label className="me-3">
                    <input
                      type="checkbox"
                      checked={filters.brand.includes('Gree')}
                      onChange={() => handleCheckboxChange('brand', 'Gree')}
                    />{' '}
                    Gree
                  </label>
                  <label className="me-3">
                    <input
                      type="checkbox"
                      checked={filters.brand.includes('Ballu')}
                      onChange={() => handleCheckboxChange('brand', 'Ballu')}
                    />{' '}
                    Ballu
                  </label>
                </div>
              </MDBAccordionItem>
            </MDBAccordion>
          </div>

          {/* Фильтр по мощности */}
          <div className="filter-section">
            <MDBAccordion flush initialActive={0}>
              <MDBAccordionItem collapseId={1} headerTitle={`${t("capacity")}`}>
                <div>
                  <label className="me-3">
                    <input
                      type="checkbox"
                      checked={filters.power.includes(9000)}
                      onChange={() => handleCheckboxChange('power', 9000)}
                    />{' '}
                    <span style={{ marginLeft: '10px' }}>
                      9000 BTU {t("30m2")}
                    </span>
                  </label>
                  <label className="me-3">
                    <input
                      type="checkbox"
                      checked={filters.power.includes(12000)}
                      onChange={() => handleCheckboxChange('power', 12000)}
                    />{' '}
                    12000 BTU {t("40m2")}
                  </label>
                  <label className="me-3">
                    <input
                      type="checkbox"
                      checked={filters.power.includes(18000)}
                      onChange={() => handleCheckboxChange('power', 18000)}
                    />{' '}
                    18000 BTU {t("60m2")}
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={filters.power.includes(24000)}
                      onChange={() => handleCheckboxChange('power', 24000)}
                    />{' '}
                    24000 BTU {t("80m2")}
                  </label>
                </div>
              </MDBAccordionItem>
            </MDBAccordion>
          </div>

          {/* Фильтр по цвету (цветные блоки вместо чекбоксов) */}
          <div className="filter-section">
            <MDBAccordion flush initialActive={0}>
              <MDBAccordionItem collapseId={1} headerTitle={`${t("color")}`}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {colorOptions.map((color) => (
                    <div
                      key={color.name}
                      onClick={() => handleCheckboxChange('color', color.name)}
                      style={{
                        width: '35px',
                        height: '35px',
                        backgroundColor: color.code,
                        border: filters.color.includes(color.name)
                          ? '3px solid #007bff'
                          : '1px solid #ccc',
                        cursor: 'pointer',
                        borderRadius: '50px',
                        outline: 'none'
                      }}
                      title={color.label}
                    />
                  ))}
                </div>
              </MDBAccordionItem>
            </MDBAccordion>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default AirConditionerFilter;
