import React, { useState } from 'react';
import { MDBCard, MDBBtn } from 'mdb-react-ui-kit';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AirConditionerCard = ({
  name,
  brand,
  power,
  coolingCapacity,
  oldPrice,
  price,
  image,
  size,
  onMoreClick,
  onAddToCart, // <-- передаётся из родителя  
  isInCart // 👈 добавили
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <>
      <MDBCard className="card2 imageCard">
        <div className="image-wrapper">
          {loading && <Skeleton height={200} />}
          <img
            src={image}
            className={`card-img-top card__img ${loading ? 'd-none' : ''}`}
            alt={name}
            onClick={() => setOpen(true)}
            onLoad={handleImageLoad}
          />
          <div className="image-overlay" onClick={onMoreClick}></div>

        </div>

        <div className="card-body">
          <h5 className="card-title text-black fw-bolder" style={{ textTransform: 'uppercase' }}>
            {name || <Skeleton />}
          </h5>
          <h5 className="card-text fw-bolder" style={{ color: '#be0c3e' }}>
            {price ? `${price} TMT` : <Skeleton width={80} />}
          </h5>
        </div>

        {isInCart ? (
          <MDBBtn disabled color="success" className="mb-5">
            ✅ Уже в корзине
          </MDBBtn>
        ) : (
          <MDBBtn color="success" className="mb-5" onClick={onAddToCart}>
            Добавить в корзину
          </MDBBtn>
        )}


      </MDBCard>


    </>
  );
};

export default AirConditionerCard;
