import React from 'react';
import './IdCard.css';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  console.log({ firstName, lastName, gender, height, birth, picture });
  return (
    <div className="id-card-container">
      <img src={picture} alt="Profile Picture" className="id-card-picture" />
      <div className="id-card-info">
        <p>
          <strong>Last Name:</strong>
          {lastName}
        </p>
        <p>
          <strong>First Name: </strong>
          {firstName}
        </p>

        <p>
          <strong>Gender: </strong>
          {gender}
        </p>
        <p>
          <strong>Height: </strong>
          {height}
        </p>
        <p>
          <strong>Birth: </strong>
          {birth}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
