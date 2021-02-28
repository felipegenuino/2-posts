import React, { useState } from 'react';

const Tour = (tour) => {
  const { id, image, info, name, price } = tour;
  return (
    <article id={id} className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{info}</p>
      </footer>
    </article>
  );
};

export default Tour;
