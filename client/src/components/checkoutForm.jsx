import React, { useState } from 'react';
import {
  MDBInput,
  MDBTextArea,
  MDBBtn,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: 'Ашхабад',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <MDBRow className="mt-5">
      <MDBCol md="12">
        <h4 className="mb-4">Информация для доставки</h4>

        <MDBRow className="mb-3">
          <MDBCol md="6">
            <MDBInput
              label="Имя"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput
              label="Фамилия"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-3">
          <MDBCol md="6">
            <MDBInput
              label="Адрес"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput
              label="Город"
              name="city"
              value={formData.city}
              disabled
            />
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-3">
          <MDBCol md="6">
            <MDBInput
              label="Номер телефона"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput
              label="Электронная почта"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </MDBCol>
        </MDBRow>

        <MDBTextArea
          label="Дополнительные пожелания"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleInputChange}
          className="mb-3"
        />

        <MDBBtn color="success" className="mt-2" onClick={handleSubmit}>
          Подтвердить заказ
        </MDBBtn>
      </MDBCol>
    </MDBRow>
  );
};

export default CheckoutForm;
