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
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];


  const [email, setEmail] = useState("info@durnukly.com.tm");
  const [subject, setSubject] = useState("Вы получили новое сообщение с сайта!");
  const [emailAddress, setEmailAddress] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Ashgabat");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendMail = () => {

    axios
      .get("/api/mail/", {
        params: {
          email,
          subject,
          message,
          phone,
          name,
          emailAddress
        },
      })
      .then(() => {
        // success
        console.log("Email sent successfully");
        setName('')
        setPhone('')
        setEmailAddress('')
        setMessage('')
        toast.success("Onlaýn ýüzlenme ugradyldy!", {
          autoClose: 5000,
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert(`Error sending email: ${error.response ? error.response.data : error.message}`);
      });


  };

  return (
    <>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  label="Фамилия"
                  name="lastName"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </MDBCol>
            </MDBRow>

            <MDBRow className="mb-3">
              <MDBCol md="6">
                <MDBInput
                  label="Адрес"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  label="Город"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  disabled
                />
              </MDBCol>
            </MDBRow>

            <MDBRow className="mb-3">
              <MDBCol md="6">
                <MDBInput
                  label="Номер телефона"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  label="Электронная почта"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </MDBCol>
            </MDBRow>

            <MDBTextArea
              label="Дополнительные пожелания"
              name="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mb-3"
            />

            <MDBBtn color="success" onClick={sendMail} type='submit'>
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
      <ToastContainer />
    </>
  );
};

export default Checkout;
