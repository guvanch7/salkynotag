import React, { useState } from 'react';
import { MDBCard, MDBBtn, MDBBadge } from 'mdb-react-ui-kit';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AirConditionerCard = ({ name, brand, power, coolingCapacity, oldPrice, price, image, size }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <>
      <MDBCard className='card2'  >
        {loading && <Skeleton height={200} />}
        <img
          src={image}
          className={`card-img-top card__img ${loading ? 'd-none' : ''}`}
          alt={name}
          onClick={() => setOpen(true)}
          onLoad={handleImageLoad}
        />
            {/* {oldPrice && (
              <span className="text-white me-2 p-1  rounded-4" style={{backgroundColor: '#be0c3e', position:'absolute'}}>
                {size} TMT
              </span>
            )} */}
         
        <div className="card-body">
          <h5 className="card-title text-black fw-bolder"  style={{textTransform:'uppercase'}}>{name || <Skeleton />}</h5>
          <h5 className="card-text fw-bolder"  style={{color: '#be0c3e'}}>
            {price ? `${price} TMT` : <Skeleton width={80} />}
          </h5>
 
        </div>
      </MDBCard>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: image }]}
      />
    </>
  );
};

export default AirConditionerCard;
