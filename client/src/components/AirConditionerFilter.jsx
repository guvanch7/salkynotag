import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

const AirConditionerFilter = ({ onFilterChange, isFilterOpen }) => {
  const [filters, setFilters] = useState({
    type: [],
    brand: [],
    power: [],
    color: []
  });

  const [sectionsOpen, setSectionsOpen] = useState({
    type: true,
    brand: true,
    power: true,
    color: true
  });

  const toggleSection = (section) => {
    setSectionsOpen(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCheckboxChange = (category, value) => {
    setFilters(prevFilters => {
      if (category === 'color') {
        // Если цвет уже выбран, сбросим выбор, иначе выбираем только этот цвет
        return { 
          ...prevFilters, 
          color: prevFilters.color.includes(value) ? [] : [value]
        };
      } else {
        // Для остальных категорий оставляем прежнюю логику
        const currentValues = prevFilters[category];
        const updatedValues = currentValues.includes(value)
          ? currentValues.filter(item => item !== value)
          : [...currentValues, value];
        return { ...prevFilters, [category]: updatedValues };
      }
    });
  };

  // Вызываем onFilterChange после обновления состояния фильтров
  useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  // Массив цветов с их кодами (можно настроить по необходимости)
  const colorOptions = [
    { name: 'white', label: 'Белый', code: '#ffffff' },
    { name: 'black', label: 'Черный', code: '#000000' },
    { name: 'silver', label: 'Серебряный', code: '#C0C0C0' },
    { name: 'champagne', label: 'Шампанский', code: '#F7E7CE' }
  ];

  return (
    <>
      <div className="text-end air-conditioner-filter">
        {/* Внутренняя кнопка управления скрыта, так как управление фильтром происходит извне */}
      </div>

      {isFilterOpen && (
        <motion.div
          className="filter-panel   rounded"
          initial={{ opacity: 0, x: -50 }} // Начальное состояние (невидимо и смещено влево)
          animate={{ opacity: 1, x: 0 }} // Анимация появления
          exit={{ opacity: 0, x: -50 }} // Анимация исчезновения
          transition={{ duration: 0.3, ease: "easeOut" }} // Плавность анимации
        >
          {/* Фильтр по типу кондиционеров */}
          <div className="filter-section ">
            <MDBAccordion flush initialActive={0}>
              <MDBAccordionItem collapseId={1} headerTitle='Тип кондиционеров:'>
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
                </div>
              </MDBAccordionItem>
            </MDBAccordion>
          </div>

          {/* Фильтр по марке (Бренды) */}
          <div className="filter-section">
            <MDBAccordion flush initialActive={0}>
              <MDBAccordionItem collapseId={1} headerTitle='Марка Кондиционера:'>
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
          <div className="filter-section ">
            <MDBAccordion flush initialActive={0}>
              <MDBAccordionItem collapseId={1} headerTitle='Мощность:'>
                <div>
                  <label className="me-3">
                    <input
                      type="checkbox"
                      checked={filters.power.includes(9000)}
                      onChange={() => handleCheckboxChange('power', 9000)}
                    />{' '}
                    9000 BTU
                  </label>
                  <label className="me-3">
                    <input
                      type="checkbox"
                      checked={filters.power.includes(12000)}
                      onChange={() => handleCheckboxChange('power', 12000)}
                    />{' '}
                    12000 BTU
                  </label>
                  <label className="me-3">
                    <input
                      type="checkbox"
                      checked={filters.power.includes(18000)}
                      onChange={() => handleCheckboxChange('power', 18000)}
                    />{' '}
                    18000 BTU
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={filters.power.includes(24000)}
                      onChange={() => handleCheckboxChange('power', 24000)}
                    />{' '}
                    24000 BTU
                  </label>
                </div>
              </MDBAccordionItem>
            </MDBAccordion>
          </div>

          {/* Фильтр по цвету (цветные блоки вместо чекбоксов) */}
          <div className="filter-section ">
            <MDBAccordion flush initialActive={0}>
              <MDBAccordionItem collapseId={1} headerTitle='Цвет:'>
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
