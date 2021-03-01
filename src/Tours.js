import React from 'react';
import Tour from './Tour';
const Tours = ({ removeTour, tours }) => {

  // console.log('xx', tours, removeTour)
  return (
    <section>
      <div className="title">
        <h2>{tours.length}Ours tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
