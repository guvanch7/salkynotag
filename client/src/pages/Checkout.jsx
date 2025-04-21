import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: 'Ашхабад',
    phone: '',
    email: '',
    message: ''
  });

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Форма отправлена:', formData, cartItems);
    alert('Спасибо за заказ!');
    navigate('/');
  };

  return (
    <MDBContainer className="py-5">
      <h2 className="mb-4">Оформление заказа</h2>
      <MDBRow>
        {/* Левая колонка — форма */}
        <MDBCol md="6">
          <MDBRow className="mb-3">
            <MDBCol md="6">
              <MDBInput
                label="Имя"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBInput
                label="Фамилия"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBInput
                label="Электронная почта"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </MDBCol>
          </MDBRow>

          <MDBTextArea
            label="Дополнительные пожелания"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="mb-3"
          />

          <MDBBtn color="success" onClick={handleSubmit}>
            Подтвердить заказ
          </MDBBtn>
        </MDBCol>

        {/* Правая колонка — детали заказа */}
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h5 className="mb-3">Детали заказа</h5>
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <div>
                      <strong>{item.name}</strong>
                      <div className="text-muted" style={{ fontSize: '0.9rem' }}>
                        {item.quantity} × {item.price} TMT
                      </div>
                    </div>
                  </div>
                  <div className="fw-bold">{item.price * item.quantity} TMT</div>
                </div>
              ))}

              <hr />
              <h5 className="text-end">Общая сумма: {totalPrice} TMT</h5>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Checkout;
