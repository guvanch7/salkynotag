// pages/Cart.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon
} from 'mdb-react-ui-kit';
import CheckoutForm from './checkoutForm'; // если файл в папке pages. Если в components — поправь путь.

const Cart = ({ cartItems, onIncrement, onDecrement, onRemove }) => {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((acc, item) => {
    const itemPrice = Number(item.price);
    const itemQty = Number(item.quantity);
    return acc + itemPrice * itemQty;
  }, 0);

  return (
    <MDBContainer className="py-5">
      <h2 className="mb-4">Корзина</h2>

      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <MDBRow>
            {cartItems.map(item => (
              <MDBCol md="12" key={item.id} className="mb-4">
                <MDBCard>
                  <MDBCardBody className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div className="d-flex align-items-center gap-4">
                      <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                      <div>
                        <h5>{item.name}</h5>
                        <p className="mb-0">{item.price} TMT за 1 шт.</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <MDBBtn color="danger" onClick={() => onDecrement(item)}>-</MDBBtn>
                      <span>{item.quantity}</span>
                      <MDBBtn color="success" onClick={() => onIncrement(item)}>+</MDBBtn>
                    </div>

                    <p className="mb-0 fw-bold">{Number(item.price) * Number(item.quantity)} TMT</p>

                    <MDBBtn color="dark" onClick={() => onRemove(item)}>
                      <MDBIcon fas icon="trash" />
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>

          <MDBBtn
            color="primary"
            size="lg"
            onClick={() => navigate('/checkout', { state: { cartItems } })}
          >
            Оформить покупку
          </MDBBtn>

          {showCheckoutForm && (
            <CheckoutForm
              onSubmit={(data) => {
                console.log('Заказ отправлен:', data);
                alert('Спасибо за заказ!');
                // TODO: Очистить корзину или перенаправить
              }}
            />
          )}
        </>
      )}
    </MDBContainer>
  );
};

export default Cart;
