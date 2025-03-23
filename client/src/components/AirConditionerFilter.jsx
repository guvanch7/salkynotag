import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
// import './AirConditionerFilter.css'; // Подключение кастомных стилей (если требуется)

const AirConditionerFilter = ({ onFilterChange, isFilterOpen }) => {
  const [filters, setFilters] = useState({
    type: [],
    brand: [],
    power: [],
    color: [],
    homeType: '' // Для выбора типа через select
  });

  const handleCheckboxChange = (category, value) => {
    setFilters(prevFilters => {
      if (category === 'color') {
        return { 
          ...prevFilters, 
          color: prevFilters.color.includes(value) ? [] : [value]
        };
      } else {
        const currentValues = prevFilters[category];
        const updatedValues = currentValues.includes(value)
          ? currentValues.filter(item => item !== value)
          : [...currentValues, value];
        return { ...prevFilters, [category]: updatedValues };
      }
    });
  };

  // Если тип "Для Дома" не выбран, сбрасываем homeType
  useEffect(() => {
    if (!filters.type.includes('home') && filters.homeType !== '') {
      setFilters(prevFilters => ({ ...prevFilters, homeType: '' }));
    }
  }, [filters.type]);

  useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  // Массив цветов с их кодами
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
          className="filter-panel"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Фильтр по типу кондиционеров */}
          <div className="filter-section">
            <MDBAccordion flush initialActive={0}>
              <MDBAccordionItem collapseId={1} headerTitle="Тип кондиционеров:">
                <div>
                  <label className="me-3">
                    <input
                      type="checkbox"
                      checked={filters.type.includes('home')}
                      onChange={() => handleCheckboxChange('type', 'home')}
                    />{' '}
                    Для Дома
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={filters.type.includes('industrial')}
                      onChange={() => handleCheckboxChange('type', 'industrial')}
                    />{' '}
                    Промышленные
                  </label>
                  {/* Выпадающий список для типа "Для Дома" с анимацией */}
                  {filters.type.includes('home') && (
                    <motion.div 
                      className="select-home-type"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <select
                        className="custom-select"
                        value={filters.homeType}
                        onChange={(e) =>
                          setFilters(prevFilters => ({ ...prevFilters, homeType: e.target.value }))
                        }
                      >
                        <option value="">Выберите тип</option>
                        <option value="inverter">Инверторные</option>
                        <option value="nonInverter">Неинверторные</option>
                      </select>
                    </motion.div>
                  )}
                </div>
              </MDBAccordionItem>
            </MDBAccordion>
          </div>

          {/* Фильтр по марке */}
          <div className="filter-section">
            <MDBAccordion flush initialActive={0}>
              <MDBAccordionItem collapseId={1} headerTitle="Марка Кондиционера:">
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
              <MDBAccordionItem collapseId={1} headerTitle="Мощность:">
                <div>
                  <label className="me-3">
                    <input
                      type="checkbox"
                      checked={filters.power.includes(9000)}
                      onChange={() => handleCheckboxChange('power', 9000)}
                    />{' '}
                    9000 BTU (до 30м²)
                  </label>
                  <label className="me-3">
                    <input
                      type="checkbox"
                      checked={filters.power.includes(12000)}
                      onChange={() => handleCheckboxChange('power', 12000)}
                    />{' '}
                    12000 BTU (до 40м²)
                  </label>
                  <label className="me-3">
                    <input
                      type="checkbox"
                      checked={filters.power.includes(18000)}
                      onChange={() => handleCheckboxChange('power', 18000)}
                    />{' '}
                    18000 BTU (до 60м²)
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={filters.power.includes(24000)}
                      onChange={() => handleCheckboxChange('power', 24000)}
                    />{' '}
                    24000 BTU (до 80м²)
                  </label>
                </div>
              </MDBAccordionItem>
            </MDBAccordion>
          </div>

          {/* Фильтр по цвету */}
          <div className="filter-section">
            <MDBAccordion flush initialActive={0}>
              <MDBAccordionItem collapseId={1} headerTitle="Цвет:">
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
